//importar librerias
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
require("dotenv").config();
//usar metodos de las libreiras

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());
//db settup
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Base de datos conectada");
  });

//Rutas

app.use("/api/category", require("./routes/category"));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Servidor plsntas MERN esta ejecutando en el puerto ${port}`);
});
