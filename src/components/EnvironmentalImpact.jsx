import React, { useState } from 'react';

const EnvironmentalImpact = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const impacts = [
        {
            id: 0,
            negative: {
                title: 'Eutrofización',
                description: 'El exceso de escorrentía de nitrógeno provoca floraciones de algas nocivas en cuerpos de agua.',
                severity: 'Alto',
                severityColor: 'bg-red-600 dark:bg-red-500'
            },
            mitigation: {
                title: 'Agricultura de Precisión',
                description: 'Uso de sensores para aplicar la dosis exacta necesaria.',
                icon: 'sensors'
            },
            color: 'amber'
        },
        {
            id: 1,
            negative: {
                title: 'Volatilización de Amoníaco',
                description: 'Pérdida de nitrógeno a la atmósfera si no se aplica correctamente.',
                severity: 'Medio',
                severityColor: 'bg-orange-500 dark:bg-orange-400'
            },
            mitigation: {
                title: 'Inhibidores de Ureasa',
                description: 'Aditivos que ralentizan la descomposición para reducir pérdidas.',
                icon: 'science'
            },
            color: 'blue'
        },
        {
            id: 2,
            negative: {
                title: 'Huella de Carbono',
                description: 'La producción tradicional consume grandes cantidades de gas natural.',
                severity: 'Mitigable',
                severityColor: 'bg-yellow-500 dark:bg-yellow-400'
            },
            mitigation: {
                title: 'Tecnología SCR',
                description: 'Uso de urea para limpiar gases de escape en vehículos diésel.',
                icon: 'local_shipping'
            },
            color: 'emerald'
        }
    ];

    return (
        <section id="impact" className="py-16 px-4 md:px-10 bg-slate-100 dark:bg-slate-900/50 flex justify-center w-full">
            <div className="w-full max-w-6xl">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold">Impacto Ambiental</h2>
                    <p className="text-slate-600 dark:text-slate-400 mt-2">Efectos y soluciones para un uso responsable</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Negative Effects Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400">
                                <span className="material-symbols-outlined">warning</span>
                            </div>
                            <h3 className="text-xl font-bold">Efectos Negativos</h3>
                        </div>

                        {impacts.map((impact) => (
                            <div
                                key={`negative-${impact.id}`}
                                onMouseEnter={() => setHoveredIndex(impact.id)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md border-l-4 border-red-500 
                                    transition-all duration-300 hover:shadow-lg hover:scale-[1.02]
                                    ${hoveredIndex === impact.id ? 'ring-2 ring-red-300 dark:ring-red-700' : ''}`}
                            >
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div className="flex items-start gap-3 flex-1">
                                        <span className="material-symbols-outlined text-red-500 text-[20px] mt-0.5">remove</span>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-slate-900 dark:text-slate-100">{impact.negative.title}</h4>
                                        </div>
                                    </div>
                                    <span className={`text-xs font-semibold px-2 py-1 rounded-full text-white ${impact.negative.severityColor}`}>
                                        {impact.negative.severity}
                                    </span>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 ml-8">{impact.negative.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Responsible Practices Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                                <span className="material-symbols-outlined">eco</span>
                            </div>
                            <h3 className="text-xl font-bold">Prácticas Responsables</h3>
                        </div>

                        {impacts.map((impact) => (
                            <div
                                key={`mitigation-${impact.id}`}
                                onMouseEnter={() => setHoveredIndex(impact.id)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md border-l-4 border-green-500 
                                    transition-all duration-300 hover:shadow-lg hover:scale-[1.02]
                                    ${hoveredIndex === impact.id ? 'ring-2 ring-green-300 dark:ring-green-700' : ''}`}
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <span className="material-symbols-outlined text-green-500 text-[20px] mt-0.5">
                                        {impact.mitigation.icon}
                                    </span>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-slate-900 dark:text-slate-100">{impact.mitigation.title}</h4>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 ml-8">{impact.mitigation.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnvironmentalImpact;
