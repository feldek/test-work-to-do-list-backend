import { Response, Request } from 'express';
import { tasksOrderBy, orderDirection } from './../../constants/index';
import { responseError } from '../../utils/error';
import { taskService } from '../../services/tasksService';

class UsersController {
  async get(req: Request, res: Response) {
    const orderBy = req.query.orderBy as tasksOrderBy;
    const direction = req.query.direction as orderDirection;
    const limit = Number(req.query.limit) || 3;
    const offset = Number(req.query.offset) || 0;

    try {
      const tasks = await taskService.get({ limit, orderBy, direction, offset });
      res.status(200).json(tasks);
    } catch (error) {
      responseError(res, error);
    }
  }

  async create(req: Request, res: Response) {
    const { id, userName, email, description } = req.body;
    try {
      await taskService.create({ id, userName, email, description });
      res.status(201);
    } catch (error) {
      responseError(res, error);
    }
  }

  async update(req: Request, res: Response) {
    const { id, userName, email, description, status } = req.body;
    const params = { userName, email, description, status };
    try {
      await taskService.update(id, params);
      res.status(201);
    } catch (error) {
      responseError(res, error);
    }
  }

  async remove(req: Request, res: Response) {
    const { id } = req.body;
    try {
      await taskService.remove(id);
      res.status(201);
    } catch (error) {
      responseError(res, error);
    }
  }
}

export default new UsersController();
