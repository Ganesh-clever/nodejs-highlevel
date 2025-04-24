const bcrypt = require("bcryptjs");

// bcrypt.hash('123456',10).then((d)=>{
//     console.log(d);
// });

const user = [
  {
    username: "ganesh",
    password: "$2b$10$3PSj9qiQDus.OATGp2/ZMuKgw5uxjrMSa.qB4g4Ev0Xp9ISorCChm",
  },
];

module.exports = user
