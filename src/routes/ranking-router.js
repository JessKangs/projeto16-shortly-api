import express from 'express';
import ranking from '../controllers/ranking-controller.js';
import dotenv from 'dotenv';

dotenv.config()
const router = express.Router();

router.get('/ranking', ranking);

export default router;