const promise1 = () => {
    return new Promise((resolve, reject) => {
      resolve("Promise1 resolve");
    });
  };
  
  
  (async()=>{
    try{
     const value = await promise1()
     console.log(value);
    }catch(err){
      console.log(err);
    }
  })()
  