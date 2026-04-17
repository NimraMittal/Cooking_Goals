import express from 'express';
import { loginUser } from '../controllers/authController.js';

const router = express.Router();

// This defines the /login part of the URL
router.post('/login', loginUser);

export default router;