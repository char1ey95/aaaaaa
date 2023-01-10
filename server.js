require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors({
    origin:true,
    credentials:true,
}))

app.listen(PORT, () => {
    console.log(`server start ${PORT}`)
})