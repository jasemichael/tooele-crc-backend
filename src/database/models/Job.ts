import mongoose from 'mongoose';
import { jobSchema } from '../schemas';

const Job = mongoose.model('Job', jobSchema)

export default Job
