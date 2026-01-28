# UreaLab: Proyecto Urea

Aplicación web completa sobre la urea, sus propiedades, aplicaciones industriales y procesos de obtención.

## 🚀 Características

Este proyecto integra dos secciones principales:

### 1. Soluciones Moleculares
- **Hero Section**: Presentación principal con llamadas a la acción
- **Composición Química**: Estructura molecular y propiedades fisicoquímicas
- **Estándares de Pureza**: Calidad y especificaciones del producto

### 2. Aplicaciones Industriales
- **Aplicaciones Industriales**: 6 sectores principales (Agricultura, Cosmética, Médica, Textil, Automotriz, Química)
- **Obtención Industrial**: Proceso Bosch-Meiser en 4 etapas
- **Tecnologías Licenciadas**: Comparativa de 4 procesos (Stamicarbon, Snamprogetti, Toyo ACES21, Casale IDR)
- **Historia y Evolución**: Cronología desde 1828 hasta la actualidad
- **Impacto Ambiental**: Análisis de efectos negativos y prácticas responsables
- **Análisis Multidimensional**: Perspectivas química, industrial y ambiental

## 🛠️ Tecnologías

- **React** 18+ con hooks
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework de utilidades CSS
- **Material Symbols** - Iconografía moderna

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de producción
npm run preview
```

## 🎨 Estructura del Proyecto

```
ProyectoUrea/
├── public/
│   ├── assets/
│   │   └── images/              # Carpeta para imágenes del documento
│   │       ├── molecular/       # Imágenes de composición molecular
│   │       ├── industrial/      # Imágenes de procesos industriales
│   │       ├── general/         # Imágenes generales
│   │       └── README.md        # Guía de uso de imágenes
│   └── screenshots/             # Capturas de pantalla de las páginas
├── src/
│   ├── components/
│   │   ├── Hero.jsx                    # Sección hero principal
│   │   ├── MolecularComposition.jsx    # Composición química
│   │   ├── PurityStandard.jsx          # Estándares de pureza
│   │   ├── ApplicationCards.jsx        # Tarjetas de aplicaciones
│   │   ├── IndustrialProcess.jsx       # Proceso industrial
│   │   ├── History.jsx                 # Historia y evolución
│   │   ├── EnvironmentalImpact.jsx     # Impacto ambiental
│   │   ├── Analysis.jsx                # Análisis multidimensional
│   │   ├── Header.jsx                  # Encabezado
│   │   ├── Footer.jsx                  # Pie de página
│   │   └── ImageExample.jsx            # Ejemplo de uso de imágenes
│   ├── App.jsx              # Componente principal (página única)
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── index.html
├── package.json
└── README.md
```

## 🖼️ Uso de Imágenes

Para agregar tus propias imágenes al proyecto:

1. **Coloca las imágenes** en la carpeta correspondiente:
   - `public/assets/images/molecular/` - Para imágenes de estructuras moleculares
   - `public/assets/images/industrial/` - Para imágenes de procesos industriales
   - `public/assets/images/general/` - Para imágenes generales

2. **Úsalas en los componentes**:
   ```jsx
   <img src="/assets/images/molecular/tu-imagen.png" alt="Descripción" />
   ```

3. **Consulta** `public/assets/images/README.md` para más ejemplos y mejores prácticas


## 🎯 Contenido de la Página

La aplicación muestra todo el contenido en una sola página continua con scroll:

1. **Hero** - Presentación principal
2. **Composición Molecular** - Estructura química y propiedades
3. **Estándares de Pureza** - Calidad garantizada
4. **Aplicaciones Industriales** - 6 sectores principales
5. **Obtención Industrial** - Proceso Bosch-Meiser
6. **Historia y Evolución** - Cronología desde 1828
7. **Impacto Ambiental** - Efectos y prácticas responsables
8. **Análisis Multidimensional** - Perspectivas múltiples

## 🌐 Desarrollo

El servidor de desarrollo se ejecuta en `http://localhost:5173/`

## 📱 Responsive Design

Totalmente responsive con breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Sistema de Diseño

- **Color primario**: `#1392ec` (Azul UreaLab)
- **Tipografía**: Space Grotesk
- **Iconos**: Material Symbols Outlined
- **Dark Mode**: Soporte completo

---

**Desarrollado con ❤️ para la educación química industrial**
