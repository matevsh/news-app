import { articles } from '../../db/db-init.js';

const simplifyObj = (x) => JSON.parse(JSON.stringify(x));

const fastRender = async () => {
  const response = await articles.findMany({
    take: 10,
    orderBy: {
      time: 'desc',
    },
    select: {
      id: true,
      title: true,
      timeString: true,
      paragraphs: true,
    },
  });
  const data = simplifyObj(response);
  data.forEach((x) => {
    x.paragraphs = x.paragraphs[0];
  });
  return data;
};

const fullRender = async () => await articles.findMany({
  take: 10,
  orderBy: {
    time: 'desc',
  },
});

export { fastRender, fullRender };
