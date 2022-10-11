import express from 'express';
import teste from './controllers/authController.js';

const server = express();
server.use(express.json());
server.use(teste)

server.listen(5000, () => {
    console.log('Magic happens on 5000')
})