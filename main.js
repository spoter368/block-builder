import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import LZString from 'lz-string';

// GLOBALS
let scene, camera, renderer;
let floorMesh;
let controls;
let blocksData = [];
let placedBlocks = [];

let activeBlock = null;

let mouseDownPos = new THREE.Vector2();
let mouseDownTime = 0;

let currentRoofMesh = null; // store the roof we place
let roofChoice = "NONE"; // store roof choice in nice text for saving
let roofRotation = 0; // store rotation of the roof for saving

// Roof constants
const SOFFIT_LENGTH = 1.0;      // how much each roof overhangs bounding box in X/Z
const SOFFIT_THICKNESS = 0.4; // how thick each soffit piece is in the y axis
const OFFSET_RATIO = 0.7;       // 70% for the bigger half, 30% for smaller half
const slopeDeg = 14.04;         // 3/12 slope in degrees
const slopeAngle = slopeDeg * Math.PI / 180; // slope in radians

// Blueprint constants
const BLUEPRINT_WIREFRAME_WIDTH = 5; // px line thickness for the block outlines
const BLUEPRINT_SCALE_PX_PER_UNIT = 60; // 60px = 1 unit in the scene


// For showing all un-snapped attachment points in the scene
let sceneAttachmentHelpers = new THREE.Group();
sceneAttachmentHelpers.name = 'sceneAttachmentHelpers';

// INIT
initScene();
loadBlocks();
initRoofRadios();
initBlueprintExport();

// 1) SCENE SETUP
function initScene() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xcccccc);

  // CAMERA
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(-30, 30, 30);
  camera.lookAt(0, 0, 0);

  // RENDERER
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth * 0.75, window.innerHeight);
  document.querySelector('.right-pane').appendChild(renderer.domElement);

  // ORBIT CONTROLS
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.update();

  // LIGHTS
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(5, 10, 7);
  scene.add(dirLight);

  // FLOOR
  const floorGeo = new THREE.PlaneGeometry(50, 50);
  const floorMat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
  floorMesh = new THREE.Mesh(floorGeo, floorMat);
  floorMesh.rotation.x = -Math.PI / 2;
  scene.add(floorMesh);

  // Scene-level attachment group
  scene.add(sceneAttachmentHelpers);

  // EVENTS
  renderer.domElement.addEventListener('mousemove', onMouseMove);
  renderer.domElement.addEventListener('mousedown', onMouseDown);
  renderer.domElement.addEventListener('mouseup', onMouseUp);
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('resize', onWindowResize);

  // UI for Save/Load
  document.getElementById('saveSceneBtn').addEventListener('click', onSaveScene);
  document.getElementById('loadSceneBtn').addEventListener('click', onLoadScene);

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

function onWindowResize() {
  const w = window.innerWidth * 0.75;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}

// 2) LOAD BLOCKS + LEFT PANE
async function loadBlocks() {
  try {
    const res = await fetch('blocks.json');
    blocksData = await res.json();
    createCategorySections(blocksData);
  } catch (err) {
    console.error('Failed to load blocks.json:', err);
  }
}

/**
 * Dynamically create collapsible sections for each category key,
 * each collapsed by default, with a plus/minus indicator in CSS.
 */
function createCategorySections(blocksByCat) {
  const container = document.getElementById('categoryContainer');
  if (!container) {
    console.warn('#categoryContainer not found in HTML!');
    return;
  }
  container.innerHTML = '';

  Object.keys(blocksByCat).forEach(categoryName => {
    // 1) A wrapper for the entire collapsible section
    const sectionDiv = document.createElement('div');
    sectionDiv.classList.add('collapsible-section');

    // 2) The collapsible header
    const header = document.createElement('h3');
    header.classList.add('collapsible-header', 'collapsible');
    header.dataset.collapsed = 'true';
    header.textContent = categoryName;

    header.addEventListener('click', () => {
      const isCollapsed = header.dataset.collapsed === 'true';
      if (isCollapsed) {
        contentDiv.style.display = 'block';
        header.dataset.collapsed = 'false';
        header.classList.add('active');
      } else {
        contentDiv.style.display = 'none';
        header.dataset.collapsed = 'true';
        header.classList.remove('active');
      }
    });

    // 3) Collapsible content
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('collapsible-content');
    contentDiv.style.display = 'none'; // collapsed by default

    // 4) The block-list container
    const blockListDiv = document.createElement('div');
    blockListDiv.classList.add('block-list');

    // 5) Populate blockList
    blocksByCat[categoryName].forEach(block => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('block-item'); // We'll style this as a "card"

      // If there's an image, add an <img> on the left
      if (block.previewImage) {
        const img = document.createElement('img');
        img.src = block.previewImage;
        img.alt = block.name;
        img.classList.add('block-img');
        itemDiv.appendChild(img);
      }

      // A container for text details
      const detailsDiv = document.createElement('div');
      detailsDiv.classList.add('block-details');

      // Name in bigger text
      const nameEl = document.createElement('div');
      nameEl.classList.add('block-name');
      nameEl.textContent = block.name || 'Unnamed Block';

      detailsDiv.appendChild(nameEl);

      // Price (if block has a cost)
      if (block.cost != null) {
        const priceEl = document.createElement('div');
        priceEl.classList.add('block-price');
        priceEl.textContent = `$${block.cost}`;
        detailsDiv.appendChild(priceEl);
      }


      itemDiv.appendChild(detailsDiv);

      // Drag & drop
      itemDiv.setAttribute('draggable', true);
      itemDiv.dataset.blockId = block.id;
      itemDiv.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('application/block-id', block.id);
      });

      blockListDiv.appendChild(itemDiv);
    });

    contentDiv.appendChild(blockListDiv);

    // 6) Put the header & content into section
    sectionDiv.appendChild(header);
    sectionDiv.appendChild(contentDiv);

    // 7) Add to container
    container.appendChild(sectionDiv);
  });
}

