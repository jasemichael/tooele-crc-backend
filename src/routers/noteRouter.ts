import express from 'express'
import { Note } from '../database/models'
import { authorize } from '../middleware'
const noteRouter = express.Router()
noteRouter.use(authorize)

noteRouter.get('/', async (req, res) => {
  const { clientId } = req.params
  const notes = await Note.find({ client_id: clientId })
  res.json(notes)
})

noteRouter.post('/', async (req, res) => {
  const note = await new Note(req.body)
  note.save()
  res.send('Create Notes')
})

noteRouter.get('/:noteId', async (req, res) => {
  const noteId = req.params.noteId
  const note = await Note.findById(noteId)
  res.json(note)
})

noteRouter.put('/:noteId', async (req, res) => {
  const noteId = req.params.noteId
  await Note.updateOne({ _id: noteId }, req.body)
  res.send('Put Note')
})

noteRouter.delete('/:noteId', async (req, res) => {
  const noteId = req.params.noteId
  await Note.deleteOne({ _id: noteId })
  res.send('Delete Note')
})

export default noteRouter
