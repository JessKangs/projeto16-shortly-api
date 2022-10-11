import express from 'express';
import {teste} from "authController.js";

const router = express.Router();

router.get('/', teste);

export default router;