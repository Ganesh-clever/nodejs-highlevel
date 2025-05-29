// function debouncing(cb, duration) {
//   let timer;
//   return (arg) => {
//     clearTimeout(timer);
//     timer = setTimeout(()=>{
//         cb(arg);
//     },duration);
//   };
// }

function throttle(callback, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      callback.apply(this, args);
    }
  };
}

const element = document.getElementsByClassName("input");
console.log(element);

element[0].addEventListener("input",throttle((val)=>{
    console.log(val.target.value,'ddddddddddddddddddddd');
},1000));

element.className ='test';
element[0].removeEventListener('fullscreenchange',(()=>{
    console.log('Event removed...');
    
}))
