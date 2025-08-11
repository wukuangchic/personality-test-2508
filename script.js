// Translation data is loaded from translations.js and provides
// globals: LANG, UI, DIM_ORDER, QUESTIONS, LIKERT

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
  document.documentElement.dir = LANG === 'ar' ? 'rtl' : 'ltr';
  document.title = `${UI.title[LANG]}｜Psychotest`;
  document.getElementById('pageTitle').textContent = UI.title[LANG];
  document.getElementById('pageSub').textContent = UI.subtitle[LANG];
  document.getElementById('submitBtn').textContent = UI.submit[LANG];
  document.getElementById('resetBtn').textContent = UI.reset[LANG];
  document.getElementById('disclaimer').textContent = UI.disclaimer[LANG];
  document.getElementById('privacyLink').textContent = UI.privacy[LANG];
  document.getElementById('termsLink').textContent = UI.terms[LANG];
  document.getElementById('copyright').textContent = UI.copyright[LANG];

  renderQuestions();
  document
    .getElementById('quizForm')
    .addEventListener('submit', computeAndRedirect);
  document.getElementById('resetBtn').addEventListener('click', resetForm);
});

