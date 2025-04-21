function memoized(cb){
 let cache = {}
 return function(...args){
   let key = JSON.stringify(...args);
   if(cache[key]){
    console.log('Value is getting from cache');
    return cache[key]
   } else {
    let result = cb(...args);
    console.log('value is getting from function');
    
    cache[key] = result;
    return result;
   }
 }
}

const add = (n) => n + 10;

const memo = memoized(add);

console.log(memo(10));
console.log(memo(10));


