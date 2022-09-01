import { returnDuration } from './utills/duration.js';
import { statusMessage } from './utills/statusMessage.js';
import getWebsite from './update.factory.js';
import filterArticles from './update.facade.js';
import { articles } from '../shared/db/prisma.js';

const URL = 'https://wiadomosci.gazeta.pl/wiadomosci';

export const updateData = async (req, res) => {
  try {
    const startTime = new Date().getTime();

    const response = await getWebsite(URL);
    const newArticles = await filterArticles(response);

    // console.log(newArticles);
    if (newArticles.length) {
      await articles.createMany({ data: { newArticles } });
    }

    const duration = returnDuration(startTime);

    const responseMessage = statusMessage(newArticles.length, duration);
    res.json(responseMessage);
  } catch (e) {
    console.log(e);
    res.json({ error: `${e}` });
  }
};
