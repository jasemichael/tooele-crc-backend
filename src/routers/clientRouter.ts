import express from 'express';
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid';
import { Client } from '../database/models';
import { authorize } from '../middleware';
import { deleteObject, putObject } from '../utils';

const upload = multer({ storage: multer.memoryStorage() })

const clientRouter = express.Router()
clientRouter.use(authorize)

clientRouter.get('/', async (req, res) => {
  const clients = await Client.find({})
  res.json(clients)
})

clientRouter.post('/', upload.single('photo'), (req, res) => {
  req.body.balance = 0
  const file = req.file
  if (file) {
    const uuid = uuidv4()
    putObject(file, uuid)
    req.body.photo = uuid
  }
  const client = new Client(req.body)
  client.save()
  res.send('Create Client')
})

clientRouter.get('/:clientId', async (req, res) => {
  const clientId = req.params.clientId
  const client = await Client.findById(clientId)
  res.json(client)
})

clientRouter.put('/:clientId', upload.single('photo'), async (req, res) => {
  const clientId = req.params.clientId
  const file = req.file
  const client = await Client.findById(clientId)
  if (file) {
    if (client.photo) {
      putObject(file, client.photo)
    } else {
      const uuid = uuidv4()
      putObject(file, uuid)
      req.body.photo = uuid
    }
  }
  await Client.updateOne({ _id: clientId }, req.body)
  res.send('Put Client')
})

clientRouter.delete('/:clientId', async (req, res) => {
  const clientId = req.params.clientId
  const client = await Client.findById(clientId)
  if (client.photo) {
    deleteObject(client.photo)
  }
  await Client.findByIdAndDelete(clientId)
  res.send('Delete Client')
})

export default clientRouter
