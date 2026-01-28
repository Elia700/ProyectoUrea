import React from 'react';

const PurityStandard = () => {
    const standards = [
        {
            icon: 'agriculture',
            title: 'Alta Pureza',
            description: 'Urea con 99,9% de pureza para aplicaciones industriales críticas',
            color: 'blue'
        },
        {
            icon: 'check_circle',
            title: 'Estabilidad Química',
            description: 'Compuesto estable bajo condiciones normales de almacenamiento',
            color: 'green'
        },
        {
            icon: 'science',
            title: 'Producción Escalable',
            description: 'Proceso de fabricación optimizado para grandes volúmenes',
            color: 'purple'
        }
    ];

    return (
        <section className="py-16 px-4 md:px-10 flex justify-center w-full bg-slate-50 dark:bg-slate-900/50">
            <div className="w-full max-w-6xl">
                <div className="mb-12 text-center">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase">Calidad Garantizada</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">El Estándar de Pureza</h2>
                    <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-2xl mx-auto">
                        Nuestra urea cumple con los más altos estándares internacionales de calidad y pureza
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {standards.map((standard, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all group"
                        >
                            <div className={`w-14 h-14 rounded-lg bg-${standard.color}-100 dark:bg-${standard.color}-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <span className={`material-symbols-outlined text-${standard.color}-600 dark:text-${standard.color}-400 text-[28px]`}>
                                    {standard.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{standard.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                {standard.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PurityStandard;
