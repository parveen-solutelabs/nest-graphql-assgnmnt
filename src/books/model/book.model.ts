import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Author } from 'src/authors/entities/author.entity';

@ObjectType()
export class Book {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field(type => Author)
  author: Author;
}
