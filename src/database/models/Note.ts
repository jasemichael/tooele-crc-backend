import mongoose from 'mongoose';
import { noteSchema } from '../schemas';

const Note = mongoose.model('Note', noteSchema)

export default Note
