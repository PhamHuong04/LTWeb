import { IsString, IsNotEmpty } from 'class-validator';
export class CreatePetDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  species: string;

  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  neutered: boolean;
}
