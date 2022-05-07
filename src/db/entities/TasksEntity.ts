import { Sequelize, Model, DataTypes } from 'sequelize';
import { statusTasks } from '../../constants';

export interface TaskAttributes {
  id: string;
  userName: string;
  email: string;
  description: string;
  status?: string;
}

export class TasksEntity extends Model<TaskAttributes> implements TaskAttributes {
  id!: string;
  userName!: string;
  email!: string;
  description!: string;
  status!: string;
}

export const init = (sequelize: Sequelize) => {
  TasksEntity.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            msg: 'Must be a valid email address',
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: statusTasks.created,
        allowNull: false,
      },
    },
    {
      tableName: 'Tasks',
      sequelize,
      schema: process.env.DB_SCHEMA,
    },
  );
};
