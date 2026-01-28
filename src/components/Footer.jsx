import React from 'react';

const Footer = () => {
    const references = [
        { num: 1, text: 'Meessen, J.H. (2010). "Urea", Ullmann\'s Encyclopedia of Industrial Chemistry. Wiley-VCH.' },
        { num: 2, text: 'Stamicarbon B.V. (2022). "Advances in Urea Process Design and Corrosion Prevention".' },
        { num: 3, text: 'Erisman, J.W. et al. (2008). "How a century of ammonia synthesis changed the world". Nature Geoscience.' },
        { num: 4, text: 'Toyo Engineering Corp. (2019). "ACES21 Process Technology Overview".' },
        { num: 5, text: 'International Fertilizer Association (2021). "Medium-Term Fertilizer Outlook 2021-2025".' },
        { num: 6, text: 'Wöhler, F. (1828). "Ueber künstliche Bildung des Harnstoffs". Annalen der Physik und Chemie.' }
    ];

    return (
        <>
            <section className="py-16 px-4 md:px-10 bg-slate-900 text-slate-300 flex justify-center w-full mt-auto">
                <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-white text-2xl font-bold mb-4">Conclusiones</h2>
                        <p className="mb-6 leading-relaxed">
                            La urea permanece como un pilar insustituible de la química moderna y la seguridad alimentaria global. Aunque su producción presenta desafíos energéticos y ambientales, la evolución hacia tecnologías de reciclaje total y síntesis verde promete un futuro más sostenible para este compuesto vital.
                        </p>
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            <div className="p-3 bg-slate-800 rounded border border-slate-700 text-center">
                                <div className="text-2xl font-bold text-white">46%</div>
                                <div className="text-[10px] uppercase tracking-wider mt-1">Nitrógeno</div>
                            </div>
                            <div className="p-3 bg-slate-800 rounded border border-slate-700 text-center">
                                <div className="text-2xl font-bold text-white">1828</div>
                                <div className="text-[10px] uppercase tracking-wider mt-1">Descubrimiento</div>
                            </div>
                            <div className="p-3 bg-slate-800 rounded border border-slate-700 text-center">
                                <div className="text-2xl font-bold text-white">Global</div>
                                <div className="text-[10px] uppercase tracking-wider mt-1">Impacto</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-white text-2xl font-bold mb-4">Referencias Académicas</h2>
                        <ul className="space-y-3 text-sm font-mono text-slate-400">
                            {references.map((ref) => (
                                <li key={ref.num} className="flex gap-3">
                                    <span className="text-primary">[{ref.num}]</span>
                                    <span>{ref.text}</span>
                                </li>
                            ))}
                        </ul>
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
