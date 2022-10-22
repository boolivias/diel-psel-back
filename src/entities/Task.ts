import { v4 } from 'uuid';

export class Task {
  public readonly id!: string;

  public title!: string;

  public description!: string;

  public date!: Date;

  public start_time!: number;

  public end_time!: number;

  constructor(props: Omit<Task, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) { this.id = v4(); }
  }
}
