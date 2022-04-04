import express from 'express'
import { Job } from '../database/models'
import { authorize } from '../middleware'

const jobRouter = express.Router()
jobRouter.use(authorize)

jobRouter.get('/', async (req, res) => {
  const jobs = await Job.find({})
  res.json(jobs)
})

jobRouter.post('/', async (req, res) => {
  const job = await new Job(req.body)
  job.save()
  res.send('Create Job')
})

jobRouter.get('/:jobId', async (req, res) => {
  const jobId = req.params.jobId
  const job = await Job.findById(jobId)
  res.json(job)
})

jobRouter.put('/:jobId', async (req, res) => {
  const jobId = req.params.jobId
  await Job.updateOne({ _id: jobId }, req.body)
  res.send('Put Job')
})

jobRouter.delete('/:jobId', async (req, res) => {
  const jobId = req.params.jobId
  await Job.deleteOne({ _id: jobId })
  res.send('Delete Job')
})

export default jobRouter
