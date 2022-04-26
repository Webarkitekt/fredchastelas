import React from "react";
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
        setScrollPos(document.body.getBoundingClientRect().top);
        setShowHeader(document.body.getBoundingClientRect().top > scrollPos);
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
        <div className={`w-full flex-shrink px-4 py-6 sm:px-6 lg:px-8 backdrop-blur-lg sticky top-0 z-50 bg-white transition-transform ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
            <div
                className="max-w-screen-2xl mx-auto flex justify-between items-center  md:justify-start md:space-x-10 ">
                <div className="flex justify-start lg:flex-1 lg:w-0 ">
                    <a href="#">
                        <span className="sr-only">Frédéric Chastelas</span>
                        <div className="w-[110px] ">
                            <Logo/>
                        </div>

                    </a>
                </div>
                <nav className="hidden md:flex space-x-5">
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
                </nav>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <a href="/contact"
                       className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-gray-700 rounded-lg shadow-sm text-base font-semibold text-gray-700 hover:bg-white hover:text-gray-800 transition">
                        Me contacter
                    </a>
                </div>
            </div>
        </div>
    )
}


