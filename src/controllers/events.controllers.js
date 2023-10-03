import { response } from 'express';
import Event from '../models/Event';

export const getEvents = (req, res = response) => {
  try {
    res.status(200).json({
      ok: true,
      msg: 'updateEvent',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'internal server error. Please contact the administrator',
    });
  }
};

export const createEvent = async (req, res = response) => {
  const event = new Event(req.body);
  try {
    event.user = req.uid;

    await event.save();

    res.status(201).json({
      ok: true,
      event,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'internal server error. Please contact the administrator',
    });
  }
};

export const updateEvent = (req, res = response) => {
  try {
    res.status(200).json({
      ok: true,
      msg: 'updateEvent',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'internal server error. Please contact the administrator',
    });
  }
};

export const deleteEvent = (req, res = response) => {
  try {
    res.status(200).json({
      ok: true,
      msg: 'updateEvent',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'internal server error. Please contact the administrator',
    });
  }
};
