import express, { json } from 'express'
import { createUserRouter } from './routes/users.js'

export const createApp = ({ userModel }) => {
  const app = express()

  app.disable('x-powered-by')

  app.use(json())

  app.use('/users', createUserRouter({ userModel }))

  app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found. Check the url called' })
  })

  const PORT = process.env.PORT ?? 1234

  app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`)
  })
}
