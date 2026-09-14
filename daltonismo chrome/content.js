const api = typeof browser !== 'undefined' ? browser : chrome;

function removeColorFilter() {
  const svgId = 'color-blindness-filter-svg';
  const styleId = 'color-blindness-style';

  const existingSvg = document.getElementById(svgId);
  const existingStyle = document.getElementById(styleId);

  if (existingSvg) {
    existingSvg.remove();
  }

  if (existingStyle) {
    existingStyle.remove();
  }
}

function applyColorFilter(type) {
  if (!type) {
    removeColorFilter();
    return;
  }

  const svgId = 'color-blindness-filter-svg';
  const styleId = 'color-blindness-style';

  removeColorFilter();

  let matrixValues = '';

  switch (type) {
    case 'correct-protanopia':
      matrixValues = '0.14, 0.86, 0.00, 0, 0,  0.00, 0.42, 0.58, 0, 0,  0.00, 0.70, 0.30, 0, 0,  0, 0, 0, 1, 0';
      break;
    case 'correct-protanomalia':
      matrixValues = '0.30, 0.70, 0.00, 0, 0,  0.10, 0.60, 0.30, 0, 0,  0.00, 0.30, 0.70, 0, 0,  0, 0, 0, 1, 0';
      break;
    case 'correct-deuteranopia':
      matrixValues = '0.43, 0.57, 0.00, 0, 0,  0.34, 0.66, 0.00, 0, 0,  0.00, 0.20, 0.80, 0, 0,  0, 0, 0, 1, 0';
      break;
    case 'correct-deuteranomalia':
      matrixValues = '0.60, 0.40, 0.00, 0, 0,  0.20, 0.80, 0.00, 0, 0,  0.00, 0.10, 0.90, 0, 0,  0, 0, 0, 1, 0';
      break;
    case 'correct-tritanopia':
      matrixValues = '0.97, 0.03, 0.00, 0, 0,  0.00, 0.77, 0.23, 0, 0,  0.00, 0.13, 0.87, 0, 0,  0, 0, 0, 1, 0';
      break;
    case 'correct-tritanomalia':
      matrixValues = '0.98, 0.02, 0.00, 0, 0,  0.00, 0.85, 0.15, 0, 0,  0.00, 0.08, 0.92, 0, 0,  0, 0, 0, 1, 0';
      break;
    case 'sim-protanopia':
      matrixValues = '0.567, 0.433, 0.000, 0, 0,  0.558, 0.442, 0.000, 0, 0,  0.000, 0.242, 0.758, 0, 0,  0, 0, 0, 1, 0';
      break;
    case 'sim-protanomalia':
      matrixValues = '0.817, 0.183, 0.000, 0, 0,  0.333, 0.667, 0.000, 0, 0,  0.000, 0.125, 0.875, 0, 0,  0, 0, 0, 1, 0';
      break;
    case 'sim-deuteranopia':
      matrixValues = '0.625, 0.375, 0.000, 0, 0,  0.700, 0.300, 0.000, 0, 0,  0.000, 0.300, 0.700, 0, 0,  0, 0, 0, 1, 0';
      break;
    case 'sim-deuteranomalia':
      matrixValues = '0.800, 0.200, 0.000, 0, 0,  0.258, 0.742, 0.000, 0, 0,  0.000, 0.142, 0.858, 0, 0,  0, 0, 0, 1, 0';
      break;
    case 'sim-tritanopia':
      matrixValues = '0.950, 0.050, 0.000, 0, 0,  0.000, 0.433, 0.567, 0, 0,  0.000, 0.475, 0.525, 0, 0,  0, 0, 0, 1, 0';
      break;
    case 'sim-tritanomalia':
      matrixValues = '0.967, 0.033, 0.000, 0, 0,  0.000, 0.733, 0.267, 0, 0,  0.000, 0.183, 0.817, 0, 0,  0, 0, 0, 1, 0';
      break;
    default:
      removeColorFilter();
      return;
  }

  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.id = svgId;
  svg.style.position = 'absolute';
  svg.style.width = '0';
  svg.style.height = '0';

  const filter = document.createElementNS(svgNS, 'filter');
  filter.id = 'daltonism-matrix-filter';

  const feColorMatrix = document.createElementNS(svgNS, 'feColorMatrix');
  feColorMatrix.setAttribute('type', 'matrix');
  feColorMatrix.setAttribute('values', matrixValues);

  filter.appendChild(feColorMatrix);
  svg.appendChild(filter);

  const root = document.body || document.documentElement;
  if (root) {
    root.appendChild(svg);
  }

  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = `
    html {
      filter: url(#daltonism-matrix-filter) !important;
    }
  `;

  const head = document.head || document.documentElement;
  if (head) {
    head.appendChild(style);
  }
}

api.storage.sync.get('activeFilter', (data) => {
  if (data.activeFilter) {
    applyColorFilter(data.activeFilter);
  }
});

api.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request && request.action === 'reset') {
    removeColorFilter();
    sendResponse({ ok: true });
    return true;
  }

  if (request && request.action) {
    applyColorFilter(request.action);
    sendResponse({ ok: true });
    return true;
  }

  return false;
});
