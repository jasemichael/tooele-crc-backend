import express from 'express'
import mongoose from 'mongoose'
import helment from 'helmet'
import { authRouter, clientRouter, jobRouter, noteRouter, paymentRouter, purchaseRouter, userRouter } from './routers'

export const server = express()
const port = 8000

// connect to DB
mongoose.connect(process.env.DATABASE_ENDPOINT as string).catch(err => console.log(err))

// Middleware
server.use(helment())
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Routers
server.use('/auth', authRouter)
server.use('/clients', clientRouter)
server.use('/users', userRouter)
server.use('/jobs', jobRouter)
server.use('/clients/:clientId/payments', paymentRouter)
server.use('/clients/:clientId/purchases', purchaseRouter)
server.use('/clients/:clientId/notes', noteRouter)

server.listen(port, () => {
  console.log(`tooele-crc app listening on port ${port}`)
})
