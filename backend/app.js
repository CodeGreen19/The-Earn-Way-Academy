const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const errorMiddleware = require("./middleweres/errorMiddleware.js");
// require env variables
require("dotenv").config({ path: ".env" });

// // cross origin errors
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
// Using Middlewares

app.use(bodyParser.json());
app.use(cookieParser());
// // import router
const userRoute = require("./routes/userRoute.js");
const quizRoute = require("./routes/quizRoute.js");
const paymentRoute = require("./routes/paymentRoute.js");
const courseRoute = require("./routes/courseRoute.js");
// router use
app.use("/api/v1", userRoute);
app.use("/api/v1", quizRoute);
app.use("/api/v1", paymentRoute);
app.use("/api/v1", courseRoute);

// error middleware
app.use(errorMiddleware);

module.exports = app;
