import React, { useState } from 'react';

const Analysis = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [expandedChallenges, setExpandedChallenges] = useState({});

    const perspectives = [
        {
            icon: 'science',
            title: 'Química',
            color: 'blue',
            advantages: [
                'Alta solubilidad en agua',
                'Contenido de nitrógeno denso (46%)',
                'Síntesis estable y reproducible',
                'Fácil almacenamiento en condiciones controladas'
            ],
            challenges: [
                'Higroscópica (absorbe humedad del ambiente)',
                'Requiere procesos de alta presión y temperatura',
                'Sensible a la descomposición térmica',
                'Necesita purificación para aplicaciones específicas'
            ]
        },
        {
            icon: 'factory',
            title: 'Industrial',
            color: 'orange',
            advantages: [
                'Escalabilidad masiva comprobada',
                'Subproductos manejables',
                'Mercado global establecido',
                'Infraestructura de distribución consolidada'
            ],
            challenges: [
                'Corrosión severa en equipos (requiere acero especial)',
                'Alto CAPEX (inversión inicial)',
                'Consumo energético intensivo',
                'Dependencia de materias primas específicas'
            ]
        },
        {
            icon: 'public',
            title: 'Ambiental',
            color: 'green',
            advantages: [
                'Esencial para alimentar a la población mundial',
                'Reduce NOx en transporte (tecnología SCR)',
                'Alternativa a fertilizantes más contaminantes',
                'Potencial para producción sostenible'
            ],
            challenges: [
                'Eutrofización de cuerpos de agua',
                'Emisiones asociadas al nitrógeno (N₂O, NOx)',
                'Contaminación de acuíferos por lixiviación',
                'Dependencia de combustibles fósiles en producción'
            ]
        }
    ];

    const toggleChallenge = (tabIndex, challengeIndex) => {
        const key = `${tabIndex}-${challengeIndex}`;
        setExpandedChallenges(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const getColorClasses = (color, type = 'bg') => {
        const colors = {
            blue: {
                bg: 'bg-blue-500',
                bgLight: 'bg-blue-50 dark:bg-blue-900/20',
                text: 'text-blue-600 dark:text-blue-400',
                border: 'border-blue-500',
                ring: 'ring-blue-200 dark:ring-blue-800'
            },
            orange: {
                bg: 'bg-orange-500',
                bgLight: 'bg-orange-50 dark:bg-orange-900/20',
                text: 'text-orange-600 dark:text-orange-400',
                border: 'border-orange-500',
                ring: 'ring-orange-200 dark:ring-orange-800'
            },
            green: {
                bg: 'bg-green-500',
                bgLight: 'bg-green-50 dark:bg-green-900/20',
                text: 'text-green-600 dark:text-green-400',
                border: 'border-green-500',
                ring: 'ring-green-200 dark:ring-green-800'
            }
        };
        return colors[color] || colors.blue;
    };

    return (
        <section className="py-16 px-4 md:px-10 flex justify-center w-full bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-900/50">
            <div className="w-full max-w-6xl">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold mb-2">Análisis Multidimensional</h2>
                    <p className="text-slate-600 dark:text-slate-400">Una visión integral de la urea desde múltiples perspectivas</p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex bg-slate-200 dark:bg-slate-800 rounded-lg p-1 gap-1">
                        {perspectives.map((perspective, index) => {
                            const colors = getColorClasses(perspective.color);
                            return (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300
                                        ${activeTab === index
                                            ? `${colors.bg} text-white shadow-lg scale-105`
                                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700'
                                        }`}
                                >
                                    <span className="material-symbols-outlined text-[20px]">{perspective.icon}</span>
                                    <span className="hidden sm:inline">{perspective.title}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="relative">
                    {perspectives.map((perspective, tabIndex) => {
                        const colors = getColorClasses(perspective.color);
                        return (
                            <div
                                key={tabIndex}
                                className={`transition-all duration-500 ${activeTab === tabIndex
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 absolute inset-0 pointer-events-none translate-y-4'
                                    }`}
                            >
                                <div className={`bg-white dark:bg-slate-900 rounded-2xl shadow-xl border-t-4 ${colors.border} overflow-hidden`}>
                                    {/* Header */}
                                    <div className={`${colors.bgLight} p-6 border-b border-slate-200 dark:border-slate-700`}>
                                        <div className="flex items-center gap-3">
                                            <div className={`p-3 ${colors.bg} rounded-lg text-white`}>
                                                <span className="material-symbols-outlined text-[28px]">{perspective.icon}</span>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold">{perspective.title}</h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                    Perspectiva {perspective.title.toLowerCase()}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 space-y-6">
                                        {/* Advantages Section */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-4">
                                                <span className="material-symbols-outlined text-green-500">check_circle</span>
                                                <h4 className="text-lg font-bold">Ventajas</h4>
                                            </div>
                                            <div className="grid sm:grid-cols-2 gap-3">
                                                {perspective.advantages.map((advantage, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="group bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border border-green-200 dark:border-green-800
                                                            hover:bg-green-100 dark:hover:bg-green-900/20 hover:shadow-md hover:scale-[1.02]
                                                            transition-all duration-300 cursor-default"
                                                    >
                                                        <div className="flex items-start gap-3">
                                                            <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-[18px] mt-0.5 
                                                                group-hover:scale-110 transition-transform">
                                                                add_circle
                                                            </span>
                                                            <p className="text-sm text-slate-700 dark:text-slate-300 flex-1">
                                                                {advantage}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Challenges Section */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-4">
                                                <span className="material-symbols-outlined text-amber-500">info</span>
                                                <h4 className="text-lg font-bold">Desafíos</h4>
                                            </div>
                                            <div className="space-y-3">
                                                {perspective.challenges.map((challenge, idx) => {
                                                    const key = `${tabIndex}-${idx}`;
                                                    const isExpanded = expandedChallenges[key];
                                                    return (
                                                        <div
                                                            key={idx}
                                                            onClick={() => toggleChallenge(tabIndex, idx)}
                                                            className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg border border-amber-200 dark:border-amber-800
                                                                hover:bg-amber-100 dark:hover:bg-amber-900/20 hover:shadow-md
                                                                transition-all duration-300 cursor-pointer"
                                                        >
                                                            <div className="flex items-start gap-3">
                                                                <span className={`material-symbols-outlined text-amber-600 dark:text-amber-400 text-[18px] mt-0.5
                                                                    transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}>
                                                                    arrow_right
                                                                </span>
                                                                <div className="flex-1">
                                                                    <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                                                                        {challenge}
                                                                    </p>
                                                                    {isExpanded && (
                                                                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 pl-4 border-l-2 border-amber-300 dark:border-amber-700">
                                                                            Este desafío requiere atención continua y desarrollo de soluciones innovadoras.
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Analysis;
