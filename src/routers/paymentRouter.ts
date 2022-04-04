import express from 'express'
import { Payment } from '../database/models'
import { authorize } from '../middleware'

const paymentRouter = express.Router()
paymentRouter.use(authorize)

paymentRouter.get('/', async (req, res) => {
  const { clientId } = req.params
  const payments = await Payment.find({ client_id: clientId })
  res.json(payments)
})

paymentRouter.post('/', async (req, res) => {
  const payment = await new Payment(req.body)
  payment.save()
  res.send('Create Payments')
})

paymentRouter.get('/:paymentId', async (req, res) => {
  const { paymentId } = req.params
  const payment = await Payment.findById(paymentId)
  res.json(payment)
})

paymentRouter.put('/:paymentId', async (req, res) => {
  const { paymentId } = req.params
  await Payment.updateOne({ _id: paymentId }, req.body)
  res.send('Put Payment')
})

paymentRouter.delete('/:paymentId', async (req, res) => {
  const { paymentId } = req.params
  await Payment.deleteOne({ _id: paymentId })
  res.send('Delete Payment')
})

export default paymentRouter
