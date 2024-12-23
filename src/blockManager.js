// src/blockManager.js
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { Block } from './Block.js';
import { scene } from './scene.js';
import { attemptSnapping } from './snapping.js';
import { updateCostCalculator } from './costCalculator.js';

export let placedBlocks = [];
export let activeBlock = null;

const loader = new OBJLoader();
const blockDataMap = new Map();

const METER_TO_FEET = 3.28084;

export function setActiveBlock(block) {
  console.log('[blockManager.js] setActiveBlock:', block ? block.name : null);

  // If picking up an existing block, we un-snap it + neighbor blocks
  if (block && placedBlocks.includes(block)) {
    console.log('[blockManager.js] This is an existing block. Un-snapping it + neighbors...');
    unSnapBlockAndNeighbors(block);
  }

  activeBlock = block;
}

/**
 * If a block is removed, or user picks it up to move it, we unsnap it and 
 * any blocks that might have been snapped to it. We do a distance check ~0.001 
 * to find AP pairs that might be matched.
 */
function unSnapBlockAndNeighbors(block) {
  // Un-snap the block's own AP
  block.markAttachmentPointsUnsnapped();

  // For each other block, if they had an AP within 0.001 of block's AP, unsnap it
  const blockAPs = block.getAttachmentPointsInWorld();
  placedBlocks.forEach((b) => {
    if (b === block) return;
    const otherAPs = b.getAttachmentPointsInWorld();
    for (let A of blockAPs) {
      for (let B of otherAPs) {
        const dist = A.position.distanceTo(B.position);
        if (dist < 0.001) {
          A.ref.isSnapped = false;
          B.ref.isSnapped = false;
          console.log('[blockManager.js] unSnapBlockAndNeighbors: dist<0.001 => unsnapping both');
        }
      }
    }
    b.markAttachmentPointsUnsnapped(); // forcibly re-enable snapping
  });
}

export function removeBlock(block) {
  console.log('[blockManager.js] removeBlock for:', block.name);
  scene.remove(block.object3D);
  placedBlocks = placedBlocks.filter((b) => b !== block);
  block.markAttachmentPointsUnsnapped();
  placedBlocks.forEach((b) => b.markAttachmentPointsUnsnapped());
  updateCostCalculator(); // cost might decrease if we were tracking negative? (not implemented here)
}

/**
 * finalizeActiveBlock => snap + add to placedBlocks
 * BUT only add cost if block.isNew
 */
export function finalizeActiveBlock() {
  if (!activeBlock) {
    console.log('[blockManager.js] finalizeActiveBlock: no activeBlock found.');
    return;
  }
  console.log('[blockManager.js] finalizeActiveBlock for:', activeBlock.name);

  attemptSnapping(activeBlock, placedBlocks);
  // If not already in placedBlocks, push it
  if (!placedBlocks.includes(activeBlock)) {
    placedBlocks.push(activeBlock);
    // Only once if block.isNew = true
    if (activeBlock.isNew) {
      activeBlock.isNew = false;
      updateCostCalculator(); // add cost
    }
  } else {
    console.log('[blockManager.js] This block was already in placedBlocks, not re-adding cost.');
  }

  // We do NOT clear activeBlock here necessarily if we want the block to remain selected
  // But let's do it. Then the scene logic can pick it up again if needed.
  activeBlock = null;
}

export async function loadBlocksJson() {
  console.log('[blockManager.js] loadBlocksJson...');
  const res = await fetch('blocks.json');
  if (!res.ok) {
    throw new Error('[blockManager.js] fetch blocks.json failed: ' + res.statusText);
  }
  const data = await res.json();
  data.forEach((d) => blockDataMap.set(d.id, d));
  return data;
}

export function createBlockList(blocksData) {
  console.log('[blockManager.js] createBlockList with data:', blocksData);
  const blockListEl = document.querySelector('.block-list');
  if (!blockListEl) {
    console.error('[blockManager.js] .block-list element not found!');
    return;
  }
  blockListEl.innerHTML = '';

  blocksData.forEach((b) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('block-item');
    itemDiv.textContent = b.name;
    if (b.previewImage) {
      const img = document.createElement('img');
      img.src = `images/${b.previewImage}`;
      itemDiv.appendChild(img);
    }

    itemDiv.setAttribute('draggable', true);
    itemDiv.dataset.blockId = b.id;
    itemDiv.addEventListener('dragstart', (evt) => {
      console.log('[blockManager.js] dragstart for block:', b.name);
      evt.dataTransfer.setData('application/block-id', b.id);
    });

    blockListEl.appendChild(itemDiv);
  });

  const rightPane = document.querySelector('.right-pane');
  if (rightPane) {
    rightPane.addEventListener('dragover', (evt) => {
      evt.preventDefault();
      rightPane.classList.add('drop-highlight');
    });
    rightPane.addEventListener('dragleave', () => {
      rightPane.classList.remove('drop-highlight');
    });
    rightPane.addEventListener('drop', onDropInRightPane);
  }
}

function onDropInRightPane(evt) {
  evt.preventDefault();
  console.log('[blockManager.js] onDropInRightPane triggered.');
  const rightPane = document.querySelector('.right-pane');
  if (rightPane) rightPane.classList.remove('drop-highlight');

  const blockId = evt.dataTransfer.getData('application/block-id');
  if (!blockId) {
    console.warn('[blockManager.js] No block ID from dataTransfer.');
    return;
  }
  const bData = blockDataMap.get(blockId);
  if (!bData) {
    console.warn('[blockManager.js] No block data for ID:', blockId);
    return;
  }

  createUnplacedBlock(bData);
}

function createUnplacedBlock(blockData) {
  console.log('[blockManager.js] createUnplacedBlock for:', blockData.name);
  loader.load(
    blockData.geometryFile,
    (objRoot) => {
      console.log('[blockManager.js] OBJ loaded for:', blockData.name);

      objRoot.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            polygonOffset: true,
            polygonOffsetFactor: 1,
            polygonOffsetUnits: 1
          });
        }
      });

      // scale
      objRoot.scale.set(METER_TO_FEET, METER_TO_FEET, METER_TO_FEET);

      const attachPts = (blockData.attachmentPoints || []).map((ap) => {
        return {
          position: new THREE.Vector3(
            ap.position.x / METER_TO_FEET,
            ap.position.y / METER_TO_FEET,
            ap.position.z / METER_TO_FEET
          ),
          vector: new THREE.Vector3(ap.vector.x, ap.vector.y, ap.vector.z),
          isSnapped: ap.isSnapped || false
        };
      });

      const newBlock = new Block({
        id: blockData.id,
        name: blockData.name,
        cost: blockData.cost || 0,
        object3D: objRoot,
        attachmentPoints: attachPts
      });

      // Place above floor
      objRoot.position.set(0, 1, 0);

      scene.add(objRoot);
      setActiveBlock(newBlock);

      console.log(`[blockManager.js] Created unplaced block: ${blockData.name}. Wait for mouseUp to keep it pinned, etc.`);
    },
    undefined,
    (err) => {
      console.error('[blockManager.js] OBJ load error:', err);
    }
  );
}
