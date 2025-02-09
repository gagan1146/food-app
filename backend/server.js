import express from "express"
import cors from "cors"
import { ConnectDB } from "./config/db.js"




const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

ConnectDB();

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http:localhost:${port}`)
})