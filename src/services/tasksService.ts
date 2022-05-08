import { dbContext } from './../db/dbContext';
import { Sequelize } from 'sequelize';
import { TasksEntity } from './../db/entities/TasksEntity';
import { orderDirection, statusTasks, tasksOrderBy } from '../constants';
import { ITasks } from '../interfaces';

class TaskService {
  async get({
    limit = 3,
    orderBy = tasksOrderBy.userName,
    direction = orderDirection.asc,
    offset = 0,
  }) {
    const tasksPromise = await TasksEntity.findAll({
      order: [[Sequelize.literal(`"TasksEntity"."${orderBy}"`), direction]],
      attributes: ['id', 'userName', 'email', 'description', 'status', 'edited'],
      limit,
      offset,
    });

    const countTasksPromise = dbContext.sequelize.query(
      `SELECT COUNT(*) from "test_bee_jee_db"."Tasks";`,
    ) as unknown as [{ count: number }[]];
    const [tasks, [[countTasks]]] = await Promise.all([tasksPromise, countTasksPromise]);
    const count = countTasks?.count ? Number(countTasks.count) : 0;
    return { tasks, countTasks: count };
  }

  async create({ id, userName, email, description, status = statusTasks.created }: ITasks) {
    await TasksEntity.create({ id, userName, email, description, status });
  }

  async update(
    id: string,
    params: {
      userName?: string;
      email?: string;
      description?: string;
      status?: statusTasks;
    },
  ) {
    await TasksEntity.update({ ...params, edited: true }, { where: { id } });
  }

  async remove(id: string) {
    await TasksEntity.destroy({ where: { id } });
  }
}

export const taskService = new TaskService();
