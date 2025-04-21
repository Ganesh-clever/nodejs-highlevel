const path = require("path");
const fs = require("fs");

const newBaseDir = path.join(__dirname, "public");
const inputFile = path.join(newBaseDir, "index.txt");
const copyFile = path.join(newBaseDir, "copy.txt");

//Callback file system
fs.lstat(newBaseDir, (err, data) => {
  if (err) {
    fs.mkdir(newBaseDir, { recursive: true }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Dirctory created successfully...");
      }
    });
  }
});

fs.writeFile(
  inputFile,
  "Hello this is ganesh here...",
  "utf-8",
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File created successfully....");
    }
  }
);

fs.readFile(inputFile, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.appendFile(
  inputFile,
  "/n/n Hello this is append content",
  "utf-8",
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Appended successfully");
    }
  }
);

// fs.unlink(inputFile,(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

fs.chmod(copyFile, 0o777, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Access provided successfully...");
  }
});

fs.access(copyFile, fs.constants.F_OK, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Its got all access...");
    fs.copyFile(inputFile, copyFile, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("content copied successfully...");
      }
    });
  }
});

// fs.truncate(inputFile,(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

fs.rmdir(newBaseDir, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Directory removed successfully...");
  }
});
