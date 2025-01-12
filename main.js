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
let placedDimensions = []; // store all dimension lines

let activeBlock = null;

let dimensionPreviewGroup = null; // A temporary group for preview line + end bars + text
let dimensionPreviewTextSprite = null; // For displaying the distance text

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

// For showing all un-snapped attachment points in the scene
let sceneAttachmentHelpers = new THREE.Group();
sceneAttachmentHelpers.name = 'sceneAttachmentHelpers';

const DimensionState = {
  INACTIVE: 'INACTIVE',     // not in dimension mode
  PLACING_FIRST_POINT: 'PLACING_FIRST_POINT',
  PLACING_SECOND_POINT: 'PLACING_SECOND_POINT',
  DELETE_MODE: 'DELETE_MODE',
};

let dimensionManager = {
  state: DimensionState.INACTIVE,
  firstPoint: null,
  previewGroup: null,
};

// Also store placed dimension groups
let placedDimensions3D = []; // each item is a THREE.Group for the dimension line+bars+text

// INIT
initScene();
loadBlocks();
initRoofRadios();
initBlueprintExport();
initDimensions();

/**
 * Initializes the scene, camera, renderer, controls, lights, floor, grid, and event listeners.
 * Sets up the main rendering loop via the animate() function.
 * 
 * @returns {void}
 */
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

  // GRID HELPER: spans 50 units, with squares of 0.5 => 50 / 0.5 = 100 divisions
  const gridSize = 50;   // same size as plane
  const divisions = 200; // each cell => 0.5
  const gridColor = 0x888888;

  const gridHelper = new THREE.GridHelper(gridSize, divisions, gridColor, gridColor);
  // By default, GridHelper is drawn in XZ plane, so no rotation needed
  // But we must ensure it's at y=0
  gridHelper.position.y = 0;
  scene.add(gridHelper);

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

/**
 * The main render loop, called on each animation frame.
 * Renders the scene from the camera's perspective.
 * 
 * @returns {void}
 */
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

/**
 * Adjusts camera aspect ratio and renderer size when the window is resized.
 * 
 * @returns {void}
 */
function onWindowResize() {
  const w = window.innerWidth * 0.75;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}

/**
 * Fetches the blocks.json file and stores its data in the global blocksData array.
 * Then calls createCategorySections to populate the UI with block categories.
 * 
 * @async
 * @returns {Promise<void>} Resolves when the JSON file is loaded and categories are created.
 */
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
 * Dynamically creates collapsible sections for each category in blocksData.
 * Within each section, creates draggable block "cards" using the provided block data.
 * 
 * @param {Object} blocksByCat An object whose keys are category names and values are arrays of block definitions.
 * @returns {void}
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

/**
 * Initializes the blueprint export button by adding a click event listener
 * that triggers exportBlueprintPNG().
 * 
 * @returns {void}
 */
function initBlueprintExport() {
  const btn = document.getElementById('exportBlueprintBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    exportBlueprintPNG();
  });
}

/**
 * Initializes the "Add Dimension" button by adding a click event listener
 * 
 * @returns {void}
 */
