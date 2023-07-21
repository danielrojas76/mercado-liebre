const express = require ("express");
const path = require ("path");
const dotenv = require("dotenv").config();

const mainRouter = require('./routes/mainRouter');
const userRouter = require('./routes/userRouter');

const app = express();

app.listen(process.env.PORT, () => 
console.log('Servidor abierto en el puerto 3000')
);

app.use(express.static("public"));

app.use("/", mainRouter);

app.use("/user", userRouter);