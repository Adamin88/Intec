import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import productRoute from './routes/productRoute.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.get('/', (req, res) => {
    res.send('Welcome to the server')
})


app.use('/api/products', productRoute)

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 1988
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on Port ${PORT}`))