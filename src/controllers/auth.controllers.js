import { response } from 'express'; // Se importa response y se lo agrega en el parametro res para obtener el autocompletado de las propiedades de res

export const loginUser = (req, res = response) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: 'login',
    email,
    password,
  });
};

export const createUser = (req, res = response) => {
  const { name, email, password } = req.body;

  res.json({
    ok: true,
    msg: 'register',
    name,
    email,
    password,
  });
};

export const renewToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'renew',
  });
};
