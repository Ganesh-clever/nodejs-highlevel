const path = require("path");
const fs = require("fs/promises");

const newBaseDir = path.join(__dirname, "public");
const inputFile = path.join(newBaseDir, "index.txt");
const copyFile = path.join(newBaseDir,'copy.txt');

// Promise file system

(async()=>{
   try{
    await fs.mkdir(newBaseDir,{recursive:true});
    await fs.writeFile(inputFile,'Hello this is ganesh here','utf-8');
    await fs.readFile(inputFile,'utf-8');
    await fs.appendFile(inputFile,'/n/n this is the append content data','utf-8');
    await fs.chmod(inputFile,0o777);
    await fs.access(inputFile,fs.constants.F_OK);
    // await fs.unlink(inputFile);
    await fs.copyFile(inputFile,copyFile);
    await fs.lstat(inputFile);
    // await fs.rmdir(newBaseDir);
   } catch(err){
    console.log(err);
   }
})()

