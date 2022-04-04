import mongoose from 'mongoose';
import { clientSchema } from '../schemas';

const Client = mongoose.model('Client', clientSchema)

export default Client
