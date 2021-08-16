import { Int, Field, InputType } from '@nestjs/graphql';
import { CreateAuthorInput } from 'src/authors/dto/create-author.input';
import { UpdateAuthorInput } from 'src/authors/dto/update-author.input';

@InputType()
export class CreateBookInput {
  // @Field(type => Int)
  // id: number;

  @Field()
  title: string;

  @Field(type => UpdateAuthorInput)
  author: UpdateAuthorInput;
}
