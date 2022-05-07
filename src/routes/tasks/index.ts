import express from 'express';
import { adminMiddleware } from '../../middlewares/adminMiddleware';
import controller from './controller';

const router = express.Router();

router.get('/', controller.get);
router.post('/', controller.create);
router.delete('/', controller.remove);
router.patch('/', adminMiddleware, controller.update);

export default router;
