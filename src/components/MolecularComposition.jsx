import React, { useState } from 'react';

const MolecularComposition = () => {
    const [openSection, setOpenSection] = useState(null);
    const [lightboxImage, setLightboxImage] = useState(null);

    const properties = [
        { label: 'MASA MOLAR', value: '60.06', unit: 'g/mol' },
        { label: 'DENSIDAD', value: '1.32', unit: 'g/cm³' },
        { label: 'PUNTO FUSIÓN', value: '133', unit: '°C' },
        { label: 'SOLUBILIDAD', value: '≈545', unit: 'g/L', note: 'en agua a 25°C' },
        { label: 'HIGROSCOPICIDAD', value: 'Alta', unit: '', note: 'CRH ~75%' }
    ];

    const additionalProperties = [
        { label: 'OLOR', value: 'Inodora', note: 'puede presentar ligero olor a NH₃' },
        { label: 'CONDUCTIVIDAD', value: 'No conductora', note: 'no electrolito' },
        { label: 'SISTEMA CRISTALINO', value: 'Tetragonal', note: 'estabilidad y rigidez' }
    ];

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <section className="py-16 px-4 md:px-10 flex justify-center w-full bg-white dark:bg-slate-900">
            <div className="w-full max-w-7xl">
                {/* Header */}
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Composición Química</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm uppercase tracking-wider">
                        FICHA TÉCNICA: UREA-IND-2024
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-[320px_1fr] gap-6 mb-8">
                    {/* Left Column - Molecular Info */}
                    <div className="space-y-6">
                        {/* Molecular Formula Card */}
                        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                            <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                                Fórmula Molecular
                            </div>
                            <div className="text-5xl font-bold text-primary mb-3">
                                CH<sub className="text-3xl">4</sub>N<sub className="text-3xl">2</sub>O
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">
                                CO(NH<sub>2</sub>)<sub>2</sub>
                            </div>
                        </div>

                        {/* IUPAC Name Card */}
                        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                            <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                                Nombre IUPAC
                            </div>
                            <div className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                                Diaminomethanal
                            </div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                                También: Carbonyl diamine
                            </div>
                        </div>

                        {/* Synonyms Card */}
                        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                            <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                                Sinónimos
                            </div>
                            <div className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                                <div>• Carbamida</div>
                                <div>• Carbonildiamida</div>
                            </div>
                        </div>

                        {/* Physical State Card */}
                        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                            <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                                Estado Físico
                            </div>
                            <div className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                                Sólido cristalino blanco
                            </div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                                A temperatura ambiente
                            </div>
                        </div>

                        {/* Functional Group Card */}
                        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                            <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                                Grupo Funcional
                            </div>
                            <div className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                                Diamida
                            </div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                                Derivada del ácido carbónico
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Molecular Structure Image */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-2 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                                Estructura Molecular
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Representación espacial de la molécula de urea
                            </p>
                        </div>

                        <div className="relative bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-lg p-4 flex items-center justify-center flex-1">
                            <img
                                src="/assets/images/molecular/EstructuraMolUrea.webp"
                                alt="Estructura molecular tridimensional de la urea mostrando átomos de carbono, nitrógeno, oxígeno e hidrógeno"
                                className="w-full max-w-2xl h-auto drop-shadow-2xl object-contain"
                            />
                        </div>

                        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        </div>
                    </div>
                </div>

                {/* Properties Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                    {properties.map((prop, index) => (
                        <div key={index} className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors">
                            <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                                {prop.label}
                            </div>
                            <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                                {prop.value}
                            </div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                                {prop.unit}
                            </div>
                            {prop.note && (
                                <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                                    {prop.note}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Additional Properties Grid */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                    {additionalProperties.map((prop, index) => (
                        <div key={index} className="bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-lg border border-blue-200 dark:border-blue-900/30">
                            <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                                {prop.label}
                            </div>
                            <div className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                                {prop.value}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">
                                {prop.note}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Technical Note */}
                <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg mb-8">
                    <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-[20px] mt-0.5">warning</span>
                        <div>
                            <div className="text-sm font-semibold text-amber-900 dark:text-amber-200 mb-1">
                                Nota Técnica
                            </div>
                            <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                                La urea puede fundirse alrededor de 132–135°C, pero a esa temperatura puede iniciar descomposición térmica formando subproductos como biuret y liberando NH₃; por ello se requiere control térmico en procesos industriales.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Expandable Sections */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {/* Clasificación Química */}
                    <button
                        onClick={() => toggleSection('clasificacion')}
                        className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 text-left hover:border-primary transition-colors"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <span className="font-semibold text-slate-900 dark:text-white text-lg">Clasificación Química</span>
                            <span className="material-symbols-outlined text-slate-400">
                                {openSection === 'clasificacion' ? 'expand_less' : 'expand_more'}
                            </span>
                        </div>
                        {openSection === 'clasificacion' && (
                            <div className="mt-4 text-sm text-slate-600 dark:text-slate-400 space-y-3 border-t border-slate-200 dark:border-slate-700 pt-4">
                                <p className="leading-relaxed">
                                    La urea se clasifica como un compuesto orgánico debido a que contiene carbono dentro de una estructura con grupo carbonilo (C=O) y dos grupos amino (–NH₂). Se considera una diamida derivada del ácido carbónico, y forma parte de los compuestos carbonílicos orgánicos (carbamidas).
                                </p>
                                <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg">
                                    <div className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Puntos clave:</div>
                                    <ul className="space-y-1">
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>Compuesto orgánico nitrogenado</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>Diamida (carbamida)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>Grupo funcional carbonilo + grupos amino</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </button>

                    {/* Enlaces y Estructura */}
                    <button
                        onClick={() => toggleSection('enlaces')}
                        className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 text-left hover:border-primary transition-colors"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <span className="font-semibold text-slate-900 dark:text-white text-lg">Enlaces y Estructura</span>
                            <span className="material-symbols-outlined text-slate-400">
                                {openSection === 'enlaces' ? 'expand_less' : 'expand_more'}
                            </span>
                        </div>
                        {openSection === 'enlaces' && (
                            <div className="mt-4 text-sm text-slate-600 dark:text-slate-400 space-y-3 border-t border-slate-200 dark:border-slate-700 pt-4">
                                <p className="leading-relaxed">
                                    La urea presenta enlaces covalentes polares. El doble enlace C=O define el centro de la molécula, y los enlaces C–N conectan los grupos amino. Debido a la electronegatividad del oxígeno y nitrógeno, la molécula es polar.
                                </p>
                                <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg">
                                    <div className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Interacciones intermoleculares clave:</div>
                                    <p className="leading-relaxed">
                                        En estado sólido, las moléculas forman una red mediante puentes de hidrógeno entre los hidrógenos de –NH₂ (δ+) y el oxígeno del carbonilo (δ−), generando una estructura cristalina estable.
                                    </p>
                                </div>
                            </div>
                        )}
                    </button>

                    {/* Resonancia */}
                    <button
                        onClick={() => toggleSection('resonancia')}
                        className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 text-left hover:border-primary transition-colors md:col-span-2"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <span className="font-semibold text-slate-900 dark:text-white text-lg">Resonancia</span>
                            <span className="material-symbols-outlined text-slate-400">
                                {openSection === 'resonancia' ? 'expand_less' : 'expand_more'}
                            </span>
                        </div>
                        {openSection === 'resonancia' && (
                            <div className="mt-4 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4">
                                <p className="leading-relaxed">
                                    La urea presenta resonancia, lo que permite una mejor distribución electrónica en la molécula. Este efecto contribuye a que sea más estable químicamente y refuerza su estructura, influyendo en sus propiedades físicas como estabilidad y comportamiento intermolecular.
                                </p>
                            </div>
                        )}
                    </button>
                </div>

                {/* Image Grid with Real Images */}
                <div className="grid md:grid-cols-3 gap-4">
                    {[
                        {
                            title: 'Tabla de Propiedades Físicas',
                            image: '/assets/images/molecular/Tabla de propiedades.png',
                            alt: 'Tabla con las propiedades físicas de la urea'
                        },
                        {
                            title: 'Enlaces de Hidrógeno',
                            image: '/assets/images/molecular/Enlaces de Hidrogeno.png',
                            alt: 'Diagrama de enlaces de hidrógeno en la molécula de urea'
                        },
                        {
                            title: 'Urea Sólida (Forma Física)',
                            image: '/assets/images/molecular/Ureasolida.jpg',
                            alt: 'Imagen de urea en estado sólido cristalino'
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                            onClick={() => setLightboxImage(item)}
                        >
                            <div className="aspect-square overflow-hidden bg-slate-50 dark:bg-slate-900 relative">
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg">
                                        zoom_in
                                    </span>
                                </div>
                            </div>
                            <div className="p-3 border-t border-slate-200 dark:border-slate-700">
                                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 text-center">
                                    {item.title}
                                </div>
                            </div>
                        </div>
                    ))}
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
                            <div className="bg-slate-50 dark:bg-slate-900 p-4">
                                <img
                                    src={lightboxImage.image}
                                    alt={lightboxImage.alt}
                                    className="w-full h-auto max-h-[75vh] object-contain"
                                />
                            </div>
                            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white text-center">
                                    {lightboxImage.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default MolecularComposition;
