// Ejemplo de cómo usar imágenes locales en los componentes

import React from 'react';

/**
 * Componente de ejemplo que muestra diferentes formas de usar imágenes
 * desde la carpeta public/assets/images/
 */
const ImageExample = () => {
    return (
        <div className="p-8 space-y-8">
            <h2 className="text-2xl font-bold">Ejemplos de Uso de Imágenes</h2>

            {/* Ejemplo 1: Imagen simple con tag img */}
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">1. Imagen Simple</h3>
                <img
                    src="/assets/images/molecular/ejemplo.png"
                    alt="Descripción de la imagen"
                    className="w-full max-w-md rounded-lg shadow-lg"
                />
            </div>

            {/* Ejemplo 2: Imagen como fondo */}
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">2. Imagen de Fondo</h3>
                <div
                    className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
                    style={{ backgroundImage: 'url("/assets/images/industrial/ejemplo.jpg")' }}
                >
                    <div className="w-full h-full bg-black/40 flex items-center justify-center rounded-lg">
                        <p className="text-white text-xl font-bold">Texto sobre la imagen</p>
                    </div>
                </div>
            </div>

            {/* Ejemplo 3: Grid de imágenes */}
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">3. Grid de Imágenes</h3>
                <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((num) => (
                        <img
                            key={num}
                            src={`/assets/images/general/imagen-${num}.png`}
                            alt={`Imagen ${num}`}
                            className="w-full h-48 object-cover rounded-lg shadow"
                        />
                    ))}
                </div>
            </div>

            {/* Ejemplo 4: Imagen con lazy loading */}
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">4. Imagen con Lazy Loading</h3>
                <img
                    src="/assets/images/molecular/estructura-completa.png"
                    alt="Estructura molecular completa"
                    loading="lazy"
                    className="w-full max-w-lg rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default ImageExample;

// RUTAS DE EJEMPLO PARA TUS IMÁGENES:
//
// Molecular:
// - /assets/images/molecular/estructura-molecular.png
// - /assets/images/molecular/composicion-quimica.jpg
// - /assets/images/molecular/propiedades.png
//
// Industrial:
// - /assets/images/industrial/proceso-bosch-meiser.jpg
// - /assets/images/industrial/planta-produccion.png
// - /assets/images/industrial/aplicacion-agricultura.jpg
//
// General:
// - /assets/images/general/logo.png
// - /assets/images/general/banner.jpg
// - /assets/images/general/icono.svg
