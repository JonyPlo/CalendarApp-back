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
import validateLoginFields from '../middlewares/auth/validate-fields/login';
import validateRegisterFields from '../middlewares/auth/validate-fields/register';
import validateJWT from '../middlewares/validate-jwt';

const router = Router();

// Login Route
router.route('/').post([validateLoginFields], loginUser);

// Register Route
router.route('/new').post([validateRegisterFields], createUser);

// Renew Token Route
router.route('/renew').get(validateJWT, renewToken);

export default router;
