import { Router } from 'express';

import renderData from '../article/controllers/render-data.js';
import updateArticles from '../article/controllers/update-articles.js';
import article from '../article/controllers/article.js';

import { login, profileController } from '../controllers/user/login.js';
import register from '../controllers/user/register.js';
import logout from '../controllers/user/logout.js';

import error404 from '../controllers/errors/404.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/profile', profileController);

router.get('/render/:type?', renderData);
router.get('/update', updateArticles);

router.get('/article/:aid', article);

router.get('*', error404);

export default router;
