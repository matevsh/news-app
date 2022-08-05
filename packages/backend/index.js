const axios = require('axios');
const cheerio = require('cheerio');

const URL = 'https://wiadomosci.gazeta.pl/wiadomosci';

const getArticleLink = async (url) => {
  const { data } = await axios(url);
  const $ = cheerio.load(data);

  const articleLinkElements = $('.entry');
  const articleLinks = [];

  articleLinkElements.each(function () {
    if ($(this).attr('id')) return;

    const title = $(this).find('a').attr('href');
    articleLinks.push(title);
  });

  return articleLinks;
};

const getArticle = async (url) => {
  const { data } = await axios(url);
  const $ = cheerio.load(data);

  const title = $('h1').text();
  console.log(`${title}`);
};

const getExactArticles = async (articleLinks) => {
  const promiseArray = [];
  articleLinks.forEach((articleLink) => {
    promiseArray.push(getArticle(articleLink));
  });
  await Promise.all(promiseArray);
  console.log('data downloaded');
};

getArticleLink(URL)
  .then((dataArr) => getExactArticles(dataArr));
