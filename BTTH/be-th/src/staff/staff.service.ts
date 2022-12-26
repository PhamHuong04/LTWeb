import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Staff } from './entities/staff.entity';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private readonly staffRepository: Repository<Staff>,
  ) {}
  async checkName(name: string) {
    const staff = await this.staffRepository.findOne({ where: { name } });
    if (staff) return staff;
  }
  async create(createStaffDto: CreateStaffDto) {
    const staff = await this.checkName(createStaffDto.name);
    if (!staff) {
      return await this.staffRepository.save(createStaffDto);
    }
  }

  async findAll() {
    const staffs = await this.staffRepository.find();
    return staffs;
  }

  async findOne(id: number) {
    const staff = await this.staffRepository.findOne({ where: { id } });
    if (!staff) {
      throw new NotFoundException(`Staff with ID: ${id} not found`);
    }
    return staff;
  }

  async update(id: number, updateStaffDto: UpdateStaffDto) {
    const student = await this.staffRepository.findOne({ where: { id } });
    if (!student) {
      throw new HttpException('Not found student', HttpStatus.NOT_FOUND);
    }
    await this.staffRepository.update({ id }, updateStaffDto);
    return {
      message: 'Update successfully',
    };
  }

  async remove(id: number) {
    const staff = await this.staffRepository.findOne({ where: { id } });
    if (!staff) {
      throw new HttpException('Not found staff', HttpStatus.NOT_FOUND);
    }
    await this.staffRepository.delete({ id });
    return {
      message: 'Delete successfully',
    };
  }
}
