import jwt from 'jsonwebtoken';
import { SEED_JWT } from '../src/config';

const generateJWT = (uid, name) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name };

    jwt.sign(
      payload,
      SEED_JWT,
      {
        expiresIn: '2h',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('Error generating token');
        }
        resolve(token);
      }
    );
  });
};

export default generateJWT;
