// --- Game Data ---
let credits = 100;
let team = [];
let league = { wins: 0, losses: 0, draws: 0, credits: credits };

const players = [
  { name: "Erling Haaland", club: "Manchester City", position: "Forward", cost: 55, stats: { speed: 5, agility: 4, accuracy: 5, experience: 4, skill: 5 } },
  { name: "Kevin De Bruyne", club: "Manchester City", position: "Midfielder", cost: 54, stats: { speed: 4, agility: 4, accuracy: 5, experience: 5, skill: 5 } },
  { name: "Phil Foden", club: "Manchester City", position: "Midfielder", cost: 48, stats: { speed: 4, agility: 5, accuracy: 4, experience: 4, skill: 5 } },
  { name: "Bukayo Saka", club: "Arsenal", position: "Winger", cost: 50, stats: { speed: 5, agility: 5, accuracy: 4, experience: 4, skill: 4 } },
  { name: "Martin Ødegaard", club: "Arsenal", position: "Midfielder", cost: 49, stats: { speed: 4, agility: 4, accuracy: 5, experience: 4, skill: 5 } },
  { name: "Declan Rice", club: "Arsenal", position: "Midfielder", cost: 47, stats: { speed: 3, agility: 4, accuracy: 4, experience: 5, skill: 4 } },
  { name: "Mohamed Salah", club: "Liverpool", position: "Forward", cost: 52, stats: { speed: 5, agility: 4, accuracy: 5, experience: 5, skill: 5 } },
  { name: "Virgil van Dijk", club: "Liverpool", position: "Defender", cost: 50, stats: { speed: 3, agility: 3, accuracy: 4, experience: 5, skill: 5 } },
  { name: "Trent Alexander-Arnold", club: "Liverpool", position: "Defender", cost: 48, stats: { speed: 4, agility: 4, accuracy: 5, experience: 4, skill: 4 } },
  { name: "Bruno Fernandes", club: "Manchester United", position: "Midfielder", cost: 49, stats: { speed: 4, agility: 4, accuracy: 5, experience: 5, skill: 5 } },
  { name: "Marcus Rashford", club: "Manchester United", position: "Forward", cost: 47, stats: { speed: 5, agility: 4, accuracy: 4, experience: 4, skill: 4 } },
  { name: "Lisandro Martínez", club: "Manchester United", position: "Defender", cost: 44, stats: { speed: 3, agility: 3, accuracy: 4, experience: 4, skill: 4 } },
  { name: "James Maddison", club: "Tottenham Hotspur", position: "Midfielder", cost: 46, stats: { speed: 4, agility: 4, accuracy: 4, experience: 4, skill: 4 } },
  { name: "Son Heung-min", club: "Tottenham Hotspur", position: "Forward", cost: 50, stats: { speed: 5, agility: 4, accuracy: 5, experience: 5, skill: 5 } },
  { name: "Cristian Romero", club: "Tottenham Hotspur", position: "Defender", cost: 42, stats: { speed: 3, agility: 3, accuracy: 4, experience: 4, skill: 4 } },
  { name: "Alexander Isak", club: "Newcastle United", position: "Forward", cost: 48, stats: { speed: 5, agility: 4, accuracy: 4, experience: 4, skill: 4 } },
  { name: "Bruno Guimarães", club: "Newcastle United", position: "Midfielder", cost: 47, stats: { speed: 4, agility: 4, accuracy: 4, experience: 4, skill: 4 } },
  { name: "Kieran Trippier", club: "Newcastle United", position: "Defender", cost: 45, stats: { speed: 3, agility: 4, accuracy: 5, experience: 5, skill: 4 } },
  { name: "Douglas Luiz", club: "Aston Villa", position: "Midfielder", cost: 44, stats: { speed: 3, agility: 4, accuracy: 4, experience: 4, skill: 4 } },
  { name: "Ollie Watkins", club: "Aston Villa", position: "Forward", cost: 46, stats: { speed: 5, agility: 4, accuracy: 4, experience: 4, skill: 4 } },
  { name: "Emiliano Martínez", club: "Aston Villa", position: "Goalkeeper", cost: 43, stats: { speed: 2, agility: 4, accuracy: 4, experience: 5, skill: 5 } },
  { name: "Dominic Solanke", club: "Bournemouth", position: "Forward", cost: 42, stats: { speed: 4, agility: 4, accuracy: 4, experience: 4, skill: 4 } },
  { name: "João Palhinha", club: "Fulham", position: "Midfielder", cost: 41, stats: { speed: 3, agility: 3, accuracy: 4, experience: 4, skill: 4 } },
  { name: "Morgan Gibbs-White", club: "Nottingham Forest", position: "Midfielder", cost: 40, stats: { speed: 4, agility: 4, accuracy: 4, experience: 3, skill: 4 } },
  { name: "James Ward-Prowse", club: "West Ham United", position: "Midfielder", cost: 43, stats: { speed: 3, agility: 3, accuracy: 5, experience: 4, skill: 4 } },
  { name: "Lucas Paquetá", club: "West Ham United", position: "Midfielder", cost: 44, stats: { speed: 4, agility: 4, accuracy: 4, experience: 4, skill: 4 } },
  { name: "Eberechi Eze", club: "Crystal Palace", position: "Midfielder", cost: 42, stats: { speed: 4, agility: 5, accuracy: 4, experience: 3, skill: 4 } },
  { name: "Michael Olise", club: "Crystal Palace", position: "Winger", cost: 41, stats: { speed: 4, agility: 4, accuracy: 4, experience: 3, skill: 4 } },
  { name: "Kaoru Mitoma", club: "Brighton & Hove Albion", position: "Winger", cost: 43, stats: { speed: 5, agility: 5, accuracy: 4, experience: 3, skill: 4 } },
  { name: "Pascal Groß", club: "Brighton & Hove Albion", position: "Midfielder", cost: 40, stats: { speed: 3, agility: 3, accuracy: 4, experience: 4, skill: 4 } }
];

