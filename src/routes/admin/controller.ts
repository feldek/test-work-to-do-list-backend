import { TokenService } from './../../services/tokenService';
import { Response, Request } from 'express';
import { responseError } from '../../utils/error';

class UsersController {
  async auth(req: Request, res: Response) {
    const login = req.body.login as string;
    const password = req.body.password as string;

    if (login !== 'admin' && password !== '123') {
      throw new Error('Incorrect access details');
    }

    try {
      const token = TokenService.generateToken();
      res.status(200).json({ token });
    } catch (error) {
      responseError(res, error);
    }
  }
}

export default new UsersController();
