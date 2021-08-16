import { Int, Field, InputType } from '@nestjs/graphql';
import { CreateBookInput } from 'src/books/dto/create-book.input';
import { UpdateBookInput } from 'src/books/dto/update-book.input';

@InputType()
export class CreateAuthorInput {
  @Field()
  name: string;

  @Field(type => [UpdateBookInput], { nullable: true })
  books?: UpdateBookInput[];
}
