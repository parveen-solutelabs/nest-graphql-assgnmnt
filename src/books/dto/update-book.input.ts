import { CreateBookInput } from './create-book.input';
import { Field, PartialType, InputType } from '@nestjs/graphql';
import { Author } from 'src/authors/model/author.model';

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
  @Field()
  title: string;

  @Field(type => Author)
  author: Author;
}
