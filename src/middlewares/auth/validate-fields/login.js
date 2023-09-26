import { check } from 'express-validator';
import validateErrors from '../../validate-errors';

const validateLoginFields = [
  check('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('email must be valid')
    .isLength({ min: 2, max: 50 })
    .withMessage('email must be between 2 and 50 characters'),
  check('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 8, max: 12 })
    .withMessage('password must be between 8 and 12 characters'),
  (req, res, next) => validateErrors(req, res, next),
];

export default validateLoginFields;
