import { Router } from 'express';
import { userProfile } from './user.controller.js';
import { authRegister } from '../auth/controller.register.js';
import { authLogin, logout } from '../auth/controller.login.js';

const userRouter = Router();

userRouter.post('/register', authRegister);
userRouter.post('/login', authLogin);
userRouter.get('/logout', logout);
userRouter.get('/profile', userProfile);

export { userRouter };
