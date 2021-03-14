import { ObjectType, Field, Int, HideField } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;
  @Field((type) => String)
  createdAt?: Date;
  email: string;
  @HideField()
  password: string;
  username?: string;
}
