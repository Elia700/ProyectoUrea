import React, { useState } from 'react';

const Header = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full">
            {/* Fondo con efecto glassmorphism premium */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border-b border-white/10"></div>

            <div className="relative px-4 md:px-10 h-16 flex items-center justify-center max-w-7xl mx-auto">
                <nav className="flex items-center gap-2 md:gap-4">
                    {/* Botones de navegación con estilo pill */}
                    <button
                        onClick={() => scrollToSection('applications')}
                        className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 group"
                    >
                        <span className="relative z-10">Aplicaciones</span>
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300"></span>
                    </button>

                    <button
                        onClick={() => scrollToSection('processes')}
                        className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 group"
                    >
                        <span className="relative z-10">Procesos</span>
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300"></span>
                    </button>

                    <button
                        onClick={() => scrollToSection('history')}
                        className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 group"
                    >
                        <span className="relative z-10">Historia</span>
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300"></span>
                    </button>

                    <button
                        onClick={() => scrollToSection('impact')}
                        className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 group"
                    >
                        <span className="relative z-10">Impacto</span>
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300"></span>
                    </button>

                    {/* Separador visual */}
                    <div className="hidden md:block w-px h-6 bg-gradient-to-b from-transparent via-white/30 to-transparent mx-2"></div>

                    {/* Botón de descarga destacado */}
                    <a
                        href="/assets/images/general/LA UREA INFORME.pdf"
                        download="LA UREA INFORME.pdf"
                        className="relative inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white rounded-full overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
                    >
                        {/* Fondo animado del botón */}
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-gradient-x"></span>
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                        {/* Efecto de brillo */}
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                        </span>

                        {/* Contenido del botón */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span className="relative z-10">Descargar Informe</span>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
