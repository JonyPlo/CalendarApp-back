import { check } from 'express-validator'
import validateErrors from '../validate-errors'
import isDate from '../../helpers/isDate'

const validateEvents = [
  check('title')
    .notEmpty()
    .withMessage('title is required')
    .isLength({ min: 3 })
    .withMessage('title must be at least 3 characters long'),
  check('start')
    .notEmpty()
    .withMessage('start is required')
    .custom(isDate)
    .withMessage('start must be a valid date'),
  check('end')
    .notEmpty()
    .withMessage('end is required')
    .custom(isDate)
    .withMessage('end must be a valid date'),
  (req, res, next) => validateErrors(req, res, next)
]

export default validateEvents
