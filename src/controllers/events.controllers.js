import { response } from 'express';

export const getEvents = (req, res = response) => {
  try {
    res.json({
      ok: true,
      msg: 'updateEvent',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      msg: 'error while getting the products',
    });
  }
};

export const createEvent = (req, res = response) => {
  console.log(req.body);

  try {
    res.status(456).json({
      ok: true,
      msg: 'createEvent',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      msg: 'error while creating the product',
    });
  }
};

export const updateEvent = (req, res = response) => {
  try {
    res.json({
      ok: true,
      msg: 'updateEvent',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      msg: 'error while updating the product',
    });
  }
};

export const deleteEvent = (req, res = response) => {
  try {
    res.json({
      ok: true,
      msg: 'updateEvent',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      msg: 'error while deleting the product',
    });
  }
};
