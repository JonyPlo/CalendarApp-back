import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLenght: 2,
      maxLenght: 10,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minLenght: 2,
      maxLenght: 50,
    },
    password: {
      type: String,
      required: true,
      minLenght: 8,
      maxLenght: 12,
    },
  },
  {
    timestamps: true,
  }
);

const User = model('User', UserSchema);

export default User;