function initDimensions() {
  const btn = document.getElementById('addDimensionBtn');
  if (!btn) return;
  btn.addEventListener('click', onAddDimensionClicked);
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

/**
 * Sets the base color and outline color on a newly created or selected block.
 * Recursively traverses all mesh children to apply materials and outlines.
 * 
 * @param {THREE.Object3D} block The parent object containing mesh children.
 * @param {number} color The hexadecimal color (e.g., 0xcd7837) for the mesh material.
 * @param {number} outlineColor The hexadecimal color for the edge outline (e.g., 0x000000).
 * @returns {void}
 */
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

/**
 * Creates a block in the scene based on the given blockData. 
 * Loads the OBJ file, applies color/outlines, and sets up attachment points.
 * Allows the user to position the block with the mouse before final placement.
 * 
 * @param {Object} blockData An object containing block metadata (geometryFile, cost, name, etc.).
 * @param {DragEvent} e The drop event used to position the block on the floor.
 * @returns {void}
 */
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
 * Adds an EdgesGeometry-based child line segments ("edgesOutline") to a mesh
 * for a black outline effect.
 * 
 * @param {THREE.Mesh} mesh A Three.js mesh whose geometry will be used for the outline.
 * @param {number} [color=0x000000] The hexadecimal color to use for the outline.
 * @returns {void}
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

/**
 * Clears and re-adds visual helpers (red spheres + green arrows) for all
 * un-snapped attachment points on placed blocks and any currently active block.
 * 
 * @returns {void}
 */
function showAllUnsnappedAttachmentPoints() {
  sceneAttachmentHelpers.clear();

  placedBlocks.forEach(b => addAttachmentHelpersForBlock(b, sceneAttachmentHelpers));
  if (activeBlock) {
    addAttachmentHelpersForBlock(activeBlock, sceneAttachmentHelpers);
  }
}

/**
 * For a given block, adds red spheres and green arrow helpers at each un-snapped attachment point.
 * These helpers are used for visualizing where snapping could occur.
 * 
 * @param {THREE.Object3D} blockObj The block whose attachment points will be displayed.
 * @param {THREE.Group} containerGroup A group to which the helper objects are added.
 * @returns {void}
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

/**
 * Called on mouse move when an activeBlock exists (the user is dragging a block).
 * Updates the block's position to follow the mouse intersection on the floor.
 * Also re-shows un-snapped attachment point helpers.
 * 
 * @param {MouseEvent} event The mousemove event.
 * @returns {void}
 */
function onMouseMove(event) {
  // dimension manager logic first
  if (dimensionManager.state === DimensionState.PLACING_SECOND_POINT) {
    handleDimensionMouseMove(event);
    return;
  }

  // If an active block is being dragged:
  if (activeBlock) {
    const intersection = getFloorIntersection(event); // block logic includes floor+blocks
    if (intersection) {
      activeBlock.position.copy(intersection.point);
    }
    showAllUnsnappedAttachmentPoints();
  }
}


function handleDimensionMouseMove(event) {
  // If we’re not placing a dimension, do nothing
  if (dimensionManager.state !== DimensionState.PLACING_SECOND_POINT) return;

  if (!dimensionManager.firstPoint || !dimensionManager.previewGroup) return;

  // user is dragging the second point
  const floorHit = getFloorOnlyIntersection(event);
  if (!floorHit) return;

  // Update the preview group
  updateDimension3DPreview(dimensionManager.previewGroup, dimensionManager.firstPoint, floorHit.point);
}



/**
 * Performs a raycast against all meshes in placedBlocks to see if the user
 * clicked on (or near) a particular block.
 * 
 * @param {MouseEvent} e The mousedown/mouseup event.
 * @returns {THREE.Object3D|null} Returns the parent object of the first intersected mesh, or null if none.
 */
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

/**
 * Handles logic when the user presses the mouse down:
 * - Records the position/time to differentiate a click from a drag.
 * - If dimension mode is active and there's no activeBlock, sets the first dimension point.
 * 
 * @param {MouseEvent} event The mousedown event.
 * @returns {void}
 */
function onMouseDown(event) {
  mouseDownPos.set(event.clientX, event.clientY);
  mouseDownTime = performance.now();
  potentialTargetBlock = null;

  // We are in block mode => existing logic
  if (!activeBlock) {
    potentialTargetBlock = raycastToCheckForBlock(event);
  }
}


function handleDimensionMouseUp(event) {
  switch (dimensionManager.state) {
    case DimensionState.PLACING_FIRST_POINT:
      const hit1 = getFloorOnlyIntersection(event);
      if (!hit1) return;
      dimensionManager.firstPoint = hit1.point.clone();
      dimensionManager.state = DimensionState.PLACING_SECOND_POINT;
      // create a preview group right away
      dimensionManager.previewGroup = createDimension3DPreview(dimensionManager.firstPoint, dimensionManager.firstPoint);
      scene.add(dimensionManager.previewGroup);
      break;

    case DimensionState.PLACING_SECOND_POINT:
      const hit2 = getFloorOnlyIntersection(event);
      if (!hit2) return;
      // finalize
      finalizeDimension(dimensionManager.firstPoint, hit2.point);
      // reset state
      dimensionManager.firstPoint = null;
      dimensionManager.previewGroup = null;
      dimensionManager.state = DimensionState.INACTIVE;
      document.body.style.cursor = "auto";
      break;

    case DimensionState.DELETE_MODE:
      // Attempt to delete a dimension
      deleteDimensionAtMouse(event);
      // remain in delete mode or revert to INACTIVE, your choice
      // dimensionManager.state = DimensionState.INACTIVE;
      // document.body.style.cursor = "auto";
      break;

    default:
      // do nothing
      break;
  }
}

/**
 * Handles logic when the user releases the mouse button:
 * - Checks click distance/time to see if it was a simple click.
 * - If an activeBlock is present, snaps it in place and adds to placedBlocks.
 * - If no activeBlock, attempts to pick up a block if the click was on one.
 * 
 * @param {MouseEvent} event The mouseup event.
 * @returns {void}
 */
function onMouseUp(event) {
  const dist = Math.hypot(event.clientX - mouseDownPos.x, event.clientY - mouseDownPos.y);
  const timeDiff = performance.now() - mouseDownTime;

  if (dist < 5 && timeDiff < 1000) {
    // 1) If dimension manager is not inactive 
    if (dimensionManager.state != DimensionState.INACTIVE) {
      // Let dimension manager handle the click
      handleDimensionMouseUp(event);
      return;
    } else {
      // interact with block
      if (activeBlock) {
        // user is placing a block
        handleSnapping(activeBlock, 'snap');
        placedBlocks.push(activeBlock);
        setBlockAndOutlineColors(activeBlock, 0xffffff, 0x000000);
        updateCostCalculator();
        showAllUnsnappedAttachmentPoints();
        activeBlock = null;
      } else {
        // user might pick up a block
        let tmp = raycastToCheckForBlock(event);
        if (tmp?.uuid && tmp.uuid === potentialTargetBlock?.uuid) {
          // pick it up
          activeBlock = tmp;
          placedBlocks = placedBlocks.filter(block => block.uuid != activeBlock.uuid);
          handleSnapping(activeBlock, 'unsnap');
          setBlockAndOutlineColors(activeBlock, 0xcd7837, 0x6f3101);
          updateCostCalculator();
        }
      }
    }
  }
}


/**
 * Handles keyboard shortcuts:
 * - 'r' or 'R' to rotate an active block or the roof (if no block is active).
 * - 'Shift+r' or 'Shift+R' for opposite rotation direction.
 * - 'Delete' to delete an active block.
 * 
 * @param {KeyboardEvent} event The keydown event.
 * @returns {void}
 */
function onKeyDown(event) {
  if (activeBlock) {
    if (event.key.toLowerCase() === 'r') {
      if (event.shiftKey) {
        activeBlock.rotateY(Math.PI / 2);
      } else {
        activeBlock.rotateY(-Math.PI / 2);
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

/**
 * Removes the currently active block from the scene,
 * and sets activeBlock to null.
 * 
 * @returns {void}
 */
function deleteActiveBlock() {
  scene.remove(activeBlock);
  activeBlock = null;
  showAllUnsnappedAttachmentPoints();
}

/**
 * Finds the intersection of the mouse pointer with either the floor or placed blocks.
 * Used for snapping block placement or dimension points to the floor.
 * 
 * @param {MouseEvent} event The mouse event to derive the ray from.
 * @returns {THREE.Intersection|null} Intersection object (includes .point), or null if none.
 */
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
    // Snap to 0.0 or 0.5 in x,z
    const point = intersects[0].point;

    point.x = Math.round(point.x * 4) / 4;
    point.z = Math.round(point.z * 4) / 4;

    intersects[0].point.copy(point);
    return intersects[0];
  }
  return null;
}

/**
 * Returns the intersection of the mouse with the floorMesh only.
 * @param {MouseEvent} event
 * @returns {THREE.Intersection|null}
 */
function getFloorOnlyIntersection(event) {
  const rect = renderer.domElement.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  const mouseVec = new THREE.Vector2(x, y);
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouseVec, camera);

  const intersects = raycaster.intersectObject(floorMesh, true);
  if (intersects.length > 0) {
    // Snap to 0.25 increments if you want
    const point = intersects[0].point;
    point.x = Math.round(point.x * 4) / 4;
    point.z = Math.round(point.z * 4) / 4;
    intersects[0].point.copy(point);
    return intersects[0];
  }
  return null;
}


/**
 * Snaps (or unsnaps) an active object to nearby attachment points of placed blocks.
 * If no suitable candidate, snaps the object to the nearest 0.25 grid in x/z.
 * 
 * @param {THREE.Object3D} activeObj The block being placed or moved.
 * @param {string} mode "snap" or "unsnap", indicating whether to connect or detach attachments.
 * @returns {void}
 */
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

  if (candidates.length === 0) {
    // chatgpt put code to snap to nearest 0.5 here
    // We can just snap activeObj.position in x,z
    console.log("No block-block snapping candidates => snapping to grid 0.0/0.5 in x,z.");

    // read the current position
    const pos = activeObj.position.clone();
    // round to nearest .25
    pos.x = Math.round(pos.x * 4) / 4;
    pos.z = Math.round(pos.z * 4) / 4;
    activeObj.position.copy(pos);

    return; // no further block-block snapping needed
  }

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

/**
 * Recalculates the total cost of all placed blocks and updates the costCalculator DOM element.
 * Groups blocks by ID to show quantity and sub-totals.
 * 
 * @returns {void}
 */
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

/**
 * Serializes the current scene (blocks, roof choice, roof rotation, dimension lines)
 * into a compressed Base64 string.
 * 
 * @returns {string} A Base64-compressed JSON string representing the scene.
 */
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

  // collect dimension lines
  const dimensionData = placedDimensions.map(dim => {
    return {
      start: { x: dim.start.x, y: dim.start.y, z: dim.start.z },
      end: { x: dim.end.x, y: dim.end.y, z: dim.end.z }
    };
  });

  const jsonStr = JSON.stringify({
    blocks: data,
    roof: roofChoice,
    roofRot: roofRotation,
    dimensions: dimensionData
  });
  const compressed = LZString.compressToBase64(jsonStr);
  return compressed;
}

/**
 * Copies the serialized scene data (Base64 string) to the clipboard,
 * then shows a small popup confirmation.
 * 
 * @returns {void}
 */
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

/**
 * Loads the serialized scene from a Base64 string typed into the loadSceneInput element.
 * Decompresses, parses, clears existing objects/dimensions, and recreates blocks and dimensions.
 * Restores the roof choice as well.
 * 
 * @async
 * @returns {Promise<void>}
 */
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

  // --- 1) Clear existing blocks from scene
  placedBlocks.forEach(b => scene.remove(b));
  placedBlocks = [];

  // --- 2) Clear existing dimension groups
  placedDimensions.forEach(dim => {
    removeDimensionFromScene(dim); // see below
  });
  placedDimensions = [];

  // --- 3) Recreate blocks
  for (const blockInfo of parsed.blocks) {
    await recreateBlockFromData(blockInfo);
  }

  // --- 4) Recreate dimensions
  if (parsed.dimensions && Array.isArray(parsed.dimensions)) {
    parsed.dimensions.forEach(d => {
      const p1 = new THREE.Vector3(d.start.x, d.start.y, d.start.z);
      const p2 = new THREE.Vector3(d.end.x, d.end.y, d.end.z);

      // Create a new 3D group
      const dimGroup = createDimension3DPreview(p1, p2);
      scene.add(dimGroup);

      // Store in placedDimensions
      placedDimensions.push({
        start: p1,
        end: p2,
        group: dimGroup
      });
    });
  }

  // --- 5) restore roof
  updateCostCalculator();
  showAllUnsnappedAttachmentPoints();
  roofRotation = parsed.roofRot;
  const roofRadio = document.querySelector(`input[name="roofChoiceInput"][value="${parsed.roof}"]`);
  roofRadio.checked = true;
  roofRadio.dispatchEvent(new Event('change'));
}

