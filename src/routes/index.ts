import express from 'express';

export default (app: express.Application) => {
  app.use('/', (req, res) => {
    res.status(200).json({ test: 'test' });
  });
};
