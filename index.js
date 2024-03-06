let playerXMoves = [];
let playerOMoves = [];

let currentPlayer = "X";



function makeBoard(){
  // make 1 parent dive
  // make 9 children divs
  //  place the 9 children in parent div
  let board= document.getElementById('board');

// to track number of eash cell
  let num = 1;

// loop to create rows
  for(let r = 0; r < 3; r++){
    // create a div for rows in html
    let row = document.createElement('div');
    row.setAttribute('class', 'row');

  // loop to create cells with the row
    for(let c = 0; c < 3; c++){
      let value = num;
      let cell = document.createElement('div');
      cell.setAttribute('class', 'cell');
      cell.addEventListener("click", () => {
        console.log(`You clicked cell num ${value} `)
// Change cell's innerHTML to the current player value.
if(currentPlayer === "X") {
  playerXMoves.push(value)
  cell.innerHTML = currentPlayer;
} else {
  playerOMoves.push(value)
  cell.innerHTML = currentPlayer;
}
// push value of the cell up to the player that is currently playing's array. 

// then switch current player
console.log(currentPlayer)
//  IF STATEMENT             TRUE                 FALSE               this is called a Ternary Statement.
//currentPlayer === "X" ? currentPlayer = "O" : currentPlayer = "X";
if(currentPlayer === "X") {
  currentPlayer = "O"
} else {
  currentPlayer = "X"
}



 checkForWinner();
      })
      cell.innerText = num;
      row.append(cell);
      num++
    }
  // here to append the row in the boaed in html
    board.append(row); 
  }
}
makeBoard();


// Take the square clicked and push to the arrays that are tracking so we know who played. 
// Check for winner. 
let winningCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9], // NOTE: Horizontal winning combos
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9], // NOTE: Vertical winning combos
  [1, 5, 9],
  [3, 5, 7], // NOTE: Diagonal winning combos
];

function checkForWinner() {

  for(let i = 0; i < winningCombos.length; i++) {
    for(let x = 0 ; x < winningCombos[i].length; x++) {

      if(playerXMoves.includes(winningCombos[i][x]) && playerXMoves.includes(winningCombos[i][x+1]) && playerXMoves.includes(winningCombos[i][x+2])) {
        console.log("x wins") // Do your logic for if x wins here, this only runs if x wins
      } else if(playerOMoves.includes(winningCombos[i][x]) && playerOMoves.includes(winningCombos[i][x+1]) && playerOMoves.includes(winningCombos[i][x+2])) {
        console.log("o wins") // logic for O win.
      } else if(playerOMoves.length + playerXMoves.length === 9) {
        console.log("tie") // logic for tie
      }

    }
  }


}