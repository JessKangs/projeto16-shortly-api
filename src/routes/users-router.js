import express from 'express';
import { hasToken } from '../middlewares/token-middleware.js';

import { userPage } from '../controllers/meController.js';

import dotenv from 'dotenv';

dotenv.config()
const router = express.Router();

router.get('/users/me', hasToken, userPage);

export default router;
