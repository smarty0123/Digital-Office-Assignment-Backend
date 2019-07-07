const http = require("http");
const createError = require("http-errors");
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const restaurantsRouter = require("./routes/restaurants");
const memoryRecorderRouter = require("./routes/memoryRecorder");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/restaurants", restaurantsRouter);
app.use("/api/memoryrecorder", memoryRecorderRouter);

app.use((req, res, next) => {
  return next(createError(404, "not exist!"));
});

const port = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(port);
