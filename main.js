const LEVELS = [
  { id: "beginner", label: "Iniciante", desc: "Vocabulário básico e frases simples" },
  { id: "intermediate", label: "Intermediário", desc: "Gramática e declinações" },
  { id: "advanced", label: "Avançado", desc: "Sintaxe e textos clássicos" },
];

const TOPICS = [
  "Vocabulário essencial",
  "Verbos (conjugação)",
  "Substantivos (declinações)",
  "Adjetivos",
  "Pronomes",
  "Frases do cotidiano",
  "Provérbios latinos",
  "Textos de Virgílio",
  "Textos de Cícero",
  "Etimologia",
  "Sintaxe",
  "Preposições",
];

const BASE_QUESTIONS = [
  { level: "beginner", topic: "Vocabulário essencial", question: "Como se diz 'amor' em latim?", options: ["amor", "timor", "honor", "labor"], correctAnswer: 0, explanation: "'Amor' em latim significa amor e foi herdado diretamente no português. Terminações em -or costumam formar conceitos abstratos." },
  { level: "beginner", topic: "Vocabulário essencial", question: "Qual é a palavra latina para 'mãe'?", options: ["pater", "mater", "frater", "soror"], correctAnswer: 1, explanation: "'Mater' significa mãe. A raiz aparece em palavras como maternal." },
  { level: "beginner", topic: "Vocabulário essencial", question: "'Aqua' significa…", options: ["fogo", "terra", "água", "ar"], correctAnswer: 2, explanation: "'Aqua' é água, origem de termos como aquático." },
  { level: "beginner", topic: "Frases do cotidiano", question: "'Salve!' é usado como…", options: ["despedida", "saudação", "pedido", "insulto"], correctAnswer: 1, explanation: "'Salve!' é uma saudação latina equivalente a 'olá'." },
  { level: "beginner", topic: "Pronomes", question: "Qual é o pronome latino para 'eu'?", options: ["tu", "ego", "nos", "vos"], correctAnswer: 1, explanation: "'Ego' é o pronome de primeira pessoa do singular." },
  { level: "beginner", topic: "Substantivos (declinações)", question: "Em 'puella', o caso nominativo singular termina em…", options: ["-a", "-us", "-um", "-i"], correctAnswer: 0, explanation: "Substantivos da 1ª declinação terminam em -a no nominativo singular." },
  { level: "beginner", topic: "Verbos (conjugação)", question: "No presente, 'amo' significa…", options: ["eu amei", "eu amo", "eu amarei", "eu amava"], correctAnswer: 1, explanation: "A forma 'amo' é presente do indicativo: eu amo." },
  { level: "beginner", topic: "Etimologia", question: "A palavra portuguesa 'luz' vem do latim…", options: ["lux", "nox", "sol", "candor"], correctAnswer: 0, explanation: "'Lux' significa luz e deu origem direta a 'luz'." },
  { level: "beginner", topic: "Preposições", question: "Qual preposição latina indica lugar 'em, dentro'?", options: ["cum", "ad", "in", "de"], correctAnswer: 2, explanation: "'In' indica lugar e pode reger acusativo ou ablativo." },
  { level: "beginner", topic: "Provérbios latinos", question: "'Carpe diem' significa…", options: ["tarde da noite", "aproveite o dia", "conhece-te a ti", "tempo foge"], correctAnswer: 1, explanation: "'Carpe diem' é um convite a aproveitar o presente." },

  { level: "intermediate", topic: "Verbos (conjugação)", question: "Na 1ª conjugação, o infinitivo termina em…", options: ["-are", "-ere", "-ire", "-ere longo"], correctAnswer: 0, explanation: "Verbos da 1ª conjugação têm infinitivo em -are: amare, laudare." },
  { level: "intermediate", topic: "Substantivos (declinações)", question: "O genitivo singular de 'servus' é…", options: ["servi", "servo", "servum", "servus"], correctAnswer: 0, explanation: "Na 2ª declinação masculina, o genitivo singular termina em -i." },
  { level: "intermediate", topic: "Adjetivos", question: "O adjetivo 'bonus' concorda com 'puella' no nominativo como…", options: ["bonus puella", "bona puella", "bonum puella", "boni puella"], correctAnswer: 1, explanation: "Adjetivos concordam em gênero, número e caso: 'bona puella'." },
  { level: "intermediate", topic: "Pronomes", question: "O pronome demonstrativo 'hic' significa…", options: ["aquele", "este", "qual", "alguém"], correctAnswer: 1, explanation: "'Hic, haec, hoc' indica proximidade: este/esta/isto." },
  { level: "intermediate", topic: "Sintaxe", question: "Em latim, a ordem mais comum é…", options: ["SVO", "VSO", "SOV", "OSV"], correctAnswer: 2, explanation: "A ordem típica do latim clássico é SOV: sujeito–objeto–verbo." },
  { level: "intermediate", topic: "Frases do cotidiano", question: "'Quid agis?' significa…", options: ["Quem és?", "O que fazes?", "Onde vais?", "Quanto custa?"], correctAnswer: 1, explanation: "'Quid agis?' é uma pergunta comum: o que você faz/como vai?" },
  { level: "intermediate", topic: "Etimologia", question: "'Janela' está ligada ao latim…", options: ["ianua", "fenestra", "porta", "tectum"], correctAnswer: 1, explanation: "'Fenestra' é janela; 'janela' veio do latim via românico." },
  { level: "intermediate", topic: "Preposições", question: "'Ad' rege normalmente…", options: ["ablativo", "acusativo", "genitivo", "nominativo"], correctAnswer: 1, explanation: "'Ad' indica direção e rege acusativo." },
  { level: "intermediate", topic: "Textos de Cícero", question: "Cícero é famoso sobretudo por…", options: ["poesia épica", "oratória", "historiografia", "satiras"], correctAnswer: 1, explanation: "Cícero destacou-se como grande orador e filósofo." },
  { level: "intermediate", topic: "Provérbios latinos", question: "'Tempus fugit' quer dizer…", options: ["o tempo foge", "a vida é breve", "o tempo cura", "o tempo é ouro"], correctAnswer: 0, explanation: "Expressa a ideia de que o tempo passa rapidamente." },

  { level: "advanced", topic: "Sintaxe", question: "O ablativo absoluto é…", options: ["uma oração independente em ablativo", "o sujeito da frase", "um objeto indireto", "um vocativo"], correctAnswer: 0, explanation: "É uma construção sintática independente em ablativo, com sentido adverbial." },
  { level: "advanced", topic: "Textos de Virgílio", question: "A Eneida é um poema…", options: ["lírico", "épico", "dramático", "didático"], correctAnswer: 1, explanation: "A Eneida é um poema épico sobre Eneias e a fundação de Roma." },
  { level: "advanced", topic: "Verbos (conjugação)", question: "O supino do verbo 'mitto' é…", options: ["missum", "misse", "mittere", "missus"], correctAnswer: 0, explanation: "O supino de 'mitto' é 'missum', usado com verbos de movimento." },
  { level: "advanced", topic: "Substantivos (declinações)", question: "'manus' (mão) pertence à…", options: ["1ª declinação", "2ª declinação", "4ª declinação", "5ª declinação"], correctAnswer: 2, explanation: "'Manus' é substantivo da 4ª declinação, geralmente terminados em -us." },
  { level: "advanced", topic: "Etimologia", question: "A palavra portuguesa 'cultura' vem de…", options: ["cultus", "colere", "cultura", "columna"], correctAnswer: 1, explanation: "'Colere' significa cultivar; 'cultura' deriva desse verbo." },
  { level: "advanced", topic: "Preposições", question: "'Cum' com pronome pessoal vira…", options: ["cum me", "mecum", "cum ego", "nobiscum"], correctAnswer: 1, explanation: "Com pronomes pessoais, 'cum' se pospõe: mecum, tecum, nobiscum." },
  { level: "advanced", topic: "Adjetivos", question: "'Fortior' é o grau…", options: ["positivo", "comparativo", "superlativo", "diminutivo"], correctAnswer: 1, explanation: "O sufixo -ior forma o comparativo: fortior = mais forte." },
  { level: "advanced", topic: "Textos de Cícero", question: "'O tempora, o mores!' expressa…", options: ["indignação moral", "alegria", "surpresa", "gratidão"], correctAnswer: 0, explanation: "Cícero critica os costumes de sua época com indignação." },
  { level: "advanced", topic: "Provérbios latinos", question: "'Alea iacta est' significa…", options: ["o dado foi lançado", "o jogo acabou", "o destino é cego", "a sorte é instável"], correctAnswer: 0, explanation: "Frase atribuída a César ao atravessar o Rubicão." },
  { level: "advanced", topic: "Sintaxe", question: "O acusativo com infinitivo é usado para…", options: ["frases exclamativas", "discursos indiretos", "vocativos", "orações de tempo"], correctAnswer: 1, explanation: "Em latim, o ACI indica discurso indireto e percepção." },

  { level: "beginner", topic: "Vocabulário essencial", question: "'Liber' significa…", options: ["livro", "paz", "leão", "trigo"], correctAnswer: 0, explanation: "'Liber' é livro; origem de biblioteca, livreiro, etc." },
  { level: "beginner", topic: "Vocabulário essencial", question: "'Pax' significa…", options: ["paz", "ponte", "povo", "porta"], correctAnswer: 0, explanation: "'Pax' é paz e originou pacífico, pacificar." },
  { level: "beginner", topic: "Etimologia", question: "'Escola' vem do latim…", options: ["schola", "domus", "aula", "ludus"], correctAnswer: 0, explanation: "'Schola' passou ao latim do grego e deu 'escola'." },
  { level: "beginner", topic: "Preposições", question: "'De' indica frequentemente…", options: ["companhia", "origem", "direção", "tempo"], correctAnswer: 1, explanation: "'De' pode indicar origem, afastamento ou assunto." },
  { level: "beginner", topic: "Frases do cotidiano", question: "'Vale!' é…", options: ["cumprimento", "despedida", "pedido", "súplica"], correctAnswer: 1, explanation: "'Vale!' significa 'fica bem', usado para despedidas." },

  { level: "intermediate", topic: "Substantivos (declinações)", question: "O plural de 'puella' no nominativo é…", options: ["puellae", "puellas", "puellis", "puellam"], correctAnswer: 0, explanation: "Na 1ª declinação, o nominativo plural termina em -ae." },
  { level: "intermediate", topic: "Verbos (conjugação)", question: "'Mones' é…", options: ["1ª pessoa plural", "2ª pessoa singular", "3ª pessoa plural", "2ª pessoa plural"], correctAnswer: 1, explanation: "'-es' indica 2ª pessoa do singular no presente." },
  { level: "intermediate", topic: "Adjetivos", question: "'Magnus' no superlativo é…", options: ["maximus", "magnissimus", "major", "magnum"], correctAnswer: 0, explanation: "'Magnus' tem superlativo irregular: maximus." },
  { level: "intermediate", topic: "Sintaxe", question: "O ablativo de meio responde a…", options: ["onde?", "como?", "por quem?", "quando?"], correctAnswer: 1, explanation: "Indica instrumento/ meio: gladio pugnat (luta com a espada)." },
  { level: "intermediate", topic: "Etimologia", question: "'Corpo' vem do latim…", options: ["corpus", "cordis", "caput", "collum"], correctAnswer: 0, explanation: "'Corpus' significa corpo e gerou corporal, corpóreo." },

  { level: "advanced", topic: "Sintaxe", question: "A oração relativa de finalidade usa…", options: ["subjuntivo", "infinitivo", "indicativo", "gerúndio"], correctAnswer: 0, explanation: "O subjuntivo aparece para indicar finalidade." },
  { level: "advanced", topic: "Verbos (conjugação)", question: "No perfeito, 'amavi' é…", options: ["eu amei", "eu amo", "eu amarei", "eu amava"], correctAnswer: 0, explanation: "A terminação -avi indica perfeito de 1ª conjugação." },
  { level: "advanced", topic: "Textos de Virgílio", question: "O verso inicial da Eneida é…", options: ["Arma virumque cano", "O di immortales", "Quo usque tandem", "Veni, vidi, vici"], correctAnswer: 0, explanation: "'Arma virumque cano' abre o poema com as armas e o herói." },
  { level: "advanced", topic: "Provérbios latinos", question: "'In vino veritas' sugere…", options: ["o vinho cura", "no vinho há verdade", "o vinho é amargo", "verdade é eterna"], correctAnswer: 1, explanation: "Expressa que as pessoas falam a verdade quando bebem." },
  { level: "advanced", topic: "Etimologia", question: "'Nação' vem de…", options: ["natio", "natus", "nex", "navis"], correctAnswer: 0, explanation: "'Natio' significa nascimento/linhagem e deu origem a nação." },
];