// --- Plumbing Questions ---
const questions = [
  // Cold Water Systems
  { question: "What is the minimum depth for installing a cold water supply pipe underground?", answer: "750mm" },
  { question: "What is the maximum depth for a cold water supply pipe?", answer: "1350mm" },
  { question: "What is the purpose of a sacrificial anode in a hot water cylinder?", answer: "prevent corrosion" },
  { question: "What is the recommended temperature for storing hot water to prevent Legionella?", answer: "60°C" },
  { question: "What is the function of an RPZ valve?", answer: "prevent backflow" },
  { question: "What is the standard pipe size for a rising main in a 3-bedroom house?", answer: "15mm" },
  { question: "Convert 30 l/m into l/s.", answer: "0.5" },
  { question: "Convert 0.25 l/s into l/m.", answer: "15" },
  { question: "Convert 12 l/m into l/s.", answer: "0.2" },
  { question: "Convert 0.12 l/s into l/m.", answer: "7.2" },
  { question: "What is the role of a float-operated valve in a cistern?", answer: "maintain water level" },
  { question: "What is the recommended clearance above a cistern for maintenance?", answer: "350mm" },
  { question: "What is the weight of 230 litres of water?", answer: "230kg" },
  { question: "What is the purpose of a screened overflow pipe?", answer: "prevent contamination" },
  { question: "What is the function of a service valve?", answer: "isolate supply" },
  { question: "What is the role of a drain-off valve?", answer: "drain system" },
  { question: "What is the recommended insulation for cistern platforms?", answer: "moisture-resistant plywood" },
  { question: "What is the purpose of a pressure transducer in boosted systems?", answer: "monitor pressure" },
  { question: "What is the minimum pipe size for cold distribution to a bath?", answer: "22mm" },
  { question: "What is the function of a check valve?", answer: "prevent reverse flow" },

  // Hot Water Systems
  { question: "What is the maximum temperature allowed for water discharged from a bath tap in new builds?", answer: "48°C" },
  { question: "What is the minimum size of discharge pipework for a temperature relief valve with a ½-inch BSP outlet?", answer: "15mm" },
  { question: "What is the purpose of a secondary return circuit?", answer: "maintain hot water circulation" },
  { question: "Name two types of shower pump.", answer: "positive and negative head" },
  { question: "A cylinder measures 1050 mm in height and has a diameter of 350 mm. What is its capacity?", answer: "100 litres" },
  { question: "What is the formula for calculating the volume of a cylinder?", answer: "πr²h" },
  { question: "What is the role of a thermostatic mixing valve?", answer: "control outlet temperature" },
  { question: "What is the function of a tundish in an unvented system?", answer: "visible discharge point" },
  { question: "What is the role of a pressure relief valve?", answer: "release excess pressure" },
  { question: "What is the recommended minimum pressure for an unvented system?", answer: "1 bar" },
  { question: "What is the function of a balanced cold connection?", answer: "equalise pressure" },
  { question: "What is the role of a wiring centre in a hot water system?", answer: "connect controls" },
  { question: "What is the function of a cylinder thermostat?", answer: "control water temperature" },
  { question: "What is the purpose of a filling loop?", answer: "fill sealed system" },
  { question: "What is the role of a check valve?", answer: "prevent backflow" },
  { question: "What is the function of a pressure reducing valve?", answer: "limit incoming pressure" },
  { question: "What is the role of a discharge pipe?", answer: "safely remove hot water" },
  { question: "What is the function of a heat exchanger?", answer: "transfer heat" },
  { question: "What is the role of an immersion heater?", answer: "heat water electrically" },

  // Central Heating Systems
  { question: "In a sealed CH system with a condensing boiler, what is the expected temperature difference between flow and return?", answer: "20°C" },
  { question: "Which pipe allows an open vented system to remain at atmospheric pressure?", answer: "open vent pipe" },
  { question: "Which heating system uses two two-port valves?", answer: "S-plan" },
  { question: "What does a three-port mid-position valve do in its mid-position?", answer: "heats both circuits" },
  { question: "Which boiler type recovers latent heat from flue gases?", answer: "condensing boiler" },
  { question: "What is the recommended installation height for a radiator?", answer: "150mm" },
  { question: "What component accommodates water expansion in a sealed system?", answer: "expansion vessel" },
  { question: "What should be provided in homes over 150 m²?", answer: "zoning" },
  { question: "What is boiler interlock?", answer: "prevents boiler cycling" },
  { question: "What is the purpose of a room thermostat?", answer: "control room temperature" },
  { question: "What is the function of a cylinder thermostat?", answer: "control hot water temperature" },
  { question: "What is the role of a motorised zone valve?", answer: "control water flow" },
  { question: "What is the function of a programmer?", answer: "schedule heating" },
  { question: "What is the role of a wiring centre?", answer: "connect electrical components" },
  { question: "What is the purpose of a bypass valve?", answer: "prevent overheating" },
  { question: "What is the function of a circulating pump?", answer: "move water through system" },
  { question
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