/**
 * Removes a dimension's 3D group from the scene and disposes of its geometry/material.
 * @param {DimensionObj} dimension 
 */
function removeDimensionFromScene(dimension) {
  if (dimension.group) {
    scene.remove(dimension.group);
    disposeDimensionGroup(dimension.group);
  }
}

/**
 * Utility function that wraps OBJLoader.load in a Promise.
 * 
 * @param {OBJLoader} loader A Three.js OBJLoader instance.
 * @param {string} file The path or URL of the OBJ file to load.
 * @returns {Promise<THREE.Group>} Resolves to the loaded 3D object.
 */
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

/**
 * Recreates a block in the scene based on the blockInfo object from serialized data.
 * Looks up the corresponding geometryFile in blocksData, loads it, applies transformations,
 * and re-applies attachment point states.
 * 
 * @async
 * @param {Object} blockInfo Serialized block data (ID, position, rotation, attachments, etc.).
 * @returns {Promise<void>}
 */
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

    objRoot.scale.set(3.28084, 2.45, 3.28084);
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

/**
 * Computes the bounding box that encloses all placed blocks in the scene.
 * 
 * @returns {Object} An object with minx, maxx, miny, maxy, minz, maxz representing the bounding box.
 *                   If no blocks are placed, minx will be Infinity (so check before use).
 */
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

