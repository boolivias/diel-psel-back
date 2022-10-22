import { Request, Response } from 'express';
import { ITask_Repository } from '../../../repositories/ITask_Repository';

export class TaskDelete_Controller {
  constructor(private task_repository: ITask_Repository) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params

      const success = await this.task_repository.delete(id);

      return response.status(success ? 204 : 404).send()
    } catch (err) {
      console.log(err);
      return response.status(400).json({
        message: 'Unexpected error',
      });
    }
  }
}
