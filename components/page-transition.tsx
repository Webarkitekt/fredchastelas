"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import {
  pageTransitionVariants,
  TransitionVariantName,
  getTransitionVariant,
} from "./page-transition-variants";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
  variant?: TransitionVariantName;
  showLoader?: boolean;
  loaderColor?: "primary" | "orange" | "gradient";
}

export const PageTransition = ({
  children,
  className = "",
  variant = "slideUp",
  showLoader = true,
  loaderColor = "gradient",
}: PageTransitionProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  // Obtenir les variants selon la prop
  const pageVariants = getTransitionVariant(variant);

  // Variants pour le loader avec différentes couleurs
  const loaderVariants = {
    initial: {
      opacity: 0,
      scaleX: 0,
    },
    animate: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scaleX: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  // Styles de loader selon la couleur
  const getLoaderStyle = () => {
    const baseStyle = {
      transformOrigin: "left center",
    };

    switch (loaderColor) {
      case "primary":
        return {
          ...baseStyle,
          background: "#3C6676",
        };
      case "orange":
        return {
          ...baseStyle,
          background: "#FF922D",
        };
      case "gradient":
      default:
        return {
          ...baseStyle,
          background:
            "linear-gradient(90deg, #3C6676 0%, #FF922D 50%, #3C6676 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.5s ease-in-out infinite",
        };
    }
  };

  return (
    <>
      {/* Loader de transition - z-index élevé pour être au-dessus du header */}
      {showLoader && (
        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.div
              key="loader"
              variants={loaderVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 left-0 right-0 z-[60] h-1"
              style={getLoaderStyle()}
            />
          )}
        </AnimatePresence>
      )}

      {/* Transitions de pages principales - uniquement le contenu */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.asPath}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          className={className}
          style={{
            // Optimisations de performance pour les animations 3D
            perspective: variant === "pageFlip" ? "1000px" : undefined,
            transformStyle: variant === "pageFlip" ? "preserve-3d" : undefined,
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </>
  );
};

// Composant d'exemple avec différentes variantes pour tester
export const PageTransitionDemo = () => {
  const variants: TransitionVariantName[] = [
    "fade",
    "slideUp",
    "slideHorizontal",
    "scale",
    "rotateScale",
    "curtain",
    "blur",
    "pageFlip",
  ];

  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">
        Variants de transition disponibles :
      </h2>
      <ul className="space-y-2">
        {variants.map((variant) => (
          <li key={variant} className="text-gray-600">
            <code className="bg-gray-100 px-2 py-1 rounded">
              variant="{variant}"
            </code>
            <span className="ml-2">
              {variant === "fade" && "- Fondu simple et élégant"}
              {variant === "slideUp" && "- Slide vertical moderne (défaut)"}
              {variant === "slideHorizontal" &&
                "- Slide horizontal style mobile"}
              {variant === "scale" && "- Effet zoom in/out"}
              {variant === "rotateScale" && "- Rotation + scale créatif"}
              {variant === "curtain" && "- Effet rideau qui se lève"}
              {variant === "blur" && "- Transition avec flou artistique"}
              {variant === "pageFlip" && "- Effet page qui tourne 3D"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
