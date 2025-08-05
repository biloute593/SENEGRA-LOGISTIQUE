
// TEST MODIFICATION POUR GIT
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
    requestCount: number;
}

const Header: React.FC<HeaderProps> = ({ requestCount }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-brand-dark/90 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex items-center space-x-3">
                        <img src="/assets/logo-senegra.png" alt="Logo SENEGRA" className="h-12 w-12 rounded-full shadow-lg" />
                        <a href="#home" className="text-white font-display text-4xl font-bold tracking-wider">
                            SENEGRA <span className="text-brand-yellow">LOGISTIQUE</span>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:bg-brand-gray hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.name.toUpperCase()}
                                </a>
                            ))}
                        </div>
                    </div>
                    <a href="#contact" className="hidden md:flex items-center space-x-2 bg-brand-yellow text-brand-dark px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors font-bold">
                        <span>DEVIS</span>
                        {requestCount > 0 && (
                            <span className="bg-brand-blue text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                {requestCount}
                            </span>
                        )}
                    </a>
                    <div className="md:hidden flex items-center">
                         <a href="#contact" className="flex items-center space-x-2 text-white mr-4">
                            {requestCount > 0 && (
                                <span className="bg-brand-blue text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                                    {requestCount}
                                </span>
                            )}
                        </a>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen}
                            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-300 hover:bg-brand-gray hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
