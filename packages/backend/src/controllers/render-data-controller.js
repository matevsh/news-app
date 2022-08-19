import { fastRender, fullRender } from '../services/select-for-render.js';

const renderDataController = async (req, res) => {
  const fullAliases = ['full', 'expand', 'details'];

  const showFull = fullAliases.includes(req.params.full.toLowerCase());
  if (showFull) return res.json(await fullRender());

  res.json(await fastRender());
};

export default renderDataController;
