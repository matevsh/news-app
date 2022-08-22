import { articles } from '../../db/db-init.js';

const article = async (req, res) => {
  const { aid } = req.params;
  const data = await articles.findUnique({
    where: { articleId: +aid },
  });
  res.json(data);
};

export default article;
