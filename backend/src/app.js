import express from 'express'
import cors from 'cors'
const app = express()

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

import userRouter from './routes/user.routes.js'
import reservation from './routes/reservation.routes.js'
import adminRoutes from './routes/admin.routes.js'
app.use('/api/v1/', userRouter)
app.use('/api/v1/reservation', reservation)
app.use('/api/v1/admin', adminRoutes)

export default app
