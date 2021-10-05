const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')

const app = express()

require('dotenv').config({
  path: './config/index.env',
})

connectDB()
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: false }))
app.use(cors())

// Routes
app.get('/', (req, res) => {
  res.send('Test route for Shanties Bakery')
})

app.use((req, res) => {
  res.status(404).json({
    msg: 'Page not found',
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
