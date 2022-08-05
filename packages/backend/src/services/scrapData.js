import { decode } from 'iso-8859-2';
import { load } from 'cheerio';
import axios from 'axios';

const clearText = (text) => text.replaceAll('\n', '').trim();

const getArticle = async (url, articles) => {
  const options = { url, responseType: 'arraybuffer' };
  const { data } = await axios.request(options);

  const html = decode(data.toString('binary'));
  const $ = load(html);

  const title = $('h1').html();
  articles.push(clearText(title));
};

const getExactArticles = async (articles, articleLinks) => {
  const promiseArray = [];
  articleLinks.forEach((articleLink) => {
    promiseArray.push(getArticle(articleLink, articles));
  });
  await Promise.all(promiseArray);
  console.log('data downloaded');
};

const getArticleLink = async (url) => {
  const { data } = await axios(url);

  const $ = load(data);
  const articleLinks = [];
  const articleLinkElements = $('.entry');

  articleLinkElements.each(function () {
    if ($(this).attr('id')) return;

    const title = $(this).find('a').attr('href');
    articleLinks.push(title);
  });

  return articleLinks;
};

const scrapController = async (url) => {
  const articles = [];
  const articleLinks = await getArticleLink(url);
  await getExactArticles(articles, articleLinks);
  console.log(articles);
  return articles;
};

export default scrapController;
