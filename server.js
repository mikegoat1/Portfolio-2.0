const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  logger = require("morgan"),
  apiRoutes = require("./routes"),
  PORT = process.env.PORT || 3001;
require("dotenv").config();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  
  app.use(apiRoutes);
  
  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/podCastDB", { useNewUrlParser: true });
  
  app.listen(PORT, () => console.log(`The server has started on PORT: ${PORT}`));
  