import express from 'express';
import sessions from 'express-session';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { router } from './shared/routes.api.js';

const app = express();
app.use(cors({ origin: '*' }));

const oneDay = 1000 * 60 * 60 * 24;

const cookieOptions = {
  secret: 'siema2137',
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: false,
};

app.use(sessions(cookieOptions));
app.use(cookieParser());
app.use(express.json());

app.use(router);

app.listen('80', () => {
  console.log('App listen on port 80');
});
