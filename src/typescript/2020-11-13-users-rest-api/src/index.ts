import express from 'express'
import { getUsers } from './user-factory'

const app = express()
const port = 4321

app.get('/users', (req, res) => {
  res.json(getUsers())
})

app.listen(port, () => {
  console.log(`Listening on:
    http://localhost:${port}/users
  `);
})
