import express from 'express'
import { Purchase } from '../database/models'
import { authorize } from '../middleware'

const purchaseRouter = express.Router()
purchaseRouter.use(authorize)

purchaseRouter.get('/', async (req, res) => {
  const { clientId } = req.params
  const purchases = await Purchase.find({ client_id: clientId })
  res.json(purchases)
})

purchaseRouter.post('/', async (req, res) => {
  const purchase = await new Purchase({})
  purchase.save()
  res.send('Create Purchases')
})

purchaseRouter.get('/:purchaseId', async (req, res) => {
  const { purchaseId } = req.params
  const purchase = await Purchase.findById(purchaseId)
  res.json(purchase)
})

purchaseRouter.put('/:purchaseId', async (req, res) => {
  const { purchaseId } = req.params
  await Purchase.updateOne({ _id: purchaseId }, req.body)
  res.send('Put Purchase')
})

purchaseRouter.delete('/:purchaseId', async (req, res) => {
  const { purchaseId } = req.params
  await Purchase.deleteOne({ _id: purchaseId })
  res.send('Delete Purchase')
})

export default purchaseRouter
