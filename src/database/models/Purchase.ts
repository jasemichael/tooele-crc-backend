import mongoose from 'mongoose';
import { purchaseSchema } from '../schemas';

const Purchase = mongoose.model('Purchase', purchaseSchema)

export default Purchase
