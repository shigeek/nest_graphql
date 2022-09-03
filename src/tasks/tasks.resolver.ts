import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Resolver()
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  @Query(() => [Task])
  tasks() {
    return this.tasksService.findAll();
  }

  @Mutation(() => Task)
  createTask(@Args('name') name: string) {
    return this.tasksService.create(name);
  }
}
