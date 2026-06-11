const SITE_PASSWORD = "peikko";

const lockOverlay = document.getElementById("lock-overlay");
const passwordInput = document.getElementById("password-input");
const passwordBtn = document.getElementById("password-btn");
const passwordError = document.getElementById("password-error");

const CATEGORY_PLAN = {
  ajankohtaiset: 3,
  urheilu: 3,
  historia: 2,
  yleiskulttuuri: 2
};

const QUIZ_LENGTH = Object.values(CATEGORY_PLAN).reduce((sum, amount) => sum + amount, 0);
const HARD_QUIZ_LENGTH = 10;

let selectedMode = "normal";
let quizQuestions = [];
let currentIndex = 0;
let selectedAnswer = null;
let userAnswers = [];

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const nextBtn = document.getElementById("next-btn");
const playAgainBtn = document.getElementById("play-again-btn");
const homeBtn = document.getElementById("home-btn");

const modeButtons = document.querySelectorAll(".mode-btn");

const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const questionText = document.getElementById("question-text");
const answersEl = document.getElementById("answers");

const scoreTitle = document.getElementById("score-title");
const scoreMessage = document.getElementById("score-message");
const reviewList = document.getElementById("review-list");

const modalNormalStatsEl = document.getElementById("modal-normal-stats");
const modalHardStatsEl = document.getElementById("modal-hard-stats");

const statsBtn = document.getElementById("stats-btn");
const statsModal = document.getElementById("stats-modal");
const closeStatsBtn = document.getElementById("close-stats-btn");

function unlockSite() {
  const typedPassword = passwordInput.value.trim();

  if (typedPassword === SITE_PASSWORD) {
    localStorage.setItem("paavonAivojumppaUnlocked", "true");

    document.body.classList.remove("locked");
    lockOverlay.classList.add("hidden");
    passwordError.classList.add("hidden");
  } else {
    passwordError.classList.remove("hidden");
    passwordInput.value = "";
    passwordInput.focus();
  }
}

function initializeLockScreen() {
  const alreadyUnlocked =
    localStorage.getItem("paavonAivojumppaUnlocked") === "true";

  if (alreadyUnlocked) {
    document.body.classList.remove("locked");
    lockOverlay.classList.add("hidden");
  } else {
    document.body.classList.add("locked");
    lockOverlay.classList.remove("hidden");

    setTimeout(() => {
      passwordInput.focus();
    }, 100);
  }
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function getQuestionsByCategory(category) {
  return QUESTIONS.filter(question => question.category === category);
}

function buildNormalQuizQuestions() {
  const selected = [];

  Object.entries(CATEGORY_PLAN).forEach(([category, amount]) => {
    const categoryQuestions = shuffle(getQuestionsByCategory(category));
    selected.push(...categoryQuestions.slice(0, amount));
  });

  return shuffle(selected);
}

function buildHardQuizQuestions() {
  return shuffle(HARD_QUESTIONS).slice(0, HARD_QUIZ_LENGTH);
}

function buildQuizQuestions() {
  if (selectedMode === "hard") {
    return buildHardQuizQuestions();
  }

  return buildNormalQuizQuestions();
}

function getCategoryLabel(category) {
  const labels = {
    ajankohtaiset: "Ajankohtaiset",
    urheilu: "Urheilu",
    historia: "Historia",
    yleiskulttuuri: "Yleiskulttuuri"
  };

  return labels[category] || "Haastava";
}

function getModeLabel() {
  return selectedMode === "hard" ? "Haastava" : "Normaali";
}

function getBestScoreKey() {
  return selectedMode === "hard"
    ? "paavonAivojumppaBestScoreHard"
    : "paavonAivojumppaBestScoreNormal";
}

function startQuiz() {
  quizQuestions = buildQuizQuestions();
  currentIndex = 0;
  selectedAnswer = null;
  userAnswers = [];

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  const question = quizQuestions[currentIndex];
  selectedAnswer = userAnswers[currentIndex] ?? null;

  const label = selectedMode === "hard"
    ? "Haastava"
    : getCategoryLabel(question.category);

  progressText.textContent = `Kysymys ${currentIndex + 1} / ${quizQuestions.length} · ${label}`;
  progressFill.style.width = `${((currentIndex + 1) / quizQuestions.length) * 100}%`;
  questionText.textContent = question.question;

  answersEl.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = answer;

    if (selectedAnswer === index) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      selectedAnswer = index;
      userAnswers[currentIndex] = index;
      nextBtn.disabled = false;

      document.querySelectorAll(".answer-btn").forEach(btn => btn.classList.remove("selected"));
      button.classList.add("selected");
    });

    answersEl.appendChild(button);
  });

  nextBtn.textContent = currentIndex === quizQuestions.length - 1 ? "Näytä tulokset" : "Seuraava";
  nextBtn.disabled = selectedAnswer === null;
}

