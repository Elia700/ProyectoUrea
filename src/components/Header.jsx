import React, { useState } from 'react';

const Header = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur">
            <div className="px-4 md:px-10 h-16 flex items-center justify-center max-w-7xl mx-auto">
                <nav className="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <button
                        onClick={() => scrollToSection('applications')}
                        className="hover:text-primary transition-colors cursor-pointer"
                    >
                        Aplicaciones
                    </button>
                    <button
                        onClick={() => scrollToSection('processes')}
                        className="hover:text-primary transition-colors cursor-pointer"
                    >
                        Procesos
                    </button>
                    <button
                        onClick={() => scrollToSection('history')}
                        className="hover:text-primary transition-colors cursor-pointer"
                    >
                        Historia
                    </button>
                    <button
                        onClick={() => scrollToSection('impact')}
                        className="hover:text-primary transition-colors cursor-pointer"
                    >
                        Impacto
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
