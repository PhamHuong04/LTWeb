import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,
  ) {}

  async checkName(name: string) {
    const pet = await this.petRepository.findOne({ where: { name } });
    if (pet) return pet;
  }

  async create(createPetDto: CreatePetDto) {
    const pet = await this.checkName(createPetDto.name);
    if (!pet) {
      return await this.petRepository.save(createPetDto);
    }
  }

  async findAll() {
    const pet = await this.petRepository.find();
    return pet;
  }

  async findOne(id: number) {
    const pet = await this.petRepository.findOne({ where: { id } });
    if (!pet) {
      throw new NotFoundException(`Pet with ID: ${id} not found`);
    }
    return pet;
  }

  async update(id: number, updatePetDto: UpdatePetDto) {
    const pet = await this.petRepository.findOne({ where: { id } });
    if (!pet) {
      throw new HttpException('Not found pet', HttpStatus.NOT_FOUND);
    }
    await this.petRepository.update({ id }, updatePetDto);
    return {
      message: 'Update successfully',
    };
  }

  async remove(id: number) {
    const pet = await this.petRepository.findOne({ where: { id } });
    if (!pet) {
      throw new HttpException('Not found pet', HttpStatus.NOT_FOUND);
    }
    await this.petRepository.delete({ id });
    return {
      message: 'Delete successfully',
    };
  }
}