// Estado global
const state = {
  gameState: "setup",
  selectedTopics: [],
  level: "beginner",
  numQ: 5,
  questions: [],
  current: 0,
  selected: null,
  showAnswer: false,
  score: 0,
  answers: [],
};

const quizEl = document.querySelector("#quiz");
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

const STORAGE_KEY = "latin_trivia_custom";

function loadCustomQuestions() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try { return JSON.parse(raw); } catch { return []; }
}

function saveCustomQuestions(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getAllQuestions() {
  return [...BASE_QUESTIONS, ...loadCustomQuestions()];
}

function getTopics() {
  const all = new Set(TOPICS);
  getAllQuestions().forEach((q) => all.add(q.topic));
  return Array.from(all);
}

function renderSetup() {
  quizEl.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-header">
        <span>Nível atual: <strong>${LEVELS.find(l => l.id === state.level).label}</strong></span>
        <span>Banco: ${getAllQuestions().length} questões</span>
      </div>

      <h2>Configuração do Quiz</h2>
      <div class="options" id="levelOptions"></div>

      <h3>Tópicos</h3>
      <div class="options" id="topicOptions"></div>

      <h3>Quantidade</h3>
      <div class="options" id="countOptions"></div>

      <button class="btn" id="startQuiz">Iniciar — Incipit!</button>
    </div>
  `;

  const levelOptions = quizEl.querySelector("#levelOptions");
  LEVELS.forEach((l) => {
    const btn = document.createElement("button");
    btn.className = `option ${state.level === l.id ? "is-selected" : ""}`;
    btn.textContent = `${l.label} — ${l.desc}`;
    btn.onclick = () => { state.level = l.id; render(); };
    levelOptions.appendChild(btn);
  });

  const topicOptions = quizEl.querySelector("#topicOptions");
  getTopics().forEach((t) => {
    const btn = document.createElement("button");
    btn.className = `option ${state.selectedTopics.includes(t) ? "is-selected" : ""}`;
    btn.textContent = t;
    btn.onclick = () => toggleTopic(t);
    topicOptions.appendChild(btn);
  });

  const countOptions = quizEl.querySelector("#countOptions");
  [5, 10, 15].forEach((n) => {
    const btn = document.createElement("button");
    btn.className = `option ${state.numQ === n ? "is-selected" : ""}`;
    btn.textContent = `${n} questões`;
    btn.onclick = () => { state.numQ = n; render(); };
    countOptions.appendChild(btn);
  });

  quizEl.querySelector("#startQuiz").onclick = generateQuiz;
}

function toggleTopic(topic) {
  if (state.selectedTopics.includes(topic)) {
    state.selectedTopics = state.selectedTopics.filter((t) => t !== topic);
  } else {
    state.selectedTopics.push(topic);
  }
  render();
}

function generateQuiz() {
  if (state.selectedTopics.length === 0) {
    alert("Selecione pelo menos um tópico!");
    return;
  }
  const pool = getAllQuestions().filter(
    (q) => q.level === state.level && state.selectedTopics.includes(q.topic)
  );
  if (pool.length === 0) {
    alert("Sem questões para essa combinação. Selecione mais tópicos ou outro nível.");
    return;
  }
  state.questions = shuffle(pool).slice(0, state.numQ);
  state.current = 0;
  state.selected = null;
  state.showAnswer = false;
  state.score = 0;
  state.answers = [];
  state.gameState = "playing";
  render();
}

function renderPlaying() {
  const q = state.questions[state.current];
  quizEl.innerHTML = `
    <div class="quiz-header">
      <span>Questão ${state.current + 1} / ${state.questions.length}</span>
      <span>Pontuação: ${state.score}</span>
    </div>
    <div class="quiz-card">
      <div class="badge">${q.topic}</div>
      <h2>${q.question}</h2>
      <div class="options" id="optionList"></div>
      ${state.showAnswer ? `<div class="explanation">${q.explanation || ""}</div>` : ""}
      <button class="btn" id="checkBtn">${state.showAnswer ? (state.current + 1 === state.questions.length ? "Ver resultado" : "Próxima questão →") : "Verificar resposta"}</button>
    </div>
  `;

  const optionList = quizEl.querySelector("#optionList");
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    let cls = "option";
    if (state.showAnswer) {
      if (i === q.correctAnswer) cls += " is-correct";
      else if (i === state.selected) cls += " is-wrong";
    } else if (state.selected === i) {
      cls += " is-selected";
    }
    btn.className = cls;
    btn.textContent = `${String.fromCharCode(65 + i)}. ${opt}`;
    btn.disabled = state.showAnswer;
    btn.onclick = () => { state.selected = i; renderPlaying(); };
    optionList.appendChild(btn);
  });

  quizEl.querySelector("#checkBtn").onclick = handleCheck;
}

function handleCheck() {
  const q = state.questions[state.current];
  if (state.selected === null) {
    alert("Selecione uma resposta!");
    return;
  }
  if (!state.showAnswer) {
    state.showAnswer = true;
    renderPlaying();
    return;
  }
  const correct = state.selected === q.correctAnswer;
  state.answers.push({ selected: state.selected, correct });
  if (correct) state.score += 1;
  if (state.current + 1 < state.questions.length) {
    state.current += 1;
    state.selected = null;
    state.showAnswer = false;
    renderPlaying();
  } else {
    state.gameState = "results";
    render();
  }
}

function renderResults() {
  const pct = Math.round((state.score / state.questions.length) * 100);
  const medal = pct >= 80 ? "🏛️ Optimus!" : pct >= 60 ? "📜 Bene!" : pct >= 40 ? "✏️ Satis." : "📚 Studie plus!";
  quizEl.innerHTML = `
    <div class="quiz-card">
      <h2>Finis!</h2>
      <p>${medal}</p>
      <h3>${state.score} / ${state.questions.length} (${pct}%)</h3>
      <div class="list">
        ${state.questions.map((q, i) => {
          const a = state.answers[i];
          if (!a) return "";
          return `
            <div class="list-item" style="border-color:${a.correct ? "#2f9e44" : "#b02a37"}">
              <strong>${q.question}</strong><br/>
              <span style="color:${a.correct ? "#6fda7f" : "#f38f8f"}">Sua resposta: ${q.options[a.selected]}</span><br/>
              ${a.correct ? "" : `<span style=\"color:#7ee08b\">Correta: ${q.options[q.correctAnswer]}</span>`}
              <div style="color:#b4a99a; font-style: italic; margin-top: 4px;">${q.explanation || ""}</div>
            </div>
          `;
        }).join("")}
      </div>
      <button class="btn" id="restart">Jogar novamente — Iterum!</button>
    </div>
  `;

  quizEl.querySelector("#restart").onclick = () => {
    state.gameState = "setup";
    render();
  };
}

function render() {
  if (state.gameState === "setup") renderSetup();
  if (state.gameState === "playing") renderPlaying();
  if (state.gameState === "results") renderResults();
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Tabs
function setupTabs() {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("is-active"));
      panels.forEach((p) => p.classList.remove("is-active"));
      tab.classList.add("is-active");
      document.querySelector(`#${tab.dataset.tab}`).classList.add("is-active");
    });
  });
}

