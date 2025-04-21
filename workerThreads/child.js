const {parentPort} = require('worker_threads')

parentPort.on('message',(data)=>{
    console.log(data.message); 
});

parentPort.postMessage({message:'Hi this message from child'});