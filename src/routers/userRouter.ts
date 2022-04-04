import express from 'express';
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'
import { User } from '../database/models';
import { authorize } from '../middleware';
import { deleteObject, putObject } from '../utils';

const upload = multer({ storage: multer.memoryStorage() })

const userRouter = express.Router()
userRouter.use(authorize)

userRouter.get('/', async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

userRouter.get('/:userId', async (req, res) => {
  const userId = req.params.userId
  const user = await User.findById(userId)
  res.json(user)
})

userRouter.put('/:userId', upload.single('photo'), async (req, res) => {
  const userId = req.params.userId
  const file = req.file
  const user = await User.findById(userId)
  if (file) {
    if (user.photo) {
      putObject(file, user.photo)
    } else {
      const uuid = uuidv4()
      putObject(file, uuid)
      req.body.photo = uuid
    }
  }
  await User.updateOne({ _id: userId }, req.body)
  res.send('Put User')
})

userRouter.delete('/:userId', async (req, res) => {
  const userId = req.params.userId
  const user = await User.findById(userId)
  if (user.photo) {
    deleteObject(user.photo)
  }
  await User.findByIdAndDelete(userId)
  res.send('Delete User')
})

export default userRouter
