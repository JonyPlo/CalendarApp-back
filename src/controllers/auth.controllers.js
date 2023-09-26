import { response } from 'express'; // Se importa response y se lo agrega en el parametro res para obtener el autocompletado de las propiedades de res
import { validationResult } from 'express-validator';

export const loginUser = (req, res = response) => {
  try {
    const { email, password } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        ok: false,
        errors: errors.mapped(),
      });
    }

    res.json({
      ok: true,
      msg: 'login',
      email,
      password,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: 'Error logging in user',
      error,
    });
  }
};

export const createUser = (req, res = response) => {
  try {
    const { name, email, password } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        ok: false,
        errors: errors.mapped(),
      });
    }

    res.status(201).json({
      ok: true,
      msg: 'register',
      name,
      email,
      password,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: 'Error registering user',
      error,
    });
  }
};

export const renewToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'renew',
  });
};
