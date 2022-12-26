import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}
  create(createStudentDto: CreateStudentDto) {
    return this.studentRepository.save(createStudentDto);
  }

  async findAll() {
    const students = await this.studentRepository.find();
    return { students, count: students.length };
  }

  async findOne(id: string) {
    const student = await this.studentRepository.findOne({ where: { id } });
    if (!student) {
      throw new HttpException('Not found student', HttpStatus.NOT_FOUND);
    }
    return student;
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    const student = await this.studentRepository.findOne({ where: { id } });
    if (!student) {
      throw new HttpException('Not found student', HttpStatus.NOT_FOUND);
    }
    await this.studentRepository.update({ id }, updateStudentDto);
    return {
      message: 'Update successfully',
    };
  }

  async remove(id: string) {
    const student = await this.studentRepository.findOne({ where: { id } });
    if (!student) {
      throw new HttpException('Not found student', HttpStatus.NOT_FOUND);
    }
    await this.studentRepository.delete({ id });
    return {
      message: 'Delete successfully',
    };
  }
}
