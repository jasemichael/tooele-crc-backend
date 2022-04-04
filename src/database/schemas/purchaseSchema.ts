import { Schema } from 'mongoose'
import userSchema from './userSchema'

const paymentSchema = new Schema({
  item: {
    type: String,
    minlength: 0,
    trim: true,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  cost: {
    type: Number,
    min: 0,
    required: true
  },
  authorizer: userSchema,
  client_id: {
    type: Schema.Types.ObjectId,
    required: true
  }
})

export default paymentSchema
