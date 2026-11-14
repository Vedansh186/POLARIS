export const degreesToRadians = (degrees) => (degrees * Math.PI) / 180;

export function clampAngle(angle) {
  return ((Number(angle) % 180) + 180) % 180;
}

/** Ideal polarizer chain. The first element filters unpolarized radiation. */
export function calculatePolarization(initialIntensity, angles) {
  if (!Array.isArray(angles) || angles.length === 0) return { stages: [], finalIntensity: initialIntensity };
  let intensity = Math.max(0, Number(initialIntensity));
  const stages = angles.map((rawAngle, index) => {
    const angle = clampAngle(rawAngle);
    const relativeAngle = index === 0 ? null : clampAngle(angle - angles[index - 1]);
    const transmission = index === 0 ? 0.5 : Math.cos(degreesToRadians(relativeAngle)) ** 2;
    intensity *= transmission;
    return { index, angle, relativeAngle, transmission, intensity };
  });
  return { stages, finalIntensity: intensity };
}

export function fieldAmplitude(initialIntensity, currentIntensity) {
  if (initialIntensity <= 0) return 0;
  return Math.sqrt(Math.max(0, currentIntensity) / initialIntensity);
}

export function malusCurve(baseIntensity = 50, samples = 181) {
  return Array.from({ length: samples }, (_, i) => {
    const angle = (180 * i) / (samples - 1);
    return { angle, intensity: baseIntensity * Math.cos(degreesToRadians(angle)) ** 2 };
  });
}
