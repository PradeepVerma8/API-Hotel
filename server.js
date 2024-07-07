const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());



app.get("/about", (req, res) => {
  res.send("Hellow world");
});





const personRouter = require('./routers/personRouter')

app.use("/person", personRouter);

app.listen(3000, () => {
  console.log("server started");
});
