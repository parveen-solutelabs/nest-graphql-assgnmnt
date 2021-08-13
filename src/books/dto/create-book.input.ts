import { Int, Field, InputType } from '@nestjs/graphql';
import { CreateAuthorInput } from 'src/authors/dto/create-author.input';
import { Author } from 'src/authors/entities/author.entity';

@InputType()
export class CreateBookInput {
  @Field()
  title: string;

  @Field(type => Int)
  authorId: number;
}
