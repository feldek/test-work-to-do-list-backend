import express from 'express';
import { adminMiddleware } from '../../middlewares/adminMiddleware';
import controller from './controller';

const router = express.Router();

router.post('/', controller.auth);
router.post('/authorization', adminMiddleware, controller.authorization);

export default router;
