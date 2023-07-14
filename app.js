const express = require ("express");
const path = require ("path");
const dotenv = require("dotenv").config();

const app = express();


app.listen(process.env.PORT, () => 
console.log('Servidor abierto en el puerto 3000')
);

app.use(express.static("public"));

app.get("/", (req, res) => 
    res.sendFile(path.join(__dirname, "./views/home.html"))
);

app.get("/register", (req, res) => 
    res.sendFile(path.join(__dirname, "./views/register.html"))
);

app.get("/login", (req, res) => 
    res.sendFile(path.join(__dirname, "./views/login.html"))
);