function initBlueprintExport() {
  const btn = document.getElementById('exportBlueprintBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    exportBlueprintPNG();
  });
}

// RIGHT-PANE DROP
const rightPane = document.querySelector('.right-pane');
rightPane.addEventListener('dragover', (e) => {
  e.preventDefault();
  rightPane.classList.add('drop-highlight');
});
rightPane.addEventListener('dragleave', () => {
  rightPane.classList.remove('drop-highlight');
});
rightPane.addEventListener('drop', (e) => {
  e.preventDefault();
  rightPane.classList.remove('drop-highlight');

  const blockId = e.dataTransfer.getData('application/block-id');
  if (!blockId) return;

  let foundBlock = null;
  for (let categoryKey in blocksData) {
    const arr = blocksData[categoryKey];
    const matched = arr.find(b => b.id === blockId);
    if (matched) {
      foundBlock = matched;
      break;
    }
  }

  if (!foundBlock) {
    console.warn('Block not found in blocksData for ID:', blockId);
    return;
  }

  createBlockInScene(foundBlock, e);
});

function setBlockAndOutlineColors(block, color, outlineColor) {
  // For each mesh child, apply normal material + edges
  block.traverse(child => {
    if (child.isMesh) {
      // 1) Opaque material
      child.material = new THREE.MeshStandardMaterial({
        color: color,
        side: THREE.DoubleSide,
      });

      // 2) Add edges geometry for black outline
      addEdgeOutline(child, outlineColor);
    }
  });
}

// 3) CREATE BLOCK IN SCENE
function createBlockInScene(blockData, e) {
  // Remove old activeBlock if any
  if (activeBlock) {
    scene.remove(activeBlock);
    activeBlock = null;
  }

  const loader = new OBJLoader();
  loader.load(
    blockData.geometryFile,
    (objRoot) => {
      setBlockAndOutlineColors(objRoot, 0xcd7837, 0x6f3101);

      // Scale from meters->feet
      // For some reason, the y axis is disproportionately large, but idk why
      objRoot.scale.set(3.28084, 2.45, 3.28084);
      objRoot.position.set(0, 0, 0);

      // userData
      objRoot.userData.blockId = blockData.id;
      objRoot.userData.blockName = blockData.name;
      objRoot.userData.cost = blockData.cost || 0;
      objRoot.userData.blueprintName = blockData.blueprintName;
      objRoot.userData.blueprintNameOffset = blockData.blueprintNameOffset;

      // Build attachmentPoints
      if (Array.isArray(blockData.attachmentPoints)) {
        objRoot.userData.attachmentPoints = blockData.attachmentPoints.map(ap => {
          const snappedVal = (ap.isSnapped === undefined) ? false : ap.isSnapped;
          return {
            position: new THREE.Vector3(
              ap.position.x / 3.28084,
              ap.position.y / 3.28084,
              ap.position.z / 3.28084
            ),
            vector: new THREE.Vector3(ap.vector.x, ap.vector.y, ap.vector.z),
            isSnapped: snappedVal
          };
        });
      } else {
        objRoot.userData.attachmentPoints = [];
      }

      scene.add(objRoot);
      activeBlock = objRoot;

      const intersection = getFloorIntersection(e);
      if (intersection) {
        activeBlock.position.copy(intersection.point);
      }

      showAllUnsnappedAttachmentPoints();
    },
    undefined,
    (err) => {
      console.error('Error loading OBJ:', err);
    }
  );

}

/**
 * Helper to add EdgesGeometry-based outline.
 * This creates a new LineSegments child named "edgesOutline"
 * so we can toggle it on/off easily.
 */
function addEdgeOutline(mesh, color = 0x000000) {
  if (!mesh.geometry) return;

  const edgesGeo = new THREE.EdgesGeometry(mesh.geometry, 5);
  const lineMat = new THREE.LineBasicMaterial({ color });
  const outline = new THREE.LineSegments(edgesGeo, lineMat);
  outline.name = 'edgesOutline';

  // So the outline is drawn over the mesh
  outline.renderOrder = 999;
  outline.material.depthTest = true;

  outline.raycast = () => { };

  // Add as a child of the mesh
  mesh.add(outline);
}

// SHOW ALL UNSNAPPED POINTS
function showAllUnsnappedAttachmentPoints() {
  sceneAttachmentHelpers.clear();

  placedBlocks.forEach(b => addAttachmentHelpersForBlock(b, sceneAttachmentHelpers));
  if (activeBlock) {
    addAttachmentHelpersForBlock(activeBlock, sceneAttachmentHelpers);
  }
}

/**
 * Red sphere + green arrow for each un-snapped attachment
 */
function addAttachmentHelpersForBlock(blockObj, containerGroup) {
  const attPoints = blockObj.userData.attachmentPoints || [];
  attPoints.forEach(ap => {
    if (ap.isSnapped) return;

    const worldPos = ap.position.clone();
    blockObj.localToWorld(worldPos);

    const worldDir = ap.vector.clone().applyQuaternion(blockObj.quaternion).normalize();

    // sphere
    const sGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const sMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const sMesh = new THREE.Mesh(sGeo, sMat);
    sMesh.position.copy(worldPos);

    // arrow
    const arrowLen = 0.5;
    const arrowHelper = new THREE.ArrowHelper(worldDir, worldPos, arrowLen, 0x00ff00);

    containerGroup.add(sMesh);
    containerGroup.add(arrowHelper);
  });
}

