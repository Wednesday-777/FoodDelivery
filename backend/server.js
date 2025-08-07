import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/FoodRoute.js"



// app config
const app = express()
const port = 3008


// api endpoints
app.use("/api/food",foodRouter)

// middleware
app.use(express.json())
app.use(cors())

//DB connection
connectDB();

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://roysupriyajacloud:4036171103@cluster0.8gzqa.mongodb.net/?