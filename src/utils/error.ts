import { Response } from 'express';

export const responseError = (res: Response, error: Error | unknown) => {
  if (error instanceof Error) {
    res.status(500).json({ message: error.message });
  } else {
    res.status(500).json({ message: 'unknown error' });
  }
};