// 4) MOUSE / KEY
function onMouseMove(event) {
  if (!activeBlock) return;

  const intersection = getFloorIntersection(event);
  if (intersection) {
    activeBlock.position.copy(intersection.point);
  }
  showAllUnsnappedAttachmentPoints();
}

function raycastToCheckForBlock(e) {
  const rect = renderer.domElement.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(new THREE.Vector2(x, y), camera);

  let allMeshes = [];
  placedBlocks.forEach(obj => {
    obj.traverse(child => {
      if (child.isMesh) allMeshes.push(child);
    });
  });
  const hits = raycaster.intersectObjects(allMeshes, true);
  if (hits.length > 0) return hits[0].object.parent;
  return null;
}

let potentialTargetBlock = null;

function onMouseDown(event) {
  mouseDownPos.set(event.clientX, event.clientY);
  mouseDownTime = performance.now();
  if (!activeBlock) {
    potentialTargetBlock = raycastToCheckForBlock(event)
  }
}

function onMouseUp(event) {
  const dist = Math.hypot(event.clientX - mouseDownPos.x, event.clientY - mouseDownPos.y);
  const timeDiff = performance.now() - mouseDownTime;

  // user clicked quickly and did not move mouse
  if (dist < 5 && timeDiff < 1000) {
    if (activeBlock) {
      // user is attempting to place an active block
      handleSnapping(activeBlock, 'snap');
      placedBlocks.push(activeBlock);
      setBlockAndOutlineColors(activeBlock, 0xffffff, 0x000000);
      updateCostCalculator();
      showAllUnsnappedAttachmentPoints();

      activeBlock = null;
    } else {
      // user might be attempting to pick up a block
      let tmp = raycastToCheckForBlock(event);
      // if the block they released their mouse over was the same as the one they placed their mouse down over:
      if (tmp?.uuid && tmp.uuid === potentialTargetBlock.uuid) {
        // grab the block, strip it out of the placedBlocks list
        activeBlock = tmp;
        placedBlocks = placedBlocks.filter(block => block.uuid != activeBlock.uuid)
        handleSnapping(activeBlock, 'unsnap')
        setBlockAndOutlineColors(activeBlock, 0xcd7837, 0x6f3101);
        updateCostCalculator();
      }
    }

  }
}

function onKeyDown(event) {
  if (activeBlock) {
    if (event.key.toLowerCase() === 'r') {
      if (event.shiftKey) {
        activeBlock.rotateY(-Math.PI / 2);
      } else {
        activeBlock.rotateY(Math.PI / 2);
      }
      showAllUnsnappedAttachmentPoints();
    } else if (event.key === "Delete") {
      deleteActiveBlock();
    }
  } else { // no active block, rotate roof
    if (event.key.toLowerCase() === 'r') {
      if (event.shiftKey) {
        if (roofRotation < 3) {
          roofRotation++;
        } else {
          roofRotation = 0;
        }
      } else {
        if (roofRotation > 0) {
          roofRotation--;
        } else {
          roofRotation = 3;
        }
      }
      handleRoofChoice(roofChoice);
    }
  }

}

function deleteActiveBlock() {
  scene.remove(activeBlock);
  activeBlock = null;
  showAllUnsnappedAttachmentPoints();
}

// 5) RAYCAST UTILITY
function getFloorIntersection(event) {
  const rect = renderer.domElement.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  const mouseVec = new THREE.Vector2(x, y);
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouseVec, camera);

  const objectsToCheck = [floorMesh, ...placedBlocks];
  const intersects = raycaster.intersectObjects(objectsToCheck, true);
  if (intersects.length > 0) {
    return intersects[0];
  }
  return null;
}

function handleSnapping(activeObj, mode) {
  const activePoints = activeObj.userData.attachmentPoints || [];

  // Convert local to world coords for activeObj
  const worldActive = activePoints.map(ap => {
    const wp = ap.position.clone();
    activeObj.localToWorld(wp);
    const wv = ap.vector.clone().applyQuaternion(activeObj.quaternion).normalize();
    return { position: wp, vector: wv, ref: ap };
  });

  const candidates = [];

  // For each placed block in the scene
  for (let i = 0; i < placedBlocks.length; i++) {
    const other = placedBlocks[i];
    if (other === activeObj) continue; // skip self

    // Convert local to world for 'other' block
    const otherPoints = other.userData.attachmentPoints || [];
    const worldOther = otherPoints.map(op => {
      const wp = op.position.clone();
      other.localToWorld(wp);
      const wv = op.vector.clone().applyQuaternion(other.quaternion).normalize();
      return { position: wp, vector: wv, ref: op };
    });

    // Compare each point in activeObj to each point in other block
    for (let A of worldActive) {
      // If mode===snap and A is already snapped, skip
      // If mode===unsnap but A is not snapped, skip
      if ((mode === 'snap' && A.ref.isSnapped) ||
        (mode === 'unsnap' && !A.ref.isSnapped)) {
        continue;
      }

      for (let B of worldOther) {
        // same skip logic for other block's points
        if ((mode === 'snap' && B.ref.isSnapped) ||
          (mode === 'unsnap' && !B.ref.isSnapped)) {
          continue;
        }

        // Distance + dot check
        const dist = A.position.distanceTo(B.position);
        if (dist < 0.77) {
          const dot = A.vector.dot(B.vector);
          // If we are snapping => look for dot <= -0.99
          // If we are unsnapping => you might only consider pairs that are definitely snapped 
          // (like dot <= -0.99). Or you can skip the dot check if you want to forcibly unsnap everything.
          if (dot <= -0.99) {
            // This pair is a candidate
            const offset = B.position.clone().sub(A.position);
            candidates.push({ dist, A, B, offset });
          }
        }
      }
    }
  }

  // If no candidates, just return
  if (candidates.length === 0) return;

  // If we are snapping, find the closest candidate to actually perform the "move"
  if (mode === 'snap') {
    let minDist = Infinity;
    let chosen = null;
    for (let c of candidates) {
      if (c.dist < minDist) {
        minDist = c.dist;
        chosen = c;
      }
    }
    // Move the activeObj to align the chosen points
    activeObj.position.add(chosen.offset);
  }

  // Mark the pairs as snapped or unsnapped
  // If snapping => set isSnapped = true on both
  // If unsnapping => set isSnapped = false
  for (let c of candidates) {
    if (mode === 'snap') {
      c.A.ref.isSnapped = true;
      c.B.ref.isSnapped = true;
    } else if (mode === 'unsnap') {
      c.A.ref.isSnapped = false;
      c.B.ref.isSnapped = false;
    }
  }
}


