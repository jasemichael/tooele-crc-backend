import { Schema } from 'mongoose'

const userSchema = new Schema({
  first_name: {
    type: String,
    minLength: 0,
    trim: true,
    required: true
  },
  last_name: {
    type: String,
    minLength: 0,
    trim: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    minLength: 0,
    trim: true,
    required: true
  },
  password: {
    type: String,
    minLength: 0,
    trim: true,
    required: true
  },
  position: {
    type: String,
    minLength: 0,
    trim: true
  },
  photo: {
    type: String,
    minLength: 0,
    trim: true
  },
  role: {
    type: String,
    enum: ['admin', 'employee'],
    required: true
  }
})

export default userSchema
