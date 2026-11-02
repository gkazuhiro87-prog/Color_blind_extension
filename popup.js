<<<<<<< HEAD
const api = typeof browser !== 'undefined' ? browser : chrome;

const translations = {
  pt: {
    title: 'Acessibilidade',
    secCorr: 'Correção (Para Daltônicos)',
    secSim: 'Simulação (Como Enxergam)',
    protanopia: 'Protanopia (Vermelho)',
    protanomalia: 'Protanomalia (Vermelho Parcial)',
    deuteranopia: 'Deuteranopia (Verde)',
    deuteranomalia: 'Deuteranomalia (Verde Parcial)',
    tritanopia: 'Tritanopia (Azul/Amarelo)',
    tritanomalia: 'Tritanomalia (Azul Parcial)',
    simProtanopia: 'Protanopia (Vermelho)',
    simProtanomalia: 'Protanomalia (Vermelho Parcial)',
    simDeuteranopia: 'Deuteranopia (Verde)',
    simDeuteranomalia: 'Deuteranomalia (Verde Parcial)',
    simTritanopia: 'Tritanopia (Azul/Amarelo)',
    simTritanomalia: 'Tritanomalia (Azul Parcial)',
    reset: 'Desativar Filtros',
    langBtn: 'EN'
  },
  en: {
    title: 'Accessibility',
    secCorr: 'Correction (For Color Blind)',
    secSim: 'Simulation (How They See)',
    protanopia: 'Protanopia (Red)',
    protanomalia: 'Protanomalia (Partial Red)',
    deuteranopia: 'Deuteranopia (Green)',
    deuteranomalia: 'Deuteranomalia (Partial Green)',
    tritanopia: 'Tritanopia (Blue/Yellow)',
    tritanomalia: 'Tritanomalia (Partial Blue)',
    simProtanopia: 'Protanopia (Red)',
    simProtanomalia: 'Protanomalia (Partial Red)',
    simDeuteranopia: 'Green',
    simDeuteranomalia: 'Partial Green',
    simTritanopia: 'Blue/Yellow',
    simTritanomalia: 'Partial Blue',
    reset: 'Disable Filters',
    langBtn: 'PT'
=======
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
>>>>>>> 950a9c5ee82d84fa35982a3c3793d372502d7aa5
  }
};

let currentLang = 'pt';

<<<<<<< HEAD
// Função auxiliar compatível com Callbacks (Chrome) e Promises (Firefox)
async function getStorage(key) {
  return new Promise((resolve) => {
    if (api.storage && api.storage.sync) {
      api.storage.sync.get(key, (data) => {
        resolve(data || {});
      });
    } else {
      resolve({});
    }
  });
}

async function setStorage(obj) {
  return new Promise((resolve) => {
    if (api.storage && api.storage.sync) {
      api.storage.sync.set(obj, () => resolve());
    } else {
      resolve();
    }
  });
}

async function initPopup() {
  const data = await getStorage(['lang']);
=======
chrome.storage.sync.get(['lang'], (data) => {
>>>>>>> 950a9c5ee82d84fa35982a3c3793d372502d7aa5
  if (data.lang) {
    currentLang = data.lang;
  }
  updateTexts();
<<<<<<< HEAD
}

document.getElementById('btn-lang').addEventListener('click', async () => {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  await setStorage({ lang: currentLang });
=======
});

document.getElementById('btn-lang').addEventListener('click', () => {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  chrome.storage.sync.set({ lang: currentLang });
>>>>>>> 950a9c5ee82d84fa35982a3c3793d372502d7aa5
  updateTexts();
});

function updateTexts() {
<<<<<<< HEAD
  const t = translations[currentLang] || translations.pt;
=======
  const t = translations[currentLang];
>>>>>>> 950a9c5ee82d84fa35982a3c3793d372502d7aa5
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
<<<<<<< HEAD
  'correct-protanopia', 'correct-protanomalia',
  'correct-deuteranopia', 'correct-deuteranomalia',
=======
  'correct-protanopia', 'correct-protanomalia', 
  'correct-deuteranopia', 'correct-deuteranomalia', 
>>>>>>> 950a9c5ee82d84fa35982a3c3793d372502d7aa5
  'correct-tritanopia', 'correct-tritanomalia',
  'sim-protanopia', 'sim-protanomalia',
  'sim-deuteranopia', 'sim-deuteranomalia',
  'sim-tritanopia', 'sim-tritanomalia'
];

<<<<<<< HEAD
actions.forEach((action) => {
  const button = document.getElementById(`btn-${action}`);
  if (button) {
    button.addEventListener('click', () => applyAndSaveMode(action));
  }
});

const resetButton = document.getElementById('btn-reset');
if (resetButton) {
  resetButton.addEventListener('click', () => applyAndSaveMode('reset'));
}

async function applyAndSaveMode(action) {
  const valueToSave = action === 'reset' ? null : action;
  await setStorage({ activeFilter: valueToSave });

  try {
    const tabs = await api.tabs.query({ active: true, currentWindow: true });
    const activeTab = tabs && tabs[0];
    if (!activeTab) return;

    // Tenta enviar a mensagem diretamente para o content script ativo
    try {
      await api.tabs.sendMessage(activeTab.id, { action: action });
    } catch (err) {
      // Se o content script não estiver injetado na aba, injeta-o agora
      if (api.scripting && api.scripting.executeScript) {
        await api.scripting.executeScript({
          target: { tabId: activeTab.id },
          files: ['content.js']
        });
        await api.tabs.sendMessage(activeTab.id, { action: action });
      }
    }
  } catch (error) {
    console.error("Erro ao aplicar filtro:", error);
  }
}

initPopup();
=======
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
>>>>>>> 950a9c5ee82d84fa35982a3c3793d372502d7aa5
