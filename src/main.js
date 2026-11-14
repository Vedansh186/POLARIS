import Chart from 'chart.js/auto';
import './style.css';
import { calculatePolarization, malusCurve } from './physics.js';
import { PolarizationScene } from './scene.js';
import { wireControls } from './controls.js';

const state = { initialIntensity: 100, angles: [0, 45], speed: 1, paused: false, settings: { electric: true, magnetic: false, components: true, direction: true } };
const chart = new Chart(document.getElementById('intensity-chart'), { type: 'line', data: { labels: [], datasets: [{ data: [], borderColor: '#3bd7ff', backgroundColor: 'rgba(59,215,255,.12)', fill: true, pointRadius: 0, tension: .28, borderWidth: 2 }, { data: [], borderColor: '#ffd36a', pointBackgroundColor: '#ffd36a', pointRadius: 5, showLine: false }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx) => `${ctx.parsed.y.toFixed(1)}% transmitted` } } }, scales: { x: { title: { display: true, text: 'Analyzer angle (degrees)', color: '#91a7bb' }, ticks: { color: '#91a7bb', maxTicksLimit: 7 }, grid: { color: 'rgba(150,190,220,.08)' } }, y: { min: 0, max: 55, title: { display: true, text: 'Intensity (%)', color: '#91a7bb' }, ticks: { color: '#91a7bb' }, grid: { color: 'rgba(150,190,220,.08)' } } } } });
const scene = new PolarizationScene(document.getElementById('scene-container'), () => { document.getElementById('webgl-fallback').hidden = false; });

function updateUI() {
  const result = calculatePolarization(state.initialIntensity, state.angles);
  scene.speed = state.speed; scene.setPaused(state.paused); scene.setSettings(state.settings); scene.updateExperiment({ ...state, ...result });
  document.getElementById('final-intensity').textContent = result.finalIntensity.toFixed(1);
  document.getElementById('stage-readouts').innerHTML = result.stages.map((stage) => `<div class="stage-row"><span>P${stage.index + 1} · ${stage.angle}°${stage.relativeAngle === null ? '' : ` <small>Δ ${stage.relativeAngle.toFixed(0)}°</small>`}</span><strong>${stage.intensity.toFixed(1)}%</strong></div>`).join('');
  const finalStage = result.stages.at(-1); const equation = document.getElementById('equation'); const explanation = document.getElementById('physics-explanation');
  if (result.stages.length === 1) { equation.textContent = 'I₁ = I₀ / 2'; explanation.textContent = 'The first ideal polarizer transmits half the average intensity of an unpolarized ensemble.'; } else { equation.textContent = `I${result.stages.length} = I${result.stages.length - 1} cos²(${finalStage.relativeAngle.toFixed(0)}°)`; explanation.textContent = `The field is projected onto the next axis; its perpendicular component is rejected. Intensity follows the squared projection.`; }
  const inputToLast = result.stages.length === 1 ? state.initialIntensity / 2 : result.stages.at(-2).intensity;
  const curve = malusCurve(inputToLast, 181); chart.data.labels = curve.map((p) => p.angle); chart.data.datasets[0].data = curve.map((p) => p.intensity); chart.data.datasets[1].data = [{ x: finalStage.relativeAngle ?? 0, y: finalStage.intensity }]; chart.update('none');
}
wireControls(state, updateUI); updateUI();
