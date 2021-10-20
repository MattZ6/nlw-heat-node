import 'dotenv/config';

import cors from 'cors';
import express, { json } from 'express';
import http from 'http';
import { Server } from 'socket.io';

import { routes } from './routes';

const app = express();

app.use(cors());
app.use(json());

app.use(routes);

app.get('/auth/github', (_, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_OAUTH_CLIENT_ID}`
  );
});

app.get('/auth/github/callback', (request, response) => {
  const { code } = request.query;

  return response.json(code);
});

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

export { httpServer, io };
