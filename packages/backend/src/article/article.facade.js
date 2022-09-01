import { articles } from '../shared/db/prisma.js';

const findArticles = async (options) => await articles.findMany(options);

const findById = async (id) => await articles.findUnique({ where: { articleId: +id } });

export { findArticles, findById };
