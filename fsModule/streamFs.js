const path = require("path");
const fs = require("fs");
const { Transform } = require("stream");

const newBaseDir = path.join(__dirname, "public");
const inputFile = path.join(newBaseDir, "index.txt");
const copyFile = path.join(newBaseDir,'copy.txt');

// Stream file system

const readStream = fs.createReadStream(inputFile,{encoding:'utf-8'});

readStream.on('data',((chunk)=>{
    console.log(chunk);
}))

readStream.on('end',(()=>{
    console.log('Read stream ended');
}))

const writeStream = fs.createWriteStream(copyFile,{encoding:'utf-8'});

const transform = new Transform({
    transform(chunk,encoding,Callback){
        this.push(chunk.toString().toUpperCase());
        Callback();
    }
})

readStream.pipe(transform).pipe(writeStream);