import express from 'express';
import {signUpIsValid, signInIsValid} from '../middlewares/joi-auth-middleware.js';
import {signUp, signIn} from '../controllers/authController.js';

import dotenv from 'dotenv';

dotenv.config()
const router = express.Router();

router.post('/signup', signUpIsValid, signUp);

router.post('/signin', signInIsValid, signIn)

export default router;