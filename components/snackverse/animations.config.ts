/**
 * Animation configuration constants
 * Centralized timing, easing, and animation values for consistent animations across components
 */

export const ANIMATION_CONFIG = {
  // Durations (in seconds)
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
    slower: 1.5,
  },

  // Easing functions
  easing: {
    easeOut: [0.16, 1, 0.3, 1],
    easeInOut: [0.4, 0, 0.2, 1],
    easeOutCubic: [0.33, 1, 0.68, 1],
    spring: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },

  // Scroll animation settings
  scroll: {
    // IntersectionObserver threshold
    threshold: 0.1,
    // Root margin for triggering animations
    rootMargin: "0px 0px -50px 0px",
  },

  // Parallax settings
  parallax: {
    // Smoothness factor (higher = less movement)
    smoothness: {
      low: 10,
      medium: 20,
      high: 30,
      veryHigh: 40,
    },
  },

  // Floating animation settings
  floating: {
    duration: 3,
    ease: "easeInOut",
  },
} as const;
