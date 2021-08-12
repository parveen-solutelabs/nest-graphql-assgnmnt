import { CreateAuthorInput } from './create-author.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Book } from 'src/books/model/book.model';

@InputType()
export class UpdateAuthorInput extends PartialType(CreateAuthorInput) {
  @Field()
  name: string;

  @Field(type => [Book])
  books: Book [];
}
