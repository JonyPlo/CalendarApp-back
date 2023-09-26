/*
    Auth Routes
    Path: host + /api/auth
*/

import { Router } from 'express';

const router = Router();

router.route('/').get((req, res) => {
  res.json({ ok: 'Hello World' });
});

export default router;
