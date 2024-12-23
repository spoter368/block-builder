// src/costCalculator.js
import { placedBlocks } from './blockManager.js';

export function updateCostCalculator() {
  console.log('[costCalculator.js] Updating cost...');
  let totalCost = 0;
  const tally = {};

  placedBlocks.forEach((block) => {
    const { id, name, cost } = block;
    if (!tally[id]) {
      tally[id] = { count: 0, costEach: cost, name };
    }
    tally[id].count++;
  });

  let html = '';
  Object.keys(tally).forEach((blockId) => {
    const info = tally[blockId];
    const sub = info.count * info.costEach;
    totalCost += sub;
    html += `${info.count} x ${info.name} @ $${info.costEach} = $${sub}<br/>`;
  });
  html += `<b>Total Cost = $${totalCost}</b>`;

  const costDiv = document.getElementById('costCalculator');
  if (costDiv) costDiv.innerHTML = html;

  console.log(`[costCalculator.js] Cost updated. TotalCost = ${totalCost}`);
}
