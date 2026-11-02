const translations = {
  pt: {
    title: "Acessibilidade",
    secCorr: "Correcao (Para Daltonicos)",
    secSim: "Simulacao (Como Enxergam)",
    protanopia: "Protanopia (Vermelho)",
    protanomalia: "Protanomalia (Vermelho Parcial)",
    deuteranopia: "Deuteranopia (Verde)",
    deuteranomalia: "Deuteranomalia (Verde Parcial)",
    tritanopia: "Tritanopia (Azul/Amarelo)",
    tritanomalia: "Tritanomalia (Azul Parcial)",
    simProtanopia: "Protanopia (Vermelho)",
    simProtanomalia: "Protanomalia (Vermelho Parcial)",
    simDeuteranopia: "Deuteranopia (Verde)",
    simDeuteranomalia: "Deuteranomalia (Verde Parcial)",
    simTritanopia: "Tritanopia (Azul/Amarelo)",
    simTritanomalia: "Tritanomalia (Azul Parcial)",
    reset: "Desativar Filtros",
    langBtn: "EN"
  },
  en: {
    title: "Accessibility",
    secCorr: "Correction (For Color Blind)",
    secSim: "Simulation (How They See)",
    protanopia: "Protanopia (Red)",
    protanomalia: "Protanomalia (Partial Red)",
    deuteranopia: "Deuteranopia (Green)",
    deuteranomalia: "Deuteranomalia (Partial Green)",
    tritanopia: "Tritanopia (Blue/Yellow)",
    tritanomalia: "Tritanomalia (Partial Blue)",
    simProtanopia: "Protanopia (Red)",
    simProtanomalia: "Protanomalia (Partial Red)",
    simDeuteranopia: "Deuteranopia (Green)",
    simDeuteranomalia: "Deuteranomalia (Partial Green)",
    simTritanopia: "Tritanopia (Blue/Yellow)",
    simTritanomalia: "Tritanomalia (Partial Blue)",
    reset: "Disable Filters",
    langBtn: "PT"
  }
};

let currentLang = 'pt';

chrome.storage.sync.get(['lang'], (data) => {
  if (data.lang) {
    currentLang = data.lang;
  }
  updateTexts();
});

document.getElementById('btn-lang').addEventListener('click', () => {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  chrome.storage.sync.set({ lang: currentLang });
  updateTexts();
});

function updateTexts() {
  const t = translations[currentLang];
  document.getElementById('txt-title').innerText = t.title;
  document.getElementById('txt-sec-corr').innerText = t.secCorr;
  document.getElementById('txt-sec-sim').innerText = t.secSim;
  document.getElementById('btn-lang').innerText = t.langBtn;

  document.querySelector('[data-i18n="protanopia"]').innerText = t.protanopia;
  document.querySelector('[data-i18n="protanomalia"]').innerText = t.protanomalia;
  document.querySelector('[data-i18n="deuteranopia"]').innerText = t.deuteranopia;
  document.querySelector('[data-i18n="deuteranomalia"]').innerText = t.deuteranomalia;
  document.querySelector('[data-i18n="tritanopia"]').innerText = t.tritanopia;
  document.querySelector('[data-i18n="tritanomalia"]').innerText = t.tritanomalia;
  document.querySelector('[data-i18n="simProtanopia"]').innerText = t.simProtanopia;
  document.querySelector('[data-i18n="simProtanomalia"]').innerText = t.simProtanomalia;
  document.querySelector('[data-i18n="simDeuteranopia"]').innerText = t.simDeuteranopia;
  document.querySelector('[data-i18n="simDeuteranomalia"]').innerText = t.simDeuteranomalia;
  document.querySelector('[data-i18n="simTritanopia"]').innerText = t.simTritanopia;
  document.querySelector('[data-i18n="simTritanomalia"]').innerText = t.simTritanomalia;
  document.querySelector('[data-i18n="reset"]').innerText = t.reset;
}

const actions = [
  'correct-protanopia', 'correct-protanomalia', 
  'correct-deuteranopia', 'correct-deuteranomalia', 
  'correct-tritanopia', 'correct-tritanomalia',
  'sim-protanopia', 'sim-protanomalia',
  'sim-deuteranopia', 'sim-deuteranomalia',
  'sim-tritanopia', 'sim-tritanomalia'
];

actions.forEach(action => {
  const btn = document.getElementById(`btn-${action}`);
  if (btn) {
    btn.addEventListener('click', () => applyAndSaveMode(action));
  }
});

document.getElementById('btn-reset').addEventListener('click', () => applyAndSaveMode('reset'));

function applyAndSaveMode(action) {
  const valueToSave = (action === 'reset') ? null : action;
  
  chrome.storage.sync.set({ activeFilter: valueToSave }, () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (!activeTab) return;

      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        files: ['content.js']
      }, () => {
        if (chrome.runtime.lastError) return;
        chrome.tabs.sendMessage(activeTab.id, { action: action });
      });
    });
  });
}