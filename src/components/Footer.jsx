import React from 'react';

const Footer = () => {
    return (
        <>
            <section className="py-16 px-4 md:px-10 bg-slate-900 text-slate-300 flex justify-center w-full mt-auto">
                <div className="w-full max-w-4xl flex justify-center">
                    <div className="max-w-2xl text-center">
                        <h2 className="text-white text-2xl font-bold mb-4">Conclusiones</h2>
                        <p className="mb-6 leading-relaxed">
                            La urea permanece como un pilar insustituible de la química moderna y la seguridad alimentaria global. Aunque su producción presenta desafíos energéticos y ambientales, la evolución hacia tecnologías de reciclaje total y síntesis verde promete un futuro más sostenible para este compuesto vital.
                        </p>
                        <a
                            href="/assets/images/general/LA UREA INFORME.pdf"
                            download="LA UREA INFORME.pdf"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Descargar Informe
                        </a>
                    </div>
                </div>
            </section>
            <footer className="bg-slate-950 text-slate-500 py-6 text-center text-sm border-t border-slate-800">
                <p>© 2023 UreaLab Solutions. Todos los derechos reservados. Documentación Interna.</p>
            </footer>
        </>
    );
};

export default Footer;
