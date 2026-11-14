import { clampAngle } from './physics.js';

export function wireControls(state, onChange) {
  const byId = (id) => document.getElementById(id); const emit = () => onChange({ ...state, angles: [...state.angles], settings: { ...state.settings } });
  const rebuild = () => { const list = byId('polarizer-list'); list.innerHTML = ''; state.angles.forEach((angle, i) => { const row = document.createElement('div'); row.className = 'polarizer-row'; row.innerHTML = `<div><span class="element-index">P${i + 1}</span><strong>${i === 0 ? 'Reference polarizer' : i === 1 ? 'Analyzer' : 'Polarizer'}</strong></div><label><input aria-label="Polarizer ${i + 1} angle" type="range" min="0" max="180" value="${angle}" ${i === 0 ? 'disabled' : ''}/><output>${angle}°</output></label>`; const input = row.querySelector('input'); input.addEventListener('input', () => { state.angles[i] = clampAngle(input.value); row.querySelector('output').textContent = `${state.angles[i]}°`; emit(); }); list.appendChild(row); }); };
  byId('input-intensity').addEventListener('input', (e) => { state.initialIntensity = Number(e.target.value); byId('input-intensity-value').value = `${state.initialIntensity}%`; emit(); });
  byId('speed').addEventListener('input', (e) => { state.speed = Number(e.target.value); byId('speed-value').value = `${state.speed.toFixed(1)}×`; emit(); });
  [['toggle-electric', 'electric'], ['toggle-magnetic', 'magnetic'], ['toggle-components', 'components'], ['toggle-direction', 'direction']].forEach(([id, key]) => byId(id).addEventListener('change', (e) => { state.settings[key] = e.target.checked; emit(); }));
  byId('play-button').addEventListener('click', (e) => { state.paused = !state.paused; e.currentTarget.textContent = state.paused ? '▶' : '❚❚'; e.currentTarget.setAttribute('aria-label', state.paused ? 'Play animation' : 'Pause animation'); emit(); });
  byId('add-polarizer').addEventListener('click', () => { if (state.angles.length < 5) { state.angles.push(90); rebuild(); emit(); } });
  byId('remove-polarizer').addEventListener('click', () => { if (state.angles.length > 2) { state.angles.pop(); rebuild(); emit(); } });
  byId('reset-button').addEventListener('click', () => { Object.assign(state, { initialIntensity: 100, angles: [0, 45], speed: 1, paused: false, settings: { electric: true, magnetic: false, components: true, direction: true } }); document.querySelectorAll('input[type="checkbox"]').forEach((el) => { el.checked = state.settings[el.id.replace('toggle-', '')]; }); byId('input-intensity').value = 100; byId('input-intensity-value').value = '100%'; byId('speed').value = 1; byId('speed-value').value = '1.0×'; byId('play-button').textContent = '❚❚'; rebuild(); emit(); });
  document.querySelectorAll('[data-preset]').forEach((button) => button.addEventListener('click', () => { const presets = { aligned: [0, 0], crossed: [0, 90], three: [0, 45, 90] }; state.angles = presets[button.dataset.preset]; rebuild(); emit(); }));
  rebuild(); return { rebuild };
}