/**
 * Binds change listeners to all radio inputs for roof choice.
 * When the user picks a new roof, handleRoofChoice is called.
 * 
 * @returns {void}
 */
function initRoofRadios() {
  document.querySelectorAll('input[name="roofChoiceInput"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const choice = e.target.value;
      handleRoofChoice(choice);
    });
  });
}

/**
 * Removes any previously displayed roof mesh, computes the bounding box of the structure,
 * then builds the chosen roof type (A-FRAME, OFFSET, FLAT) or none at all.
 * Positions and rotates the roof according to roofRotation.
 * 
 * @param {string} choice The chosen roof type ("NONE", "AFRAME", "OFFSET", or "FLAT").
 * @returns {void}
 */
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

/**
 * Builds an A-frame style roof as a THREE.Group, including main triangular geometry
 * plus soffit overhangs. The width is along X, depth along Z, and the apex is determined
 * by the slopeAngle.
 * 
 * @param {number} widthX The total width in the X direction.
 * @param {number} depthZ The total depth in the Z direction.
 * @returns {THREE.Group} A group containing the A-frame roof geometry.
 */
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

/**
 * Constructs one side (left or right) of an A-frame soffit (the overhang beneath the roof edge).
 * Builds a shape in the X-Y plane and extrudes it along Z, then positions it appropriately.
 * 
 * @param {"left"|"right"} side Which side of the A-frame to build ("left" or "right").
 * @param {number} widthX The total roof width in X.
 * @param {number} depthZ The total roof depth in Z.
 * @returns {THREE.Mesh} The extruded soffit mesh.
 */
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

