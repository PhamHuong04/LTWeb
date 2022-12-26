import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  dob: Date;

  @Column()
  major: string;

  @Column()
  vaccinated: boolean;
}
