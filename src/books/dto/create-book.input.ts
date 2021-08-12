import { Int, Field, InputType } from '@nestjs/graphql';
import { Author } from 'src/authors/model/author.model';

@InputType()
export class CreateBookInput {
  @Field(type => Int)
  id: number;

  @Field()
  title: string;

  @Field(type => Author)
  author: Author;
}
