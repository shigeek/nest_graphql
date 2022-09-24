import { Task } from './task.entity';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany();
    return tasks.map((task) => new Task(task.id, task.name, task.detail));
  }

  async findById(id: number): Promise<Task> {
    const task = await this.prisma.task.findUnique({
      where: {
        id,
      },
    });
    return new Task(task.id, task.name, task.detail);
  }

  async create(entity: Task): Promise<Task> {
    const task = await this.prisma.task.create({
      data: {
        name: entity.name,
        detail: entity.detail,
      },
    });
    return new Task(task.id, task.name, task.detail);
  }

  async delete(entity: Task): Promise<void> {
    await this.prisma.task.delete({
      where: {
        id: entity.id,
      },
    });
  }

  async update(entity: Task): Promise<Task> {
    const task = await this.prisma.task.update({
      where: {
        id: entity.id,
      },
      data: {
        name: entity.name,
        detail: entity.detail,
      },
    });
    return new Task(task.id, task.name, task.detail);
  }
}
