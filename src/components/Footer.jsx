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
