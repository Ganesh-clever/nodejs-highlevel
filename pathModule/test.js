const path = require('path');

console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.dirname(__filename));
console.log(path.join(__dirname,'public','index.html'));
console.log(path.resolve(__dirname,'public','index.html'));
console.log(path.parse(__dirname,'public','index.html'));
console.log(path.format({
    root:'/',
    dir:'pathModule',
    name:'index',
    ext:'.html',
}));
console.log(path.isAbsolute(__filename));
console.log(path.normalize(__filename));





