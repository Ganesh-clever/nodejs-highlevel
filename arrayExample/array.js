require("../polyfills/polyfills");

const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let currentPlayer = "X";
let isGameOver = false;

function print() {
  board.forEach((element) => {
    console.log(element.join(" - "));
    console.log("----------------");
  });
}

function isWin() {
  for (let row = 0; row < 3; row++) {
    if (
      board[row][0] === currentPlayer &&
      board[row][1] === currentPlayer &&
      board[row][2] === currentPlayer
    ) {
      return true;
    }
  }

  for (let col = 0; col < 3; col++) {
    if (
      board[0][col] === currentPlayer &&
      board[1][col] === currentPlayer &&
      board[2][col] === currentPlayer
    ) {
      return true;
    }
  }

  for (let row = 0; row < 3; row++) {
    if (
      board[0][0] === currentPlayer &&
      board[1][1] === currentPlayer &&
      board[2][2] === currentPlayer
    ) {
      return true;
    }
  }

  for (let row = 0; row < 3; row++) {
    if (
      board[0][2] === currentPlayer &&
      board[1][1] === currentPlayer &&
      board[2][0] === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function isDraw() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === "") {
        return false;
      }
    }
  }

  return true;
}

function makeMove(row, col) {
  if (board[row][col] === "" && !isGameOver) {
    board[row][col] = currentPlayer;
    print();
    if (isWin()) {
      console.log(`${currentPlayer} is win!`);
      isGameOver = true;
    } else if (isDraw()) {
      console.log("Game Draw");
      isGameOver = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

// makeMove(0, 0); // X's turn
// makeMove(1, 1); // O's turn
// makeMove(0, 1); // X's turn
// makeMove(2, 1); // O's turn
// makeMove(0, 2); // X's turn (X wins)

const minMax = [3, 1, 5, 2, 4];

function minMaxVal(arr) {
  if (arr.length === 0) return null;

  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  return { min, max };
}

// console.log(minMaxVal(minMax));
const sorted = [1, 2, 6, 23, 454, 676, 88998, 99, 89, 7876454, 4, 5];
function isSorted(arr) {
  if (arr.length === 0) return null;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] > arr[i]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

// console.log(isSorted(sorted));

const dublicate = [1, 1, 2, 2, 5, 2, 5, 23, 34, 2];

function dublicateVal(arr) {
  let result = [];
  function isAlreadyExist(val) {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === val) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!isAlreadyExist(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(dublicateVal(dublicate));

const moveZerosLast = [0, 1, 0, 3, 12];

function zerosLast(arr) {
  let zeroIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[zeroIndex] = arr[i];
      zeroIndex++;
    }
  }

  for (let i = zeroIndex; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

// console.log(zerosLast(moveZerosLast));

const missingNumber = [1, 2, 4, 2, 4, 2, 5, 7, 5, 10];

function missingN(arr) {
  let max = arr[0];
  let missingNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  function find(val) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === val) {
        return true;
      }
    }
    return false;
  }

  for (let i = 1; i <= max; i++) {
    if (!find(i)) {
      missingNumbers.push(i);
    }
  }
  return missingNumbers;
}

// console.log(missingN(missingNumber));

const subsequence = [100, 1, 2, 3, 4, 200, 1, 3, 2];

function subsequenceVals(arr) {
  if (arr.length === 0) return null;

  let min = Math.min(...arr);

  let subsequence = [];

  const set = new Set(arr);

  while (set.has(min)) {
    subsequence.push(min);
    min += 1;
  }

  return subsequence;
}

// console.log(subsequenceVals(subsequence));

function unionAndIntersection(arr1, arr2) {
  const union = [...new Set([...arr1, ...arr2])];
  const intersection = arr1.filter((value) => arr2.includes(value));
  return { union, intersection };
}

// Example
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
// const result = unionAndIntersection(arr1, arr2);

// console.log("Union:", result.union);           // [1, 2, 3, 4]
// console.log("Intersection:", result.intersection); // [2, 3]

function findPairs(arr, target) {
  const seen = new Set();
  const pairs = [];

  for (let num of arr) {
    let complement = target - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }
  return pairs;
}

// Example usage
const arr = [1, 2, 3, 4, 5];
const target = 6;
// console.log(findPairs(arr, target)); // Output: [[1,5], [2,4]]

const jobs = [
  { id: 1, duration: 1000 },
  { id: 2, duration: 2000 },
  { id: 3, duration: 1500 },
  { id: 4, duration: 3000 },
  { id: 5, duration: 500 },
  { id: 6, duration: 1000 },
  { id: 7, duration: 2000 },
  { id: 8, duration: 1500 },
  { id: 9, duration: 800 },
  { id: 10, duration: 1200 },
];

let running = 0;
let maxRunTask = 3;

function jobExecutor(job) {
  return new Promise((resolve) => {
    console.log(`${job.id} - Job executing...`);
    setTimeout(() => {
      console.log(`${job.id} - job executed successfully...`);
      resolve();
    }, job.duration);
  });
}

function jobProcess() {
  while (jobs.length > 0 && running < maxRunTask) {
    let currentJob = jobs.shift();
    running++;
    jobExecutor(currentJob).then(() => {
      running--;
      jobProcess();
    });
  }
}

// jobProcess();

const order = { apple: 5, banana: 5, orange: 5 };
const warehouses = [
  { name: "wh1", inventory: { apple: 2 } },
  { name: "wh2", inventory: { banana: 5, orange: 5, apple: 3 } },
];

function orderManagement(order, warehouses) {
  //   const map = warehouses.reduce((acc, curr) => {
  //     if (!acc[curr.name]) {
  //       acc[curr.name] = {};
  //     }
  //     Object.assign(acc[curr.name], curr.inventory);
  //     return acc;
  //   }, {});

  //   console.log(map);
  let map = {};

  for (let i = 0; i < warehouses.length; i++) {
    let name = warehouses[i].name;
    let inventory = warehouses[i].inventory;
    apple += inventory.apple;

    if (!map[name]) {
      map[name] = {};
    }

    Object.assign(map[name], inventory);
  }
  console.log(apple);
  return map;
}

// console.log(orderManagement(order, warehouses));

const arrRightRev = [1, 2, 3, 4, 5, 6, 7];
const k = 5;

function rightRev(arr, k) {
  if (k > arr.length) {
    console.log("K length is bigger than array length");
    return null;
  }

  const length = arr.length;
  const n = k % length;

  let value1 = arr.mySlice(0, length - n);
  let value2 = arr.mySlice(-n);

  return [...value2, ...value1];
}

// console.log(rightRev(arrRightRev,k));

function pascalTriangle(num) {
  let triangle = [];

  for (let row = 0; row < num; row++) {
    triangle[row] = [1]; //First assign one

    for (let col = 1; col < row; col++) {
      triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
    }

    if (row > 0) {
      triangle[row].push(1);
    }
  }

  return triangle;
}

console.log(pascalTriangle(7));
