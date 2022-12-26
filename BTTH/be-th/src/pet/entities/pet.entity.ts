import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  species: string;

  @Column()
  age: number;

  @Column()
  neutered: boolean;
}
