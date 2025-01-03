const express = require("express");
const routes = require("./routes");
// import sequelize connection
const sequelize = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json()); //to parse JSON bodies
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize
  .sync({ force: false }) // Set to true only during development to drop and recreate tables
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
