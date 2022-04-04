import { Schema } from 'mongoose'
import jobSchema from './jobSchema'
import userSchema from './userSchema'

const paymentSchema = new Schema({
  job: jobSchema,
  date: {
    type: Date,
    required: true
  },
  authorizer: userSchema,
  client_id: {
    type: Schema.Types.ObjectId,
    required: true
  }
})

export default paymentSchema
