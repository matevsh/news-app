import axios from 'axios';
import { decode } from 'iso-8859-2';

import extract from './utills/extractData.js';

const getArticleLinks = async (url) => {
  const { data } = await axios(url);
  return extract.links(data);
};

const getSingleArticle = async (url) => {
  const options = { url, responseType: 'arraybuffer' };
  const { data: response } = await axios.request(options);

  const html = decode(response);
  return extract.data(url, html);
};

const getExactArticles = async (articleLinks) => {
  const articlePromises = articleLinks.map((url) => getSingleArticle(url));
  return await Promise.all(articlePromises);
};

const getData = async (url) => {
  const articleLinks = await getArticleLinks(url);
  return await getExactArticles(articleLinks);
};

export default getData;
