import React, { useState } from 'react';

const IndustrialProcess = () => {
    const [activeTab, setActiveTab] = useState('stamicarbon');
    const [expandedStage, setExpandedStage] = useState(null);
    const [lightboxImage, setLightboxImage] = useState(null);

    // Define the 4 stages with complete content
    const stages = [
        {
            id: 1,
            icon: 'science',
            title: 'Formación',
            subtitle: 'Formación de carbamato de amonio',
            formula: '2NH₃ + CO₂ ⇌ NH₂COONH₄',
            desc: 'Reacción exotérmica rápida',
            image: '/assets/images/industrial/Reactor de platos.png',
            description: 'En esta etapa, el amoníaco (NH₃) y el dióxido de carbono (CO₂) reaccionan bajo alta presión (≈150–250 bar) y temperaturas de 170–190 °C, formando carbamato de amonio. Es una reacción exotérmica rápida y constituye el primer paso clave en la síntesis industrial de la urea.',
            keyPoints: [
                { icon: 'whatshot', text: 'Reacción exotérmica' },
                { icon: 'compress', text: 'Alta presión' },
                { icon: 'auto_awesome', text: 'Formación del intermediario principal' },
                { icon: 'trending_up', text: 'Conversión elevada pero no total' }
            ]
        },
        {
            id: 2,
            icon: 'change_circle',
            title: 'Conversión',
            subtitle: 'Conversión a urea',
            formula: 'NH₂COONH₄ ⇌ CO(NH₂)₂ + H₂O',
            desc: 'Deshidratación endotérmica',
            image: '/assets/images/industrial/Stripper Termico.png',
            description: 'El carbamato de amonio se deshidrata para formar urea y agua. Esta etapa es endotérmica y más lenta, limitada por el equilibrio químico, por lo que no todo el carbamato se convierte en urea en una sola pasada.',
            keyPoints: [
                { icon: 'ac_unit', text: 'Reacción endotérmica' },
                { icon: 'balance', text: 'Limitada por equilibrio químico' },
                { icon: 'all_inclusive', text: 'Conversión parcial' },
                { icon: 'thermostat', text: 'Requiere control térmico preciso' }
            ]
        },
        {
            id: 3,
            icon: 'filter_alt',
            title: 'Separación',
            subtitle: 'Separación y recuperación de reactivos',
            formula: 'Destilación · Stripping · Reciclaje',
            desc: 'Recuperación de reactivos',
            image: '/assets/images/industrial/Separadores.png',
            description: 'La mezcla de salida contiene urea, agua, NH₃ y CO₂ no reaccionados. Mediante separadores de media y baja presión, los gases NH₃ y CO₂ se recuperan y recirculan al reactor, aumentando el rendimiento global y reduciendo el consumo de materias primas.',
            keyPoints: [
                { icon: 'recycling', text: 'Recuperación de NH₃ y CO₂' },
                { icon: 'restart_alt', text: 'Reciclaje al reactor' },
                { icon: 'trending_down', text: 'Reducción de pérdidas' },
                { icon: 'speed', text: 'Mayor eficiencia del proceso' }
            ]
        },
        {
            id: 4,
            icon: 'grain',
            title: 'Solidificación',
            subtitle: 'Solidificación del producto final',
            formula: 'Evaporación · Perlado (Prilling) o Granulación',
            desc: 'Producto final estable',
            image: '/assets/images/industrial/Torre de prilling.png',
            description: 'La solución de urea se concentra eliminando el exceso de agua. Posteriormente, la urea fundida se solidifica en forma de perlas o gránulos mediante enfriamiento con aire, obteniendo un producto final estable, apto para almacenamiento y transporte.',
            keyPoints: [
                { icon: 'water_drop', text: 'Eliminación de agua' },
                { icon: 'local_fire_department', text: 'Urea fundida concentrada' },
                { icon: 'science', text: 'Formación de sólido comercial' },
                { icon: 'verified', text: 'Alta estabilidad física' }
            ]
        }
    ];

    const technologies = {
        stamicarbon: {
            name: 'Stamicarbon CO₂ Stripping',
            description: 'La tecnología líder en el mercado. Utiliza el CO₂ de alimentación como agente de despojamiento ("stripping") para descomponer el carbamato no convertido. Esto simplifica el proceso de recirculación y mejora la eficiencia energética.',
            features: [
                'Alta eficiencia térmica',
                'Materiales resistentes a corrosión (Safurex®)',
                'Reducción de consumo de vapor'
            ],
            image: '/assets/images/molecular/Estamicarbon.png',
            equipment: [
                { equipo: 'Mezclador de alimentación', funcion: 'Mezcla y acondiciona NH₃ y CO₂ antes del reactor' },
                { equipo: 'Reactor de síntesis (alta presión)', funcion: 'Forma carbamato y convierte parcialmente a urea' },
                { equipo: 'Stripper de CO₂', funcion: 'Remueve NH₃ y CO₂ no reaccionados usando CO₂' },
                { equipo: 'Condensador de carbamato', funcion: 'Condensa gases recuperados para recirculación' },
                { equipo: 'Separador de alta presión', funcion: 'Separa fases gas-líquido' },
                { equipo: 'Recuperación media/baja presión', funcion: 'Recupera reactivos remanentes' },
                { equipo: 'Evaporador / Concentrador', funcion: 'Elimina agua y concentra urea' },
                { equipo: 'Granulador / Prilling', funcion: 'Forma urea sólida comercial' }
            ]
        },
        snamprogetti: {
            name: 'Snamprogetti Process',
            description: 'Proceso italiano de alta presión con tecnología de autostripping. Diseñado para plantas de gran capacidad con foco en minimizar los costos operativos.',
            features: [
                'Diseño compacto',
                'Menor inversión de capital',
                'Excelente conversión'
            ],
            image: '/assets/images/molecular/Snamprogetti.png.jpeg',
            equipment: [
                { equipo: 'Mezclador de alimentación', funcion: 'Mezcla NH₃ y CO₂' },
                { equipo: 'Reactor de síntesis', funcion: 'Producción de carbamato y urea' },
                { equipo: 'Stripper de NH₃', funcion: 'Arrastra CO₂ y carbamato no convertido' },
                { equipo: 'Condensador / Absorbedor', funcion: 'Recupera NH₃ y CO₂' },
                { equipo: 'Separador de fases', funcion: 'Divide gases y solución rica en urea' },
                { equipo: 'Descomponedor MP/BP', funcion: 'Remueve gases residuales' },
                { equipo: 'Evaporación y concentración', funcion: 'Incrementa concentración de urea' },
                { equipo: 'Granulación', funcion: 'Forma urea sólida final' }
            ]
        },
        toyo: {
            name: 'Toyo ACES21',
            description: 'Advanced Cost and Energy Saving Technology del siglo 21. Integra innovaciones en ahorro energético y recuperación de calor residual.',
            features: [
                'Máximo ahorro energético',
                'Bajas emisiones de CO₂',
                'Tecnología de punta japonesa'
            ],
            image: '/assets/images/molecular/Toyo.png',
            equipment: [
                { equipo: 'Mezclador / Alimentación', funcion: 'Controla proporciones NH₃–CO₂' },
                { equipo: 'Reactor de alta presión', funcion: 'Conversión a urea' },
                { equipo: 'Sistema de stripping optimizado', funcion: 'Recuperación eficiente de reactivos' },
                { equipo: 'Condensación de carbamato', funcion: 'Reciclaje de gases' },
                { equipo: 'Separación MP/BP', funcion: 'Recuperación gradual' },
                { equipo: 'Concentrador de urea', funcion: 'Obtención de urea fundida' },
                { equipo: 'Unidad de acabado', funcion: 'Granulación de alta calidad' }
            ]
        },
        casale: {
            name: 'Casale IDR',
            description: 'Isobaric Double Recycle - Tecnología suiza que maximiza la conversión mediante doble reciclaje del carbamato a presión constante.',
            features: [
                'Conversión máxima',
                'Flexibilidad operativa',
                'Confiabilidad suiza'
            ],
            image: '/assets/images/molecular/CasaleIDR.jpeg',
            equipment: [
                { equipo: 'Mezclador de alimentación', funcion: 'Homogeneiza NH₃ y CO₂' },
                { equipo: 'Reactor de alta presión', funcion: 'Formación de carbamato y urea' },
                { equipo: 'Sistema IDR', funcion: 'Doble reciclaje isobárico' },
                { equipo: 'Stripper / Recuperador', funcion: 'Recupera NH₃ y CO₂' },
                { equipo: 'Condensador de carbamato', funcion: 'Retorno al reactor' },
                { equipo: 'Separadores', funcion: 'Control gas-líquido' },
                { equipo: 'Concentración y evaporación', funcion: 'Aumenta pureza' },
                { equipo: 'Granulación', funcion: 'Producto sólido comercial' }
            ]
        }
    };

    const currentTech = technologies[activeTab];

    const toggleStage = (stageId) => {
        setExpandedStage(expandedStage === stageId ? null : stageId);
    };

    return (
        <section id="processes" className="py-12 px-4 md:px-10 flex justify-center w-full bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
            <div className="w-full max-w-6xl">
                <div className="mb-12 text-center">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase">Flujo de Proceso</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">Obtención Industrial de la Urea</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">"Proceso Bosch–Meiser: base de los métodos industriales modernos"</p>
                </div>

                {/* Desktop Process Flow - Interactive */}
                <div className="hidden md:block mb-16">
                    <div className="relative w-full mb-8">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 rounded z-0"></div>
                        <div className="relative z-10 grid grid-cols-4 gap-6">
                            {stages.map((stage, index) => (
                                <button
                                    key={stage.id}
                                    onClick={() => toggleStage(stage.id)}
                                    className="flex flex-col items-center text-center group cursor-pointer transition-all"
                                >
                                    <div className={`w-20 h-20 rounded-full bg-white dark:bg-slate-800 border-4 ${expandedStage === stage.id
                                        ? 'border-primary scale-110 shadow-xl'
                                        : index === 0
                                            ? 'border-primary'
                                            : 'border-slate-300 dark:border-slate-600 group-hover:border-primary'
                                        } flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-all duration-300`}>
                                        <span className={`material-symbols-outlined ${expandedStage === stage.id || index === 0
                                            ? 'text-primary'
                                            : 'text-slate-500 dark:text-slate-400'
                                            } text-[36px]`}>{stage.icon}</span>
                                    </div>
                                    <h3 className={`font-bold text-lg mb-3 ${expandedStage === stage.id ? 'text-primary' : 'text-slate-800 dark:text-slate-200'}`}>
                                        {stage.title}
                                    </h3>
                                    <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg text-sm font-mono text-slate-700 dark:text-slate-300"
                                        dangerouslySetInnerHTML={{ __html: stage.formula }} />

                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Expandable Panel - Desktop */}
                    {stages.map((stage) => (
                        <div
                            key={stage.id}
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedStage === stage.id ? 'max-h-[1000px] opacity-100 mb-8' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700">
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Image Section */}
                                    <div className="space-y-4">
                                        <div className="h-80 rounded-xl shadow-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 p-4 flex items-center justify-center">
                                            <img
                                                src={stage.image}
                                                alt={stage.subtitle}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                                                {stage.subtitle}
                                            </h4>

                                            {/* Chemical Reaction */}
                                            <div className="bg-primary/10 border-l-4 border-primary px-4 py-3 rounded-r-lg mb-4">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="material-symbols-outlined text-primary text-[20px]">science</span>
                                                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">Reacción Química</span>
                                                </div>
                                                <p className="text-lg font-mono font-bold text-slate-800 dark:text-slate-100"
                                                    dangerouslySetInnerHTML={{ __html: stage.formula }} />
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                            {stage.description}
                                        </p>

                                        {/* Key Points */}
                                        <div>
                                            <h5 className="font-semibold text-slate-700 dark:text-slate-200 mb-3 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                                Puntos Clave
                                            </h5>
                                            <div className="grid grid-cols-2 gap-3">
                                                {stage.keyPoints.map((point, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                                        <span className="material-symbols-outlined text-primary text-[18px]">{point.icon}</span>
                                                        <span>{point.text}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Process Flow - Interactive */}
                <div className="flex flex-col gap-4 md:hidden mb-12">
                    {stages.map((stage, index) => (
                        <div key={stage.id} className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                            <button
                                onClick={() => toggleStage(stage.id)}
                                className="w-full flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                                <span className={`material-symbols-outlined ${expandedStage === stage.id || index === 0 ? 'text-primary' : 'text-slate-500'
                                    } text-3xl`}>{stage.icon}</span>
                                <div className="flex-1 text-left">
                                    <h3 className={`font-bold ${expandedStage === stage.id ? 'text-primary' : ''}`}>
                                        {stage.title}
                                    </h3>
                                    <p className="text-sm font-mono text-slate-600 dark:text-slate-300"
                                        dangerouslySetInnerHTML={{ __html: stage.formula }} />
                                </div>
                                <span className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${expandedStage === stage.id ? 'rotate-180' : ''
                                    }`}>expand_more</span>
                            </button>

                            {/* Expandable Panel - Mobile */}
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedStage === stage.id ? 'max-h-[1000px]' : 'max-h-0'
                                }`}>
                                <div className="p-4 bg-white dark:bg-slate-900 space-y-4">
                                    {/* Image */}
                                    <div className="h-64 rounded-lg shadow-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 p-3 flex items-center justify-center">
                                        <img
                                            src={stage.image}
                                            alt={stage.subtitle}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Reaction */}
                                    <div className="bg-primary/10 border-l-4 border-primary px-3 py-2 rounded-r-lg">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="material-symbols-outlined text-primary text-[18px]">science</span>
                                            <span className="text-xs font-semibold text-primary uppercase">Reacción</span>
                                        </div>
                                        <p className="text-sm font-mono font-bold text-slate-800 dark:text-slate-100"
                                            dangerouslySetInnerHTML={{ __html: stage.formula }} />
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {stage.description}
                                    </p>

                                    {/* Key Points */}
                                    <div className="space-y-2">
                                        <h5 className="font-semibold text-sm text-slate-700 dark:text-slate-200">Puntos Clave</h5>
                                        {stage.keyPoints.map((point, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                                                <span className="material-symbols-outlined text-primary text-[16px]">{point.icon}</span>
                                                <span>{point.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Technologies Section - Unchanged */}
                <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
                    <h3 className="text-2xl font-bold mb-6 px-4">Procesos de Obtención</h3>
                    <div className="border-b border-slate-200 dark:border-slate-700 flex flex-wrap gap-6 px-4">
                        {Object.keys(technologies).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`pb-3 border-b-2 ${activeTab === key ? 'border-primary text-primary' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'} font-${activeTab === key ? 'bold' : 'medium'} text-sm md:text-base transition-colors`}
                            >
                                {key === 'stamicarbon' && 'Stamicarbon'}
                                {key === 'snamprogetti' && 'Snamprogetti'}
                                {key === 'toyo' && 'Toyo ACES21'}
                                {key === 'casale' && 'Casale IDR'}
                            </button>
                        ))}
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-b-xl mt-4">
                        {/* Top Section: Description and Image */}
                        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                            <div>
                                <h4 className="text-xl font-bold mb-3" dangerouslySetInnerHTML={{ __html: currentTech.name }} />
                                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                                    {currentTech.description}
                                </p>
                                <ul className="space-y-2 mb-6 text-sm text-slate-500 dark:text-slate-400">
                                    {currentTech.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div
                                className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                                onClick={() => setLightboxImage({ image: currentTech.image, title: currentTech.name })}
                            >
                                <div className="aspect-square overflow-hidden bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-900 dark:to-slate-800 relative flex items-center justify-center">
                                    <img
                                        src={currentTech.image}
                                        alt={`Logo de ${currentTech.name}`}
                                        className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg">
                                            zoom_in
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Equipment Table */}
                        <div className="mt-6">
                            <h5 className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-[22px]">precision_manufacturing</span>
                                Tabla funcional de equipos – {currentTech.name}
                            </h5>
                            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-primary text-white">
                                            <th className="text-left px-4 py-3 font-semibold">Equipo / Unidad</th>
                                            <th className="text-left px-4 py-3 font-semibold">Función principal en el proceso</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                        {currentTech.equipment.map((item, index) => (
                                            <tr
                                                key={index}
                                                className={`${index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-800/50'} hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors`}
                                            >
                                                <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-300">
                                                    {item.equipo}
                                                </td>
                                                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                                                    {item.funcion}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
                    onClick={() => setLightboxImage(null)}
                >
                    <div
                        className="relative max-w-5xl max-h-[90vh] w-full animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setLightboxImage(null)}
                            className="absolute -top-12 right-0 text-white hover:text-primary transition-colors flex items-center gap-2"
                        >
                            <span className="text-sm">Cerrar</span>
                            <span className="material-symbols-outlined text-2xl">close</span>
                        </button>

                        {/* Image Container */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-2xl">
                            <div className="bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8">
                                <img
                                    src={lightboxImage.image}
                                    alt={lightboxImage.title}
                                    className="w-full h-auto max-h-[75vh] object-contain"
                                />
                            </div>
                            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white text-center" dangerouslySetInnerHTML={{ __html: lightboxImage.title }} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default IndustrialProcess;
