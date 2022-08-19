import initScraper from '../services/scrapData.js';
import checkDidExistController from './check-did-exist-controller.js';
import saveToDb from '../services/saveToDb.js';

const URL = 'https://wiadomosci.gazeta.pl/wiadomosci';

const updateArticlesController = async (req, res) => {
  try {
    const startTime = new Date().getTime();
    const data = await initScraper(URL);
    const newArticles = await checkDidExistController(data) || [];

    const messages = [
      `Pobrano ${newArticles.length} rekordów 🐠`,
      'nie znaleziono nowych artykułów 🤐',
    ];

    if (newArticles.length) await saveToDb(newArticles);

    const totalTime = new Date((new Date().getTime()) - startTime);
    const duration = `${totalTime.getSeconds()}.${totalTime.getMilliseconds()}`;

    res.json({
      duration: `🚀 Czas pobierania ${duration}s`,
      message: newArticles.length ? messages[0] : messages[1],
    });
  } catch (e) {
    res.json(e);
  }
};

export default updateArticlesController;
