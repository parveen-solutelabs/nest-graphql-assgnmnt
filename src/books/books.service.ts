import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Book } from './model/book.model';

@Injectable()
export class BooksService {
  constructor(@InjectRepository(Book) private booksRepository: Repository<Book>) { }

  async create(createBookInput: CreateBookInput): Promise<Book> {
    const newBook = this.booksRepository.create(createBookInput);
    return this.booksRepository.save(newBook);
  }

  async findAll(): Promise<Book[]> {
    return this.booksRepository.find(
      // { relations: ['authorId'] }
    );
  }

  async findOne(id: number): Promise<Book> {
    return this.booksRepository.findOne(id);
  }

  async update(id: number, updateBookInput: UpdateBookInput) {
    const book = await this.booksRepository.preload({
      id: +id,
      ...updateBookInput
    });

    if (!book)
      throw new NotFoundException(`Book #${id} not found.`);

    return this.booksRepository.save(book);
  }

  async remove(id: number) {
    const book = await this.booksRepository.findOne(id);
    return this.booksRepository.remove(book);
  }
}
