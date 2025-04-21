const {Worker} = require('worker_threads');
const path = require('path')

const childPath = path.join(__dirname,'workerThreads','child.js');

const worker = new Worker(childPath);

worker.postMessage({message:'Hi this message from parent'})
worker.on('message',(data)=>{
   console.log(data.message);
});

worker.on('exit',()=>{
    console.log('Worker node exit');
});