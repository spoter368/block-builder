// src/scene.js

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { placedBlocks, activeBlock, finalizeActiveBlock, removeBlock, setActiveBlock } from './blockManager.js';
import { showAllUnsnappedAttachmentPoints } from './snapping.js';

export let scene, camera, renderer, controls, floorMesh;

let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let isMouseDown = false;
let draggingBlock = null;
let trashcanBox = null;
let trashcanRect = null;

// (A) If the user dropped a block from left list, we create it -> activeBlock.
//     Then on mouseUp, we set isFollowingMouse = true => block stays pinned to floor under mouse
//     until next mousedown => finalize it permanently
let isFollowingMouse = false;

export function initScene() {
  console.log('[scene.js] initScene called.');
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xcccccc);

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(-20, 30, 20);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const container = document.querySelector('.right-pane');
  if (container) {
    container.appendChild(renderer.domElement);
  } else {
    console.warn('[scene.js] .right-pane not found!');
  }

  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.update();

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(5, 10, 7);
  scene.add(dirLight);

  // Floor
  const floorGeo = new THREE.PlaneGeometry(50, 50);
  const floorMat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
  floorMesh = new THREE.Mesh(floorGeo, floorMat);
  floorMesh.rotation.x = -Math.PI / 2;
  scene.add(floorMesh);

  trashcanBox = document.getElementById('trashcanBox');

  // Events
  window.addEventListener('resize', onWindowResize);

  renderer.domElement.addEventListener('mousedown', onMouseDown);
  renderer.domElement.addEventListener('mousemove', onMouseMove);
  renderer.domElement.addEventListener('mouseup', onMouseUp);

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  // If isFollowingMouse + we have an activeBlock not yet placed => pin to floor intersection every frame
  if (isFollowingMouse && activeBlock && !placedBlocks.includes(activeBlock)) {
    const floorPt = getFloorIntersection();
    if (floorPt) {
      activeBlock.object3D.position.copy(floorPt);
    }
    // Re-draw attachments
    showAllUnsnappedAttachmentPoints(scene, placedBlocks, activeBlock);
  }

  // If draggingBlock => we also refresh attachments in real-time
  if (draggingBlock) {
    showAllUnsnappedAttachmentPoints(scene, placedBlocks, draggingBlock);
  }
}

function onWindowResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}

// MOUSE

function onMouseDown(e) {
  isMouseDown = true;
  console.log('[scene.js] onMouseDown, isFollowingMouse=', isFollowingMouse);

  // If we are in "follow mouse" mode with an unplaced block, and user clicks => finalize it
  if (isFollowingMouse && activeBlock && !placedBlocks.includes(activeBlock)) {
    console.log('[scene.js] user clicked -> finalize the unplaced block now');
    isFollowingMouse = false;
    finalizeActiveBlock();
    return;
  }

  // Otherwise, see if user picked an existing block
  const hits = raycastAllPlaced();
  if (hits.length > 0) {
    const pickedMesh = hits[0].object;
    const block = placedBlocks.find(b => b.containsMesh(pickedMesh));
    if (block) {
      console.log('[scene.js] picked block for dragging:', block.name);
      draggingBlock = block;
      setActiveBlock(block);
      controls.enabled = false;
    }
  }
}

function onMouseMove(e) {
  if (!isMouseDown || !draggingBlock) return;

  // Move the block's origin to floor intersection
  const floorPt = getFloorIntersection();
  if (floorPt) {
    draggingBlock.object3D.position.copy(floorPt);
  }

  // Check trashcan
  if (trashcanBox) trashcanRect = trashcanBox.getBoundingClientRect();
}

function onMouseUp(e) {
  console.log('[scene.js] onMouseUp');
  isMouseDown = false;
  controls.enabled = true;

  if (draggingBlock) {
    // Check trashcan
    if (trashcanRect) {
      const mx = e.clientX;
      const my = e.clientY;
      if (mx >= trashcanRect.left && mx <= trashcanRect.right &&
        my >= trashcanRect.top && my <= trashcanRect.bottom) {
        console.log('[scene.js] Dropped on trashcan. Removing block:', draggingBlock.name);
        removeBlock(draggingBlock);
        draggingBlock = null;
        return;
      }
    }

    // Not trash => re-snap block in new position
    finalizeActiveBlock();
    draggingBlock = null;
    return;
  }

  // If user just dropped a block from the left list => now we start following the mouse
  if (!placedBlocks.includes(activeBlock) && activeBlock) {
    console.log('[scene.js] user just dropped block, start following the mouse...');
    isFollowingMouse = true;
  }
}

// HELPER

function getFloorIntersection() {
  const rect = renderer.domElement.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  mouse.set(x, y);
  raycaster.setFromCamera(mouse, camera);

  const hits = raycaster.intersectObject(floorMesh, false);
  if (hits.length > 0) {
    return hits[0].point;
  }
  return null;
}

function raycastAllPlaced() {
  const rect = renderer.domElement.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  mouse.set(x, y);
  raycaster.setFromCamera(mouse, camera);

  let meshes = [];
  placedBlocks.forEach(b => {
    b.object3D.traverse(child => {
      if (child.isMesh) meshes.push(child);
    });
  });
  return raycaster.intersectObjects(meshes, true);
}

// KEY

export function onKeyDown(e) {
  if (e.key.toLowerCase() === 'r') {
    console.log('[scene.js] "R" pressed => rotate Y +90');
    if (activeBlock) {
      activeBlock.object3D.rotateY(Math.PI / 2);
      showAllUnsnappedAttachmentPoints(scene, placedBlocks, activeBlock);
    } else {
      console.log('[scene.js] No activeBlock to rotate.');
    }
  }
}
