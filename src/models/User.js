import { Schema, model } from 'mongoose'

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 10
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: 2,
      maxLength: 50
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 12
    }
  },
  {
    timestamps: true
  }
)

const User = model('User', UserSchema)

export default User
