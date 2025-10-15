// --- Game Data ---
let credits = 100;
let team = [];
let league = { wins: 0, losses: 0, draws: 0, credits: credits };

const players = [
  { name: "Erling Haaland", cost: 50, stats: { speed: 5, agility: 4, accuracy: 5, experience: 4, skill: 5 } },
  { name: "Bukayo Saka", cost: 40, stats: { speed: 4, agility: 5, accuracy: 4, experience: 3, skill: 4 } },
  { name: "Virgil van Dijk", cost: 45, stats: { speed: 3, agility: 3, accuracy: 4, experience: 5, skill: 5 } },
  { name: "Kevin De Bruyne", cost: 50, stats: { speed: 4, agility: 4, accuracy: 5, experience: 5, skill: 5 } },
  { name: "Mo Salah", cost: 45, stats: { speed: 5, agility: 4, accuracy: 5, experience: 4, skill: 4 } },
  { name: "Declan Rice", cost: 35, stats: { speed: 3, agility: 3, accuracy: 4, experience: 4, skill: 4 } },
  { name: "Son Heung-min", cost: 40, stats: { speed: 5, agility: 4, accuracy: 4, experience: 4, skill: 4 } },
  { name: "James Maddison", cost: 30, stats: { speed: 3, agility: 4, accuracy: 4, experience: 3, skill: 4 } },
  { name: "Phil Foden", cost: 35, stats: { speed: 4, agility: 4, accuracy: 4, experience: 3, skill: 4 } },
  { name: "Martin Ødegaard", cost: 40, stats: { speed: 3, agility: 4, accuracy: 5, experience: 4, skill: 5 } }
];

// --- Plumbing Questions ---
const questions = [
  {
    question: "What is the minimum pipe size for a cold feed to a hot water cylinder?",
    answer: "22mm"
  },
  {
    question: "What is the purpose of a sacrificial anode in a hot water cylinder?",
    answer: "prevent corrosion"
  },
  {
    question: "What is the recommended temperature for storing hot water to prevent Legionella?",
    answer: "60°C"
  }
];

let currentQuestion = 0;

// --- DOM Elements ---
const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const feedback = document.getElementById("question-feedback");
const market = document.getElementById("player-market");
const roster = document.getElementById("team-roster");
const leagueBody = document.getElementById("league-body");

// --- Initialize Game ---
function initGame() {
  loadQuestion();
  renderMarket();
  renderTeam();
  updateLeagueTable();
}

function loadQuestion() {
  questionText.textContent = questions[currentQuestion].question;
}

function submitAnswer() {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = questions[currentQuestion].answer.toLowerCase();

  if (userAnswer.includes(correctAnswer)) {
    feedback.textContent = "✅ Correct! You may now buy/sell players.";
    feedback.style.color = "lightgreen";
  } else {
    feedback.textContent = "❌ Incorrect. Try again.";
    feedback.style.color = "red";
  }
}

// --- Market Rendering ---
function renderMarket() {
  market.innerHTML = "";
  players.forEach((player, index) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
      <h3>${player.name}</h3>
      <p>Cost: ${player.cost} credits</p>
      <p>Stats: ${Object.values(player.stats).reduce((a, b) => a + b, 0)} pts</p>
      <button onclick="buyPlayer(${index})">Buy</button>
    `;
    market.appendChild(card);
  });
}

function buyPlayer(index) {
  const player = players[index];
  if (team.length >= 15) {
    alert("You can only have 15 players.");
    return;
  }
  if (credits < player.cost) {
    alert("Not enough credits.");
    return;
  }
  team.push(player);
  credits -= player.cost;
  league.credits = credits;
  renderTeam();
  updateLeagueTable();
}

// --- Team Rendering ---
function renderTeam() {
  roster.innerHTML = "";
  team.forEach((player, index) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
      <h3>${player.name}</h3>
      <p>Stats: ${Object.values(player.stats).reduce((a, b) => a + b, 0)} pts</p>
      <button onclick="sellPlayer(${index})">Sell</button>
    `;
    roster.appendChild(card);
  });
}

function sellPlayer(index) {
  const player = team[index];
  credits += player.cost;
  team.splice(index, 1);
  league.credits = credits;
  renderTeam();
  updateLeagueTable();
}

// --- Match Simulation ---
function simulateMatch() {
  if (team.length < 11) {
    alert("Select at least 11 players to play a match.");
    return;
  }

  const selectedTeam = team.slice(0, 11);
  const teamPoints = selectedTeam.reduce((sum, p) => {
    return sum + Object.values(p.stats).reduce((a, b) => a + b, 0);
  }, 0);

  const opponentPoints = Math.floor(Math.random() * 55) + 45;

  if (teamPoints > opponentPoints) {
    league.wins++;
    credits += 10;
    alert("🏆 You won the match! +10 credits");
  } else if (teamPoints < opponentPoints) {
    league.losses++;
    credits += 3;
    alert("😞 You lost the match. +3 credits");
  } else {
    league.draws++;
    credits += 5;
    alert("🤝 It's a draw. +5 credits");
  }

  league.credits = credits;
  updateLeagueTable();
}

// --- League Table ---
function updateLeagueTable() {
  leagueBody.innerHTML = `
    <tr>
      <td>Your Team</td>
      <td>${league.wins}</td>
      <td>${league.losses}</td>
      <td>${league.draws}</td>
      <td>${league.credits}</td>
    </tr>
  `;
}

// --- Start Game ---
initGame();
