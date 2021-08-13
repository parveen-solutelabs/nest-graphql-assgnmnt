import { Int, Field, InputType } from '@nestjs/graphql';
import { CreateBookInput } from 'src/books/dto/create-book.input';
import { Book } from 'src/books/model/book.model';

@InputType()
export class CreateAuthorInput {
  @Field()
  name: string;

  @Field(type => [CreateBookInput], { nullable: true })
  books?: CreateBookInput[];
}
