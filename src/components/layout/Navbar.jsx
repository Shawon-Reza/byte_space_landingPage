import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
// import footerImg from "../../assets/"
import navIcon from "../../assets/icons/Vector.png"
import TechText from '../ui/TechText';


// Common px
// px-6 md:px-10 lg:px-14 xl:px-21 2xl:px-21

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();
    const activeTab = pathname === '/' ? 'home'
        : pathname.startsWith('/courses') ? 'courses'
            : pathname.startsWith('/creators') ? 'creators' : null;

    const desktopLinkClass = (tab) => `text-[15px] text-white transition-opacity hover:opacity-80 ${activeTab === tab ? 'font-bold opacity-100' : 'font-medium opacity-70'}`;
    const mobileLinkClass = (tab) => `block py-3 text-base transition-colors ${activeTab === tab ? 'font-bold text-white' : 'font-medium text-white'}`;

    const handleActiveNavClick = (tab) => {
        if (activeTab === tab) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const scrollToSection = (event, href) => {
        if (!href.startsWith('#')) return;

        event.preventDefault();

        const target = document.querySelector(href);
        if (!target) return;

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // Optional: close mobile menu if you have one
        setMenuOpen?.(false);
    };

    return (
        <nav className=" sticky top-0 inset-0 w-full bg-[#003BE2] isolate  overflow-hidden  text-white px-6 md:px-10 lg:px-14 xl:px-21 2xl:px-21 z-50 ">
            {/* ----------- bg ----------- */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 opacity-[.15] [background-image:linear-gradient(to_right,#a9c1ff_1px,transparent_1px),linear-gradient(to_bottom,#a9c1ff_1px,transparent_1px)] [background-size:clamp(64px,8.35vw,83px)_clamp(64px,14.4vh,83px)]"
            />

            <div className="mx-auto flex h-16  items-center justify-between ">
                {/* Logo */}
                <a href="/" className="flex shrink-0 items-center gap-2">
                    <img src={navIcon} alt="icon" />
                    <span className="text-2xl  text-white font-clash">
                        <div style={{ width: '100%', height: '80px', position: 'relative' }}>
                            <TechText
                                text="React Bits"
                                fontWeight={600}
                                fontSize={150}
                                reveal="letter"
                                dashLength={4}
                                dashGap={2}
                                specks={15}
                                fontFamily=""
                                color="#ffffff"
                                accentColor="#ffffff"
                                letterSpacing={-0.05}
                                reach={200}
                                softness={0.7}
                                strokeWidth={1.5}
                                speed={1}
                                lineStyle="dashed"
                                selection
                                labels
                                draggable
                                sweep
                            />
                        </div>
                        {/* ByteSpace */}
                    </span>
                </a>

                {/* Desktop Navigation Links */}
                <ul className="hidden items-center gap-9 md:flex lg:gap-12">
                    <li>
                        <Link to="/" onClick={() => handleActiveNavClick('home')} aria-current={activeTab === 'home' ? 'page' : undefined} className={desktopLinkClass('home')}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/courses" onClick={() => handleActiveNavClick('courses')} aria-current={activeTab === 'courses' ? 'page' : undefined} className={desktopLinkClass('courses')}>
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link to="/creators" onClick={() => handleActiveNavClick('creators')} aria-current={activeTab === 'creators' ? 'page' : undefined} className={desktopLinkClass('creators')}>
                            Creators
                        </Link>
                    </li>
                </ul>

                {/* Desktop Right Side */}
                <div className="hidden items-center gap-5 md:flex lg:gap-7">
                    <a
                        href="/signIn"
                        className="text-[15px] font-medium text-white transition-opacity hover:opacity-80"
                    >
                        Sign In
                    </a>
                    <a
                        href="#join_as_creator"
                        onClick={(e) => scrollToSection(e, "#join_as_creator")}
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
                        <Link
                            to="/"
                            onClick={() => {
                                setIsOpen(false);
                                handleActiveNavClick('home');
                            }}
                            aria-current={activeTab === 'home' ? 'page' : undefined}
                            className={mobileLinkClass('home')}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/courses"
                            onClick={() => {
                                setIsOpen(false);
                                handleActiveNavClick('courses');
                            }}
                            aria-current={activeTab === 'courses' ? 'page' : undefined}
                            className={mobileLinkClass('courses')}
                        >
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/creators"
                            onClick={() => {
                                setIsOpen(false);
                                handleActiveNavClick('creators');
                            }}
                            aria-current={activeTab === 'creators' ? 'page' : undefined}
                            className={mobileLinkClass('creators')}
                        >
                            Creators
                        </Link>
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
                            href="#join_as_creator"
                            onClick={(e) => scrollToSection(e, "#join_as_creator")}
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