/**
 * Builds an "offset" roof, which is effectively split into two sloping slabs
 * with different widths. Each slab is extruded in the Z direction. Adds soffits as well.
 * 
 * @param {number} widthX The total width in the X direction.
 * @param {number} depthZ The total depth in the Z direction.
 * @returns {THREE.Group} A group containing the offset roof geometry.
 */
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

/**
 * Constructs the soffit for one side (left or right) of the offset roof.
 * Uses the slopeAngle to calculate the apex, then extrudes a shape in Z.
 * 
 * @param {"left"|"right"} side Which side of the offset roof ("left" or "right").
 * @param {number} widthX The total roof width in X.
 * @param {number} depthZ The total roof depth in Z.
 * @returns {THREE.Mesh} The extruded soffit mesh for the offset roof side.
 */
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

/**
 * Builds a simple flat roof as a box geometry with thickness = SOFFIT_THICKNESS,
 * sized to cover the bounding box of the building plus soffit overhang.
 * 
 * @param {number} widthX The total roof width in X.
 * @param {number} depthZ The total roof depth in Z.
 * @returns {THREE.Mesh} A box mesh representing the flat roof.
 */
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

/**
 * Draws thick white lines on a 2D canvas to represent the top-down edges of all placed blocks.
 * Also draws dimension lines in pink and places block labels (blueprintName).
 * Adds a 5px border and a simple scale indicator (1ft).
 * 
 * @param {CanvasRenderingContext2D} ctx The 2D canvas context to draw on.
 * @param {THREE.Object3D[]} placedBlocks The array of placed block objects in the scene.
 * @param {Object} bbox The bounding box object with min/max x, y, z.
 * @param {number} pxPerUnit Pixels per unit of 3D distance (e.g., 60 px per foot).
 * @param {number} canvasWidth The final canvas width in pixels.
 * @param {number} canvasHeight The final canvas height in pixels.
 * @returns {void}
 */
