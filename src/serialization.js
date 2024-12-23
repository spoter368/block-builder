// src/serialization.js
import LZString from 'lz-string';
import { placedBlocks } from './blockManager.js';
import { scene } from './scene.js';
import { Block } from './Block.js';
import * as THREE from 'three';

export function onSaveScene() {
  console.log('[serialization.js] onSaveScene triggered.');
  const data = placedBlocks.map((b) => ({
    id: b.id,
    name: b.name,
    cost: b.cost,
    geometryFile: b.geometryFile || '', // We'll store in the block if we want
    position: b.object3D.position.toArray(),
    rotation: b.object3D.rotation.toArray(),
    attachmentPoints: b.attachmentPoints.map((ap) => ({
      position: [ap.position.x, ap.position.y, ap.position.z],
      vector: [ap.vector.x, ap.vector.y, ap.vector.z],
      isSnapped: ap.isSnapped
    }))
  }));

  const jsonStr = JSON.stringify({ blocks: data });
  console.log('[serialization.js] Saving scene data:', jsonStr);
  const compressed = LZString.compressToBase64(jsonStr);
  navigator.clipboard.writeText(compressed).then(() => {
    console.log('[serialization.js] Copied to clipboard successfully.');
    const popup = document.getElementById('savePopup');
    if (popup) {
      popup.style.display = 'block';
      setTimeout(() => {
        popup.style.display = 'none';
      }, 5770);
    }
  });
}

/**
 * Load from the compressed text, re-load each block with the real OBJ
 */
export function onLoadScene() {
  console.log('[serialization.js] onLoadScene triggered.');
  const inputEl = document.getElementById('loadSceneInput');
  if (!inputEl) {
    console.error('[serialization.js] #loadSceneInput not found!');
    return;
  }
  const rawText = inputEl.value.trim();
  if (!rawText) {
    console.warn('[serialization.js] No text in loadSceneInput.');
    return;
  }

  let jsonStr;
  try {
    jsonStr = LZString.decompressFromBase64(rawText);
    console.log('[serialization.js] Decompressed result =', jsonStr);
    if (!jsonStr) {
      console.error('[serialization.js] Decompress gave null/empty result, possibly invalid base64?');
      return;
    }
  } catch (err) {
    console.error('[serialization.js] Error decompressing text:', err);
    return;
  }

  let parsed;
  try {
    parsed = JSON.parse(jsonStr);
  } catch (err) {
    console.error('[serialization.js] JSON parse error:', err);
    return;
  }
  if (!parsed.blocks) {
    console.error('[serialization.js] No "blocks" array in parsed data:', parsed);
    return;
  }

  // Clear existing
  console.log('[serialization.js] Clearing existing placed blocks...');
  placedBlocks.forEach((b) => scene.remove(b.object3D));
  placedBlocks.length = 0;

  // Re-load each block from geometryFile
  parsed.blocks.forEach((bInfo) => {
    console.log('[serialization.js] Recreating block from geometryFile:', bInfo.geometryFile);

    // We'll replicate the "createUnplacedBlock" logic, but set its final position/rotation:
    loadAndPlaceObj(bInfo);
  });

  console.log('[serialization.js] Scene loaded from input. Placed blocks:', placedBlocks.length);
}

/**
 * Similar to createUnplacedBlock, but we finalize the block's position & attachment points from the saved data
 */
function loadAndPlaceObj(bInfo) {
  // fetch the .obj using bInfo.geometryFile
  const loader = new THREE.OBJLoader();
  loader.load(
    bInfo.geometryFile,
    (objRoot) => {
      console.log('[serialization.js] OBJ loaded for:', bInfo.name);

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

      // scale from meters->feet
      objRoot.scale.set(3.28084, 3.28084, 3.28084);

      // Create the block
      const apList = bInfo.attachmentPoints.map((ap) => ({
        position: new THREE.Vector3(ap.position[0], ap.position[1], ap.position[2]),
        vector: new THREE.Vector3(ap.vector[0], ap.vector[1], ap.vector[2]),
        isSnapped: ap.isSnapped
      }));

      const newBlock = new Block({
        id: bInfo.id,
        name: bInfo.name,
        cost: bInfo.cost,
        object3D: objRoot,
        attachmentPoints: apList
      });

      // Position + rotation from data
      objRoot.position.fromArray(bInfo.position);
      objRoot.rotation.fromArray(bInfo.rotation);

      // This block is already "placed" => set isNew=false
      newBlock.isNew = false;

      // Add to scene
      scene.add(objRoot);
      placedBlocks.push(newBlock);
      console.log('[serialization.js] Block reloaded, placedBlocks count=', placedBlocks.length);
    },
    undefined,
    (err) => {
      console.error('[serialization.js] OBJ load error:', err);
    }
  );
}
