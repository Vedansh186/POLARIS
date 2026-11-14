# POLARIS — Interactive Polarization Laboratory

A Vite + JavaScript + Three.js interactive visualisation of ideal optical polarization. It models an unpolarized ensemble, the 50% transmission of a first ideal polarizer, and successive Malus’ Law projections. The scene is designed for a Physics-I demonstration and has no backend.

## Features

- Animated 3D electric-field ensemble propagating along the X-axis, with fields in the transverse Y-Z plane.
- Translucent, rotatable 3D polarizers and a visible rejected component at each later stage.
- Correct ideal-polarizer chain calculation: `I1 = I0 / 2`, then `In = I(n-1) cos²(Δθ)`.
- Up to five independently adjustable polarizers, including aligned, crossed, and 0°/45°/90° presets.
- Real-time Chart.js Malus’ Law curve, physics readouts, play/pause, speed, field/decomposition/direction toggles, and camera orbit/zoom.
- Responsive layout, WebGL fallback message, and static Vercel-compatible output.

## Requirements

Install [Node.js](https://nodejs.org/) 20 LTS or newer.

## Run locally

```bash
npm install
npm run dev
```

Open the local address printed by Vite (usually `http://localhost:5173`).

## Verify and build

```bash
npm test
npm run build
npm run preview
```

The production files are written to `dist/`. `npm run preview` serves that build for a final local check.

## Publish through GitHub and Vercel

1. Create an empty GitHub repository, then from this folder run `git init`, `git add .`, `git commit -m "Build POLARIS lab"`, add the GitHub remote, and push the branch.
2. In [Vercel](https://vercel.com), choose **Add New → Project** and import that repository.
3. Vercel detects Vite. Confirm build command `npm run build` and output directory `dist`, then deploy.
4. Every push to the connected branch creates a fresh deployment. Make changes locally, test/build, commit, and push to update the public site.

No Vercel URL is hardcoded and no deployment is performed by this project.

## Physics notes

The coloured incoming vectors stand for separate members of a statistical ensemble; they are intentionally not a single wave simultaneously polarised in many directions. After the first ideal polarizer, the resulting light is linearly polarised. Field amplitude is scaled with the square root of relative intensity, because intensity is proportional to electric-field amplitude squared.

## Editable project details

The About section deliberately contains placeholders for contributors, institution, and faculty supervisor. Replace them in `index.html` before presenting.
