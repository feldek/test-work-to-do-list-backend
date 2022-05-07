import express from 'express';
import tasks from './tasks';
import admin from './admin';

export default (app: express.Application) => {
  app.use('/tasks', tasks);
  app.use('/admin', admin);
  app.use('/', (req, res) => {
    res.status(200).json({ test: 'test' });
  });
};
