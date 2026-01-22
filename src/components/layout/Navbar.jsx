import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background-dark/95 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Area */}
                    <div className="flex-shrink-0 flex flex-col items-center group cursor-pointer">
                        <span className="font-display text-2xl md:text-3xl tracking-widest text-primary font-bold group-hover:text-white transition-colors duration-500 drop-shadow-md">
                            CROWN RESERVE
                        </span>
                        <span className="text-[9px] tracking-[0.4em] text-gray-500 uppercase group-hover:text-primary transition-colors">
                            Distillery
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-10">
                            {['Home', 'Spirits', 'Our Story'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(' ', '')}`}
                                    className="text-gray-400 hover:text-white relative group px-1 py-2 text-xs font-semibold tracking-[0.2em] uppercase transition-all"
                                >
                                    {item}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            type="button"
                            className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            <span className="material-icons">{mobileMenuOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>

                    {/* Shop Link (Absolute positioned in original, kept consistent but improved visibility) */}
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-8 opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
                        <a href="/shop" className="group flex items-center gap-2 text-primary tracking-[0.3em] uppercase text-[11px] font-bold">
                            <span className="material-symbols-outlined text-sm">shopping_bag</span>
                            <span className="relative">
                                Shop
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-background-dark/98 backdrop-blur-xl border-t border-white/10 absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                        {['Home', 'Spirits', 'Our Story'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '')}`}
                                className="text-gray-300 hover:text-primary block px-3 py-2 text-base font-medium tracking-widest uppercase"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
