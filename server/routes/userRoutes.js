import express from 'express';
import { registerUser } from '../controllers/userController.js'; // Import others too

const router = express.Router();

router.post('/register', registerUser);
// router.get('/', getAllUsers); ... etc

export default router;