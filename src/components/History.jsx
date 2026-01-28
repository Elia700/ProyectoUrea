import React, { useState } from 'react';

const History = () => {
    const [expandedItem, setExpandedItem] = useState(null);

    const toggleExpand = (index) => {
        setExpandedItem(expandedItem === index ? null : index);
    };

    const milestones = [
        {
            period: "Antigüedad – Siglo XVIII",
            title: "Urea en la naturaleza",
            description: "La urea fue identificada inicialmente como componente de la orina humana y animal, utilizada de forma empírica sin comprender su estructura química. Este conocimiento temprano sentó las bases para su estudio posterior.",
            extra: "Uso temprano en prácticas médicas y alquímicas, donde se empleaba sin conocer su composición molecular.",
            isPrimary: false
        },
        {
            period: "1773",
            title: "Aislamiento de la urea",
            description: "Hilaire Rouelle logró aislar urea a partir de orina, reconociéndola como una sustancia definida y separable, aunque aún de origen biológico. Este trabajo marcó la transición del conocimiento empírico al estudio químico formal.",
            extra: "Primer paso hacia su estudio químico formal, estableciendo métodos de purificación y caracterización.",
            isPrimary: false
        },
        {
            period: "1828",
            title: "El fin del vitalismo",
            description: "Friedrich Wöhler sintetizó urea a partir de cianato de amonio, demostrando que un compuesto orgánico podía obtenerse a partir de sustancias inorgánicas. Este experimento marcó el nacimiento de la química orgánica moderna.",
            extra: "Uno de los experimentos más influyentes de la historia de la química, derribando la teoría vitalista que sostenía que los compuestos orgánicos solo podían ser producidos por organismos vivos.",
            isPrimary: true
        },
        {
            period: "1922",
            title: "Producción industrial de urea",
            description: "Desarrollo del proceso Bosch–Meiser, basado en la reacción entre amoníaco y dióxido de carbono a alta presión y temperatura. Este avance permitió la producción masiva de urea para fertilizantes y usos industriales.",
            extra: "Base de los procesos industriales modernos, revolucionando la agricultura mundial y permitiendo el crecimiento exponencial de la producción de alimentos.",
            isPrimary: false
        },
        {
            period: "Siglo XXI",
            title: "Innovación y sostenibilidad",
            description: "Enfoque actual en eficiencia energética, reciclaje de reactivos, reducción de emisiones y la integración con hidrógeno verde y captura de CO₂ para minimizar el impacto ambiental de la producción de urea.",
            extra: "Transición hacia una química más sostenible, con desarrollo de procesos de \"urea verde\" que buscan neutralidad de carbono y economía circular.",
            isPrimary: false
        }
    ];

    return (
        <section id="history" className="py-12 px-4 md:px-10 flex justify-center w-full">
            <div className="w-full max-w-6xl grid md:grid-cols-[1fr_400px] gap-12 items-start">
                <div>
                    <span className="text-primary font-bold tracking-wider text-sm uppercase">Cronología</span>
                    <h2 className="text-3xl font-bold mt-2 mb-8">Historia y Evolución</h2>
                    <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-10">
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className="relative transition-all duration-300 hover:translate-x-1 cursor-pointer group"
                                onClick={() => toggleExpand(index)}
                            >
                                <div className={`absolute -left-[25px] top-1 h-4 w-4 rounded-full border-4 border-white dark:border-background-dark transition-all duration-300 ${milestone.isPrimary
                                    ? 'bg-primary group-hover:scale-125'
                                    : 'bg-slate-300 dark:bg-slate-600 group-hover:bg-primary group-hover:scale-110'
                                    }`}></div>

                                <div className="space-y-1">
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                                        {milestone.period}
                                    </span>
                                    <h3 className={`text-xl font-bold transition-colors ${milestone.isPrimary
                                        ? 'text-slate-900 dark:text-white'
                                        : 'text-slate-800 dark:text-slate-200'
                                        } group-hover:text-primary`}>
                                        {milestone.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                                        {milestone.description}
                                    </p>

                                    {/* Expandable Extra Info */}
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedItem === index ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
                                        }`}>
                                        <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-3 rounded-r">
                                            <p className="text-sm text-slate-700 dark:text-slate-300 italic">
                                                <span className="font-semibold not-italic">Dato adicional:</span> {milestone.extra}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Click indicator */}
                                    <button className="text-xs text-primary font-medium mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {expandedItem === index ? '▼ Ocultar detalles' : '▶ Ver más detalles'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className="h-full min-h-[400px] rounded-xl bg-cover bg-center shadow-lg relative transition-transform duration-300 hover:scale-[1.02]"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1XgvBTY7UpvMa38Y8_6HCsykAj0J2WohCQeFUCJqmb6MAi2XLuqHwPH0FhpXp9LN6krPoOWbQs3ad6x84Yp9ILDA_Lytj5XpJnpxIuoT0q7gPdBSCvpMom1OpY7lWQHCENnQx7KVXOLYCrnsjDFiydUoSbEfwVmcY6DOLdW60BQwBUQ947i6T2dgKSSn8Wphqr6D3OQTMUtIII94n66-X5z4P7km2bkVG0c79RFkdabAwmUdeG56JPlMiRzfSr3w10QzQ3zWiwt_A")' }}
                >
                </div>
            </div>
        </section>
    );
};

export default History;
