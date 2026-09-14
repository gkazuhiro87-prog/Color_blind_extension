# Visual Accessibility & Daltonism Extension

A lightweight, bilingual (PT-BR / EN) browser extension designed for Chrome and Firefox that provides real-time color correction (Daltonization) and simulation modes for color vision deficiencies.

[English](#english) | [Português](#português)

---

<a name="english"></a>
## 🇬🇧 English

### Overview
This extension makes web browsing accessible for people with color vision deficiencies (Protanopia, Deuteranopia, and Tritanopia). Using high-performance SVG `feColorMatrix` filters, it applies non-destructive real-time visual modifications directly to web pages.

### Features
* **Full Spectrum Coverage:** Supports Protanopia, Deuteranopia, and Tritanopia, including both complete deficiencies and partial anomalies (Protanomalia, Deuteranomalia, Tritanomalia).
* **Correction & Simulation Modes:** 
  * **Correction:** Adjusts and redistributes color ranges to help users easily distinguish between problematic tones.
  * **Simulation:** Accurately renders how web pages appear to individuals with specific types of color blindness using scientific Brettel matrices.
* **Bilingual Interface:** Instantly toggle the popup menu language between English and Portuguese (PT-BR).
* **Automatic Persistence:** Saves your active filter choice using `chrome.storage.sync` (with cross-browser compatibility), reapplying it smoothly across tabs.

### Installation & Testing
* **Chrome:** Load the folder `daltonismo chrome` as an unpacked extension via `chrome://extensions/`.
* **Firefox:** Load it temporarily via `about:debugging#/runtime/this-firefox` using the `daltonismo firefox` folder.

---

<a name="português"></a>
## 🇧🇷 Português

### Visão Geral
Uma extensão de navegador leve e bilíngue (PT-BR / EN) para Chrome e Firefox que oferece correção de cores em tempo real (Daltonização) e modos de simulação para deficiências visuais de cores.

### Funcionalidades
* **Cobertura Completa do Espectro:** Suporta Protanopia, Deuteranopia e Tritanopia, abrangendo tanto perdas totais quanto anomalias parciais (Protanomalia, Deuteranomalia e Tritanomalia).
* **Modos de Correção e Simulação:**
  * **Correção:** Realoca e ajusta a gama de cores para facilitar a distinção de tons por daltônicos.
  * **Simulação:** Demonstra com precisão como páginas web são enxergadas por pessoas com diferentes tipos de daltonismo, utilizando matrizes científicas.
* **Interface Bilíngue:** Alterne instantaneamente o idioma do menu popup entre Português e Inglês.
* **Persistência Automática:** Salva a sua preferência de filtro usando armazenamento sincronizado, mantendo a configuração ativa entre abas.

### Instalação e Testes
* **Chrome:** Carregue a pasta `daltonismo chrome` como extensão não empacotada em `chrome://extensions/`.
* **Firefox:** Carregue temporariamente em `about:debugging#/runtime/this-firefox` usando a pasta `daltonismo firefox`.
