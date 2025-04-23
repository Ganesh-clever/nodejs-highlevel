const router = require('express').Router();

router.get('/get',(async(req,res)=>{
  res.status(200).send({Message:"This is from get method"})
}))

module.exports = router;