// Flashcards
let flashIndex = 0;
let flashcards = [];
let isFlipped = false;

function buildFlashcards() {
  const topicSelect = document.querySelector("#flashTopic");
  topicSelect.innerHTML = "<option value=\"all\">Todos os tópicos</option>";
  getTopics().forEach((t) => {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t;
    topicSelect.appendChild(opt);
  });

  topicSelect.onchange = () => loadFlashcards(topicSelect.value);
  document.querySelector("#flashShuffle").onclick = () => {
    flashcards = shuffle(flashcards);
    flashIndex = 0;
    updateFlashcard();
  };
  document.querySelector("#flashPrev").onclick = () => {
    flashIndex = (flashIndex - 1 + flashcards.length) % flashcards.length;
    updateFlashcard(true);
  };
  document.querySelector("#flashNext").onclick = () => {
    flashIndex = (flashIndex + 1) % flashcards.length;
    updateFlashcard(true);
  };

  const card = document.querySelector("#flashcard");
  card.onclick = () => { isFlipped = !isFlipped; updateFlashcard(); };
  card.onkeypress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      isFlipped = !isFlipped;
      updateFlashcard();
    }
  };

  loadFlashcards("all");
}

function loadFlashcards(topic) {
  flashcards = getAllQuestions().filter((q) => topic === "all" || q.topic === topic);
  flashIndex = 0;
  updateFlashcard(true);
}

