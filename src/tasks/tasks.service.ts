import { PrismaService } from '../prisma/prisma.service';
import { Injectable, Logger } from '@nestjs/common';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  constructor(private prisma: PrismaService) {}

  async findAll() {
    // const tasks = await this.prisma.task.findMany();
    const tasks = this.tasks;
    console.log('==aaaaaaa==================================');
    console.log(tasks);
    console.log('====================================');
    return tasks;
  }

  create(name: string) {
    const newTask = new Task(10, 'test tasksksksksksks');
    this.tasks.push(newTask);
    return newTask;
  }
}
