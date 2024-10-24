import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import {
  getUsers,
  getUserById,
  getUserByUsername,
} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', protectRoute, getUsers);
router.get('/:id', protectRoute, getUserById);
router.get('/username/:username', protectRoute, getUserByUsername);

export default router;
