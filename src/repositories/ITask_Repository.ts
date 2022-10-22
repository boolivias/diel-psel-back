import { Task } from "../entities/Task";

export interface ITask_Repository {
  create(data: Task): Promise<Task>,
  update(data: Partial<Omit<Task, 'id'>>, id: Task['id']): Promise<boolean>,
  delete(id: Task['id']): Promise<boolean>,
  getAll(): Promise<Task[]>,
}