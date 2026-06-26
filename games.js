const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");

const betInput = document.getElementById("bet");
const minesSelect = document.getElementById("mines");

const multiplierText = document.getElementById("multiplier");
const profitText = document.getElementById("profit");

const balanceText = document.getElementById("balanceValue");
const statusText = document.getElementById("status");
const openedText = document.getElementById("opened");

let balance = 1000;

let gameStarted = false;
let opened = 0;

let mineCount = 3;
let bet = 10;

let mines = [];

let currentMultiplier = 1;

balanceText.textContent = balance;

function randomMines(){

mines = [];

while(mines.length < mineCount){

let r = Math.floor(Math.random()*16);

if(!mines.includes(r)){

mines.push(r);

}

}

}

function startGame(){

bet = Number(betInput.value);

mineCount = Number(minesSelect.value);

if(bet <= 0){

alert("أدخل قيمة رهان صحيحة");

return;

}

if(bet > balance){

alert("رصيدك لا يكفي");

return;

}

balance -= bet;

balanceText.textContent = balance;

opened = 0;

currentMultiplier = 1;

multiplierText.textContent = "1.00x";

profitText.textContent = "0";

openedText.textContent = "0 / 16";

statusText.textContent = "اللعبة بدأت";

gameStarted = true;

randomMines();

cells.forEach(cell=>{

cell.innerHTML = "";

cell.className = "cell";

});

             }
cells.forEach((cell, index)=>{

cell.onclick = function(){

if(!gameStarted) return;

if(cell.classList.contains("open")) return;

if(mines.includes(index)){

cell.classList.add("mine");
cell.innerHTML = "💣";

statusText.textContent = "انفجرت! خسرت الجولة";

gameStarted = false;

revealMines();

return;

}

cell.classList.add("open");
cell.innerHTML = "⭐";

opened++;

currentMultiplier += 0.25;

let profit = Math.floor(bet * currentMultiplier);

multiplierText.textContent = currentMultiplier.toFixed(2) + "x";
profitText.textContent = profit;

openedText.textContent = opened + " / 16";

statusText.textContent = "مستمر...";

}

});

function revealMines(){

cells.forEach((cell, index)=>{

if(mines.includes(index)){

cell.classList.add("mine");
cell.innerHTML = "💣";

}

});

}

function cashOut(){

if(!gameStarted) return;

let profit = Math.floor(bet * currentMultiplier);

balance += profit;

balanceText.textContent = balance;

statusText.textContent = "تم السحب بنجاح ✔️";

gameStarted = false;

cells.forEach(cell=>cell.onclick = null);

               }
