const arr = ["apple", "orange", "grape", "mongo", "apple"];
const num = [1, 3,[121,232,545,454,[454,23432,565,676,78,[343433,43454,676,78,898,89],34,34,46,67,9,89],121,343,45,45,45,], 5, 7, 98, 9, 9, 0, 7, 4];
// Filter polyfills

function filterHandler(data, i, array) {
  return data === "apple";
}

function myFilterHandler(cb, context) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb.call(context, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
}

Array.prototype.myFilter = myFilterHandler;

console.log(arr.myFilter(filterHandler));

// Map polyfills

function mapHandler(data, index, array) {
  return data * 2;
}

function myMapHandler(cb, context) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(cb.call(context, this[i], i, this));
  }

  return result;
}

Array.prototype.myMap = myMapHandler;

console.log(num.myMap(mapHandler));

// Flatten array

function myFlatHandler(depth = 1) {
  let result = [];

  function recursion(arr, depth) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth > 0) {
        recursion(arr[i], depth - 1);
      } else {
        result.push(arr[i]);
      }
    }
  }
  recursion(this,depth);
  return result;
}

Array.prototype.myFlat = myFlatHandler;

console.log(num.myFlat(4));

