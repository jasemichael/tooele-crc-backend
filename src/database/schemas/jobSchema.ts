import { Schema } from 'mongoose'

const jobSchema = new Schema({
  name: {
    type: String,
    minlength: 0,
    trim: true,
    required: true
  },
  price: {
    type: Number,
    min: 0,
    required: true
  },
  description: {
    type: String,
    minlength: 0,
    trim: true,
    required: true
  }
})

export default jobSchema
