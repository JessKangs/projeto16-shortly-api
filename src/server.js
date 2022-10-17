import express from 'express';
import authRouter from './routes/auth-routes.js';
import urlRouter from './routes/url-router.js';
import usersRouter from './routes/users-router.js';
import rankings from "./routes/ranking-router.js";
import dotenv from 'dotenv';

dotenv.config();

const server = express();
server.use(express.json());
server.use(authRouter)
server.use(urlRouter)
server.use(usersRouter)
server.use(rankings);

server.listen(5000, () => {
    console.log('Magic happens on 5000')
})