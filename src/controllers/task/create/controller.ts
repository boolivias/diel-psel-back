import { Request, Response } from 'express';
import { Task } from '../../../entities/Task';
import { ITask_Repository } from '../../../repositories/ITask_Repository';

export class TaskCreate_Controller {
  constructor(private task_repository: ITask_Repository) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { title, description, date, start_time, end_time } = request.body

      const task = new Task({
        title, description,
        date: new Date(date),
        start_time: start_time.hour * 60 + start_time.min,
        end_time: end_time.hour * 60 + end_time.min,
      })

      const db = await this.task_repository.create(task)

      const start_time_hour = Math.trunc(db.start_time / 60)
      const end_time_hour = Math.trunc(db.end_time / 60)
      return response.status(200).send({
        ...db,
        start_time: {
          hour: start_time_hour,
          min: db.start_time - start_time_hour * 60,
        },
        end_time: {
          hour: end_time_hour,
          min: db.end_time - end_time_hour * 60,
        },
      })
    } catch (err) {
      console.log(err);
      return response.status(400).json({
        message: 'Unexpected error',
      });
    }
  }
}
