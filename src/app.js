import express from 'express'
import cors from 'cors'
import cookieParser form 'cookie-parser'

const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({
    limit:'16kb'
}))

app.use(express.urlencoded({
    limit:'16kb',
    extended:true
}))

app.use(express.static('public'))


// app.use(cookieParser())
// app.use((req,res,next)=>{
//     res.header("Access-Control-Allow-Origin",process.env.CORS_ORIGIN)
//     res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
//     next()
// })



export {app}