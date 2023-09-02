const express = require('express')
const app = express()
const logger = require("morgan")
const mainRoutes = require("./routes/main")
const faceRoutes = require("./routes/face")
const bodyRoutes = require("./routes/body")
const hairRoutes = require("./routes/hair")

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Static Folder
app.use(express.static("public"))

// Body Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Logging
app.use(logger("dev"))

// Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes)
app.use("/body", bodyRoutes)
app.use("/facials", faceRoutes)
app.use("/hair", hairRoutes)

//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
