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

// For showing all un-snapped attachment points in the scene
let sceneAttachmentHelpers = new THREE.Group();
sceneAttachmentHelpers.name = 'sceneAttachmentHelpers';

// INIT
initScene();
loadBlocks();

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
  // drop 4 pixels for border
  renderer.setSize(window.innerWidth * 0.75 - 4, window.innerHeight - 4);
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

  // For each category key (Walls, Corners, Doors, Windows, Tees, etc.)
  Object.keys(blocksByCat).forEach(categoryName => {
    // 1) A wrapper for the entire section
    const sectionDiv = document.createElement('div');
    sectionDiv.classList.add('collapsible-section');

    // 2) The collapsible header
    const header = document.createElement('h3');
    header.classList.add('collapsible-header');
    // We'll also add a "collapsible" class for the pseudo-element approach
    header.classList.add('collapsible');
    // Indicate it's collapsed by default
    header.dataset.collapsed = 'true';

    header.textContent = categoryName; // e.g. "Walls"

    // Toggling logic on header click
    header.addEventListener('click', () => {
      const isCollapsed = header.dataset.collapsed === 'true';
      if (isCollapsed) {
        // Expand
        contentDiv.style.display = 'block';
        header.dataset.collapsed = 'false';
        // If you want a separate .active class for the minus, do:
        header.classList.add('active');
      } else {
        // Collapse
        contentDiv.style.display = 'none';
        header.dataset.collapsed = 'true';
        header.classList.remove('active');
      }
    });

    // 3) Collapsible content
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('collapsible-content');
    contentDiv.style.display = 'none'; // collapsed by default

    // 4) Inside, a .block-list container
    const blockListDiv = document.createElement('div');
    blockListDiv.classList.add('block-list');

    // Populate blockListDiv with each block in this category
    blocksByCat[categoryName].forEach(block => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('block-item');
      itemDiv.textContent = block.name;

      if (block.previewImage) {
        const img = document.createElement('img');
        img.src = block.previewImage;
        itemDiv.appendChild(img);
      }

      // drag & drop
      itemDiv.setAttribute('draggable', true);
      itemDiv.dataset.blockId = block.id;
      itemDiv.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('application/block-id', block.id);
      });

      blockListDiv.appendChild(itemDiv);
    });

    // 5) Put block-list into contentDiv
    contentDiv.appendChild(blockListDiv);

    // 6) Put the header & content into sectionDiv
    sectionDiv.appendChild(header);
    sectionDiv.appendChild(contentDiv);

    // 7) Add sectionDiv to #categoryContainer
    container.appendChild(sectionDiv);
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
      objRoot.scale.set(3.28084, 3.28084, 3.28084);
      objRoot.position.set(0, 0, 0);

      // userData
      objRoot.userData.blockId = blockData.id;
      objRoot.userData.blockName = blockData.name;
      objRoot.userData.cost = blockData.cost || 0;

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

  const edgesGeo = new THREE.EdgesGeometry(mesh.geometry, 1);
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
  if (!activeBlock) return;

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
      position: { x: pos.x, y: pos.y, z: pos.z },
      rotation: { x: euler.x, y: euler.y, z: euler.z },
      attachmentPoints: apData
    };
  });

  const jsonStr = JSON.stringify({ blocks: data });
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

function onLoadScene() {
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

  // Recreate
  parsed.blocks.forEach(blockInfo => {
    recreateBlockFromData(blockInfo);
  });

  updateCostCalculator();
  showAllUnsnappedAttachmentPoints();
}

function recreateBlockFromData(blockInfo) {
  const blockDef = blocksData.find(b => b.id === blockInfo.blockId);
  if (!blockDef) {
    console.error('No blockDef for ID:', blockInfo.blockId);
    return;
  }

  const loader = new OBJLoader();
  loader.load(blockDef.geometryFile, objRoot => {
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
  });
}
