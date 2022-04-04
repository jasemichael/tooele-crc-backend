import { Schema } from 'mongoose'

const clientSchema = new Schema({
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
  balance: {
    type: Number,
    min: 0,
    required: true
  },
  photo: {
    type: String,
    minLength: 0,
    trim: true
  },
})

export default clientSchema