function drawThickBlueprintEdges2D(
  ctx,
  placedBlocks,
  bbox,
  pxPerUnit,
  canvasWidth,
  canvasHeight
) {

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

      // Apply block's quaternion to offset, so we get the correct offset in world space.
      localOffset.applyQuaternion(blockQuat);
      localOffset.add(blockPos);

      // Convert block's quaternion to an Euler => read Y rotation in degrees
      const eul = new THREE.Euler().setFromQuaternion(blockQuat, 'XYZ');
      const blockYDeg = THREE.MathUtils.radToDeg(eul.y);

      // The user’s offset rotation
      const userOffsetDeg = offsetData.rotation || 0;

      // Combined angle => e.g. block's Y orientation + user offset
      const totalRotationDeg = blockYDeg + userOffsetDeg;

      // Map the final offset to canvas
      const cLabel = worldToCanvas(localOffset.x, localOffset.z);

      ctx.save();
      ctx.translate(cLabel.x, cLabel.y);

      // Convert degrees => radians
      const totalRad = THREE.MathUtils.degToRad(totalRotationDeg);
      ctx.rotate(totalRad);

      ctx.fillStyle = "white";
      ctx.font = "18px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(blueprintName, 0, 0);
      ctx.restore();
    }
  });

  placedDimensions.forEach(dim => {
    const cA = worldToCanvas(dim.start.x, dim.start.z);
    const cB = worldToCanvas(dim.end.x, dim.end.z);

    // Inside placedDimensions.forEach(...)
    const dist = dim.start.distanceTo(dim.end);
    const label = dist.toFixed(2) + "ft";
    const midX = (cA.x + cB.x) / 2;
    const midY = (cA.y + cB.y) / 2;

    // 1) Let's break the dimension line into two segments, leaving a gap in the center for the text
    const gapSize = 2; // in screen px, for example
    // find the direction from A to B in screen coords
    const dx = cB.x - cA.x;
    const dy = cB.y - cA.y;
    const segLen = Math.sqrt(dx * dx + dy * dy);
    const halfLine = (segLen - gapSize) / 2;

    // we can place a small function to scale a point
    function pointAlongLine(px, py, dx, dy, distance) {
      const factor = distance / segLen;
      return {
        x: px + dx * factor,
        y: py + dy * factor
      };
    }

    // Segment 1 from cA to cA+halfLine
    const end1 = pointAlongLine(cA.x, cA.y, dx, dy, halfLine);
    ctx.beginPath();
    ctx.moveTo(cA.x, cA.y);
    ctx.lineTo(end1.x, end1.y);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.stroke();

    // Segment 2 from cB - halfLine to cB
    const start2 = pointAlongLine(cA.x, cA.y, dx, dy, segLen - halfLine);
    ctx.beginPath();
    ctx.moveTo(start2.x, start2.y);
    ctx.lineTo(cB.x, cB.y);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.stroke();

    // 2) Perpendicular bars, each 0.5 scene units => convert to pixels
    //   In your 3D => 0.5 ft. So in canvas => 0.5 * pxPerUnit
    const perpLenPx = 0.5 * pxPerUnit;
    drawPerpBar2D(ctx, cA, cB, perpLenPx);
    drawPerpBar2D(ctx, cB, cA, perpLenPx);

    // 3) Dimension label in center
    ctx.save();
    // Font params
    ctx.font = "24px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    // Padding around the text background
    const textPadding = 10;
    // Measure the text width and height
    const textMetrics = ctx.measureText(label);
    const textWidth = textMetrics.width;
    const textHeight = 24;
    // Calculate background rectangle coordinates
    const rectX = midX - textWidth / 2 - textPadding;
    const rectY = midY - textHeight / 2 - textPadding;
    const rectWidth = textWidth + textPadding * 2;
    const rectHeight = textHeight + textPadding * 2;
    // Draw blue background rectangle
    ctx.fillStyle = "blue";
    ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
    ctx.fillStyle = "white";
    ctx.fillText(label, midX, midY);
    // restore
    ctx.restore();

  });

  // 3) draw 5px white border, 10px from outside
  const offset = 10;
  const borderWidth = 5;
  const usableW = canvasWidth - offset * 2;
  const usableH = canvasHeight - offset * 2;

  ctx.save();
  ctx.strokeStyle = "white";
  ctx.lineWidth = borderWidth;
  ctx.strokeRect(offset, offset, usableW, usableH);
  ctx.restore();

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
}

function drawPerpBar2D(ctx, start, other, barLength) {
  // Vector from start to other
  const dx = other.x - start.x;
  const dy = other.y - start.y;
  // find a perpendicular
  let perpX = -dy;
  let perpY = dx;

  const len = Math.sqrt(perpX * perpX + perpY * perpY);
  if (len < 0.0001) return; // degenerate
  perpX /= len; // now it's unit
  perpY /= len;

  // We want to draw a line of length `barLength`, centered at start
  // so from -barLength/2..+barLength/2 along perp
  const half = barLength / 2;
  const x1 = start.x - perpX * half;
  const y1 = start.y - perpY * half;
  const x2 = start.x + perpX * half;
  const y2 = start.y + perpY * half;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.stroke();
}


/**
 * Creates a 2D canvas snapshot of the floorplan (top-down),
 * draws block edges and dimensions, then triggers a download of the resulting image.
 * 
 * @async
 * @returns {Promise<void>} Resolves when the blueprint is rendered and downloaded as a PNG.
 */
async function exportBlueprintPNG() {
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

  // 5) force download
  const link = document.createElement('a');
  link.download = "blueprint.png";
  link.href = finalData;
  link.click();
}

