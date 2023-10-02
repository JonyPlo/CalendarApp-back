import { response } from 'express';
import jwt from 'jsonwebtoken';
import { SEED_JWT } from '../config';

const validateJWT = (req, res = response, next) => {
  const token = req.header('x-token');

  if (!token) {
    return res.json({
      ok: false,
      msg: 'token does not exist',
    });
  }

  try {
    const { uid, name } = jwt.verify(token, SEED_JWT);

    req.uid = uid;
    req.name = name;
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      ok: false,
      msg: 'invalid token',
    });
  }

  next();
};

export default validateJWT;
