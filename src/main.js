// src/main.js

import { initScene, onKeyDown } from './scene.js';
import { loadBlocksJson, createBlockList } from './blockManager.js';
import { onSaveScene, onLoadScene } from './serialization.js';
import { updateCostCalculator } from './costCalculator.js';

console.log('[main.js] Starting app...');

initScene();
console.log('[main.js] Scene initialized.');

// Load blocks
loadBlocksJson()
  .then((blocksData) => {
    console.log('[main.js] blocks.json loaded:', blocksData);
    createBlockList(blocksData);
  })
  .catch((err) => {
    console.error('[main.js] Failed to load blocks.json:', err);
  });

// Hook up Save/Load
document.getElementById('saveSceneBtn').addEventListener('click', () => {
  console.log('[main.js] Save button clicked.');
  onSaveScene();
});
document.getElementById('loadSceneBtn').addEventListener('click', () => {
  console.log('[main.js] Load button clicked.');
  onLoadScene();
});

window.addEventListener('keydown', (e) => onKeyDown(e));

// Initial cost
updateCostCalculator();
