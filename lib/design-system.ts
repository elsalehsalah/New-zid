export const COLORS = {
  primary: '#5B21B6',
  accent1: '#AE72FF',
  accent2: '#4C1289',
  accent3: '#EC4899',
  success: '#00B8A9',
} as const;

export const ANIMATIONS = {
  easing: [0.22, 1, 0.36, 1] as const,
  fast: 0.3,
  medium: 0.6,
  stagger: 0.05,
  spring: { damping: 25, stiffness: 200 },
} as const;

