require('express-async-errors');
require('dotenv').config();
import express, { Application } from 'express';
import cors from 'cors';
import initRoutes from './routes';


const app: Application = express();
app.use(cors());

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);

export default app;
