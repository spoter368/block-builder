// src/snapping.js
import * as THREE from 'three';
import { placedBlocks } from './blockManager.js';

let attachmentsGroup = null;

export function attemptSnapping(activeBlock, allBlocks) {
  console.log('[snapping.js] attemptSnapping for:', activeBlock.name);
  const activeAPs = activeBlock.getAttachmentPointsInWorld();
  const candidates = [];

  allBlocks.forEach((other) => {
    if (other === activeBlock) return;
    const otherAPs = other.getAttachmentPointsInWorld();

    activeAPs.forEach((A) => {
      if (A.ref.isSnapped) return;
      otherAPs.forEach((B) => {
        if (B.ref.isSnapped) return;
        const dist = A.position.distanceTo(B.position);
        if (dist < 0.77) {
          const dot = A.vector.dot(B.vector);
          if (dot <= -0.99) {
            const offset = B.position.clone().sub(A.position);
            candidates.push({ distance: dist, Aref: A.ref, Bref: B.ref, offset });
          }
        }
      });
    });
  });

  if (candidates.length === 0) {
    console.log('[snapping.js] No snapping candidates for:', activeBlock.name);
    return;
  }

  let minDist = Infinity;
  let chosen = null;
  candidates.forEach((c) => {
    if (c.distance < minDist) {
      minDist = c.distance;
      chosen = c;
    }
  });
  console.log(`[snapping.js] Chosen snap dist=${minDist} out of ${candidates.length} candidates`);

  activeBlock.object3D.position.add(chosen.offset);

  candidates.forEach((c) => {
    c.Aref.isSnapped = true;
    c.Bref.isSnapped = true;
  });
  console.log('[snapping.js] Snapping complete.');
}

/**
 * showAllUnsnappedAttachmentPoints
 */
export function showAllUnsnappedAttachmentPoints(scene, placedBlocks, activeBlock) {
  if (!attachmentsGroup) {
    attachmentsGroup = new THREE.Group();
    attachmentsGroup.name = 'allAttachmentHelpers';
    scene.add(attachmentsGroup);
  }
  attachmentsGroup.clear();

  function addPoint(pos, dir) {
    const sphereGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const sphereMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    sphere.position.copy(pos);

    const arrowLen = 0.5;
    const arrow = new THREE.ArrowHelper(dir, pos, arrowLen, 0x00ff00);

    attachmentsGroup.add(sphere);
    attachmentsGroup.add(arrow);
  }

  // Render unsnapped for placed blocks
  placedBlocks.forEach((b) => {
    b.getAttachmentPointsInWorld().forEach((ap) => {
      if (!ap.ref.isSnapped) {
        addPoint(ap.position, ap.vector);
      }
    });
  });

  // Also for activeBlock if exist
  if (activeBlock) {
    activeBlock.getAttachmentPointsInWorld().forEach((ap) => {
      if (!ap.ref.isSnapped) {
        addPoint(ap.position, ap.vector);
      }
    });
  }
}
