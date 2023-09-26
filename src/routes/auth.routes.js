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
import validateLoginFields from '../middlewares/auth/validate-fields/login-fields';
import validateErrors from '../middlewares/validate-errors';
import validateRegisterFields from '../middlewares/auth/validate-fields/register-fields';

const router = Router();

// Login Route
router.route('/').post([validateLoginFields, validateErrors], loginUser);

// Register Route
router.route('/new').post([validateRegisterFields, validateErrors], createUser);

// Renew Token Route
router.route('/renew').get(renewToken);

export default router;
