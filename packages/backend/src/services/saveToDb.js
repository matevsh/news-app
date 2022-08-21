import { articles } from '../db/db-init.js';

const clearUnusedField = (x) => x.map(({ isNew, ...article }) => article);

const saveToDb = async (data) => {
  await articles.createMany({
    data: clearUnusedField(data),
    skipDuplicates: true,
  });
};

export default saveToDb;
