const quiz = [
  {
    section: "Part I - Bar Operations & Safety",
    items: [
      {
        q: "What should you do if a grounded electrical equipment develops a grounding issue during operation?",
        options: {
          A: "Continue using it carefully",
          B: "Unplug the grounded equipment to avoid accidents",
          C: "Pour water on the equipment",
          D: "Ignore the issue",
        },
        answer: "B",
      },
      {
        q: "When should the bar be cleaned?",
        options: {
          A: "Before opening only",
          B: "After closing only",
          C: "During, before, and after operation",
          D: "Once a week",
        },
        answer: "C",
      },
      {
        q: "What should you do if cleaning equipment malfunctions during cleaning operations?",
        options: {
          A: "Continue using it",
          B: "Store it immediately",
          C: "Shut down the equipment and repair or replace it",
          D: "Ignore the malfunction",
        },
        answer: "C",
      },
      {
        q: "What safety measure should be observed when cleaning tiled areas?",
        options: {
          A: "Wear sunglasses",
          B: "Place a warning sign in the cleaning area",
          C: "Turn off all lights",
          D: "Close the establishment",
        },
        answer: "B",
      },
      {
        q: "A customer accidentally slips on a wet floor while cleaning is being conducted. What should you do first?",
        options: {
          A: "Continue cleaning",
          B: "Ask another guest to help",
          C: "Apologize, check the guest's condition, assist, and provide first aid if needed",
          D: "Leave the customer alone",
        },
        answer: "C",
      },
      {
        q: "How should a clean bar area look after following enterprise cleaning procedures?",
        options: {
          A: "Decorated only",
          B: "Dry only",
          C: "Clear and sanitized",
          D: "Empty",
        },
        answer: "C",
      },
    ],
  },
  {
    section: "Part II - Bar Knowledge",
    items: [
      {
        q: "What are the three basic parts of the bar?",
        options: {
          A: "Front Bar, Side Bar, Service Bar",
          B: "Front Bar, Under Bar, Back Bar",
          C: "Service Bar, Cocktail Bar, Lounge Bar",
          D: "Counter Bar, Ice Bar, Wine Bar",
        },
        answer: "B",
      },
      {
        q: "How would you differentiate a tumbler from a footed glass?",
        options: {
          A: "Tumblers are made of plastic",
          B: "Footed glasses are always larger",
          C: "Tumblers have no stem, while footed glasses sit directly on a foot or base",
          D: "There is no difference",
        },
        answer: "C",
      },
      {
        q: "How many milliliters are in one ounce?",
        options: {
          A: "15 ml",
          B: "20 ml",
          C: "25 ml",
          D: "30 ml",
        },
        answer: "D",
      },
      {
        q: "How would you differentiate a brandy from a Cognac?",
        options: {
          A: "Cognac is not a brandy",
          B: "Brandy is a type of beer",
          C: "Cognac is a specific type of brandy produced under stricter standards",
          D: "They are exactly the same",
        },
        answer: "C",
      },
    ],
  },
  {
    section: "Part III - Cocktail Preparation",
    items: [
      {
        q: "What is the correct procedure when using the stir method for cocktails?",
        options: {
          A: "Shake vigorously",
          B: "Blend all ingredients",
          C: "Chill the glass with ice and stir the drink before serving in the proper glass",
          D: "Add soda first",
        },
        answer: "C",
      },
      {
        q: "How do you make a basic syrup?",
        options: {
          A: "1 cup sugar and 2 cups water",
          B: "1 cup sugar and 1 cup hot water",
          C: "2 cups sugar and 1 cup water",
          D: "Sugar only",
        },
        answer: "B",
      },
      {
        q: "How would you make a Rainbow Cocktail?",
        options: {
          A: "Mix all ingredients together",
          B: "Shake vigorously",
          C: "Layer ingredients from heavy to light liquors",
          D: "Stir continuously",
        },
        answer: "C",
      },
    ],
  },
  {
    section: "Part IV - Wine Knowledge",
    items: [
      {
        q: "What is the proper storage position for wine bottles?",
        options: {
          A: "Upright at all times",
          B: "Horizontal only",
          C: "45-degree slanted position with the cork moist",
          D: "Upside down",
        },
        answer: "C",
      },
      {
        q: "Which wine is commonly recommended for health benefits due to its antioxidants?",
        options: {
          A: "White Wine",
          B: "Rose Wine",
          C: "Sparkling Wine",
          D: "Red Wine",
        },
        answer: "D",
      },
      {
        q: "What is the correct order when serving multiple types of wines?",
        options: {
          A: "Sweet to dry",
          B: "Red to white",
          C: "Dry to sweet, young to old, light-bodied to full-bodied, white to red",
          D: "Expensive to inexpensive",
        },
        answer: "C",
      },
      {
        q: "What is the highest classification among French wines according to your reviewer?",
        options: {
          A: "Merlot",
          B: "Cabernet Sauvignon",
          C: "Chardonnay",
          D: "Pinot Noir",
        },
        answer: "C",
      },
    ],
  },
  {
    section: "Part V - Wine Service",
    items: [
      {
        q: "What is the proper method of decanting wine?",
        options: {
          A: "Shake the bottle before serving",
          B: "Transfer the wine slowly to a decanter while observing for sediment",
          C: "Stir the wine continuously",
          D: "Pour directly into glasses",
        },
        answer: "B",
      },
      {
        q: "What should be done when presenting a decanted wine to guests?",
        options: {
          A: "Serve immediately without explanation",
          B: "Leave the bottle in storage",
          C: "Present the decanted wine in front of the guest table and explain the procedure",
          D: "Ask guests to pour their own wine",
        },
        answer: "C",
      },
      {
        q: "If the cork breaks and falls into the bottle, what should you do?",
        options: {
          A: "Serve the wine immediately",
          B: "Throw away the bottle",
          C: "Decant and strain the wine",
          D: "Shake the bottle",
        },
        answer: "C",
      },
      {
        q: "What should you do if the cork becomes disintegrated during opening?",
        options: {
          A: "Ignore it",
          B: "Serve the wine anyway",
          C: "Report the wine as a spoiled item",
          D: "Add ice",
        },
        answer: "C",
      },
      {
        q: "If the guest says the wine is faulty, what should you do?",
        options: {
          A: "Argue with the guest",
          B: "Replace the wine and allow the guest to evaluate the replacement",
          C: "Charge the guest again",
          D: "Ignore the complaint",
        },
        answer: "B",
      },
      {
        q: "What are the proper steps in handling a wine complaint?",
        options: {
          A: "Ignore, argue, and leave",
          B: "Hear, empathize, apologize, respond, and take immediate action",
          C: "Call security immediately",
          D: "Offer another drink without listening",
        },
        answer: "B",
      },
    ],
  },
  {
    section: "Part VI - Champagne & Sparkling Wine Service",
    items: [
      {
        q: "What is the proper procedure when opening and pouring Champagne or other sparkling wines?",
        options: {
          A: "Point the bottle toward guests",
          B: "Shake the bottle before opening",
          C: "Cover the mouth with a clean napkin and point it away from guests while opening",
          D: "Open it as quickly as possible",
        },
        answer: "C",
      },
    ],
  },
  {
    section: "Part VII - Sensory Evaluation",
    items: [
      {
        q: "What are the steps in conducting a sensory evaluation of wine?",
        options: {
          A: "Pour, drink, finish",
          B: "Smell, sip, swallow",
          C: "See, swirl, sniff, sip, savor",
          D: "Taste only",
        },
        answer: "C",
      },
    ],
  },
];

