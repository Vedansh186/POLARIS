import { describe, expect, it } from 'vitest';
import { calculatePolarization, fieldAmplitude } from './physics.js';

describe('ideal polarization physics', () => {
  it('transmits half of unpolarized incident light through the first polarizer', () => {
    expect(calculatePolarization(100, [0]).finalIntensity).toBe(50);
  });
  it('obeys Malus law reference cases', () => {
    expect(calculatePolarization(100, [0, 30]).finalIntensity).toBeCloseTo(37.5, 8);
    expect(calculatePolarization(100, [0, 45]).finalIntensity).toBeCloseTo(25, 8);
    expect(calculatePolarization(100, [0, 90]).finalIntensity).toBeCloseTo(0, 8);
  });
  it('uses relative angles for multiple polarizers', () => {
    expect(calculatePolarization(100, [0, 45, 90]).finalIntensity).toBeCloseTo(12.5, 8);
  });
  it('keeps amplitude proportional to square root of intensity', () => {
    expect(fieldAmplitude(100, 25)).toBe(0.5);
  });
});
