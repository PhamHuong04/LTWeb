import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  dob: Date;

  @IsString()
  @IsNotEmpty()
  major: string;

  @IsBoolean()
  @IsNotEmpty()
  vaccinated: boolean;
}
