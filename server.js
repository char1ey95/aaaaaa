const express = require('express')
const config = require('./config')
const HttpException = config.exception.HttpException
const cors = require('cors')

const app = express()
const router = require('./routes')

app.use(express.json())
app.use(cors({
    origin:true,
    credentials:true,
}))

app.use('/api', router)
app.use((error, req, res, next) => {
    console.log(error)
    if ( error instanceof HttpException) {
        res.json({
            isError: true,
            message:error.message,
            status: error.status,
        })
    } else if( error instanceof Error) {
        res.json({
            isError: true,
            message:error.message,
        })
    }


})

app.listen(config.port, () => {
    console.log(`server start ${config.port}`)
})