/**
 * Toggles dimension mode on/off. When on, the user can click two points on the floor
 * to place a dimension line. After the second click, dimension mode turns off again.
 * 
 * @returns {void}
 */
function onAddDimensionClicked() {
  // Toggle dimension mode
  if (dimensionManager.state === DimensionState.INACTIVE) {
    console.log("Dimension mode: ON. Click two points on the floor to define a dimension line.");
    // Change cursor to a measuring tape emoji while dimension mode is active
    document.body.style.cursor = "crosshair";
    dimensionManager.state = DimensionState.PLACING_FIRST_POINT;
  } else {
    console.log("Dimension mode: OFF.");
    dimensionManager.state = DimensionState.INACTIVE;
    document.body.style.cursor = "auto";
  }
}

/**
 * Creates a new THREE.Group containing a dimension line, end bars, and a text sprite.
 * Used as a live "preview" while the user is selecting the second point.
 * 
 * @param {THREE.Vector3} p1 The first point of the dimension line.
 * @param {THREE.Vector3} p2 The second point of the dimension line.
 * @returns {THREE.Group} A group with the 3D dimension preview.
 */
function createDimension3DPreview(p1, p2) {
  const group = new THREE.Group();

  // Create the cylinder for the line
  const { cylinder, distance } = createDimensionCylinder(p1, p2);
  group.add(cylinder);

  // Create and add perpendicular bars at each end
  const bar1 = createPerpBar(p1, p2);
  const bar2 = createPerpBar(p2, p1);
  group.add(bar1);
  group.add(bar2);

  // Create a text sprite in the middle
  dimensionPreviewTextSprite = createTextSprite(distance.toFixed(2) + " ft");
  positionTextSprite(dimensionPreviewTextSprite, p1, p2);
  group.add(dimensionPreviewTextSprite);

  return group;
}

/**
 * Updates an existing dimension preview group, re-calculating line length,
 * re-orienting the cylinder, bars, and repositioning the text sprite.
 * 
 * @param {THREE.Group} group The dimension preview group to update.
 * @param {THREE.Vector3} p1 The first point of the dimension line.
 * @param {THREE.Vector3} p2 The second point of the dimension line.
 * @returns {void}
 */
function updateDimension3DPreview(group, p1, p2) {
  // 1) Remove all children from the group
  //    (alternatively, just find and remove cylinder/bars/text specifically)
  while (group.children.length > 0) {
    const child = group.children.pop();
    if (child.isMesh) {
      child.geometry.dispose();
      child.material.dispose();
    }
    group.remove(child);
  }

  // 2) Now re-generate the dimension cylinder, bars, text
  const { cylinder, distance } = createDimensionCylinder(p1, p2);
  group.add(cylinder);

  const bar1 = createPerpBar(p1, p2);
  group.add(bar1);

  const bar2 = createPerpBar(p2, p1);
  group.add(bar2);

  const text = createTextSprite(distance.toFixed(2) + " ft");
  positionTextSprite(text, p1, p2);
  group.add(text);
}



function createDimensionCylinder(p1, p2) {
  const distance = p1.distanceTo(p2);
  const midPoint = p1.clone().lerp(p2, 0.5);

  const radius = 0.02;
  const geom = new THREE.CylinderGeometry(radius, radius, distance, 8, 1, false);
  const mat = new THREE.MeshBasicMaterial({ color: 0xcc0000 });
  const cylinder = new THREE.Mesh(geom, mat);
  cylinder.name = "dimensionCylinder";

  // orient
  cylinder.position.copy(midPoint);
  const dir = new THREE.Vector3().subVectors(p2, p1).normalize();
  const up = new THREE.Vector3(0, 1, 0);
  const quat = new THREE.Quaternion().setFromUnitVectors(up, dir);
  cylinder.quaternion.copy(quat);

  return { cylinder, distance };
}

