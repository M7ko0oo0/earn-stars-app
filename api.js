const app = document.getElementById("app");

function showPage(page){

if(page === "home"){
app.innerHTML = `
<div class="page">
<h2>🏠 Home</h2>
<p>Welcome to Earn Stars</p>

<p>Welcome to Earn Stars</p>

<div class="stars-card">
⭐ Stars: <span id="stars">${getStars()}</span>
</div>

<br>

<button onclick="addStars(10)">
+10 Stars
</button>

</div>
`;
}

if(page === "games"){
app.innerHTML = `
<div class="page">
<h2>🎮 Games</h2>
<p>Play games and earn stars.</p>
</div>
`;
}

if(page === "tasks"){
app.innerHTML = `
<div class="page">
<h2>🎯 Tasks</h2>
<p>Complete tasks to earn stars.</p>
</div>
`;
}

if(page === "profile"){
app.innerHTML = `
<div class="page">
<h2>👤 Profile</h2>
<p id="username">Loading...</p>
</div>
`;

loadTelegramUser();
}

}

const buttons =
document.querySelectorAll(".bottom-nav button");

buttons[0].onclick = () => showPage("home");
buttons[1].onclick = () => showPage("games");
buttons[2].onclick = () => showPage("tasks");
buttons[3].onclick = () => showPage("profile");

showPage("home");

function loadTelegramUser(){

if(window.Telegram &&
Telegram.WebApp){

Telegram.WebApp.ready();

const user =
Telegram.WebApp.initDataUnsafe?.user;

if(user){

document.getElementById(
"username"
).innerHTML =
user.first_name;

}

}

}

function getStars(){
return Number(
localStorage.getItem("stars")
) || 0;
}

function addStars(amount){

const current =
getStars();

const total =
current + amount;

localStorage.setItem(
"stars",
total
);

showPage("home");

}
