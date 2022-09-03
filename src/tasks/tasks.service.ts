import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAll() {
    return this.tasks;
  }

  create(name: string) {
    const newTask = new Task(1, name);
    this.tasks.push(newTask);
    return newTask;
  }
}
