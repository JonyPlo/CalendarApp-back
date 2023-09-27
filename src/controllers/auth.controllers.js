import { response } from 'express'; // Se importa response y se lo agrega en el parametro res para obtener el autocompletado de las propiedades de res
import User from '../models/User';
import bcrypt from 'bcrypt';

export const loginUser = async (req, res = response) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: 'user not found',
      });
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'invalid password',
      });
    }

    // JWT

    res.json({
      ok: true,
      uid: user._id,
      name: user.name,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      msg: 'error logging user, please contact with the administrator',
      error,
    });
  }
};

export const createUser = async (req, res = response) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'user already exists',
      });
    }

    user = new User(req.body);

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    res.status(201).json({
      ok: true,
      uid: user._id,
      name: user.name,
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
