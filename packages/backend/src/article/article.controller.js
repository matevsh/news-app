import article from '../update/utills/prisma.query.js';
import { findArticles, findById } from './article.facade.js';

export const getArticles = async (req, res) => {
  const { path } = req;

  const type = path === '/'
    ? article.restricted
    : article.details;

  const response = await findArticles(type);
  res.status(200).json(response);
};

export const getArticle = async (req, res) => {
  const { id } = req.params;

  const response = await findById(id);
  res.status(200).json(response);
};