// 7) COST CALCULATOR
function updateCostCalculator() {
  const tally = {};
  placedBlocks.forEach(obj => {
    const blockId = obj.userData.blockId;
    const costEach = obj.userData.cost || 0;
    const name = obj.userData.blockName || 'Unknown';

    if (!tally[blockId]) {
      tally[blockId] = { count: 0, costEach, name };
    }
    tally[blockId].count++;
  });

  let totalCost = 0;
  let lines = '';
  Object.keys(tally).forEach(blockId => {
    const info = tally[blockId];
    const sub = info.count * info.costEach;
    totalCost += sub;
    lines += `${info.count} x ${info.name} @ $${info.costEach} = $${sub}<br/>`;
  });
  lines += `<b>Total Cost = $${totalCost}</b>`;

  const costDiv = document.getElementById('costCalculator');
  if (costDiv) costDiv.innerHTML = lines;
}

// 8) SERIALIZE / DESERIALIZE with COMPRESSION
function serializeScene() {
  const data = placedBlocks.map(block => {
    const blockId = block.userData.blockId;
    const blockName = block.userData.blockName;
    const cost = block.userData.cost || 0;
    const blueprintName = block.userData.blueprintName;
    const blueprintNameOffset = block.userData.blueprintNameOffset;

    const pos = block.position.clone();
    const quat = block.quaternion.clone();
    const euler = new THREE.Euler().setFromQuaternion(quat, 'XYZ');

    const originalAPs = block.userData.attachmentPoints || [];
    const apData = originalAPs.map(ap => {
      return {
        position: { x: ap.position.x, y: ap.position.y, z: ap.position.z },
        vector: { x: ap.vector.x, y: ap.vector.y, z: ap.vector.z },
        isSnapped: ap.isSnapped
      };
    });

    return {
      blockId,
      blockName,
      cost,
      blueprintName,
      blueprintNameOffset,
      position: { x: pos.x, y: pos.y, z: pos.z },
      rotation: { x: euler.x, y: euler.y, z: euler.z },
      attachmentPoints: apData
    };
  });

  const jsonStr = JSON.stringify({ blocks: data, roof: roofChoice, roofRot: roofRotation });
  const compressed = LZString.compressToBase64(jsonStr);
  return compressed;
}

function onSaveScene() {
  const compressed = serializeScene();
  navigator.clipboard.writeText(compressed).then(() => {
    const popup = document.getElementById('savePopup');
    if (!popup) return;
    popup.style.display = 'block';
    setTimeout(() => {
      popup.style.display = 'none';
    }, 5770);
  });
}

async function onLoadScene() {
  const inputEl = document.getElementById('loadSceneInput');
  if (!inputEl) return;
  const rawText = inputEl.value.trim();
  if (!rawText) return;

  let jsonStr;
  try {
    jsonStr = LZString.decompressFromBase64(rawText);
    if (!jsonStr) {
      console.error('Failed to decompress data (invalid base64?).');
      return;
    }
  } catch (err) {
    console.error('Error decompressing data:', err);
    return;
  }

  let parsed;
  try {
    parsed = JSON.parse(jsonStr);
  } catch (err) {
    console.error('Failed to parse scene JSON:', err);
    return;
  }
  if (!parsed.blocks || !Array.isArray(parsed.blocks)) {
    console.error('Malformed scene data: missing "blocks" array.');
    return;
  }

  // Clear existing
  placedBlocks.forEach(b => scene.remove(b));
  placedBlocks = [];

  // Recreate blocks sequentially
  for (const blockInfo of parsed.blocks) {
    await recreateBlockFromData(blockInfo);
  }

  // After all blocks are recreated, update and handle roof
  updateCostCalculator();
  showAllUnsnappedAttachmentPoints();
  roofRotation = parsed.roofRot;
  const roofRadio = document.querySelector(`input[name="roofChoiceInput"][value="${parsed.roof}"]`);
  roofRadio.checked = true;
  roofRadio.dispatchEvent(new Event('change'));
}

function loadOBJWithPromise(loader, file) {
  return new Promise((resolve, reject) => {
    loader.load(
      file,
      (obj) => resolve(obj), // Resolve the promise with the loaded object
      undefined, // onProgress
      (error) => reject(error) // Reject the promise if an error occurs
    );
  });
}

