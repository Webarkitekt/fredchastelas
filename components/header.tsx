import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon as MenuIcon,
  XMarkIcon as XIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../public/logo.svg";
import { motion, AnimatePresence } from "framer-motion";

export const Header = ({ data }) => {
  const [prefix, setPrefix] = React.useState("");
  const [windowUrl, setUrl] = React.useState("");
  const [showHeader, setShowHeader] = React.useState(true);
  const [scrollPos, setScrollPos] = React.useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const isBrowser = typeof window !== "undefined";
  const hasUrl = isBrowser ? window.location.href : "";

  const handleScroll = () => {
    const currentScrollY = document.documentElement.scrollTop;

    // Toujours montrer le header si on est en haut de page
    if (currentScrollY < 90) {
      setShowHeader(true);
    } else {
      // Montrer si on scroll vers le haut, cacher si on scroll vers le bas
      setShowHeader(currentScrollY < scrollPos);
    }

    // Mettre à jour la position APRÈS le calcul
    setScrollPos(currentScrollY);
  };

  useEffect(() => {
    const handleRouteChangeStart = () => closeMobileMenu();
    const handleRouteChangeComplete = () => closeMobileMenu();

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

  useEffect(() => {
    setUrl(hasUrl);
  }, [hasUrl]);

  useEffect(() => {
    if (isBrowser && window.location.pathname.startsWith("/admin")) {
      setPrefix("/admin");
    }
  }, [isBrowser]);

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isBrowser, scrollPos]);

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Animations Framer Motion - Version simplifiée pour v12
  const menuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
    },
  };

  // Variants pour les animations staggerées
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <div
        className={`sticky top-0 z-50 bg-white transition-transform ${showHeader ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="relative pt-6 pb-6">
          <Popover>
            {({ open }) => (
              <>
                <div className="w-full px-4 sm:px-6">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 max-w-screen-2xl mx-auto"
                    aria-label="Global"
                  >
                    <div className="flex items-center flex-1">
                      <div className="flex items-center justify-between w-full">
                        <a href="/">
                          <span className="sr-only">Frédéric Chastelas</span>
                          <Logo />
                        </a>
                        <div className="flex items-center xl:hidden">
                          <Popover.Button
                            onClick={openMobileMenu}
                            className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                          >
                            <span className="sr-only">
                              Ouvrir le menu principal
                            </span>
                            <MenuIcon className="h-8 w-8" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden xl:flex xl:space-x-10 xl:flex-1 xl:justify-end xl:items-center">
                      {data.nav &&
                        data.nav.map((item, i) => {
                          const activeItem =
                            item.href === ""
                              ? typeof location !== "undefined" &&
                              location.pathname == "/"
                              : windowUrl.includes(item.href);
                          const isContact = item.href === "contact";
                          return (
                            <Link
                              key={`${item.label}-${i}`}
                              href={`${prefix}/${item.href}`}
                              passHref
                            >
                              {isContact ? (
                                <span className="inline-block px-5 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:border-gray-500 hover:bg-gray-50 transition-all duration-200 whitespace-nowrap">
                                  {item.label}
                                </span>
                              ) : (
                                <span className="relative inline-block text-sm uppercase font-medium text-gray-700 after:absolute after:w-full after:scale-x-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-gray-700 after:origin-bottom-right after:transition-transform after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left after:duration-300 whitespace-nowrap">
                                  {item.label}
                                </span>
                              )}
                            </Link>
                          );
                        })}
                    </div>
                  </nav>
                </div>

                {/* Menu mobile avec Framer Motion */}
                <AnimatePresence>
                  {isMobileMenuOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={menuVariants}
                      className="fixed inset-0 z-50 bg-white"
                    >
                      <div className="flex flex-col h-screen w-full bg-white">
                        {/* Header avec logo et bouton fermeture */}
                        <div className="flex items-center justify-between px-6 pt-6 pb-4 bg-white border-b border-gray-200">
                          <div>
                            <a href="/">
                              <span className="sr-only">
                                Frédéric Chastelas
                              </span>
                              <Logo />
                            </a>
                          </div>
                          <div className="-mr-2 flex items-center">
                            <button
                              onClick={closeMobileMenu}
                              className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                            >
                              <span className="sr-only">Fermer le menu</span>
                              <XIcon className="h-8 w-8" aria-hidden="true" />
                            </button>
                          </div>
                        </div>

                        {/* Navigation principale */}
                        <motion.div
                          className="flex-1 px-6 py-12 bg-white flex items-center justify-center"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <nav className="space-y-6 w-full max-w-md">
                            {data.nav &&
                              data.nav.map((item, i) => {
                                const activeItem =
                                  item.href === ""
                                    ? typeof location !== "undefined" &&
                                    location.pathname == "/"
                                    : windowUrl.includes(item.href);
                                return (
                                  <motion.div
                                    key={`${item.label}-${i}`}
                                    variants={linkVariants}
                                  >
                                    <Link
                                      href={`${prefix}/${item.href}`}
                                      onClick={closeMobileMenu}
                                      className="block py-4 px-0 text-2xl lg:text-3xl font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 hover:translate-x-3 border-b border-gray-100"
                                    >
                                      <span
                                        className={`${activeItem
                                          ? "text-gray-900 font-semibold"
                                          : "text-gray-700"
                                          }`}
                                      >
                                        {item.label}
                                      </span>
                                    </Link>
                                  </motion.div>
                                );
                              })}
                          </nav>
                        </motion.div>

                        {/* Contact et infos en bas */}
                        <motion.div
                          className="px-6 pb-8 pt-6 bg-gray-50 border-t border-gray-200"
                          variants={buttonVariants}
                        >
                          <div className="max-w-md mx-auto space-y-4">
                            <div className="text-center text-sm text-gray-600 space-y-1">
                              <p className="font-medium">Frédéric Chastelas</p>
                              <p>
                                <a href="tel:+33684775544" className="hover:text-gray-900">06 84 77 55 44</a>
                              </p>
                              <p>
                                <a href="mailto:frederic.chastelas@gmail.com" className="hover:text-gray-900">frederic.chastelas@gmail.com</a>
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </Popover>
        </div>
      </div>
    </>
  );
};
