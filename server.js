const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const { ratelimit } = require("rate-limit-express");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require("dotenv").config();
const User = require('./user');

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

app.post('/api/v1/login',(async(req,res)=>{
  const {username,password} = req.body;
  const existUser = User.find((d)=> d.username === username);

  if(!existUser){
    res.status(404).send({message:'User not found'});
  } else {
    const validPassword = await bcrypt.compare(password,existUser.password);
    if(validPassword){
      const token = jwt.sign({username,password},process.env.JWT,{expiresIn:'7d'});
      res.status(200).send({
        username,
        password,
        token
      })
    }else{
      res.status(401).send({message:'Invalid password'})
    }
  }
}))

const getRouter = require("./router");
const { authMiddleware } = require("./middleware");
app.use("/api/v1",authMiddleware, getRouter);

//Leasten
app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server started to run with PORT: ${PORT}`);
  }
});
