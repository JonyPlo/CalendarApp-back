import { response } from 'express'
import jwt from 'jsonwebtoken'
import { SEED_JWT } from '../config'

const validateJWT = (req, res = response, next) => {
  const token = req.header('x-token')

  if (!token) {
    return res.status(400).json({
      ok: false,
      msg: 'Token does not exist'
    })
  }

  try {
    const { uid, name } = jwt.verify(token, SEED_JWT)

    req.uid = uid
    req.name = name
  } catch (error) {
    console.log(error)
    return res.status(401).json({
      ok: false,
      msg: 'Invalid token'
    })
  }

  next()
}

export default validateJWT
