import { TaskRepository } from './task.repository';
import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  constructor(private taskRepository: TaskRepository) {}

  async findAll() {
    const tasks = await this.taskRepository.findAll();
    return tasks;
  }

  async findById(id: number) {
    const task = await this.taskRepository.findById(id);
    return task;
  }

  async create(name: string, detail: string) {
    const newTask = new Task(null, name, detail);
    const task = await this.taskRepository.create(newTask);
    return task;
  }

  async delete(id: number): Promise<void> {
    const deleteTask = await this.taskRepository.findById(id);
    await this.taskRepository.delete(deleteTask);
  }

  async update(id: number, name: string, detail: string) {
    const targetTask = await this.taskRepository.findById(id);
    targetTask.update(name, detail);
    const task = await this.taskRepository.update(targetTask);
    return task;
  }

  async startTask(id: number) {
    const targetTask = await this.taskRepository.findById(id);
    targetTask.start();
    const task = await this.taskRepository.update(targetTask);
    return task;
  }
}
