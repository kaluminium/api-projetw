const express = require('express');
const Database = require("./models/database");
const apiRouter = require("./routes/api");

const app = express();

app.set('json spaces', 2);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api", apiRouter);

app.listen(3000);

Database.getInstance().then((db) => {
  console.log("Database connected");
}).catch((err) => {
  console.log("Database connection failed");
});