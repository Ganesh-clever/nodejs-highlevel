const path = require("path");
const fs = require("fs");

const newBaseDir = path.join(__dirname, "public");
const inputFile = path.join(newBaseDir, "index.txt");
const copyFile = path.join(newBaseDir,'copy.txt');

// Sync file system

fs.mkdirSync(newBaseDir,{recursive:true});
fs.writeFileSync(inputFile,'Hello this is ganesh here','utf-8');
fs.readFileSync(inputFile,'utf-8');
fs.appendFileSync(inputFile,'/n/n This is the content from append','utf-8');
fs.chmodSync(inputFile,0o777);
fs.accessSync(inputFile,fs.constants.F_OK);
fs.copyFileSync(inputFile,copyFile);
// fs.unlinkSync(inputFile);
// fs.rmdirSync(inputFile);


