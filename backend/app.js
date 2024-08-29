//installed dotenv, express, mongoose, cors and nodemon
//nodemon allows us to make changes and save and everything updates in real time
const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const { readdirSync } = require("fs");
const { route } = require("./routes/transactions");
//using the app to call the methods coming from express
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());

//routes
//read whatever files we have in routes folder
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("Listening on port:", PORT);
  });
};

server();
