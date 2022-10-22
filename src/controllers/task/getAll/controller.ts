import { Request, Response } from 'express';
import { ITask_Repository } from '../../../repositories/ITask_Repository';

export class TaskGetAll_Controller {
  constructor(private task_repository: ITask_Repository) { }

  async handle(_request: Request, response: Response): Promise<Response> {
    try {
      const tasks = await this.task_repository.getAll()

      return response.status(200).send(
        tasks.map((t) => {
          const start_time_hour = Math.trunc(t.start_time / 60)
          const end_time_hour = Math.trunc(t.end_time / 60)

          return {
            ...t,
            start_time: {
              hour: start_time_hour,
              min: t.start_time - start_time_hour * 60,
            },
            end_time: {
              hour: end_time_hour,
              min: t.end_time - end_time_hour * 60,
            },
          }
        })
      )
    } catch (err) {
      console.log(err);
      return response.status(400).json({
        message: 'Unexpected error',
      });
    }
  }
}
