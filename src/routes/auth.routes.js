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
import validateLogin from '../middlewares/auth/validate-login';
import validateRegister from '../middlewares/auth/validate-register';
import validateJWT from '../middlewares/validate-jwt';

const router = Router();

// Login Route
router.route('/').post([validateLogin], loginUser);

// Register Route
router.route('/new').post([validateRegister], createUser);

// Renew Token Route
router.route('/renew').get(validateJWT, renewToken);

export default router;
