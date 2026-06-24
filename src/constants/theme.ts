// Core Theme Constants
export const THEME = {
  colors: {
    primary: '#6366f1', // Indigo 500
    background: '#09090B',
    surface: '#111112',
    text: {
      primary: '#ffffff',
      secondary: '#a1a1aa', // Zinc 400
      muted: '#52525b', // Zinc 600
    }
  },
  animation: {
    duration: {
      fast: 0.2,
      base: 0.4,
      slow: 0.7,
      ultraSlow: 1.5,
    },
    easing: {
      smooth: [0.22, 1, 0.36, 1], // Custom cubic bezier
      bounce: [0.34, 1.56, 0.64, 1],
    }
  },
  layout: {
    maxWidth: '1400px',
    headerHeight: '5rem',
  },
  zIndex: {
    base: 0,
    overlay: 10,
    header: 50,
    modal: 100,
    cursor: 9999,
  }
} as const;
