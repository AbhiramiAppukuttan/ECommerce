require('dotenv').config()
const cors = require('cors')
const express = require('express');
const router = require('./routes');
const connectDb = require('./db/connectDb');
const errorHandler = require('./middlewares/errorHandler');

const app =  express();

connectDb()

app.use(cors({
    origin: 'https://e-commerce-ecru-sigma-84.vercel.app',
    credentials: true,
    optionsSuccessStatus:200,
}));

app.use(express.json())

app.use(router)
app.use(errorHandler)

app.listen(process.env.PORT || 3000,()=>{
  console.log("Server running");
  
})

