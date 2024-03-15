import express from 'express'
import { newUser } from './getRandomUser.js'
const app = express()

const port = process.env.PORT ?? 3000

app.get('/', async (req, res) => {
  const user = await newUser()
  res.send(user)
  // res.sendFile(process.cwd() + '/client/index.html')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
