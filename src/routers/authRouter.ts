import express from 'express';
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'
import { User } from '../database/models';
import { putObject, signJWT } from '../utils';

const upload = multer({ storage: multer.memoryStorage() })

const authRouter = express.Router()

authRouter.post('/login', async (req, res) => {
  // validate login
  const user = await User.findOne({ email: req.body.email })
  const token = signJWT(user.toObject())
  res.status(200).json(token)
})

authRouter.post('/register', upload.single('photo'), (req, res) => {
  const file = req.file
  if (file) {
    const uuid = uuidv4()
    putObject(file, uuid)
    req.body.photo = uuid
  }
  const user = new User(req.body)
  user.save()
  res.send('Register User')
})

authRouter.get('/logout', (req, res) => {
  res.status(200).send('Logout')
})

export default authRouter
