/**
 * References:
 * https://www.section.io/engineering-education/nodejs-mongoosejs-mongodb/
 */

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const userRouter = require("../routers/userRouter");
const destinationRouter = require("../routers/destinationRouter");
const transportationRouter = require("../routers/transportationRouter");
const blogRouter = require("../routers/blogRouter");
const accommodationRouter = require("../routers/accommodationRouter");
const activityRouter = require("../routers/activityRouter");
const itineraryRouter = require("../routers/itineraryRouter");
const specificItineraryRouter = require("../routers/specificItineraryRouter");
const dayItineraryRouter = require("../routers/dayItineraryRouter");
const planTripRouter = require("../routers/planTripRouter");
const bucketListRouter = require("../routers/bucketListRouter");
const thingsToCarryRouter = require("../routers/thingsToCarryRouter");

/**
 * Using dotenv package, it reads the .env file provided which contains all the secrets and tokens for
 * mongo and jwt.
 */
// dotenv.config({ path: "../.env" });
dotenv.config({ path: path.resolve(__dirname, "../.env") });
/**
 * Creating a new express application.
 */
const app = express();
const PORT = process.env.PORT || 8000;

/**
 * Make the server application listen on the port declared above.
 */
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

/**
 * The app will use json for data parsing, cookie parser for cookies, cors for cross origin requests
 * because server and client will be runnig on different domains and requests are made from different domain.
 */
// app.use(express.json());
app.use(express.json({ limit: "50mb" })); 
app.use(cookieParser());

//cors issues middleware
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://travel-bae.herokuapp.com/",
      "https://api.openweathermap.org/data/2.5/forecast",
      "https://api.openweathermap.org",
    ],
    credentials: true,
  })
);

/**
 * Using mongoose package, the application will connect to the mongoDB.
 */
mongoose.connect(
  process.env.MDB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  /**
   * If there is an error sending the response, the error is being logged into the console.
   */
  (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
  }
);

/**
 * The below app.use() function is used to mount the specified router function at the path
 * which is being specified.
 */
app.use("/ui", userRouter);
app.use("/destination", destinationRouter);
app.use("/user", userRouter);
app.use("/tp", transportationRouter);
app.use("/bg", blogRouter);
app.use("/acc", accommodationRouter);
app.use("/act", activityRouter);
app.use("/it", itineraryRouter);
app.use("/sit", specificItineraryRouter);
app.use("/dit", dayItineraryRouter);
app.use("/pt", planTripRouter);
app.use("/bl", bucketListRouter);
app.use("/tc", thingsToCarryRouter);