async function recreateBlockFromData(blockInfo) {
  let blockDef = null;
  for (let categoryKey in blocksData) {
    const arr = blocksData[categoryKey];
    const matched = arr.find(b => b.id === blockInfo.blockId);
    if (matched) {
      blockDef = matched;
      break;
    }
  }

  if (!blockDef) {
    console.warn('Block not found in blocksData for ID:', blockInfo.blockId);
    return;
  }

  const loader = new OBJLoader();

  try {
    // Wait for the object to load
    const objRoot = await loadOBJWithPromise(loader, blockDef.geometryFile);

    // Traverse and process the loaded object
    objRoot.traverse(child => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          side: THREE.DoubleSide,
        });
        addEdgeOutline(child, 0x000000);
      }
    });

    objRoot.scale.set(3.28084, 3.28084, 3.28084);
    objRoot.position.set(
      blockInfo.position.x,
      blockInfo.position.y,
      blockInfo.position.z
    );
    const euler = new THREE.Euler(blockInfo.rotation.x, blockInfo.rotation.y, blockInfo.rotation.z, 'XYZ');
    objRoot.quaternion.setFromEuler(euler);

    objRoot.userData.blockId = blockInfo.blockId;
    objRoot.userData.blockName = blockInfo.blockName;
    objRoot.userData.cost = blockInfo.cost;
    objRoot.userData.blueprintName = blockInfo.blueprintName;
    objRoot.userData.blueprintNameOffset = blockInfo.blueprintNameOffset;
    objRoot.userData.attachmentPoints = (blockInfo.attachmentPoints || []).map(ap => {
      return {
        position: new THREE.Vector3(ap.position.x, ap.position.y, ap.position.z),
        vector: new THREE.Vector3(ap.vector.x, ap.vector.y, ap.vector.z),
        isSnapped: ap.isSnapped
      };
    });

    scene.add(objRoot);
    placedBlocks.push(objRoot);

    updateCostCalculator();
    showAllUnsnappedAttachmentPoints();
  } catch (error) {
    console.error('Error loading OBJ file:', error);
  }
}


function getMeshBoundingBox() {
  // We'll track min/max for x, y, z
  let minx = Infinity, miny = Infinity, minz = Infinity;
  let maxx = -Infinity, maxy = -Infinity, maxz = -Infinity;

  placedBlocks.forEach(obj => {
    // compute boundingBox in world coords
    // we can use a Box3 if each obj has geometry
    const box = new THREE.Box3().setFromObject(obj);
    if (!box.isEmpty()) {
      if (box.min.x < minx) minx = box.min.x;
      if (box.min.y < miny) miny = box.min.y;
      if (box.min.z < minz) minz = box.min.z;

      if (box.max.x > maxx) maxx = box.max.x;
      if (box.max.y > maxy) maxy = box.max.y;
      if (box.max.z > maxz) maxz = box.max.z;
    }
  });

  // Let's clamp to 0 if empty:
  if (minx === Infinity) {
    minx = miny = minz = 0;
    maxx = maxy = maxz = 0;
  }

  return { minx, maxx, miny, maxy, minz, maxz };
}

function initRoofRadios() {
  document.querySelectorAll('input[name="roofChoiceInput"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const choice = e.target.value;
      handleRoofChoice(choice);
    });
  });
}

function handleRoofChoice(choice) {
  roofChoice = choice;

  // 1) remove old
  if (currentRoofMesh) {
    scene.remove(currentRoofMesh);
    currentRoofMesh = null;
  }

  // 2) "NONE" => do nothing
  if (choice === "NONE") return;

  // 3) get bounding box
  const bbox = getMeshBoundingBox();
  if (bbox.minx === Infinity) {
    console.warn("No blocks => cannot create roof.");
    return;
  }

  let widthX = 0;
  let depthZ = 0;

  // bounding box dimensions
  if (roofRotation == 0 || roofRotation == 2) {
    widthX = bbox.maxx - bbox.minx;
    depthZ = bbox.maxz - bbox.minz;
  } else {
    widthX = bbox.maxz - bbox.minz;
    depthZ = bbox.maxx - bbox.minx;
  }


  const houseTopY = bbox.maxy;

  // midpoint in xz
  const cx = (bbox.minx + bbox.maxx) / 2;
  const cz = (bbox.minz + bbox.maxz) / 2;



  // 4) build local roof geometry => a group
  let newRoof = null;
  switch (choice) {
    case "AFRAME":
      newRoof = buildAFrameRoof(widthX, depthZ);
      break;
    case "OFFSET":
      newRoof = buildOffsetRoof(widthX, depthZ);
      break;
    case "FLAT":
      newRoof = buildFlatRoof(widthX, depthZ);
      break;
    default:
      console.warn("Unknown roof choice:", choice);
      return;
  }

  if (!newRoof) return;

  // 5) place roof group so bottom sits at houseTopY, center in x= cx, z= cz
  newRoof.position.set(cx, houseTopY, cz);

  // 6) rotate around local origin => Y axis
  // roofRotation in 0..3 => 0..270 deg
  if (roofRotation > 0) {
    newRoof.rotateY((Math.PI / 2) * roofRotation);
  }

  scene.add(newRoof);
  currentRoofMesh = newRoof;
}

function buildAFrameRoof(widthX, depthZ) {
  const group = new THREE.Group();

  // apex in Y => tan(slopeAngle)*(widthX/2)
  const apexY = Math.tan(slopeAngle) * (widthX / 2);

  // Triangular shape in X-Y plane from x=-widthX/2..+widthX/2 => apex
  const shape = new THREE.Shape();
  shape.moveTo(-widthX / 2, 0);
  shape.lineTo(widthX / 2, 0);
  shape.lineTo(0, apexY);
  shape.closePath();

  // Extrude in Z => totalDepthZ
  const triGeom = new THREE.ExtrudeGeometry(shape, {
    depth: depthZ,
    bevelEnabled: false
  });
  const triMat = new THREE.MeshStandardMaterial({ color: 0xff0000, side: THREE.DoubleSide });
  const mainTri = new THREE.Mesh(triGeom, triMat);

  // Position so bottom sits at y=bbox.maxy, and center in z => from minz to maxz
  // By default, the extrude goes along +Z => shape in X-Y at z=0..z=depth
  // We'll shift it so that z=0 => z=(bbox.minz)
  mainTri.position.set(0, 0, -depthZ / 2
  );

  addEdgeOutline(mainTri);
  group.add(mainTri);

  // add soffits
  const leftSoffit = makeAFrameSoffit("left", widthX, depthZ);
  group.add(leftSoffit);

  const rightSoffit = makeAFrameSoffit("right", widthX, depthZ);
  group.add(rightSoffit);

  return group;
}