const questions = quiz.flatMap((group) =>
  group.items.map((item) => ({ ...item, section: group.section }))
);

const state = {
  activeSection: "All",
  submitted: false,
  answers: {},
};

const questionList = document.querySelector("#questionList");
const sectionTabs = document.querySelector("#sectionTabs");
const answeredCount = document.querySelector("#answeredCount");
const totalCount = document.querySelector("#totalCount");
const progressBar = document.querySelector("#progressBar");
const resultBox = document.querySelector("#resultBox");
const submitButton = document.querySelector("#submitButton");
const resetButton = document.querySelector("#resetButton");

totalCount.textContent = questions.length;

function renderTabs() {
  const sections = ["All", ...quiz.map((group) => group.section)];
  sectionTabs.innerHTML = sections
    .map(
      (section) => `
        <button class="tab-button${section === state.activeSection ? " active" : ""}"
          type="button"
          data-section="${section}">
          ${section === "All" ? "All Questions" : section.replace("Part ", "")}
        </button>
      `
    )
    .join("");
}

function renderQuestions() {
  const visibleQuestions =
    state.activeSection === "All"
      ? questions
      : questions.filter((question) => question.section === state.activeSection);

  questionList.innerHTML = visibleQuestions
    .map((question) => {
      const number = questions.indexOf(question) + 1;
      const selected = state.answers[number];
      const options = Object.entries(question.options)
        .map(([key, label]) => {
          const isCorrect = state.submitted && key === question.answer;
          const isWrong = state.submitted && selected === key && key !== question.answer;
          const classes = ["option", isCorrect ? "correct" : "", isWrong ? "incorrect" : ""]
            .filter(Boolean)
            .join(" ");

          return `
            <label class="${classes}">
              <input
                type="radio"
                name="q${number}"
                value="${key}"
                ${selected === key ? "checked" : ""}
                ${state.submitted ? "disabled" : ""}
              />
              <span><span class="option-key">${key}.</span> ${label}</span>
            </label>
          `;
        })
        .join("");

      const feedback = renderFeedback(question, number);

      return `
        <article class="question-card" id="question-${number}">
          <div class="question-header">
            <div class="number">${number}</div>
            <div>
              <p class="section-name">${question.section}</p>
              <p class="question-text">${question.q}</p>
            </div>
          </div>
          <div class="option-list">${options}</div>
          ${feedback}
        </article>
      `;
    })
    .join("");
}

