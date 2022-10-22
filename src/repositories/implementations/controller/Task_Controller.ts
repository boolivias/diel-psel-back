import { Task } from "../../../entities/Task";
import { ITask_Repository } from "../../ITask_Repository";
import { Task_model } from "../models/Task_model";

export class Task_Repository implements ITask_Repository {
  async create(data: Task): Promise<Task> {
    const task = await (await Task_model.create({
      ...data,
      date: data.date.toISOString(),
    })).toJSON()

    return {
      ...task,
      date: new Date(task.date),
    };
  }
  async update(data: Partial<Omit<Task, "id">>, id: string): Promise<boolean> {
    const rows = await Task_model.update({
      ...data,
      date: data.date ? data.date.toISOString() : undefined,
    }, {
      where: { id },
    })

    return rows[0] > 0
  }
  async delete(id: string): Promise<boolean> {
    const rows = await Task_model.destroy({ where: { id } })

    return rows > 0
  }
  async getAll(): Promise<Task[]> {
    const tasks = await Task_model.findAll({ raw: true })

    return tasks.map((t) => ({ ...t, date: new Date(t.date) }))
  }

}