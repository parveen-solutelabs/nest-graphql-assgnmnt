import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from 'src/authors/model/author.model';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Author, author => author.books)
  // @OneToMany(type => Author, author => author.books)
  author: Author;
}