function renderFeedback(question, number) {
  if (!state.submitted) return "";

  const selected = state.answers[number];
  if (!selected) {
    return `<div class="feedback wrong">Not answered. Correct answer: ${question.answer}.</div>`;
  }

  if (selected === question.answer) {
    return `<div class="feedback right">Correct.</div>`;
  }

  return `<div class="feedback wrong">Your answer: ${selected}. Correct answer: ${question.answer}.</div>`;
}

function updateStatus() {
  const answered = Object.keys(state.answers).length;
  const percent = Math.round((answered / questions.length) * 100);

  answeredCount.textContent = answered;
  progressBar.style.width = `${percent}%`;

  if (!state.submitted) {
    resultBox.classList.remove("strong");
    resultBox.textContent =
      answered === questions.length
        ? "Ready to submit."
        : `${questions.length - answered} question${questions.length - answered === 1 ? "" : "s"} left.`;
    return;
  }

  const score = questions.reduce((total, question, index) => {
    return total + (state.answers[index + 1] === question.answer ? 1 : 0);
  }, 0);

  resultBox.classList.add("strong");
  resultBox.textContent = `Score: ${score}/${questions.length} (${Math.round(
    (score / questions.length) * 100
  )}%). Review the highlighted answers below.`;
}

function render() {
  renderTabs();
  renderQuestions();
  updateStatus();
}

sectionTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-section]");
  if (!button) return;

  state.activeSection = button.dataset.section;
  render();
});

questionList.addEventListener("change", (event) => {
  if (!event.target.matches("input[type='radio']")) return;

  const number = Number(event.target.name.replace("q", ""));
  state.answers[number] = event.target.value;
  updateStatus();
});

submitButton.addEventListener("click", () => {
  state.submitted = true;
  state.activeSection = "All";
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

resetButton.addEventListener("click", () => {
  state.submitted = false;
  state.answers = {};
  state.activeSection = "All";
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

render();
