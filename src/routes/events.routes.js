/*
    Events Routes
    Path: host + /api/events
*/

import { Router } from 'express';
import validateJWT from '../middlewares/validate-jwt';
import {
  createEvent,
  deleteEvent,
  getEvents,
  updateEvent,
} from '../controllers/events.controllers';
import validateEvents from '../middlewares/events/validate-events';

const router = Router();

router.use(validateJWT); // De esta forma se sube un middleware de nivel para que se aplique en todas las rutas y no tengamos que agregarlo individualmente ruta por ruta

router.route('/').get(getEvents).post(validateEvents, createEvent);

router.route('/:id').put(validateEvents, updateEvent).delete(deleteEvent);

export default router;
