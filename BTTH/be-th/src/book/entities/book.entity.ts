import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  bookcode: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  category: string;

  @Column()
  approved: boolean;
}
