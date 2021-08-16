import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Author } from './model/author.model';

@Injectable()
export class AuthorsService {
  constructor(@InjectRepository(Author) private authorsRepository: Repository<Author>) {}
  
  create(createAuthorInput: CreateAuthorInput) {
    const newAuthor = this.authorsRepository.create(createAuthorInput);
    return this.authorsRepository.save(newAuthor);
  }

  findAll() {
    return this.authorsRepository.find({
      relations: ['books']
    });
  }

  findOne(id: number) {
    return this.authorsRepository.findOne(id);
  }

  async update(id: number, updateAuthorInput: UpdateAuthorInput) {
    const author = await this.authorsRepository.preload({
      id: +id,
      ...updateAuthorInput
    });

    if(!author)
      throw new NotFoundException(`Author #${id} not found.`);

    return this.authorsRepository.save(author);
  }

  async remove(id: number) {
    const author = await this.authorsRepository.findOne(id);
    return this.authorsRepository.remove(author);
  }
}
