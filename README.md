# ◈ POLARIS — Interactive Polarization Laboratory

An interactive 3D laboratory for exploring optical polarization, built with Three.js. POLARIS lets you send light through a chain of ideal linear polarizers, rotate each one, and watch **Malus' Law** unfold in real time through animated field vectors, live intensity readouts, and a transmission curve.

It runs entirely in the browser with no backend, and deploys as a static site.

<img width="1897" height="905" alt="image" src="https://github.com/user-attachments/assets/d3b223cd-5259-4a12-bfe9-30dc0e164078" />


**Live demo:** [lab-polaris.vercel.app](https://lab-polaris.vercel.app/)

---

## Features

- **3D field visualization:** an animated ensemble of electric-field vectors travels along the X-axis, oscillating in the transverse Y–Z plane.
- **Up to five polarizers:** each can be rotated independently, with presets for **Aligned**, **Crossed**, and **0° · 45° · 90°**.
- **Component decomposition:** the component rejected at each polarizer is drawn explicitly, so you can see what gets blocked and why.
- **Live physics readouts:** per-stage intensity, the relative angle between polarizers, and the equation currently in effect.
- **Malus' Law graph:** a Chart.js curve of transmission versus analyzer angle, with a marker at the current setting.
- **Display controls:** play/pause, animation speed, initial intensity, and toggles for electric-field vectors, magnetic-field vectors, component decomposition, and propagation indicators. Drag to orbit and scroll to zoom.
- **Accessible and robust:** responsive layout, labelled controls, and a fallback message when WebGL is unavailable (the controls and graph still work).
- **Tested physics:** the core calculations live in a pure module with unit tests.

## The physics

POLARIS models **ideal linear polarizers**.

| Stage | Rule | Notes |
| --- | --- | --- |
| First polarizer | `I₁ = I₀ / 2` | An unpolarized beam is a random ensemble of field directions, so on average half the intensity passes. |
| Each later polarizer | `Iₙ = Iₙ₋₁ · cos²(Δθ)` | Malus' Law, where `Δθ` is the angle between the previous polarizer's axis and this one's. |
| Field amplitude | `E ∝ √I` | Intensity is proportional to amplitude squared, so the drawn vector lengths scale with the square root of relative intensity. |

**Example:** with `I₀ = 100%` and polarizers at 0°, 45°, 90°:

```
After P1 → 50.0%
After P2 → 50 · cos²(45°) = 25.0%
After P3 → 25 · cos²(45°) = 12.5%
```

Crossed polarizers (0° and 90°) block all light, but inserting a 45° polarizer between them lets 12.5% through.

> **Note on the visualization:** the colored incoming vectors represent separate members of a statistical ensemble. They are not a single wave polarized in many directions at once. After the first polarizer, the light is linearly polarized.

## Tech stack

- **JavaScript (ES modules)**
- **[Three.js](https://threejs.org/):** 3D scene and rendering
- **[Chart.js](https://www.chartjs.org/):** Malus' Law curve
- **[Vite](https://vitejs.dev/):** dev server and build tooling
- **[Vitest](https://vitest.dev/):** unit tests
- **HTML and CSS**

## Getting started

### Prerequisites

[Node.js](https://nodejs.org/) 20 LTS or newer.

### Install and run

```bash
git clone https://github.com/Vedansh186/POLARIS.git
cd POLARIS
npm install
npm run dev
```

Open the local address printed by Vite (usually `http://localhost:5173`).

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm test` | Run the unit tests |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |

## Project structure

```
POLARIS/
├── index.html          # Page layout: hero, lab, theory, about
├── src/
│   ├── main.js         # App state, UI updates, Chart.js setup
│   ├── scene.js        # Three.js scene: polarizers, field vectors, beams
│   ├── controls.js     # Event wiring for sliders, toggles, presets
│   ├── physics.js      # Pure physics: polarizer chain, Malus' Law, amplitude
│   ├── physics.test.js # Vitest unit tests for the physics module
│   └── style.css       # Styling
├── vite.config.js
└── package.json
```

The physics in `physics.js` has no dependency on Three.js or the DOM, which keeps it easy to test and reason about.

## Testing

```bash
npm test
```

The tests check the reference cases for the physics module:

- The first polarizer transmits 50% of unpolarized light.
- Malus' Law at 30°, 45°, and 90° (37.5%, 25%, and 0%).
- Multi-polarizer chains use relative angles (0° → 45° → 90° gives 12.5%).
- Field amplitude scales with the square root of intensity.



## Limitations

POLARIS is an educational model. It assumes ideal polarizers with no absorption loss beyond the projection itself, perfectly monochromatic light, and no reflection effects. It does not model elliptical or circular polarization, birefringent materials, or wave plates.

## Project information

Developed as a **Physics Lab 1** project (Batch G5) at the **Jaypee Institute of Information Technology**, Noida, Uttar Pradesh, India, in the Mathematics and Computing program.

**Contributors**

- Vedansh Sharma
- Aryan Singh
- Daksh Vij

**Faculty supervisor:** Dr. Anuraj Panwar

## Author

**Vedansh Sharma**
[GitHub](https://github.com/Vedansh186) · [LinkedIn](https://www.linkedin.com/in/vedanshsharma11/)

## License

Released under the [MIT License](LICENSE).
