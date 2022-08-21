import { Router } from 'express';
import renderDataController from '../controllers/render-data-controller.js';
import updateArticlesController from '../controllers/update-articles-controller.js';
import articleController from '../controllers/article-controller.js';
import { loginController, profileController } from '../controllers/login-controller.js';

const router = Router();

router.post('/login', loginController);
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});
router.get('/profile', profileController);

router.get('/render/:type?', renderDataController);
router.get('/update', updateArticlesController);

router.get('/article/:aid', articleController);

router.get('*', (req, res) => res.json({ error: 404 }));

export default router;
