import React from 'react';
import crownLogo from '../../assets/images/Crown logo.webp';

const Hero = () => {
    return (
        <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden z-10 bg-black">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(40,30,20,0.35)_0%,_rgba(0,0,0,1)_80%)]"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-25 mix-blend-soft-light"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
            </div>

            <div className="relative z-20 text-center px-4 w-full max-w-6xl mx-auto flex flex-col items-center justify-center h-full">

                <div className="flex-shrink-0 flex justify-center mb-6 md:mb-8 animate-[fadeInUp_1s_ease-out_0.8s_forwards] opacity-0" style={{ animationFillMode: 'forwards' }}>
                    <div className="relative group">
                        <div className="absolute -inset-10 bg-primary/5 blur-[80px] rounded-full"></div>

                        <div className="relative p-4 md:p-8 border border-primary/20 bg-black/40 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(212,175,55,0.05)]">

                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/40"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/40"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/40"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/40"></div>

                            <img
                                src={crownLogo}
                                className="h-44 sm:h-64 md:h-80 max-h-[30vh] w-auto object-contain filter drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] brightness-110"
                                alt="Crown Reserve Logo"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-6 animate-[widthGrow_1s_ease-out_1.2s_forwards] opacity-0" style={{ animationFillMode: 'forwards' }}></div>

                    <p className="whitespace-nowrap text-sm md:text-xl text-gray-300 mb-8 font-sans font-light tracking-[0.3em] md:tracking-[0.5em] uppercase animate-[fadeInUp_1s_ease-out_1.4s_forwards] opacity-0" style={{ animationFillMode: 'forwards' }}>
                        Crafted from Time • Finished in Gold
                    </p>

                    <div className="flex justify-center opacity-0 animate-[fadeInUp_1s_ease-out_1.6s_forwards]" style={{ animationFillMode: 'forwards' }}>
                        <a className="group relative flex items-center justify-center px-10 h-11 text-[10px] font-bold text-primary uppercase tracking-[0.4em] bg-black/20 backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-black border border-primary/40" href="#spirits">
                            <span className="absolute inset-0 w-full h-full bg-white/5 group-hover:translate-x-full transition-transform duration-700 ease-out -translate-x-full skew-x-12"></span>
                            <span className="relative z-10 font-sans flex items-center">View Collection</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-20 hidden lg:block">
                <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent"></div>
            </div>
        </header>
    );
};

export default Hero;
