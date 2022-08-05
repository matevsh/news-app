import express from 'express';
import router from './routes/api.js';

const app = express();

app.use(router);

app.listen('80', () => {
  console.log('App listen on port 80');
});
