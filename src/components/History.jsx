import React from 'react';

const History = () => {
    return (
        <section id="history" className="py-12 px-4 md:px-10 flex justify-center w-full">
            <div className="w-full max-w-6xl grid md:grid-cols-[1fr_400px] gap-12 items-start">
                <div>
                    <span className="text-primary font-bold tracking-wider text-sm uppercase">Cronología</span>
                    <h2 className="text-3xl font-bold mt-2 mb-8">Historia y Evolución</h2>
                    <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-10">
                        <div className="relative">
                            <div className="absolute -left-[25px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-white dark:border-background-dark"></div>
                            <h3 className="text-xl font-bold">1828 - La Síntesis de Wöhler</h3>
                            <p className="text-slate-600 dark:text-slate-400 mt-2">
                                Friedrich Wöhler sintetiza urea artificialmente a partir de cianato de amonio, derribando la teoría del "vitalismo" y marcando el nacimiento de la química orgánica.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[25px] top-1 h-4 w-4 rounded-full bg-slate-300 dark:bg-slate-600 border-4 border-white dark:border-background-dark"></div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Siglo XX - Escala Industrial</h3>
                            <p className="text-slate-600 dark:text-slate-400 mt-2">
                                Desarrollo del proceso Bosch-Meiser (1922). Optimización de altas presiones y temperaturas permitiendo la producción masiva de fertilizantes que impulsaron la revolución verde.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[25px] top-1 h-4 w-4 rounded-full bg-slate-300 dark:bg-slate-600 border-4 border-white dark:border-background-dark"></div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Actualidad - Sostenibilidad</h3>
                            <p className="text-slate-600 dark:text-slate-400 mt-2">
                                Enfoque en "Urea Verde" y tecnologías de bajas emisiones. Integración con producción de hidrógeno verde y captura de carbono para minimizar el impacto ambiental.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="h-full min-h-[400px] rounded-xl bg-cover bg-center shadow-lg relative"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1XgvBTY7UpvMa38Y8_6HCsykAj0J2WohCQeFUCJqmb6MAi2XLuqHwPH0FhpXp9LN6krPoOWbQs3ad6x84Yp9ILDA_Lytj5XpJnpxIuoT0q7gPdBSCvpMom1OpY7lWQHCENnQx7KVXOLYCrnsjDFiydUoSbEfwVmcY6DOLdW60BQwBUQ947i6T2dgKSSn8Wphqr6D3OQTMUtIII94n66-X5z4P7km2bkVG0c79RFkdabAwmUdeG56JPlMiRzfSr3w10QzQ3zWiwt_A")' }}
                >
                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 p-3 rounded text-xs font-medium backdrop-blur">
                        Laboratorio Histórico (Ref. Página 11)
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;
