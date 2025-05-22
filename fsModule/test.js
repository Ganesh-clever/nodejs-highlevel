const fs = require("fs");
const path = require("path");
const { Transform } = require("stream");

const newDir = path.join(__dirname, "public");
const filePath = path.join(newDir, "index.html");
const copyPath = path.join(newDir, "copy.html");

// fs.lstat(newDir, (err) => {
//   if (err) {
//     fs.mkdir(newDir, { recursive: true }, (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("Directory created successfully...");
//       }
//     });
//   } else {
//     console.log("Dictory is already exist...");
//   }
// });

// fs.writeFile(filePath, "Hi this is ganesh here!", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// fs.copyFile(filePath, copyPath, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File copied successfully...");
//   }
// });

// fs.appendFile(filePath, "This is the new append data", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// fs.unlink(copyPath, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File removed successfully...");
//   }
// });

// fs.chmod(filePath, 0o775, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Permission assigned successfully...");
//   }
// });

// fs.access(filePath, fs.constants.COPYFILE_FICLONE_FORCE, (err, data) => {
//   if (err) {
//     console.log(err);
//   }
// });

const readStream = fs.createReadStream(filePath,{encoding:'utf-8'});
let result =''
readStream.on('data',((chunk)=>{
    result += chunk;
}))

readStream.on('end',()=>{
    console.log(result);
})

const writeStream = fs.createWriteStream(copyPath,{encoding:"utf-8"});

const transform = new Transform({
    transform(chunk,encoding,cb){
        this.push(chunk.toString().toUpperCase());
        cb();
    }
});

readStream.pipe(transform).pipe(writeStream);


