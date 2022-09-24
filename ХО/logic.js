let players = ['x', 'o'];
let activePlayer = 0;
let board;
let step;


function startGame() {
  board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
  activePlayer = players[0];
  renderBoard(board);
};

function click(row, col) {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  };

  step = players[activePlayer];
  board[row][col] = step;
  renderBoard(board); 

  let winner = activePlayer;
  let down = 0;
  let up = 0;
  
  for(let i = 0; i < 3; i++) {
    let sumRow = 0;
    let sumCol = 0;
    for(let j = 0; j < 3; j++) {
      if (board[i][j] === step) sumRow++; 
      if (board[j][i] === step) sumCol++; 
      if (i == j && board[i][j] === step) { 
        down++;
      } 
      if (i + j === 3 - 1 && board[i][j] === step) { 
        up++;
      } 
    }
    if (sumRow === 3 || sumCol === 3 || down === 3 || up === 3) {
      showWinner(winner);
    }
  }
};
