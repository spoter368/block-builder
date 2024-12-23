// src/Block.js
import * as THREE from 'three';

export class Block {
  constructor({ id, name, cost = 0, object3D, attachmentPoints = [] }) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.isNew = true; // For cost logic

    this.object3D = object3D || new THREE.Group();

    // Enable polygon offset on the base mesh so edges are above
    this.object3D.traverse((child) => {
      if (child.isMesh) {
        child.material.polygonOffset = true;
        child.material.polygonOffsetFactor = 1;
        child.material.polygonOffsetUnits = 1;
      }
    });

    // Add edges
    this.addEdgeOutline(this.object3D);

    this.attachmentPoints = attachmentPoints;
  }

  getAttachmentPointsInWorld() {
    return this.attachmentPoints.map((ap) => {
      const wPos = ap.position.clone();
      this.object3D.localToWorld(wPos);
      const wVec = ap.vector.clone().applyQuaternion(this.object3D.quaternion).normalize();
      return { position: wPos, vector: wVec, ref: ap };
    });
  }

  markAttachmentPointsSnapped(refs) {
    refs.forEach((r) => {
      r.isSnapped = true;
    });
  }

  markAttachmentPointsUnsnapped() {
    this.attachmentPoints.forEach((ap) => {
      ap.isSnapped = false;
    });
  }

  containsMesh(mesh) {
    let node = mesh;
    while (node) {
      if (node === this.object3D) return true;
      node = node.parent;
    }
    return false;
  }

  addEdgeOutline(rootObject) {
    rootObject.traverse((child) => {
      if (child.isMesh && child.geometry) {
        const edgesGeo = new THREE.EdgesGeometry(child.geometry, 1);
        const lineMat = new THREE.LineBasicMaterial({
          color: 0x000000,
          depthTest: true // so lines behind the mesh are occluded
        });
        const outline = new THREE.LineSegments(edgesGeo, lineMat);
        outline.name = 'edgesOutline';
        outline.renderOrder = 999;
        outline.raycast = () => { }; // no raycast on outline
        child.add(outline);
      }
    });
  }
}
