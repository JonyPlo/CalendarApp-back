import { response } from 'express';

export const getEvents = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'getEvents',
  });
};

export const createEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'createEvent',
  });
};

export const updateEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'updateEvent',
  });
};

export const deleteEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'deleteEvent',
  });
};