function makeAFrameSoffit(side, widthX, depthZ) {

  // apex in Y => tan(slopeAngle)*(widthX/2)
  const apexY = Math.tan(slopeAngle) * (widthX / 2);

  // Create side profile of soffit
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(-SOFFIT_LENGTH, -Math.tan(slopeAngle) * SOFFIT_LENGTH);
  shape.lineTo(-SOFFIT_LENGTH, -Math.tan(slopeAngle) * SOFFIT_LENGTH + SOFFIT_THICKNESS);
  shape.lineTo(widthX / 2, apexY + SOFFIT_THICKNESS);
  shape.lineTo(widthX / 2, apexY);
  shape.closePath();

  const soffitGeom = new THREE.ExtrudeGeometry(shape, {
    depth: depthZ + 2 * SOFFIT_LENGTH,
    bevelEnabled: false
  });
  const soffitMat = new THREE.MeshStandardMaterial({ color: 0xff00ff, side: THREE.DoubleSide });
  const soffitMesh = new THREE.Mesh(soffitGeom, soffitMat);

  let flip = (side == "left") ? 1 : -1;
  soffitMesh.scale.set(flip, 1, 1);


  let anchorX = (side == "left") ? -widthX / 2 : widthX / 2;

  soffitMesh.position.set(anchorX, 0, -depthZ / 2 - SOFFIT_LENGTH);

  addEdgeOutline(soffitMesh);
  return soffitMesh;
}


function buildOffsetRoof(widthX, depthZ) {

  // left portion
  const leftW = widthX * OFFSET_RATIO;
  const leftApexY = Math.tan(slopeAngle) * leftW;

  // right portion
  const rightW = widthX * (1 - OFFSET_RATIO);
  const rightApexY = Math.tan(slopeAngle) * rightW;

  const group = new THREE.Group();

  // left shape in X-Y
  // from x=0..leftW, with apex at x= leftW/2, y= leftApexY
  // We'll extrude it, then shift it so its bottom left corner is at x= -totalWidthX/2
  const leftShape = new THREE.Shape();
  leftShape.moveTo(0, 0);
  leftShape.lineTo(leftW, 0);
  leftShape.lineTo(leftW, leftApexY);
  leftShape.closePath();

  const extrudeLeft = new THREE.ExtrudeGeometry(leftShape, { depth: depthZ, bevelEnabled: false });
  const matLeft = new THREE.MeshStandardMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
  const leftMesh = new THREE.Mesh(extrudeLeft, matLeft);

  // position left mesh:
  // shape's "lowest x" = 0 => we shift it to x= -totalWidthX/2
  // shape extends in z=0..depthZ => we shift Z so center is (minz+maxz)/2 - depthZ/2
  leftMesh.position.set(
    -widthX / 2,
    0,
    -depthZ / 2
  );
  addEdgeOutline(leftMesh);
  group.add(leftMesh);

  // right shape:
  // from x=0..rightW, apex x= rightW/2 => apex y= rightApexY
  const rightShape = new THREE.Shape();
  rightShape.moveTo(0, 0);
  rightShape.lineTo(-rightW, 0);
  rightShape.lineTo(-rightW, rightApexY);
  rightShape.closePath();

  const extrudeRight = new THREE.ExtrudeGeometry(rightShape, { depth: depthZ, bevelEnabled: false });
  const matRight = new THREE.MeshStandardMaterial({ color: 0xffff00, side: THREE.DoubleSide });
  const rightMesh = new THREE.Mesh(extrudeRight, matRight);

  // position so it sits immediately after the left portion:
  // x => left edge is -totalWidthX/2 + leftW
  // y => bbox.maxy
  // z => same shift
  rightMesh.position.set(
    widthX / 2,
    0,
    -depthZ / 2
  );
  addEdgeOutline(rightMesh);
  group.add(rightMesh);

  // add soffits
  const leftSoffit = makeOffsetSoffit("left", widthX, depthZ);
  group.add(leftSoffit);

  const rightSoffit = makeOffsetSoffit("right", widthX, depthZ);
  group.add(rightSoffit);

  return group;
}

function makeOffsetSoffit(side, widthX, depthZ) {

  const widthMultiplier = (side == "left") ? OFFSET_RATIO : 1 - OFFSET_RATIO;
  const reducedWidthX = widthX * widthMultiplier;

  // apex in Y => tan(slopeAngle)*(widthX/2)
  const apexY = Math.tan(slopeAngle) * (reducedWidthX + SOFFIT_LENGTH);

  // Create side profile of soffit
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(-SOFFIT_LENGTH, -Math.tan(slopeAngle) * SOFFIT_LENGTH);
  shape.lineTo(-SOFFIT_LENGTH, -Math.tan(slopeAngle) * SOFFIT_LENGTH + SOFFIT_THICKNESS);
  shape.lineTo(reducedWidthX + SOFFIT_LENGTH, apexY + SOFFIT_THICKNESS);
  shape.lineTo(reducedWidthX + SOFFIT_LENGTH, apexY);
  shape.closePath();

  const soffitGeom = new THREE.ExtrudeGeometry(shape, {
    depth: depthZ + 2 * SOFFIT_LENGTH,
    bevelEnabled: false
  });
  const soffitMat = new THREE.MeshStandardMaterial({ color: 0xff00ff, side: THREE.DoubleSide });
  const soffitMesh = new THREE.Mesh(soffitGeom, soffitMat);

  let flip = (side == "left") ? 1 : -1;
  soffitMesh.scale.set(flip, 1, 1);

  let anchorX = (side == "left") ? (-widthX / 2) : (widthX / 2);

  soffitMesh.position.set(anchorX, 0, -depthZ / 2 - SOFFIT_LENGTH);

  addEdgeOutline(soffitMesh);
  return soffitMesh;
}


