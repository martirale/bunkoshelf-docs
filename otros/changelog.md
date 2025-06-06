# Changelog

Todas las versiones siguen [SemVer](https://semver.org/lang/es/).

## v0.32.0 <Badge type="info" text="2025-06-06" /> <Badge type="tip" text="Última" />

### Añadido

- Componente de acordeón en drawer de filtros

## v0.31.0 <Badge type="info" text="2025-06-05" />

### Añadido

- Sección "Por leer" en la biblioteca de manga
- Nuevas traducciones

### Modificado

- Bordes en el componente `MangaCard`

## v0.30.0 <Badge type="info" text="2025-06-05" />

### Añadido

- Filtrado de volúmenes y series por géneros y etiquetas

## v0.29.9 <Badge type="info" text="2025-06-04" />

### Modificado

- Orden de datos en el componente de estadísticas
- Márgenes en el lector de manga
- Refactor completo del `nav` principal y secundarios
- Ajuste de tabla de usuarios en menú de administración

## v0.29.5 <Badge type="info" text="2025-06-04" />

### Modificado

- Márgenes reducidos en lector de manga

## v0.29.4 <Badge type="info" text="2025-06-03" />

### Añadido

- Fallback UI para `HeroKeepRead` sin progreso activo
- Reemplazo de etiquetas textuales por iconos en resultados de búsqueda

### Modificado

- Componente `KeepReading` ahora se actualiza dinámicamente mediante CSR
- Fondo decorativo `::before` del `body` movido a un `div` para evitar interferencias táctiles

## v0.29.0 <Badge type="info" text="2025-06-03" />

### Modificado

- Refactor completo de estadísticas de lectura

## v0.28.1 <Badge type="info" text="2025-06-02" />

### Corregido

- Eliminado el uso innecesario de `useMemo` en componentes de estadísticas

## v0.28.0 <Badge type="info" text="2025-06-01" />

### Modificado

- Nueva paleta blanco perla implementada en toda la interfaz
- Manejo de clases CSS con `clsx` en múltiples componentes

## v0.27.0 <Badge type="info" text="2025-06-01" />

### Añadido

- Enlaces a página de mangas y perfil desde página de inicio
- Parseo de géneros y etiquetas como arreglo
- Búsqueda por géneros y etiquetas

## v0.24.5 <Badge type="info" text="2025-06-01" />

### Corregido

- Huso horario de todos los _tiles_ de estadísticas

## v0.24.4 <Badge type="info" text="2025-05-31" />

### Modificado

- Nombres de componentes de biblioteca y estadísticas de usuario
- Color global "Heather" por "Dark Lilah"
- Distribución de columnas en móvil y tablet del componente de estadísticas
- Distribución de menús secundarios en móvil

## v0.24.0 <Badge type="info" text="2025-05-30" />

### Corregido

- Huso horario de racha de lectura

## v0.23.0 <Badge type="info" text="2025-05-29" />

### Modificado

- Convertido `HomeRowHeroManga` de cliente a componente SSR
- Distribución y color de las "stat tiles" en la página de perfil

### Corregido

- Lógica para mostrar solo el siguiente volumen sin leer en series iniciadas
- Distribución vertical de filas en la página de inicio

## v0.20.0 <Badge type="info" text="2025-05-28" />

### Modificado

- Rediseño completo de la página de inicio

## v0.19.6 <Badge type="info" text="2025-05-28" />

### Corregido

- Huso horario en contador de último día leído

## v0.19.5 <Badge type="info" text="2025-05-28" />

### Modificado

- Iconos de la página de favoritos

### Corregido

- Cálculo de racha diaria usando fechas normalizadas

## v0.19.3 <Badge type="info" text="2025-05-28" />

### Añadido

Borde en las alertas `toast` al hacer `hover`

### Modificado

- Peso del título en las alertas `toast`

### Corregido

- Orden de los volúmenes en la sección "Continúa la serie"

## v0.19.0 <Badge type="info" text="2025-05-27" />

### Añadido

- Estadísticas de usuario y de servidor

## v0.18.0 <Badge type="info" text="2025-05-27" />

### Añadido

- Sección "Seguir leyendo" y "Recién añadidos" en la página de inicio

## v0.17.1 <Badge type="info" text="2025-05-26" />

### Corregido

- Filtrado de volúmenes por usuario activo

## v0.17.0 <Badge type="info" text="2025-05-26" />

### Añadido

- Cuadro de búsqueda en móviles
- Sección que muestra el siguiente libro a leer en series ya empezadas

### Corregido

- Colores del menú en móviles
- Recreación de usuario admin por defecto si ya existe un administrador

## v0.15.0 <Badge type="info" text="2025-05-25" />

### Añadido

- Series en los resultados de búsqueda

### Modificado

- Resultados de búsqueda ahora priorizan coincidencias por serie y luego por volúmenes
- Tamaño de la fuente en `MangaCard` en `2xl:`
- Posición de caja de búsqueda en el sidebar después del `nav` principal

### Corregido

- Manejo asíncrono de `params.slug` en la API de portadas

## v0.13.0 <Badge type="info" text="2025-05-24" />

### Añadido

- Búsqueda integrada por título, autor o serie

### Modificado

- Favicon e iconos de PWA
- Duración por defecto del toast provider

### Corregido

- Cantidad de columnas en `2xl:` en la página de series
- Mapeo de portadas tras escaneo en series

## v0.12.6 <Badge type="info" text="2025-05-23" />

### Añadido

- Cookie de idioma automática

### Modificado

- Colores y márgenes del botón del menú móvil
- Márgenes de controles e imágenes en el lector
- Color de tema PWA
- Enlaces a la guía del usuario

### Corregido

- Enlace de versión en footer y alerta de versión

## v0.12.0 <Badge type="info" text="2025-05-22" />

### Añadido

- Soporte parcial para PWA

### Corregido

- Renderización de portadas tras escaneo inicial

## v0.10.0 <Badge type="info" text="2025-05-22" />

### Añadido

- Paginación en biblioteca (series y volúmenes)

### Actualizado

- JSON con versión y enlace al changelog
- Internacionalización

### Corregido

- Eliminación automática de series y volúmenes huérfanos durante el escaneo

## v0.8.1 <Badge type="info" text="2025-05-21" />

### Añadido

- Indicador de nueva versión disponible
- Alerta visual para nueva versión

### Modificado

- Refactorización completa del escáner de biblioteca

## v0.7.0 <Badge type="info" text="2025-05-20" />

### Añadido

- Sección destacada de manga en lectura actual
- Sección de manga recientemente reañadido
- Modo incógnito de lectura

## v0.6.0-beta <Badge type="info" text="2025-05-19" />

### Añadido

- Guardado de progreso de lectura en local (lectura en tiempo real)
- Guardado de progreso de lectura en base de datos (sincronización entre dispositivos)

### Corregido

- Error que impedía actualizar la base de datos en producción

## v0.5.0-beta <Badge type="info" text="2025-05-18" />

### Añadido

- `Dockerfile` para producción
- Archivo `compose.yml` para instalación vía Docker Compose
- Base de datos descargable

### Modificado

- Optimización del tamaño de la imagen Docker
- Optimización de la lógica de componentes en biblioteca, perfil y ajustes

### Actualizado

- Traducciones

### Corregido

- Ruta incorrecta de portadas en entorno de producción

## v0.4.0-alpha <Badge type="info" text="2025-05-16" />

### Añadido

- Soporte para proveedor de notificaciones (`toast`)
- Extractor de metadatos (`ComicInfo.xml` dentro de archivos CBZ)
- Botón de escaneo de metadatos en la página de ajustes
- Renderizado de metadatos desde base de datos al frontend
- Nueva API para escaneo completo de biblioteca

### Modificado

- Reestructuración del directorio de componentes de biblioteca
- Actualización de APIs de componentes del lado cliente

## v0.3.0-alpha <Badge type="info" text="2025-05-14" />

### Añadido

- Primer lector de manga funcional (soporte para archivos CBZ)
- Nuevas traducciones

### Modificado

- Ajuste completo del layout de biblioteca en dispositivos móviles

### Corregido

- Orden correcto de volúmenes y series por título y numeración
- Carga de fuentes personalizadas en clases utilitarias de Tailwind

## v0.2.0-alpha <Badge type="info" text="2025-05-13" />

### Añadido

- Estructura completa de biblioteca de manga
- Escaneo de ruta y almacenamiento en base de datos
- Funcionalidad de marcar como favorito en series y volúmenes
- Extracción de portadas desde archivos CBZ
- Página de favoritos con mapeo de series y volúmenes destacados

### Modificado

- Refactorización de componentes del servidor (de `fetch` a Prisma)

## v0.1.0-alpha <Badge type="info" text="2025-05-10" />

### Añadido

- Interfaz y experiencia de usuario inicial
- Sistema de login con JWT + cookies
- Verificación de sesión activa y protección de rutas
- CRUD completo para usuarios
