import mongoose from 'mongoose';
import { paymentSchema } from '../schemas';

const Payment = mongoose.model('Payment', paymentSchema)

export default Payment
