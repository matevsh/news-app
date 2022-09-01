import { load } from 'cheerio';
import { clearText, getIdFromUrl } from './textFilters.js';

const data = (url, html) => {
  const $ = load(html);

  const title = clearText($('h1').text());
  const articleId = getIdFromUrl(url);
  const timeString = $('time').attr('datetime');
  const time = new Date(timeString).getTime();
  const img = $('img').attr('src');
  const paragraphElements = $('.art_paragraph, .art_sub_title');

  const paragraphs = [...paragraphElements.map((i, el) => $(el).text())];
  const [description] = paragraphs;

  return {
    url, title, articleId, timeString, time, img, description, paragraphs,
  };
};

const links = (html) => {
  const $ = load(html);
  const linkElement = $('.entry > a');

  return [...linkElement.map(
    (i, el) => $(el).attr('href'),
  )];
};

export default { data, links };
