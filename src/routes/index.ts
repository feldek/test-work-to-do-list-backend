import express from 'express';
import tasks from './tasks';

export default (app: express.Application) => {
  app.use('/tasks', tasks);
  app.use('/', (req, res) => {
    res.status(200).json({ test: 'test' });
  });
};
