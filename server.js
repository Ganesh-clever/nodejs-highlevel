const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const { ratelimit } = require("rate-limit-express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

//Middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(morgan("dev"));
app.use(ratelimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.use(async (req, res, next) => {
  const versionMatch = req.path.match(/^\/api\/v(\d+)\b/);
  console.log(versionMatch);

  if (versionMatch) {
    req.apiVersion = versionMatch[1];
    return next();
  }

  res.status(400).json({
    message: "API version not specified in URL. Use format /api/v{version}/...",
  });
});

const getRouter = require("./router");
app.use("/api/v1", getRouter);

//Leasten
app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server started to run with PORT: ${PORT}`);
  }
});
