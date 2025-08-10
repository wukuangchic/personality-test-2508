// Language detection
const LANG = navigator.language && navigator.language.startsWith('en') ? 'en' : 'zh';

// UI text translations
const UI = {
  title: {
    zh: '性格心理测试',
    en: 'Personality Test',
  },
  subtitle: {
    zh: '12 道题 · 约 2 分钟 · 本地计算，无需登录',
    en: '12 questions · about 2 minutes · runs locally, no login required',
  },
  submit: {
    zh: '提交并查看结果',
    en: 'Submit & View Result',
  },
  reset: {
    zh: '清空重做',
    en: 'Reset',
  },
  disclaimer: {
    zh: '* 免责声明：本测试仅供娱乐与自我反思，不构成临床或诊断建议。',
    en: '* Disclaimer: This test is for entertainment and self-reflection only and is not clinical or diagnostic advice.',
  },
  legend: {
    zh: n => `第 ${n} 题`,
    en: n => `Question ${n}`,
  },
  unfinished: {
    zh: n => `还有题目未作答（第 ${n} 题）`,
    en: n => `Question ${n} is unanswered.`,
  },
};

// ====== Question bank (12 items; 3 per dimension) ======
const DIM_ORDER = ['connector', 'explorer', 'organizer', 'analyst'];

const QUESTIONS = [
  // connector ×3
  {
    text: {
      zh: '在新的社交场合里，你通常能很快破冰并与人建立联系。',
      en: 'In new social settings, you can quickly break the ice and connect with others.',
    },
    dim: 'connector',
  },
  {
    text: {
      zh: '遇到问题时，你更愿意和别人讨论，而不是独自思考。',
      en: 'When facing problems, you prefer discussing with others rather than thinking alone.',
    },
    dim: 'connector',
  },
  {
    text: {
      zh: '你喜欢在群聊或会议中主动发起话题。',
      en: 'You like to initiate topics in group chats or meetings.',
    },
    dim: 'connector',
  },

  // explorer ×3
  {
    text: {
      zh: '你享受尝试全新的工具、方法或路径。',
      en: 'You enjoy trying completely new tools, methods, or paths.',
    },
    dim: 'explorer',
  },
  {
    text: {
      zh: '面对未知或变化，你更多是兴奋而不是焦虑。',
      en: 'When facing the unknown or change, you feel more excited than anxious.',
    },
    dim: 'explorer',
  },
  {
    text: {
      zh: '你喜欢临时起意的安排，例如说走就走的小旅行。',
      en: 'You enjoy spur-of-the-moment plans, like spontaneous trips.',
    },
    dim: 'explorer',
  },

  // organizer ×3
  {
    text: {
      zh: '你会把待办事项拆解并安排到日程里逐一推进。',
      en: 'You break down to-do items and schedule them step by step.',
    },
    dim: 'organizer',
  },
  {
    text: {
      zh: '你更倾向于按计划一步步执行项目，少走捷径。',
      en: 'You tend to follow plans step by step, avoiding shortcuts.',
    },
    dim: 'organizer',
  },
  {
    text: {
      zh: '临时改计划会让你不适，甚至有些反感。',
      en: 'Last-minute changes to plans make you uncomfortable or even resentful.',
    },
    dim: 'organizer',
  },

  // analyst ×3
  {
    text: {
      zh: '做重要决策前，你会先收集尽可能多的事实和数据。',
      en: 'Before making important decisions, you gather as many facts and data as possible.',
    },
    dim: 'analyst',
  },
  {
    text: {
      zh: '你常用图表或数据来阐述观点。',
      en: 'You often use charts or data to explain your ideas.',
    },
    dim: 'analyst',
  },
  {
    text: {
      zh: '对于未经验证的结论，你会保持质疑并寻求证据。',
      en: 'You remain skeptical of unverified conclusions and seek evidence.',
    },
    dim: 'analyst',
  },
];

const LIKERT = [
  { value: 1, label: { zh: '非常不同意', en: 'Strongly disagree' } },
  { value: 2, label: { zh: '不同意', en: 'Disagree' } },
  { value: 3, label: { zh: '一般', en: 'Neutral' } },
  { value: 4, label: { zh: '同意', en: 'Agree' } },
  { value: 5, label: { zh: '非常同意', en: 'Strongly agree' } },
];

// ====== Render form ======
function renderQuestions() {
  const root = document.getElementById('questions');
  root.innerHTML = '';

  QUESTIONS.forEach((q, idx) => {
    const fs = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = UI.legend[LANG](idx + 1);
    fs.appendChild(legend);

    const label = document.createElement('div');
    label.className = 'q-label';
    label.textContent = q.text[LANG];
    fs.appendChild(label);

    const row = document.createElement('div');
    row.className = 'options';

    LIKERT.forEach(opt => {
      const wrap = document.createElement('label');
      wrap.className = 'opt';
      wrap.setAttribute('data-q', String(idx));
      wrap.setAttribute('data-v', String(opt.value));

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `q${idx}`;
      input.value = String(opt.value);

      // toggle UI class when checked
      input.addEventListener('change', () => {
        document
          .querySelectorAll(`.opt[data-q="${idx}"]`)
          .forEach(el => el.classList.remove('checked'));
        wrap.classList.add('checked');
      });

      const span = document.createElement('div');
      span.textContent = `${opt.label[LANG]} (${opt.value})`;

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
      alert(UI.unfinished[LANG](i + 1));
      return;
    }
  }

  // Aggregate scores
  const scores = { connector: 0, explorer: 0, organizer: 0, analyst: 0 };
  QUESTIONS.forEach((q, i) => {
    const val = parseInt(
      document.querySelector(`input[name="q${i}"]:checked`).value,
      10
    );
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
  document.getElementById('quizForm').reset();
  document.querySelectorAll('.opt').forEach(el => el.classList.remove('checked'));
}

// ====== Init ======
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.lang = LANG;
  document.title = `${UI.title[LANG]}｜Psychotest`;
  document.getElementById('pageTitle').textContent = UI.title[LANG];
  document.getElementById('pageSub').textContent = UI.subtitle[LANG];
  document.getElementById('submitBtn').textContent = UI.submit[LANG];
  document.getElementById('resetBtn').textContent = UI.reset[LANG];
  document.getElementById('disclaimer').textContent = UI.disclaimer[LANG];

  renderQuestions();
  document
    .getElementById('quizForm')
    .addEventListener('submit', computeAndRedirect);
  document.getElementById('resetBtn').addEventListener('click', resetForm);
});

