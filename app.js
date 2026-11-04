'use strict';
const { scenarios, categories, incidentData, quizQuestions, ui } = window.ATLAS_CONTENT;
const notebookURL = 'https://notebook.google.com/notebook/cb498f1d-897c-44f0-a179-e2a9420a075d';
const $ = selector => document.querySelector(selector);
const language = document.documentElement.lang;
let activeFilter = 'all', solved = new Set(), activeCategory = 0;
let quizIndex = 0, quizScore = 0, quizAnswered = false, quizSelection = null;
let restoredState = null;
try {
  const saved = JSON.parse(sessionStorage.getItem('data-atlas-language-state') || 'null');
  sessionStorage.removeItem('data-atlas-language-state');
  if (saved?.to === language) restoredState = saved;
} catch {}
if (restoredState) {
  if (['all','office','digital','sharing','rights'].includes(restoredState.filter)) activeFilter = restoredState.filter;
  solved = new Set((restoredState.solved || []).filter(id => scenarios.some(s => s.id === id)));
  if (Number.isInteger(restoredState.category) && restoredState.category >= 0 && restoredState.category < categories.length) activeCategory = restoredState.category;
  if (Number.isInteger(restoredState.quizIndex) && restoredState.quizIndex >= 0 && restoredState.quizIndex <= quizQuestions.length) quizIndex = restoredState.quizIndex;
  if (Number.isInteger(restoredState.quizScore) && restoredState.quizScore >= 0 && restoredState.quizScore <= quizIndex + 1) quizScore = restoredState.quizScore;
}

function renderScenarios() {
  const list = scenarios.filter(s => activeFilter === 'all' || s.group === activeFilter);
  $('#scenario-grid').innerHTML = list.map(s => `
    <button class="scenario-card" data-case="${s.id}">
      <span class="scenario-top"><span>${s.tag}</span><span class="scenario-icon" aria-hidden="true">${s.icon}</span></span>
      <h3>${s.title}</h3><p>${s.short}</p>
      <span class="scenario-bottom"><span class="${solved.has(s.id) ? 'scenario-done' : ''}">${solved.has(s.id) ? ui.reviewed : ui.decide}</span><span class="arrow" aria-hidden="true">↗</span></span>
    </button>`).join('');
  $('#case-count').textContent = `${list.length} ${list.length === 1 ? ui.singular : ui.plural} ${ui.explore}`;
  document.querySelectorAll('[data-filter]').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === activeFilter);
    b.setAttribute('aria-pressed', String(b.dataset.filter === activeFilter));
  });
  document.querySelectorAll('[data-case]').forEach(b => b.addEventListener('click', () => openScenario(b.dataset.case)));
}
document.querySelectorAll('[data-filter]').forEach(b => b.addEventListener('click', () => {
  activeFilter = b.dataset.filter;
  renderScenarios();
}));

const dialog = $('#scenario-dialog');
let previousCase;
function openScenario(id) {
  const s = scenarios.find(s => s.id === id);
  previousCase = id;
  $('#scenario-content').innerHTML = `
    <p class="dialog-tag">${ui.case} / ${s.tag}</p><h2 id="dialog-title" class="dialog-title">${s.title}</h2>
    <p class="dialog-story">${s.story}</p><p class="dialog-question">${ui.question}</p>
    <div class="answer-options">${s.options.map((o,i) => `<button class="answer-option" data-letter="${String.fromCharCode(65+i)}" data-case-answer="${i}">${o}</button>`).join('')}</div>
    <div id="case-feedback" aria-live="polite"></div>
    <p class="dialog-source">${ui.adapted} <a href="${notebookURL}" target="_blank" rel="noopener">Data Protection in Practice ↗</a></p>`;
  $('#scenario-content').querySelectorAll('[data-case-answer]').forEach(b => b.addEventListener('click', () => {
    const correct = Number(b.dataset.caseAnswer) === s.correct;
    $('#scenario-content').querySelectorAll('[data-case-answer]').forEach(x => {
      x.disabled = true;
      if (Number(x.dataset.caseAnswer) === s.correct) x.classList.add('correct');
    });
    if (!correct) b.classList.add('wrong');
    $('#case-feedback').innerHTML = `<div class="feedback ${correct ? '' : 'wrong'}"><b>${correct ? ui.right : ui.risk}</b>${s.explanation}</div>`;
    solved.add(s.id);
    renderScenarios();
  }));
  dialog.showModal();
}
$('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => {
  if (e.target !== dialog) return;
  const r = dialog.getBoundingClientRect();
  if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
});
dialog.addEventListener('close', () => document.querySelector(`[data-case="${previousCase}"]`)?.focus());

