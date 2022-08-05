import scrapData from '../services/scrapData.js';

const URL = 'https://wiadomosci.gazeta.pl/wiadomosci';

const mainController = async (req, res) => {
  const data = await scrapData(URL);
  res.json(data);
};

export default mainController;
