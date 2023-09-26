import { response } from 'express'; // Se importa response y se lo agrega en el parametro res para obtener el autocompletado de las propiedades de res

export const loginUser = (req, res = response) => {
  res.json({ ok: true, msg: 'login' });
};

export const createUser = (req, res = response) => {
  res.json({ ok: true, msg: 'register' });
};

export const renewToken = (req, res = response) => {
  res.json({ ok: true, msg: 'renew' });
};
