import { Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { TasksService } from './tasks.service';

@Resolver()
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  @Query(() => String)
  tasks() {
    return this.tasksService.findAll();
  }
}
