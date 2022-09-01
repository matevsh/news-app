import { articles } from '../shared/db/prisma.js';

const filterArticles = async (data) => {
  try {
    const tryFind = await articles.findMany({ select: { articleId: true } });
    const idArray = tryFind.map((x) => x.articleId);
    return data.filter(({ articleId }) => !idArray.includes(articleId));
  } catch (e) {
    throw new Error(`${e}`);
  }
};

export default filterArticles;
