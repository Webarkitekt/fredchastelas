import React from "react";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from "next/link";
import Logo from  "../public/logo.svg";

export const Header = ({data}) => {
    // If we're on an admin path, other links should also link to their admin paths
    const [prefix, setPrefix] = React.useState("");
    const [windowUrl, setUrl] = React.useState("");
    const [showHeader, setShowHeader] = React.useState(true);
    const [scrollPos, setScrollPos] = React.useState(0);
    const isBrowser = typeof window !== "undefined";
    const hasUrl = isBrowser ? window.location.href : "";

    const handleScroll = () => {
        setScrollPos(document.documentElement.scrollTop);
        document.documentElement.scrollTop > 90 && setShowHeader(document.documentElement.scrollTop < scrollPos);
    };

    React.useEffect(() => {
        setUrl(hasUrl);
    }, [hasUrl]);

    React.useEffect(() => {
        if (window.location.pathname.startsWith("/admin")) {
            setPrefix("/admin");
        }
    });

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <div className={`sticky top-0 z-50 bg-white transition-transform ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>

            <div className="relative pt-6 pb-6">
                <Popover>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-center" aria-label="Global">
                            <div className="flex items-center flex-1 lg:absolute lg:inset-y-0 lg:left-0">
                                <div className="flex items-center justify-between w-full lg:w-auto">
                                    <a href="/">
                                        <span className="sr-only">Frédéric Chastelas</span>
                                        <Logo/>
                                    </a>
                                    <div className="-mr-2 flex items-center lg:hidden">
                                        <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                                            <span className="sr-only">Ouvrir le menu principal</span>
                                            <MenuIcon className="h-8 w-8" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:flex lg:space-x-10">
                                {data.nav &&
                                    data.nav.map((item, i) => {
                                        const activeItem =
                                            item.href === ""
                                                ? typeof location !== "undefined" &&
                                                location.pathname == "/"
                                                : windowUrl.includes(item.href);
                                        return (
                                            <Link key={`${item.label}-${i}`} href={`${prefix}/${item.href}`} passHref>
                                                <a className="relative inline-block text-sm uppercase font-medium text-gray-700 after:absolute after:w-full after:scale-x-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-gray-700 after:origin-bottom-right after:transition-transform after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left after:duration-300">
                                                    {item.label}
                                                </a>
                                            </Link>
                                        );
                                    })
                                }
                            </div>
                            <div className="hidden lg:absolute lg:flex lg:items-center lg:justify-end lg:inset-y-0 lg:right-0">
                                <span className="inline-flex rounded-md">
                                  <a href="mailto:frederic.chastelas@gmail.com"
                                       className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-gray-700 rounded-lg text-base font-semibold text-gray-700 hover:bg-white hover:text-gray-800 transition">
                                        Me contacter
                                    </a>
                                </span>
                            </div>
                        </nav>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
                        >
                            <div className=" rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="px-5 pt-4 pb-4 flex items-center justify-between">
                                    <div>
                                        <Logo/>
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-8 w-8" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="px-2 pt-2 pb-3">
                                    {data.nav &&
                                        data.nav.map((item, i) => {
                                            const activeItem =
                                                item.href === ""
                                                    ? typeof location !== "undefined" &&
                                                    location.pathname == "/"
                                                    : windowUrl.includes(item.href);
                                            return (
                                                <Link key={`${item.label}-${i}`} href={`${prefix}/${item.href}`} passHref>
                                                    <a className="block px-3 py-2 rounded-md text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-5">
                                                        {item.label}
                                                    </a>
                                                </Link>
                                            );
                                        })
                                    }
                                </div>
                                <a
                                    href="mailto:frederic.chastelas@gmail.com"
                                    className="block w-full px-5 py-3 text-xl text-center font-medium text-gray-700 bg-gray-50 hover:bg-gray-100"
                                >
                                    Me contacter
                                </a>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </div>
        </div>
    )
}