function createPerpBar(endPoint, otherPoint) {
  // Make a small bar (0.5 units) oriented perpendicular to the dimension line
  // We'll place its center at endPoint
  const length = 0.5;
  const radius = 0.02;
  const geom = new THREE.CylinderGeometry(radius, radius, length, 8, 1, false);
  const mat = new THREE.MeshBasicMaterial({ color: 0xcc0000 });
  const bar = new THREE.Mesh(geom, mat);

  // name
  bar.name = (otherPoint === endPoint) ? "dimensionBar1" : "dimensionBar2";

  // We want a vector from endPoint to otherPoint
  const mainDir = new THREE.Vector3().subVectors(otherPoint, endPoint).normalize();
  // We can get a perpendicular vector in the horizontal plane:
  // cross mainDir with (0,1,0) => if mainDir is vertical, we might do something else
  let perp = new THREE.Vector3(0, 1, 0).cross(mainDir);
  if (perp.length() < 0.001) {
    // fallback if the dimension line is nearly vertical
    perp = new THREE.Vector3(1, 0, 0);
  }
  perp.normalize();

  // position bar's midpoint at endPoint
  bar.position.copy(endPoint);

  // orient bar so it aligns with perp
  const up = new THREE.Vector3(0, 1, 0);
  const quat = new THREE.Quaternion().setFromUnitVectors(up, perp);
  bar.quaternion.copy(quat);

  return bar;
}

function createTextSprite(message) {
  // using a small canvas to draw text, then use it as a texture
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = "white";
  ctx.font = "24px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);

  const tex = new THREE.Texture(canvas);
  tex.needsUpdate = true;

  const mat = new THREE.SpriteMaterial({ map: tex });
  const sprite = new THREE.Sprite(mat);
  sprite.name = "dimensionText";

  // scale sprite a bit
  sprite.scale.set(1.5, 0.4, 1);

  return sprite;
}

function positionTextSprite(sprite, p1, p2) {
  const mid = p1.clone().lerp(p2, 0.5);
  // Lift it slightly above the floor
  mid.y += 0.26;
  sprite.position.copy(mid);
}

/**
 * Finalizes the creation of a dimension by removing the preview group 
 * and creating a permanent 3D group. Stores it in placedDimensions.
 * 
 * @param {THREE.Vector3} p1 - The first point
 * @param {THREE.Vector3} p2 - The second point
 */
function finalizeDimension(p1, p2) {
  // 1) Remove or dispose the existing preview group
  if (dimensionManager.previewGroup) {
    scene.remove(dimensionManager.previewGroup);
    disposeDimensionGroup(dimensionManager.previewGroup); // optional disposal
    dimensionManager.previewGroup = null;
  }

  // 2) Create a brand-new dimension group to keep permanently
  const dimGroup = createDimension3DPreview(p1, p2);
  scene.add(dimGroup);

  // 3) Store in placedDimensions as a single object with start/end/group
  placedDimensions.push({
    start: p1.clone(),
    end: p2.clone(),
    group: dimGroup
  });
}


function disposeDimensionGroup(group) {
  group.traverse(child => {
    if (child.isMesh) {
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
    }
  });
}

document.getElementById('deleteDimensionBtn').addEventListener('click', () => {
  if (dimensionManager.state === DimensionState.DELETE_MODE) {
    dimensionManager.state = DimensionState.INACTIVE;
    document.body.style.cursor = "auto";
  } else {
    dimensionManager.state = DimensionState.DELETE_MODE;
    document.body.style.cursor = "no-drop";
  }
});

function deleteDimensionAtMouse(event) {
  // Build a list of dimension meshes from all dimension groups
  let dimMeshes = [];
  placedDimensions.forEach(dim => {
    if (!dim.group) return;
    dim.group.traverse(child => {
      if (child.isMesh) {
        dimMeshes.push(child);
      }
    });
  });

  // Raycast
  const rect = renderer.domElement.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  const mouseVec = new THREE.Vector2(x, y);
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouseVec, camera);

  const hits = raycaster.intersectObjects(dimMeshes, true);
  if (hits.length > 0) {
    const hitObj = hits[0].object;
    const parentGroup = findDimensionGroup(hitObj);
    if (!parentGroup) return;

    // remove from scene & from placedDimensions
    scene.remove(parentGroup);
    disposeDimensionGroup(parentGroup);

    placedDimensions = placedDimensions.filter(d => d.group !== parentGroup);

    // optionally revert to INACTIVE
    dimensionManager.state = DimensionState.INACTIVE;
    document.body.style.cursor = 'auto';
  }
}

/**
 * Finds the dimension Group parent of a mesh or sprite by walking up .parent 
 * until we find an object with 0-based parent or a recognized dimension group name.
 */
function findDimensionGroup(object) {
  let obj = object;
  while (obj.parent) {
    // now check if obj is the group for any dimension in placedDimensions
    const found = placedDimensions.find(d => d.group === obj);
    if (found) return obj;
    obj = obj.parent;
  }
  return null;
}
