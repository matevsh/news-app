import { Router } from 'express';
import { articleRouter } from '../article/article.router.js';
import { userRouter } from '../user/user.router.js';

const router = Router();

router.use('/article', articleRouter);
router.use('/auth', userRouter);

export { router };
