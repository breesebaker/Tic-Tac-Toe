const cells = document.querySelectorAll(".cell");
const gameText = document.querySelector("#gameText");
const restartBtn = document.querySelectorAll("#restart");
const youWin = [
  [0, 1, 2], 
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["","","","","","","","",""];
let playerOne = "X";
let running = false;

initializeGame();

function initializeGame(){
  cells.forEach(cell => cell.addEventListener("click", cellClicked))
  restartBtn.addEventListener("click", restartGame)
  gameText.textContent = ` It's ${playerOne}'s turn!`;
  running = true;
}
function cellClicked(){
  const cellIndex = this.getAttribute("cellIndex");
  if(options[cellIndex]!="" || !running){
    return;
  }

  updateCell(this, cellIndex);
  changePlayer();
  checkWinner();
}
function updateCell(cell, index){
  options[index]=playerOne;
  cell.gameText = playerOne;
  
}
function changePlayer(){
  playerOne = (playerOne == "X") ? "O" : "X";
  statusText.gameText = `It's ${playerOne}'s turn!`
  
}
function checkWinner(){
  let gameWin = false;
  for(let i=0;i<youWin.length; i++){
    const condition = youWin[i];
    
  }
  
}
function restartGame(){
  
}

