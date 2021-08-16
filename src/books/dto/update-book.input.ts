import { CreateBookInput } from './create-book.input';
import { Field, Int, PartialType, InputType } from '@nestjs/graphql';
import { UpdateAuthorInput } from 'src/authors/dto/update-author.input';

@InputType()
export class UpdateBookInput 
// extends CreateBookInput 
{
  @Field(type => Int)
  id: number

  @Field()
  title?: string;

  @Field(type => UpdateAuthorInput, { nullable: true })
  author?: UpdateAuthorInput;
}