function renderCategory(index, focus = false) {
  activeCategory = index;
  const c = categories[index];
  document.querySelectorAll('[data-category]').forEach(b => {
    const selected = Number(b.dataset.category) === index;
    b.setAttribute('aria-selected', String(selected));
    b.tabIndex = selected ? 0 : -1;
  });
  $('#category-panel').setAttribute('aria-labelledby', `category-${index}`);
  $('#category-panel').innerHTML = `<p class="eyebrow">${c.label} / ${ui.category} 0${index+1}</p>
    <h3>${c.name}</h3><p>${c.description}</p>
    <div class="category-examples">${c.examples.map(x => `<span>${x}</span>`).join('')}</div>
    <div class="category-rule"><b>${ui.protect}</b><p>${c.rule}</p></div>`;
  if (focus) $(`#category-${index}`).focus();
}
$('#category-tabs').innerHTML = categories.map((c,i) => `<button class="category-tab" id="category-${i}" role="tab" data-category="${i}" aria-selected="${i===0}" aria-controls="category-panel" tabindex="${i===0?0:-1}"><span>0${i+1}</span>${c.name}<b aria-hidden="true">↗</b></button>`).join('');
document.querySelectorAll('[data-category]').forEach(b => {
  b.addEventListener('click', () => renderCategory(Number(b.dataset.category)));
  b.addEventListener('keydown', e => {
    if (!['ArrowDown','ArrowRight','ArrowUp','ArrowLeft','Home','End'].includes(e.key)) return;
    e.preventDefault();
    let i = Number(b.dataset.category);
    if (e.key === 'Home') i = 0;
    else if (e.key === 'End') i = categories.length-1;
    else i = (i + (['ArrowDown','ArrowRight'].includes(e.key) ? 1 : categories.length-1)) % categories.length;
    renderCategory(i, true);
  });
});

function renderIncident() {
  $('#incident-steps').innerHTML = incidentData[$('#incident-select').value].map(([title,body]) => `<li><div><h3>${title}</h3><p>${body}</p></div></li>`).join('');
}
$('#incident-select').addEventListener('change', renderIncident);
if (restoredState && incidentData[restoredState.incident]) $('#incident-select').value = restoredState.incident;

function renderQuiz() {
  quizAnswered = false;
  quizSelection = null;
  const q = quizQuestions[quizIndex];
  $('#quiz-content').innerHTML = `<div class="quiz-top"><span>${ui.quiz}</span><span>0${quizIndex+1} / 06</span></div>
    <div class="quiz-track"><span style="width:${quizIndex/quizQuestions.length*100}%"></span></div>
    <h3 tabindex="-1">${q.question}</h3>
    <div class="answer-options">${q.options.map((o,i) => `<button class="answer-option" data-letter="${String.fromCharCode(65+i)}" data-quiz-answer="${i}">${o}</button>`).join('')}</div>
    <div id="quiz-feedback"></div>`;
  document.querySelectorAll('[data-quiz-answer]').forEach(b => b.addEventListener('click', () => answerQuiz(Number(b.dataset.quizAnswer))));
}
function answerQuiz(index, restoring = false) {
  if (quizAnswered) return;
  quizAnswered = true;
  quizSelection = index;
  const q = quizQuestions[quizIndex], correct = index === q.correct;
  if (correct && !restoring) quizScore++;
  document.querySelectorAll('[data-quiz-answer]').forEach(b => {
    b.disabled = true;
    const n = Number(b.dataset.quizAnswer);
    if (n === q.correct) b.classList.add('correct');
    else if (n === index) b.classList.add('wrong');
  });
  $('#quiz-feedback').innerHTML = `<div class="feedback ${correct ? '' : 'wrong'}"><b>${correct ? ui.correct : ui.safer}</b>${q.explanation}<br>
    <button class="button dark" id="quiz-next">${quizIndex === 5 ? ui.results : ui.next} <span>→</span></button></div>`;
  $('#quiz-next').addEventListener('click', () => {
    quizIndex++;
    if (quizIndex < quizQuestions.length) renderQuiz();
    else renderResult();
    $('#quiz-content h3').focus({preventScroll: true});
  });
}
function renderResult() {
  $('#quiz-content').innerHTML = `<div class="quiz-result"><p class="eyebrow">${ui.complete}</p>
    <div class="quiz-result-number">${quizScore}<span> / 6</span></div>
    <h3 tabindex="-1">${quizScore === 6 ? ui.perfect : quizScore >= 4 ? ui.good : ui.learn}</h3>
    <p>${ui.exercise} ${quizScore === 6 ? ui.apply : ui.review}</p>
    <button class="button dark" id="quiz-restart">${ui.retry} <span>↻</span></button><a class="case-status" href="#scenarios">${ui.back}</a></div>`;
  $('#quiz-restart').addEventListener('click', () => { quizIndex = 0; quizScore = 0; renderQuiz(); });
}

function dayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
}
let habitDay = dayKey(), habitStore = {};
try {
  const saved = JSON.parse(localStorage.getItem('data-atlas-habits') || '{}');
  if (saved.day === habitDay && saved.values && typeof saved.values === 'object') habitStore = saved.values;
} catch {}
function updateHabitCount() { $('#habit-number').textContent = `${document.querySelectorAll('[data-habit]:checked').length} / 5`; }
document.querySelectorAll('[data-habit]').forEach(b => {
  b.checked = !!habitStore[b.dataset.habit];
  b.addEventListener('change', () => {
    habitStore[b.dataset.habit] = b.checked;
    try { localStorage.setItem('data-atlas-habits', JSON.stringify({day:habitDay,values:habitStore})); } catch {}
    updateHabitCount();
  });
});
function refreshHabitDay() {
  if (dayKey() === habitDay) return;
  habitDay = dayKey(); habitStore = {};
  document.querySelectorAll('[data-habit]').forEach(b => b.checked = false);
  updateHabitCount();
}
document.addEventListener('visibilitychange', refreshHabitDay);
setInterval(refreshHabitDay, 60000);

function closeMenu() {
  $('.header nav').classList.remove('open');
  $('#menu-toggle').setAttribute('aria-expanded','false');
  $('#menu-toggle').setAttribute('aria-label',ui.openMenu);
}
$('#menu-toggle').addEventListener('click', () => {
  const open = $('.header nav').classList.toggle('open');
  $('#menu-toggle').setAttribute('aria-expanded',String(open));
  $('#menu-toggle').setAttribute('aria-label',open ? ui.closeMenu : ui.openMenu);
});
$('.header nav').querySelectorAll('a').forEach(a => a.addEventListener('click',closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
document.querySelectorAll('[data-language]').forEach(a => a.addEventListener('click', e => {
  // Keep links usable in new tabs and when browser storage is unavailable.
  if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
  if (a.dataset.language === language) { e.preventDefault(); return; }
  let currentSection = '';
  let largestVisibleArea = 0;
  const headerBottom = $('.header').getBoundingClientRect().bottom;
  for (const section of document.querySelectorAll('main section')) {
    const bounds = section.getBoundingClientRect();
    const visibleArea = Math.max(0, Math.min(bounds.bottom,innerHeight)-Math.max(bounds.top,headerBottom));
    if (visibleArea > largestVisibleArea) { currentSection = section.id; largestVisibleArea = visibleArea; }
  }
  const target = new URL(a.href);
  target.hash = currentSection;
  a.href = target.href;
  try {
    localStorage.setItem('data-atlas-language',a.dataset.language);
    sessionStorage.setItem('data-atlas-language-state',JSON.stringify({to:a.dataset.language,filter:activeFilter,solved:[...solved],category:activeCategory,incident:$('#incident-select').value,quizIndex,quizScore,quizAnswered,quizSelection}));
  } catch {}
}));
function updateProgress() {
  const max = document.documentElement.scrollHeight-innerHeight;
  $('#reading-progress').style.width = `${max>0?scrollY/max*100:0}%`;
}
addEventListener('scroll',updateProgress,{passive:true});
addEventListener('resize', () => {
  $('#category-tabs').setAttribute('aria-orientation',matchMedia('(max-width: 700px)').matches ? 'horizontal' : 'vertical');
  updateProgress();
});
$('#category-tabs').setAttribute('aria-orientation',matchMedia('(max-width: 700px)').matches ? 'horizontal' : 'vertical');
renderScenarios(); renderCategory(activeCategory); renderIncident();
if (quizIndex === quizQuestions.length) renderResult();
else {
  renderQuiz();
  if (restoredState?.quizAnswered && Number.isInteger(restoredState.quizSelection) && restoredState.quizSelection >= 0 && restoredState.quizSelection < quizQuestions[quizIndex].options.length) answerQuiz(restoredState.quizSelection,true);
}
updateHabitCount(); updateProgress();
