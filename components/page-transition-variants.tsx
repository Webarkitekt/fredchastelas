"use client";

// Collection de variants d'animations pour les transitions de pages
export const pageTransitionVariants = {
  // 1. Fade simple et élégant
  fade: {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  },

  // 2. Slide vers le haut (défaut actuel, très moderne)
  slideUp: {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98,
    },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.98,
    },
  },

  // 3. Slide horizontal (comme dans les apps mobiles)
  slideHorizontal: {
    initial: {
      opacity: 0,
      x: 100,
    },
    enter: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: -100,
    },
  },

  // 4. Scale effect (zoom in/out)
  scale: {
    initial: {
      opacity: 0,
      scale: 0.9,
    },
    enter: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 1.1,
    },
  },

  // 5. Rotate + Scale (plus créatif)
  rotateScale: {
    initial: {
      opacity: 0,
      scale: 0.8,
      rotate: -5,
    },
    enter: {
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotate: 5,
    },
  },

  // 6. Curtain effect (rideau qui se lève)
  curtain: {
    initial: {
      opacity: 0,
      y: "100%",
    },
    enter: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: "-100%",
    },
  },

  // 7. Blur effect (flou artistique)
  blur: {
    initial: {
      opacity: 0,
      filter: "blur(10px)",
      scale: 0.98,
    },
    enter: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
    },
    exit: {
      opacity: 0,
      filter: "blur(10px)",
      scale: 0.98,
    },
  },

  // 8. Page flip (comme un livre)
  pageFlip: {
    initial: {
      opacity: 0,
      rotateY: -90,
      scale: 0.8,
    },
    enter: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      rotateY: 90,
      scale: 0.8,
    },
  },
};

// Type helper pour l'autocomplétion
export type TransitionVariantName = keyof typeof pageTransitionVariants;

// Fonction helper pour récupérer un variant spécifique
export const getTransitionVariant = (
  name: TransitionVariantName = "slideUp"
) => {
  return pageTransitionVariants[name];
};