function buildFlatRoof(widthX, depthZ) {
  const thickness = SOFFIT_THICKNESS;

  const geom = new THREE.BoxGeometry(widthX + 2 * SOFFIT_LENGTH, thickness, depthZ + 2 * SOFFIT_LENGTH);
  const mat = new THREE.MeshStandardMaterial({ color: 0x0000ff, side: THREE.DoubleSide });
  const flatMesh = new THREE.Mesh(geom, mat);

  flatMesh.position.set(
    0,
    thickness,
    0
  );
  addEdgeOutline(flatMesh);
  return flatMesh;
}

function drawThickBlueprintEdges2D(
  ctx,
  placedBlocks,
  bbox,
  pxPerUnit,
  canvasWidth,
  canvasHeight
) {
  console.log("=== drawThickBlueprintEdges2D START ===");

  // Expand bounding box by 10% => so there's extra margin
  const originalWidth = bbox.maxx - bbox.minx;
  const originalHeight = bbox.maxz - bbox.minz;

  const marginFactor = 0.1; // 10% total expansion
  const expandSide = marginFactor / 2;
  const newMinX = bbox.minx - expandSide * originalWidth;
  const newMaxX = bbox.maxx + expandSide * originalWidth;
  const newMinZ = bbox.minz - expandSide * originalHeight;
  const newMaxZ = bbox.maxz + expandSide * originalHeight;

  const finalWidth = newMaxX - newMinX;
  const finalHeight = newMaxZ - newMinZ;

  console.log("Expanded BBox =>", {
    newMinX, newMaxX, newMinZ, newMaxZ,
    finalWidth, finalHeight
  });

  // Helper to map a world X/Z to canvas coords
  // so bigger z => bigger y => as if from positive Y looking down
  function worldToCanvas(x, z) {
    const rx = x - newMinX;
    const rz = z - newMinZ;
    const px = rx * pxPerUnit;
    const py = rz * pxPerUnit; // <== changed so bigger z => bigger y
    return { x: px, y: py };
  }

  console.log("Drawing thick lines for each placedBlock...");

  // 1) Draw thick lines for every block
  placedBlocks.forEach((block, iBlock) => {
    console.log(`Block #${iBlock} name=(${block.userData?.blockName}) userData=`, block.userData);

    // gather child meshes
    const childMeshes = [];
    block.traverse(child => {
      if (child.isMesh && child.geometry) {
        childMeshes.push(child);
      }
    });
    if (childMeshes.length === 0) {
      console.warn(`Block #${iBlock} => no meshes found, skipping lines.`);
      return;
    }

    childMeshes.forEach((mesh, mIndex) => {
      // build EdgesGeometry => read posAttr
      const edgeGeo = new THREE.EdgesGeometry(mesh.geometry);
      const posAttr = edgeGeo.attributes.position;
      if (!posAttr) {
        console.warn(`Block #${iBlock}, mesh #${mIndex} => no position attribute, skipping.`);
        return;
      }

      // mesh transform
      const meshPos = mesh.getWorldPosition(new THREE.Vector3());
      const meshQuat = mesh.getWorldQuaternion(new THREE.Quaternion());
      const meshScale = mesh.getWorldScale(new THREE.Vector3());

      // step in pairs => each is an edge
      for (let iPair = 0; iPair < posAttr.count; iPair += 2) {
        const vA = new THREE.Vector3(
          posAttr.getX(iPair),
          posAttr.getY(iPair),
          posAttr.getZ(iPair)
        );
        const vB = new THREE.Vector3(
          posAttr.getX(iPair + 1),
          posAttr.getY(iPair + 1),
          posAttr.getZ(iPair + 1)
        );

        // local => scale => rotate => translate
        vA.multiply(meshScale);
        vB.multiply(meshScale);

        vA.applyQuaternion(meshQuat);
        vB.applyQuaternion(meshQuat);

        vA.add(meshPos);
        vB.add(meshPos);

        // map to canvas
        const cA = worldToCanvas(vA.x, vA.z);
        const cB = worldToCanvas(vB.x, vB.z);

        // draw 5px white line
        ctx.beginPath();
        ctx.moveTo(cA.x, cA.y);
        ctx.lineTo(cB.x, cB.y);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 5;
        ctx.stroke();
      }
    });

    // 2) label the block if blueprintName exists
    const blueprintName = block.userData?.blueprintName;
    const offsetData = block.userData?.blueprintNameOffset;

    console.log(`Block #${iBlock}: blueprintName= ${blueprintName} offsetData=`, offsetData);

    if (blueprintName && offsetData && offsetData.position) {
      // block's world transform
      const blockPos = block.getWorldPosition(new THREE.Vector3());
      const blockQuat = block.getWorldQuaternion(new THREE.Quaternion());

      // local offset
      let localOffset = new THREE.Vector3(
        offsetData.position.x || 0,
        0,
        offsetData.position.z || 0
      );

      console.log(`Block #${iBlock} => localOffset before rotate=`, localOffset);

      localOffset.applyQuaternion(blockQuat);

      console.log(`Block #${iBlock} => localOffset after rotate=`, localOffset);

      localOffset.add(blockPos);

      console.log(`Block #${iBlock} => final world pos for label=`, localOffset);

      // map to canvas
      const cLabel = worldToCanvas(localOffset.x, localOffset.z);
      console.log(`Block #${iBlock} => cLabel=`, cLabel);

      // rotate text if offsetData.rotation
      const labelRotationDeg = offsetData.rotation || 0;

      ctx.save();
      ctx.translate(cLabel.x, cLabel.y);

      if (labelRotationDeg !== 0) {
        const rad = (Math.PI / 180) * labelRotationDeg;
        ctx.rotate(rad);
      }

      ctx.fillStyle = "white";
      ctx.font = "24px sans-serif";
      ctx.fillText(blueprintName, 0, 0);
      ctx.restore();

      console.log(`Block #${iBlock} => label drawn: "${blueprintName}" at cLabel=`, cLabel);
    }
  });

  // 3) draw 5px white border, 10px from outside
  console.log("Drawing border + scale text...");
  const offset = 10;
  const borderWidth = 5;
  const usableW = canvasWidth - offset * 2;
  const usableH = canvasHeight - offset * 2;

  ctx.save();
  ctx.strokeStyle = "white";
  ctx.lineWidth = borderWidth;
  ctx.strokeRect(offset, offset, usableW, usableH);
  ctx.restore();

  console.log("Drawing dimension line => 60px, shape of 'I' with label '= 1FT'");

  // We'll draw a line 60 px long, with vertical strokes at each end, near top-left
  // Suppose we do it below the border offset area
  ctx.save();

  // dimension line start
  const dimX = offset + 15;
  const dimY = offset + 30; // a bit lower than the border
  const dimLength = 60;

  // stroke color, thickness
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;

  // shape of capital I => vertical line at each end, plus horizontal
  ctx.beginPath();
  // left vertical
  ctx.moveTo(dimX, dimY - 5);
  ctx.lineTo(dimX, dimY + 5);
  // horizontal
  ctx.moveTo(dimX, dimY);
  ctx.lineTo(dimX + dimLength, dimY);
  // right vertical
  ctx.moveTo(dimX + dimLength, dimY - 5);
  ctx.lineTo(dimX + dimLength, dimY + 5);
  ctx.stroke();

  // text => "= 1FT"
  ctx.fillStyle = "white";
  ctx.font = "24px sans-serif";
  // place it just to the right or above the line
  ctx.fillText("= 1FT", dimX + dimLength + 10, dimY + 8);

  ctx.restore();


  console.log("=== drawThickBlueprintEdges2D END ===");
}



