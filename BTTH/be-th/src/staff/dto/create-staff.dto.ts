import { IsString, IsNotEmpty } from 'class-validator';
export class CreateStaffDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  dob: Date;

  @IsString()
  @IsNotEmpty()
  department: string;

  @IsNotEmpty()
  vaccinated: number;
}
