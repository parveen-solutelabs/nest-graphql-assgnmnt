import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Author } from 'src/authors/model/author.model';

@ObjectType()
export class Book {
  @Field(type => Int)
  id: number;

  @Field()
  title: string;

  @Field(type => Int)
  authorId: number;
}
