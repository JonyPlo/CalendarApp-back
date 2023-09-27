import { response } from 'express'; // Se importa response y se lo agrega en el parametro res para obtener el autocompletado de las propiedades de res
import User from '../models/User';

export const loginUser = (req, res = response) => {
  try {
    const { email, password } = req.body;

    res.json({
      ok: true,
      msg: 'login',
      email,
      password,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: 'error logging in user',
      error,
    });
  }
};

export const createUser = async (req, res = response) => {
  try {
    // const { name, email, password } = req.body;

    const user = new User(req.body);

    await user.save();

    res.status(201).json({
      ok: true,
      msg: 'user registered',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      msg: 'error registering user, please contact with the administrator',
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
