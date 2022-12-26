import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dob: Date;

  @Column()
  department: string;

  @Column()
  vaccinated: number;
}
