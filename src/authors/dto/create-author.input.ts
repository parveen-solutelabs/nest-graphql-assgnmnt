import { Int, Field, InputType } from '@nestjs/graphql';
import { Book } from 'src/books/model/book.model';

@InputType()
export class CreateAuthorInput {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(type => [Book], {nullable: true})
  books: Book [];
}
