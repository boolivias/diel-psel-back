import { Request, Response } from 'express';
import { ITask_Repository } from '../../../repositories/ITask_Repository';

export class TaskUpdate_Controller {
  constructor(private task_repository: ITask_Repository) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const { title, description, date, start_time, end_time } = request.body

      const success = await this.task_repository.update({
        title, description,
        date: date ? new Date(date) : undefined,
        start_time: start_time ? start_time.hour * 60 + start_time.min : undefined,
        end_time: end_time ? end_time.hour * 60 + end_time.min : undefined,
      }, id);

      return response.status(success ? 204 : 404).send()
    } catch (err) {
      console.log(err);
      return response.status(400).json({
        message: 'Unexpected error',
      });
    }
  }
}
