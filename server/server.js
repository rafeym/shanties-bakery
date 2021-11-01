const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')

const app = express()

require('dotenv').config({
    path: './config/index.env',
})

connectDB()
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(express.json({ limit: '50mb', extended: true }))
app.use(morgan('dev'))
app.use(cors())

// Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/products', require('./routes/products'))
app.use('/api/orders', require('./routes/orders'))

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
