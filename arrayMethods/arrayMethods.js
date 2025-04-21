const arr = ['apple','orange','banana','apple'];
const arr2 = ['mango','staberry'];


//Filter
console.log(arr.filter((data,index,array)=>(
    data === 'apple'
)));

//Find
console.log(arr.find((data,index,array)=>{
  return data === 'apple'
}));

//Includes
console.log(arr.includes('apple'));

//Concat
console.log(arr.concat(arr2));

//FindIndex
console.log(arr.findIndex((data,index,array)=>{
  return data === 'banana';
}));

//IndexOf
console.log(arr.indexOf('banana'));

//Slice
console.log(arr.slice(1,3));

//Splice
console.log(arr.splice(1,0,'new','fruits'));

//Reduce
console.log(arr.reduce((acc,curr,arr)=>{
   return acc + curr
},''));

//Some
console.log(arr.some((data,index,array)=>{
  return data === 'apple'
}));

//Every
console.log(arr.every((data,index,array)=>{
  return data === 'apple';
}));

//Sort
console.log(arr.sort((a,b)=> a-b));

// Join
console.log(arr.join('-'));

// Fill
// console.log(arr.fill(0));

// Entries
const iterator = arr.entries();

for (const [index, value] of iterator) {
  console.log(index, value);
}

// Tostring
console.log(arr.toString());















