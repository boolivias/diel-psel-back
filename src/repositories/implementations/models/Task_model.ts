import { DataTypes, Model, Sequelize } from 'sequelize';
import { Task } from '../../../entities/Task';

interface ITaskModel extends Omit<Task, 'date'> {
  date: string,
}

export class Task_model extends Model<ITaskModel> implements ITaskModel {
  declare id: string;
  declare title: string;
  declare description: string;
  declare date: string;
  declare start_time: number;
  declare end_time: number;
}

class Task_model_config {
  private model_instance: typeof Task_model;

  constructor(private connection: Sequelize) {
    this.model_instance = Task_model.init(
      {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
        title: {
          type: new DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: new DataTypes.STRING,
          allowNull: false,
        },
        date: {
          type: new DataTypes.STRING,
          allowNull: false,
        },
        start_time: {
          type: new DataTypes.INTEGER,
          allowNull: false,
        },
        end_time: {
          type: new DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        tableName: 'Tasks',
        sequelize: this.connection,
      },
    )
  }
}

export default Task_model_config;



