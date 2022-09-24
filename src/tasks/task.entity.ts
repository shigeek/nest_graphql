import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Task {
  constructor(id: number, name: string, detail: string) {
    this.id = id;
    this.name = name;
    this.detail = detail;
  }

  @Field(() => Int)
  id: number;

  @Field({})
  name: string;

  @Field({})
  detail: string;

  @Field({})
  get nameDetail(): string {
    return `${this.name} ${this.detail}`;
  }

  updateName(newName: string) {
    this.name = newName;
  }
}
