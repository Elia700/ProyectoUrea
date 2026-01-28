# Carpeta de Imágenes del Proyecto

Esta carpeta contiene todas las imágenes utilizadas en el proyecto web de Urea.

## 📁 Estructura de Carpetas

```
public/assets/images/
├── molecular/      # Imágenes relacionadas con composición molecular y química
├── industrial/     # Imágenes de aplicaciones y procesos industriales
└── general/        # Imágenes generales del proyecto
```

## 📝 Cómo Usar las Imágenes en la Web

### Opción 1: Desde los Componentes React

```jsx
// Ejemplo en un componente
function MiComponente() {
    return (
        <img 
            src="/assets/images/molecular/estructura-molecular.png" 
            alt="Estructura molecular de la urea"
            className="w-full h-auto rounded-lg"
        />
    );
}
```

### Opción 2: Como Fondo (Background)

```jsx
<div 
    className="w-full h-64 bg-cover bg-center rounded-lg"
    style={{ backgroundImage: 'url("/assets/images/industrial/planta-industrial.jpg")' }}
>
    {/* Contenido */}
</div>
```

### Opción 3: Importar en el Componente

```jsx
import imagenMolecular from '/assets/images/molecular/estructura.png';

function MiComponente() {
    return <img src={imagenMolecular} alt="Descripción" />;
}
```

## 📋 Guía de Nombres de Archivos

Para mantener el proyecto organizado, usa nombres descriptivos:

- ✅ `estructura-molecular-urea.png`
- ✅ `proceso-bosch-meiser.jpg`
- ✅ `aplicacion-agricultura.png`
- ❌ `img1.png`
- ❌ `foto.jpg`

## 🎨 Formatos Recomendados

- **Fotografías**: `.jpg` o `.webp` (mejor compresión)
- **Gráficos/Diagramas**: `.png` (mejor calidad)
- **Iconos**: `.svg` (escalables)

## 📐 Tamaños Recomendados

- **Hero/Banner**: 1920x1080px
- **Tarjetas**: 800x600px
- **Thumbnails**: 400x300px
- **Iconos**: 512x512px

## 💡 Tips

1. Optimiza las imágenes antes de subirlas (usa herramientas como TinyPNG)
2. Usa nombres en minúsculas con guiones
3. Incluye siempre el atributo `alt` para accesibilidad
4. Considera usar lazy loading para imágenes grandes

---

**Nota**: Las imágenes en la carpeta `public/` son accesibles directamente desde la URL raíz del proyecto.
