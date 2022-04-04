import { Schema } from 'mongoose'
import userSchema from './userSchema'

const noteSchema = new Schema({
  title: {
    type: String,
    minlength: 0,
    trim: true,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  author: userSchema,
  description: {
    type: String,
    minlength: 0,
    trim: true,
    required: true
  },
  client_id: {
    type: Schema.Types.ObjectId,
    required: true
  }
})

export default noteSchema
