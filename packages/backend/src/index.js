import express from 'express';
import sessions from 'express-session';
import cookieParser from 'cookie-parser';
import router from './routes/api.js';

const app = express();

const oneDay = 1000 * 60 * 60 * 24;

app.use(sessions({
  secret: 'siema2137',
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: false,
}));
app.use(cookieParser());
app.use(express.json());

app.use(router);

app.listen('80', () => {
  console.log('App listen on port 80');
});
