const express = require('express');
const Database = require("./models/Database");
const apiRouter = require("./routes/api");

Database.getInstance().then((db) => {
  const app = express();

  app.set('json spaces', 2);

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.use("/api", apiRouter);

  app.listen(3000);
}).catch((err) => {
  console.log("Database connection failed");
});