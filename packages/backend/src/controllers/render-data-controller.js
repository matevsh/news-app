import articles from '../db/db-init.js';

const renderDataController = async (req, res) => {
  const data = await articles.findMany();
  res.json(data);
};

export default renderDataController;
