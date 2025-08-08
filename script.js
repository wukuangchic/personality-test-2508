// ====== Question bank (12 items; 3 per dimension) ======
const DIM_ORDER = ["connector", "explorer", "organizer", "analyst"];
const DIM_LABEL = {
  connector: "连接者（社交驱动）",
  explorer: "探索者（好奇创新）",
  organizer: "组织者（有序执行）",
  analyst: "分析者（数据理性）",
};

const QUESTIONS = [
  // connector ×3
  { text: "在新的社交场合里，你通常能很快破冰并与人建立联系。", dim: "connector" },
  { text: "遇到问题时，你更愿意和别人讨论，而不是独自思考。", dim: "connector" },
  { text: "你喜欢在群聊或会议中主动发起话题。", dim: "connector" },

  // explorer ×3
  { text: "你享受尝试全新的工具、方法或路径。", dim: "explorer" },
  { text: "面对未知或变化，你更多是兴奋而不是焦虑。", dim: "explorer" },
  { text: "你喜欢临时起意的安排，例如说走就走的小旅行。", dim: "explorer" },

  // organizer ×3
  { text: "你会把待办事项拆解并安排到日程里逐一推进。", dim: "organizer" },
  { text: "你更倾向于按计划一步步执行项目，少走捷径。", dim: "organizer" },
  { text: "临时改计划会让你不适，甚至有些反感。", dim: "organizer" },

  // analyst ×3
  { text: "做重要决策前，你会先收集尽可能多的事实和数据。", dim: "analyst" },
  { text: "你常用图表或数据来阐述观点。", dim: "analyst" },
  { text: "对于未经验证的结论，你会保持质疑并寻求证据。", dim: "analyst" },
];

const LIKERT = [
  { value: 1, label: "非常不同意" },
  { value: 2, label: "不同意" },
  { value: 3, label: "一般" },
  { value: 4, label: "同意" },
  { value: 5, label: "非常同意" },
];

// ====== Render form ======
function renderQuestions() {
  const root = document.getElementById("questions");
  root.innerHTML = "";

  QUESTIONS.forEach((q, idx) => {
    const fs = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = `第 ${idx + 1} 题`;
    fs.appendChild(legend);

    const label = document.createElement("div");
    label.className = "q-label";
    label.textContent = q.text;
    fs.appendChild(label);

    const row = document.createElement("div");
    row.className = "options";

    LIKERT.forEach(opt => {
      const wrap = document.createElement("label");
      wrap.className = "opt";
      wrap.setAttribute("data-q", String(idx));
      wrap.setAttribute("data-v", String(opt.value));

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${idx}`;
      input.value = String(opt.value);

      // toggle UI class when checked
      input.addEventListener("change", () => {
        document.querySelectorAll(`.opt[data-q="${idx}"]`).forEach(el => el.classList.remove("checked"));
        wrap.classList.add("checked");
      });

      const span = document.createElement("div");
      span.textContent = `${opt.label} (${opt.value})`;

      wrap.appendChild(input);
      wrap.appendChild(span);
      row.appendChild(wrap);
    });

    fs.appendChild(row);
    root.appendChild(fs);
  });
}

// ====== Calculate and redirect ======
function computeAndRedirect(e) {
  e.preventDefault();

  // Ensure all questions answered
  for (let i = 0; i < QUESTIONS.length; i++) {
    const anyChecked = !!document.querySelector(`input[name="q${i}"]:checked`);
    if (!anyChecked) {
      alert(`还有题目未作答（第 ${i + 1} 题）`);
      return;
    }
  }

  // Aggregate scores
  const scores = { connector: 0, explorer: 0, organizer: 0, analyst: 0 };
  QUESTIONS.forEach((q, i) => {
    const val = parseInt(document.querySelector(`input[name="q${i}"]:checked`).value, 10);
    scores[q.dim] += val;
  });

  // Pick winner (tie-breaker by DIM_ORDER)
  let winner = DIM_ORDER[0];
  let best = -Infinity;
  DIM_ORDER.forEach(dim => {
    if (scores[dim] > best) {
      best = scores[dim];
      winner = dim;
    }
  });

  // Redirect to result page with query string containing raw scores
  const qs = new URLSearchParams(scores).toString();
  location.href = `results/${winner}.html?${qs}`;
}

function resetForm() {
  document.getElementById("quizForm").reset();
  document.querySelectorAll(".opt").forEach(el => el.classList.remove("checked"));
}

// ====== Init ======
document.addEventListener("DOMContentLoaded", () => {
  renderQuestions();
  document.getElementById("quizForm").addEventListener("submit", computeAndRedirect);
  document.getElementById("resetBtn").addEventListener("click", resetForm);
});
