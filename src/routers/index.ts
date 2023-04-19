import {  Router  } from 'express';
import healthRouter from './health.router';
import taskRouter from './task.router'
import userRouter from './user.router'

const router = Router();

router.use('/healthcheck', healthRouter);
router.use('/tasks', taskRouter);
router.use('/users', userRouter);

export default router;