function goNext() {
  if (selectedAnswer === null) return;

  if (currentIndex < quizQuestions.length - 1) {
    currentIndex++;
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const correctCount = quizQuestions.reduce((sum, question, index) => {
    return sum + (userAnswers[index] === question.correctIndex ? 1 : 0);
  }, 0);

  saveBestScore(correctCount);
  saveStats(correctCount, quizQuestions.length);
  
  const bestScore = getBestScore();
  const stats = getStats();
  const averagePercent = getAveragePercent();
  
  scoreTitle.textContent = `${correctCount} / ${quizQuestions.length} oikein`;

  if (correctCount >= 8) {
    scoreMessage.textContent = `Hieno tulos! ${getModeLabel()}-tason paras tulos on ${bestScore} / ${quizQuestions.length}. Keskimäärin oikein: ${averagePercent} %. Tehtyjä visoja: ${stats.totalGames}.`;
  } else if (correctCount >= 5) {
    scoreMessage.textContent = `Hyvä suoritus! ${getModeLabel()}-tason paras tulos on ${bestScore} / ${quizQuestions.length}. Keskimäärin oikein: ${averagePercent} %. Tehtyjä visoja: ${stats.totalGames}. Alla näkyvät oikeat vastaukset.`;
  } else {
    scoreMessage.textContent = `Ei haittaa — tarkoitus on virkistää muistia ja oppia uutta. ${getModeLabel()}-tason paras tulos on ${bestScore} / ${quizQuestions.length}. Keskimäärin oikein: ${averagePercent} %. Tehtyjä visoja: ${stats.totalGames}.`;
  }

  reviewList.innerHTML = "";

  quizQuestions.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === question.correctIndex;
    const label = selectedMode === "hard" ? "Haastava" : getCategoryLabel(question.category);

    const item = document.createElement("div");
    item.className = "review-item";
    item.innerHTML = `
      <p><strong>${index + 1}. ${question.question}</strong></p>
      <p><em>${label}</em></p>
      <p class="${isCorrect ? "correct" : "incorrect"}">
        Oma vastaus: ${question.answers[userAnswer]}
      </p>
      <p>Oikea vastaus: <strong>${question.answers[question.correctIndex]}</strong></p>
      <p>${question.explanation}</p>
    `;

    reviewList.appendChild(item);
  });
}

function getStatsKey(mode = selectedMode) {
  return mode === "hard"
    ? "paavonAivojumppaStatsHard"
    : "paavonAivojumppaStatsNormal";
}

function getStatsForMode(mode) {
  const savedStats = localStorage.getItem(getStatsKey(mode));

  if (!savedStats) {
    return {
      totalGames: 0,
      totalCorrect: 0,
      totalQuestions: 0
    };
  }

  return JSON.parse(savedStats);
}

function getStats() {
  return getStatsForMode(selectedMode);
}

function formatModeStats(mode) {
  const stats = getStatsForMode(mode);

  if (stats.totalQuestions === 0) {
    return "Ei vielä vastauksia.";
  }

  const percent = Math.round((stats.totalCorrect / stats.totalQuestions) * 100);

  return `${stats.totalQuestions} kysymykseen vastattu · ${percent} % oikein`;
}

function updateStatsDisplay() {
  modalNormalStatsEl.textContent = formatModeStats("normal");
  modalHardStatsEl.textContent = formatModeStats("hard");
}

function openStatsModal() {
  updateStatsDisplay();
  statsModal.classList.remove("hidden");
}

function closeStatsModal() {
  statsModal.classList.add("hidden");
}

function saveStats(correctCount, questionCount) {
  const stats = getStats();

  stats.totalGames += 1;
  stats.totalCorrect += correctCount;
  stats.totalQuestions += questionCount;

  localStorage.setItem(getStatsKey(), JSON.stringify(stats));
}

function getAveragePercent() {
  const stats = getStats();

  if (stats.totalQuestions === 0) {
    return 0;
  }

  return Math.round((stats.totalCorrect / stats.totalQuestions) * 100);
}

function getBestScore() {
  return Number(localStorage.getItem(getBestScoreKey()) || 0);
}

function saveBestScore(score) {
  const bestScore = getBestScore();

  if (score > bestScore) {
    localStorage.setItem(getBestScoreKey(), String(score));
  }
}

function restart() {
  startScreen.classList.remove("hidden");
  quizScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
}

function goHome() {
  resultScreen.classList.add("hidden");
  quizScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
}

modeButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedMode = button.dataset.mode;

    modeButtons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restart);
nextBtn.addEventListener("click", goNext);
playAgainBtn.addEventListener("click", startQuiz);
homeBtn.addEventListener("click", goHome);

passwordBtn.addEventListener("click", unlockSite);

passwordInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    unlockSite();
  }
});

statsBtn.addEventListener("click", event => {
  event.preventDefault();
  openStatsModal();
});

closeStatsBtn.addEventListener("click", event => {
  event.preventDefault();
  event.stopPropagation();
  closeStatsModal();
});

initializeLockScreen();