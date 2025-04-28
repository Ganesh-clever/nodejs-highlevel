function isParanthesis(val) {
  let stack = [];
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of val) {
    if (char === "{" || char === "(" || char === "[") {
      stack.push(char);
    } else if (char === "}" || char === ")" || char === "]") {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}


// console.log(isParanthesis('{([])}'));

//Each sentence first letter caps
function firstLetterCaps(str) {
  return str
    .split(" ")
    .map((d) => d.charAt(0).toUpperCase() + d.slice(1))
    .join(" ");
}

// console.log(firstLetterCaps('hello world this is ganesh here'));

// Tic-Tac-Toe

const board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

let isGameOver = false;
let currentPlayer = "X";

function printBoard() {
  console.clear();
  console.log("Tiktok board result");
  board.forEach((row) => {
    console.log(row.join("|"));
    console.log("-------------");
  });
}

function checkWin() {
  // Row check
  for (let row = 0; row < 3; row++) {
    if (
      board[row][0] === currentPlayer &&
      board[row][1] === currentPlayer &&
      board[row][2] === currentPlayer
    ) {
      return true;
    }
  }
  //Col check
  for (let col = 0; col < 3; col++) {
    if (
      board[0][col] === currentPlayer &&
      board[1][col] === currentPlayer &&
      board[2][col] === currentPlayer
    ) {
      return true;
    }
  }

  //Diagonals
  if (
    board[0][0] === currentPlayer &&
    board[1][1] === currentPlayer &&
    board[2][2] === currentPlayer
  ) {
    return true;
  }

  if (
    board[0][2] === currentPlayer &&
    board[1][1] === currentPlayer &&
    board[2][0] === currentPlayer
  ) {
    return true;
  }

  return false;
}

function isDraw() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === " ") {
        return false;
      }
    }
  }
  return true;
}

function makeMove(row, col) {
  if (row < 0 || row > 2 || col < 0 || col > 2) {
    console.log("Invalid move: Row and column must be between 0 and 2.");
  }
  if (board[row][col] === " " && !isGameOver) {
    board[row][col] = currentPlayer;
    printBoard();

    if (checkWin()) {
      console.log(`${currentPlayer} wins!`);
      gameOver = true;
    } else if (isDraw()) {
      console.log("It's a draw!");
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  } else {
    console.log("Invalid move. Try again.");
  }
}

// makeMove(0, 0); // X's turn
// makeMove(1, 1); // O's turn
// makeMove(0, 1); // X's turn
// makeMove(2, 1); // O's turn
// makeMove(0, 2); // X's turn (X wins)

let val = [1, 2, 3, 4, 5, 6, 7],
  k = 5;

function rotation(val, k) {
  let valLenght = val.length;
  let remain = valLenght - k;
  return [...val.slice(remain), ...val.slice(0, remain)];
}

// console.log(rotation(val,k));

// let arr = [2,5,3,3,5,67,2,5,8,2];

// ((arr)=>{
//    let result = [];
//    for(let i = 0; i < arr.length; i++){
//     if(!result.includes(arr[i])){
//       result.push(arr[i]);
//     }
//    }
//    console.log(result);
// })(arr)

let arr = [1, 2, 5, 3, 20, 8];

function findMissingNumbers(arr) {
  let maxVal = Math.max(...arr);
  let result = [];
  for (let i = 1; i <= maxVal; i++) {
    if (!arr.includes(i)) {
      result.push(i);
    }
  }
  return result;
}

// console.log(findMissingNumbers(arr));

function linearSearch(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    return arr;
  } while (swapped);
}

// console.log(linearSearch(arr));
