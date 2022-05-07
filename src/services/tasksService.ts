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
    const tasks = await TasksEntity.findAll({
      order: [orderBy, direction],
      attributes: ['id', 'userName', 'email', 'description', 'status'],
      limit,
      offset,
    });
    return tasks;
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
    await TasksEntity.update({ ...params }, { where: { id } });
  }

  async remove(id: string) {
    await TasksEntity.destroy({ where: { id } });
  }
}

export const taskService = new TaskService();
