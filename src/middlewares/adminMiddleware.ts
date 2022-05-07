import { TokenService } from './../services/tokenService';
import { Response, NextFunction, Request } from 'express';

export const adminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers;
  const token = authHeader.authorization && authHeader.authorization.split(' ')[1];

  if (!token) {
    throw new Error('Token not exist');
  }

  try {
    await TokenService.jwtVerify(token);
    return next();
  } catch (err) {
    if (err instanceof Error) {
      res.status(401).json({ message: err.message });
    } else {
      res.status(401).json({ message: 'Token is not valid' });
    }
  }
};
