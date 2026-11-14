import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { degreesToRadians, fieldAmplitude } from './physics.js';

const CYAN = 0x38d8ff;
const YELLOW = 0xffd36a;

function disposeObject(object) {
  object.traverse((child) => { child.geometry?.dispose(); if (Array.isArray(child.material)) child.material.forEach((m) => m.dispose()); else child.material?.dispose(); });
}

export class PolarizationScene {
  constructor(container, onUnavailable) {
    this.container = container;
    this.clock = new THREE.Clock(); this.running = true; this.speed = 1; this.time = 0;
    this.settings = { electric: true, magnetic: false, components: true, direction: true };
    this.scene = new THREE.Scene(); this.scene.background = new THREE.Color(0x07111f);
    this.camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100); this.camera.position.set(9, 7, 11);
    try { this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); } catch { onUnavailable?.(); return; }
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); this.renderer.outputColorSpace = THREE.SRGBColorSpace; container.appendChild(this.renderer.domElement);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement); this.controls.enableDamping = true; this.controls.target.set(0, 0, 0);
    this.scene.add(new THREE.HemisphereLight(0xa8e8ff, 0x06111e, 2)); const light = new THREE.PointLight(CYAN, 20, 35); light.position.set(0, 5, 5); this.scene.add(light);
    this.source = this.makeSource(); this.scene.add(this.source);
    this.beams = this.makeBeams(); this.scene.add(this.beams);
    this.vectorGroup = new THREE.Group(); this.scene.add(this.vectorGroup);
    this.magneticGroup = new THREE.Group(); this.scene.add(this.magneticGroup);
    this.componentGroup = new THREE.Group(); this.scene.add(this.componentGroup);
    this.directionGroup = this.makeDirections(); this.scene.add(this.directionGroup);
    this.polarizerGroup = new THREE.Group(); this.scene.add(this.polarizerGroup);
    this.resize = this.resize.bind(this); window.addEventListener('resize', this.resize); this.resize(); this.animate();
  }
  makeSource() { const group = new THREE.Group(); const sphere = new THREE.Mesh(new THREE.SphereGeometry(.46, 24, 24), new THREE.MeshBasicMaterial({ color: CYAN, transparent: true, opacity: .9 })); const glow = new THREE.PointLight(CYAN, 5, 5); group.add(sphere, glow); group.position.x = -6.3; return group; }
  makeBeams() { const group = new THREE.Group(); [-3.2, 0, 3.2].forEach((x, i) => { const material = new THREE.MeshBasicMaterial({ color: CYAN, transparent: true, opacity: i === 2 ? .55 : .25, blending: THREE.AdditiveBlending, depthWrite: false }); const beam = new THREE.Mesh(new THREE.CylinderGeometry(.12, .12, 3, 12, 1, true), material); beam.rotation.z = Math.PI / 2; beam.position.x = x; group.add(beam); }); return group; }
  makeDirections() { const group = new THREE.Group(); [-4.9, -3.8, -2.7, -.5, .8, 2, 4.2].forEach((x) => { const arrow = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(x, -1.9, 0), .55, 0x588cab, .18, .1); group.add(arrow); }); return group; }
  updatePolarizers(angles) { disposeObject(this.polarizerGroup); this.scene.remove(this.polarizerGroup); this.polarizerGroup = new THREE.Group(); const positions = angles.length === 1 ? [0] : angles.map((_, i) => -1 + (i * 6) / (angles.length - 1)); angles.forEach((angle, i) => { const group = new THREE.Group(); const disc = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.15, .10, 48), new THREE.MeshPhysicalMaterial({ color: 0x3c79a0, transparent: true, opacity: .32, roughness: .2, metalness: .1, side: THREE.DoubleSide })); disc.rotation.z = Math.PI / 2; const axis = new THREE.Mesh(new THREE.CylinderGeometry(.036, .036, 1.65, 10), new THREE.MeshBasicMaterial({ color: YELLOW })); axis.rotation.z = degreesToRadians(angle); const ring = new THREE.Mesh(new THREE.TorusGeometry(1.16, .045, 10, 48), new THREE.MeshBasicMaterial({ color: CYAN, transparent: true, opacity: .8 })); ring.rotation.y = Math.PI / 2; group.add(disc, axis, ring); group.position.x = positions[i]; this.polarizerGroup.add(group); }); this.scene.add(this.polarizerGroup); }
  updateExperiment({ angles, initialIntensity, stages }) { if (!this.renderer) return; this.angles = angles; this.initialIntensity = initialIntensity; this.stages = stages; this.updatePolarizers(angles); }
  updateVectors() { const clear = (group) => { while (group.children.length) { const child = group.children.pop(); disposeObject(child); } }; clear(this.vectorGroup); clear(this.magneticGroup); clear(this.componentGroup); if (!this.stages) return;
    const samples = [-5.3, -4.65, -4, -3.35, -2.7, -2.05]; samples.forEach((x, i) => { const a = i * 1.91 + this.time * .8; const dir = new THREE.Vector3(0, Math.cos(a), Math.sin(a)).normalize(); const length = .6 + .4 * Math.abs(Math.sin(this.time * 2 + i)); const v = new THREE.ArrowHelper(dir, new THREE.Vector3(x, 0, 0), length, CYAN, .18, .1); this.vectorGroup.add(v); const magneticDirection = new THREE.Vector3(0, -dir.z, dir.y); this.magneticGroup.add(new THREE.ArrowHelper(magneticDirection, new THREE.Vector3(x, 0, 0), length, 0xff70b0, .18, .1)); });
    const positions = this.angles.length === 1 ? [1.4] : this.angles.map((_, i) => .6 + (i * 5.5) / Math.max(1, this.angles.length - 1));
    this.stages.forEach((stage, i) => { const axis = new THREE.Vector3(0, Math.cos(degreesToRadians(stage.angle)), Math.sin(degreesToRadians(stage.angle))); const amplitude = .15 + fieldAmplitude(this.initialIntensity, stage.intensity) * .95; for (let n = 0; n < 5; n += 1) { const x = positions[i] + n * .42; const y = amplitude * Math.sin(this.time * 3 - n * 1.2) * axis.y; const z = amplitude * Math.sin(this.time * 3 - n * 1.2) * axis.z; this.vectorGroup.add(new THREE.ArrowHelper(axis.clone().multiplyScalar(Math.sign(Math.sin(this.time * 3 - n * 1.2)) || 1), new THREE.Vector3(x, 0, 0), Math.abs(y || z) + .08, YELLOW, .13, .07)); }
      if (i > 0 && this.settings.components) { const incomingAngle = this.stages[i - 1].angle; const inAxis = new THREE.Vector3(0, Math.cos(degreesToRadians(incomingAngle)), Math.sin(degreesToRadians(incomingAngle))); const rejected = inAxis.clone().sub(axis.clone().multiplyScalar(inAxis.dot(axis))); if (rejected.length() > .05) this.componentGroup.add(new THREE.ArrowHelper(rejected.normalize(), new THREE.Vector3(positions[i] - .25, 0, 0), .7, 0xff6b8a, .18, .1)); }
    });
    this.vectorGroup.visible = this.settings.electric; this.componentGroup.visible = this.settings.components; this.magneticGroup.visible = this.settings.magnetic; this.directionGroup.visible = this.settings.direction;
  }
  setSettings(settings) { Object.assign(this.settings, settings); }
  setPaused(paused) { this.running = !paused; }
  resize() { if (!this.renderer) return; const { clientWidth: w, clientHeight: h } = this.container; this.camera.aspect = w / Math.max(h, 1); this.camera.updateProjectionMatrix(); this.renderer.setSize(w, h, false); }
  animate() { requestAnimationFrame(() => this.animate()); const delta = this.clock.getDelta(); if (this.running) this.time += delta * this.speed; this.updateVectors(); this.controls?.update(); this.renderer?.render(this.scene, this.camera); }
  dispose() { window.removeEventListener('resize', this.resize); this.controls?.dispose(); this.renderer?.dispose(); }
}
