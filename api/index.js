const express = require('express');
const app = express()
const dotenv = require('dotenv');
const mongoose = require("mongoose")
const cors = require('cors');
dotenv.config()

const userRouter = require("./routes/UserRoute")

app.use(cors())
app.get('/api/test', (req, res) => {
 res.json('hello world' + Date.now())
})

// Connect server to database
mongoose.connect(process.env.MONGO_URI)
 .then(() => {
  console.log("Database is connected successfully");
 })
 .catch((err) => {
  console.log(err);
 })

app.use(express.json())

app.use("/api", userRouter)

if (process.env.API_PORT) {
 app.listen(process.env.API_PORT)
}

module.exports = app