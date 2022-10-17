import express from 'express';
import { hasToken } from '../middlewares/token-middleware.js';
import { urlIsValid } from '../middlewares/url-regex-middleware.js'
import { urlShortener, getUrlById, openUrl, deleteUrl } from '../controllers/urlController.js';

import dotenv from 'dotenv';

dotenv.config()
const router = express.Router();

router.post('/urls/shorten', hasToken, urlIsValid, urlShortener);

router.get('/urls/:id', getUrlById);

router.get('/urls/open/:shortUrl', openUrl);

router.delete('/urls/:id', hasToken, deleteUrl)

export default router;