import { CreateBookInput } from './create-book.input';
import { Field, Int, PartialType, InputType } from '@nestjs/graphql';
import { Author } from 'src/authors/model/author.model';

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
  @Field(type => Int)
  id: number

  @Field()
  title?: string;

  @Field(type => Int, { nullable: true })
  authorId?: number;
}
