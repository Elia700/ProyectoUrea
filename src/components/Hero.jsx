import React from 'react';

const Hero = () => {
    return (
        <section className="relative py-20 px-4 md:px-10 flex justify-center w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-primary px-4 py-2 rounded-full">
                        <span className="material-symbols-outlined text-[20px]">science</span>
                        <span className="text-sm font-bold">UreaLab</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Urea: {' '}
                        <span className="text-primary">La molécula que alimenta el mundo</span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        Exploramos la síntesis, aplicaciones y procesos industriales de la urea,
                        un compuesto vital que ha transformado la agricultura, la automotriz y la industria química global.
                    </p>
                </div>

                {/* Image */}
                <div className="relative">
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="/assets/images/molecular/Urea.jpg"
                            alt="Campo agrícola verde mostrando cultivos donde se aplica urea como fertilizante"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
