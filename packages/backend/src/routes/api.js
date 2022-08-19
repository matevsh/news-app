import { Router } from 'express';
import renderDataController from '../controllers/render-data-controller.js';
import updateArticlesController from '../controllers/update-articles-controller.js';

const router = Router();

router.get('/render', renderDataController);
router.get('/update', updateArticlesController);

export default router;