async function exportBlueprintPNG() {
  console.log("=== exportBlueprintPNG() - thick lines, margin, border, scale, block labels ===");

  // 1) bounding box => to define bounding region
  const bbox = getMeshBoundingBox();
  if (bbox.minx === Infinity) {
    alert("No blocks => cannot export blueprint.");
    return;
  }
  console.log("Bounding box:", bbox);

  // bounding box size
  const sceneWidth = bbox.maxx - bbox.minx;
  const sceneHeight = bbox.maxz - bbox.minz;

  // We'll do margin logic in drawThickBlueprintEdges2D, but approximate final dimension:
  const marginFactor = 0.1;
  const finalWidth = sceneWidth * (1 + marginFactor);
  const finalHeight = sceneHeight * (1 + marginFactor);

  // 1 unit => 60 px
  const pxPerUnit = 60;
  const imageWidthPx = Math.ceil(finalWidth * pxPerUnit);
  const imageHeightPx = Math.ceil(finalHeight * pxPerUnit);

  console.log(`Blueprint => ${imageWidthPx} x ${imageHeightPx} px. BBox=`, bbox);

  // 2) minimal 3D pass => solid blue background
  const blueprintRenderer = new THREE.WebGLRenderer({ antialias: true });
  blueprintRenderer.setSize(imageWidthPx, imageHeightPx);
  blueprintRenderer.setClearColor(0x0000ff, 1); // solid blue

  const blueprintScene = new THREE.Scene();
  // place the camera at y=+5, looking downward
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 10);
  camera.position.set(0, 5, 0);
  camera.lookAt(0, 0, 0);
  blueprintRenderer.render(blueprintScene, camera);

  // raw BG
  const rawBG = blueprintRenderer.domElement.toDataURL("image/png");

  // 3) final 2D canvas => draw thick lines, border, scale, labels
  const finalCanvas = document.createElement('canvas');
  finalCanvas.width = imageWidthPx;
  finalCanvas.height = imageHeightPx;
  const ctx = finalCanvas.getContext('2d');

  // load the BG
  const tempImg = new Image();
  tempImg.src = rawBG;
  await tempImg.decode();
  ctx.drawImage(tempImg, 0, 0);

  // now call drawThickBlueprintEdges2D => draws edges, border, scale text, block labels
  drawThickBlueprintEdges2D(
    ctx,
    placedBlocks,
    bbox,
    pxPerUnit,
    imageWidthPx,
    imageHeightPx
  );

  // 4) final => convert to dataURL
  const finalData = finalCanvas.toDataURL("image/png");
  console.log("Final blueprint data length=", finalData.length);

  // 5) force download
  const link = document.createElement('a');
  link.download = "blueprint.png";
  link.href = finalData;
  link.click();

  console.log("=== exportBlueprintPNG() done ===");
}

