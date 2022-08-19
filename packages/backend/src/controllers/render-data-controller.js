import { fastRender, fullRender } from '../services/select-for-render.js';

const renderDataController = async (req, res) => {
  const renderType = req.params.type?.toLowerCase();
  const fullAliases = ['full', 'expand', 'details'];

  const showFull = fullAliases.includes(renderType);
  if (showFull) return res.json(await fullRender());

  res.json(await fastRender());
};

export default renderDataController;
