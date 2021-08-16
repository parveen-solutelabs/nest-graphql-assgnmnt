import { CreateAuthorInput } from './create-author.input';
import { InputType, Int, Field, PartialType } from '@nestjs/graphql';
import { Book } from 'src/books/model/book.model';
import { CreateBookInput } from 'src/books/dto/create-book.input';
import { UpdateBookInput } from 'src/books/dto/update-book.input';

@InputType()
export class UpdateAuthorInput extends PartialType(CreateAuthorInput) {
  @Field(() => Int)
  id: number;

  @Field()
  name?: string;

  @Field(type => [UpdateBookInput], { nullable: true })
  books?: UpdateBookInput [];
}
