const path = require('path');

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.resolve(__filename));
console.log(path.isAbsolute(__filename));
console.log(path.format({
    root:'/',
    dir:'src',
    name:'index',
    ext:'.txt'
}));
console.log(path.join(__dirname,'public','index.html'));








