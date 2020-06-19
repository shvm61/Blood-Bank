const express = require("express");
const morgan = require("morgan");

const userRouter = require("./routes/userRoutes");
const viewsRouter = require("./routes/viewRoutes");

const app = express();
app.use(express.json());
app.set("view engine", "pug");

app.set("views", `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/users", userRouter);
app.use("/", viewsRouter);

module.exports = app;
