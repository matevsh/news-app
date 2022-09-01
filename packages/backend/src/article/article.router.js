import { Router } from 'express';
import { getArticles, getArticle } from './article.controller.js';
import { updateData } from '../update/update.controller.js';

const articleRouter = Router();

articleRouter.get('/details', getArticles);
articleRouter.get('/update', updateData);
articleRouter.get('/:id', getArticle);
articleRouter.get('/', getArticles);

export { articleRouter };
