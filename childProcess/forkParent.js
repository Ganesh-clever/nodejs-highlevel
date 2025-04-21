const {fork} = require('child_process');
const path = require('path');

const forkPath = path.join(__dirname,'childProcess','child.js');

const worker = fork(forkPath);

worker.send({message:'Hi this message from parent.'})

worker.on('message',(data)=>{
    console.log((data.message));
})

worker.on('close',(()=>{
    console.log('Process closed');
}))