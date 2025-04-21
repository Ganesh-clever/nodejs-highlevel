process.on('message',((data)=>{
    console.log(data.message);
    process.send({message:'This message from child...'})
}))