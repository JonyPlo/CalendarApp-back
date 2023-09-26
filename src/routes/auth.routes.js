/*
    Auth Routes
    Path: host + /api/auth
*/

import { Router } from 'express';
import {
  createUser,
  loginUser,
  renewToken,
} from '../controllers/auth.controllers';

const router = Router();

// Login Route
router.route('/').post(loginUser);

// Register Route
router.route('/new').post(createUser);

// Renew Token Route
router.route('/renew').get(renewToken);

export default router;
