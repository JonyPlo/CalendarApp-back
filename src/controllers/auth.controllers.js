import { response } from 'express' // Se importa response y se lo agrega en el parametro res para obtener el autocompletado de las propiedades de res
import User from '../models/User'
import bcrypt from 'bcrypt'
import generateJWT from '../helpers/jwt'

export const loginUser = async (req, res = response) => {
  try {
    const { email, password } = req.body

    let user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: 'User not found'
      })
    }

    const validPassword = bcrypt.compareSync(password, user.password)

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Invalid password'
      })
    }

    //Generate JWT
    const token = await generateJWT(user.id, user.name)

    res.status(200).json({
      ok: true,
      uid: user._id,
      name: user.name,
      token
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Internal server error. Please contact the administrator',
      error
    })
  }
}

export const createUser = async (req, res = response) => {
  try {
    const { email, password } = req.body

    let user = await User.findOne({ email })

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'User already exists'
      })
    }

    user = new User(req.body)

    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(password, salt)

    await user.save()

    //Generate JWT
    const token = await generateJWT(user.id, user.name)

    res.status(201).json({
      ok: true,
      uid: user._id,
      name: user.name,
      token
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Internal server error. Please contact the administrator',
      error
    })
  }
}

export const renewToken = async (req, res = response) => {
  const { uid, name } = req

  const token = await generateJWT(uid, name)

  try {
    res.status(200).json({
      ok: true,
      uid,
      name,
      token
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Internal server error. Please contact the administrator'
    })
  }
}
