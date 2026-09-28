import React, { useState } from 'react';
// import footerImg from "../../assets/"
import navIcon from "../../assets/icons/Vector.png"


// Common px
// px-6 md:px-10 lg:px-14 xl:px-21 2xl:px-21

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative w-full bg-[#003BE2] isolate  overflow-hidden  text-white px-6 md:px-10 lg:px-14 xl:px-21 2xl:px-21">
           {/* ----------- bg ----------- */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 opacity-[.15] [background-image:linear-gradient(to_right,#a9c1ff_1px,transparent_1px),linear-gradient(to_bottom,#a9c1ff_1px,transparent_1px)] [background-size:clamp(64px,8.35vw,83px)_clamp(64px,14.4vh,83px)]"
            />

            <div className="mx-auto flex h-16  items-center justify-between ">
                {/* Logo */}
                <a href="/" className="flex shrink-0 items-center gap-2">
                    <img src={navIcon} alt="icon" />
                    <span className="text-xl font-bold tracking-tight text-white">
                        ByteSpace
                    </span>
                </a>

                {/* Desktop Navigation Links */}
                <ul className="hidden items-center gap-9 md:flex lg:gap-12 opacity-70">
                    <li>
                        <a
                            href="/"
                            className="text-[15px] font-medium text-white transition-opacity hover:opacity-80"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/courses"
                            className="text-[15px] font-medium  text-white transition-opacity hover:opacity-80"
                        >
                            Courses
                        </a>
                    </li>
                    <li>
                        <a
                            href="/creators"
                            className="text-[15px] font-medium text-white transition-opacity hover:opacity-80"
                        >
                            Creators
                        </a>
                    </li>
                </ul>

                {/* Desktop Right Side */}
                <div className="hidden items-center gap-5 md:flex lg:gap-7">
                    <a
                        href="/signin"
                        className="text-[15px] font-medium text-white transition-opacity hover:opacity-80"
                    >
                        Sign In
                    </a>
                    <a
                        href="/join"
                        className="text-[15px] font-medium text-white transition-opacity hover:opacity-80"
                    >
                        Join Us
                    </a>
                    <button
                        className="flex items-center justify-center text-white transition-opacity hover:opacity-80"
                        aria-label="Shopping cart"
                    >
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="flex text-white md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    ) : (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
            >
                <ul className="space-y-1 px-6 pb-6 pt-2">
                    <li>
                        <a
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="block py-3 text-base font-medium text-white"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/courses"
                            onClick={() => setIsOpen(false)}
                            className="block py-3 text-base font-medium text-white"
                        >
                            Courses
                        </a>
                    </li>
                    <li>
                        <a
                            href="/creators"
                            onClick={() => setIsOpen(false)}
                            className="block py-3 text-base font-medium text-white"
                        >
                            Creators
                        </a>
                    </li>

                    <li className="my-3 h-px bg-white/15" />

                    <li>
                        <a
                            href="/signin"
                            onClick={() => setIsOpen(false)}
                            className="block py-3 text-base font-medium text-white"
                        >
                            Sign In
                        </a>
                    </li>
                    <li>
                        <a
                            href="/join"
                            onClick={() => setIsOpen(false)}
                            className="block py-3 text-base font-semibold text-[#c8f542]"
                        >
                            Join Us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;