function updateFlashcard(resetFlip = false) {
  if (!flashcards.length) return;
  if (resetFlip) isFlipped = false;
  const card = document.querySelector("#flashcard");
  const front = card.querySelector(".flashcard__front");
  const back = card.querySelector(".flashcard__back");
  const q = flashcards[flashIndex];
  front.textContent = q.question;
  back.textContent = `✅ ${q.options[q.correctAnswer]} — ${q.explanation}`;
  card.classList.toggle("is-flipped", isFlipped);
}

// Teacher mode
function setupTeacher() {
  const form = document.querySelector("#teacherForm");
  const list = document.querySelector("#customList");

  function renderCustomList() {
    const data = loadCustomQuestions();
    list.innerHTML = "";
    if (!data.length) {
      list.innerHTML = "<div class='list-item'>Nenhuma questão personalizada ainda.</div>";
      return;
    }
    data.forEach((q, index) => {
      const item = document.createElement("div");
      item.className = "list-item";
      item.innerHTML = `
        <strong>${q.question}</strong><br/>
        <span>${q.topic} — ${q.level}</span>
        <div style="margin-top:8px; display:flex; gap:8px;">
          <button class="btn btn--ghost" data-edit="${index}">Editar</button>
          <button class="btn btn--ghost" data-delete="${index}">Excluir</button>
        </div>
      `;
      list.appendChild(item);
    });

    list.querySelectorAll("[data-delete]").forEach((btn) => {
      btn.onclick = () => {
        const idx = Number(btn.dataset.delete);
        const data = loadCustomQuestions();
        data.splice(idx, 1);
        saveCustomQuestions(data);
        renderCustomList();
        render();
        buildFlashcards();
      };
    });

    list.querySelectorAll("[data-edit]").forEach((btn) => {
      btn.onclick = () => {
        const idx = Number(btn.dataset.edit);
        const data = loadCustomQuestions();
        const q = data[idx];
        document.querySelector("#tQuestion").value = q.question;
        document.querySelector("#tTopic").value = q.topic;
        document.querySelector("#tLevel").value = q.level;
        document.querySelector("#tOptions").value = q.options.join("; ");
        document.querySelector("#tCorrect").value = q.correctAnswer;
        document.querySelector("#tExplanation").value = q.explanation;
        data.splice(idx, 1);
        saveCustomQuestions(data);
        renderCustomList();
      };
    });
  }

  form.onsubmit = (e) => {
    e.preventDefault();
    const options = document.querySelector("#tOptions").value.split(";").map((s) => s.trim()).filter(Boolean);
    if (options.length !== 4) {
      alert("Insira exatamente 4 alternativas separadas por ';'.");
      return;
    }
    const newQuestion = {
      question: document.querySelector("#tQuestion").value.trim(),
      topic: document.querySelector("#tTopic").value.trim(),
      level: document.querySelector("#tLevel").value,
      options,
      correctAnswer: Number(document.querySelector("#tCorrect").value),
      explanation: document.querySelector("#tExplanation").value.trim(),
    };
    const data = loadCustomQuestions();
    data.push(newQuestion);
    saveCustomQuestions(data);
    form.reset();
    renderCustomList();
    render();
    buildFlashcards();
  };

  renderCustomList();
}

setupTabs();
render();
buildFlashcards();
setupTeacher();
