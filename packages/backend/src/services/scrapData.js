import { load } from 'cheerio';
import axios from 'axios';
import { decode } from 'iso-8859-2';

const clearText = (text) => text.replaceAll('\n', '').trim();

const getArticleLinks = async (url) => {
  const { data } = await axios(url);
  const $ = load(data);

  const articleLinkElements = $('.entry > a');
  return [...articleLinkElements.map((i, el) => $(el).attr('href'))];
};

const getSingleArticle = async (url) => {
  const options = { url, responseType: 'arraybuffer' };
  const { data: response } = await axios.request(options);

  const html = decode(response);
  const $ = load(html);

  const title = clearText($('h1').text());
  const timeString = $('time').attr('datetime');
  const time = new Date(timeString).getTime();
  const img = $('img').attr('src');
  const paragraphElements = $('.art_paragraph, .art_sub_title');

  const paragraphs = [...paragraphElements.map((i, el) => $(el).text())];

  return {
    title, url, timeString, time, img, paragraphs,
  };
};

const getExactArticles = async (articleLinks) => {
  const articlePromises = articleLinks.map((url) => getSingleArticle(url));
  return await Promise.all(articlePromises);
};

const initScraper = async (url) => {
  const articleLinks = await getArticleLinks(url);
  return await getExactArticles(articleLinks);
};

export default initScraper;
