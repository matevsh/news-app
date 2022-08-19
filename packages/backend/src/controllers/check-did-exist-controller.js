import articles from '../db/db-init.js';

const checkDidExistController = async (data) => {
  const tryFind = await articles.findMany({ select: { articleId: true } });
  const idArray = tryFind.map((x) => x.articleId);
  return data.filter(({ articleId }) => !idArray.includes(articleId));
};

export default checkDidExistController;
