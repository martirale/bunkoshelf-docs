# Changelog

Todas las versiones siguen [SemVer](https://semver.org/lang/es/).

<!-- ## v0.9.0 <Badge type="tip" text="Última" />

### Corregido

- Eliminación automática de series y volúmenes huérfanos durante el escaneo -->

## v0.8.1 <Badge type="tip" text="Última" />

### Añadido

- Indicador de nueva versión disponible
- Alerta visual para nueva versión

### Cambiado

- Refactorización completa del escáner de biblioteca

## v0.7.0

### Añadido

- Sección destacada de manga en lectura actual
- Sección de manga recientemente reañadido
- Modo incógnito de lectura

## v0.6.0-beta

### Añadido

- Guardado de progreso de lectura en local (lectura en tiempo real)
- Guardado de progreso de lectura en base de datos (sincronización entre dispositivos)

### Corregido

- Error que impedía actualizar la base de datos en producción

## v0.5.0-beta

### Añadido

- `Dockerfile` para producción
- Archivo `compose.yml` para instalación vía Docker Compose
- Base de datos descargable

### Cambiado

- Optimización del tamaño de la imagen Docker
- Optimización de la lógica de componentes en biblioteca, perfil y ajustes
- Actualización de traducciones

### Corregido

- Ruta incorrecta de portadas en entorno de producción

## v0.4.0-alpha

### Añadido

- Soporte para proveedor de notificaciones (`toast`)
- Extractor de metadatos (`ComicInfo.xml` dentro de archivos CBZ)
- Botón de escaneo de metadatos en la página de ajustes
- Renderizado de metadatos desde base de datos al frontend
- Nueva API para escaneo completo de biblioteca

### Cambiado

- Reestructuración del directorio de componentes de biblioteca
- Actualización de APIs de componentes del lado cliente

## v0.3.0-alpha

### Añadido

- Primer lector de manga funcional (soporte para archivos CBZ)
- Nuevas traducciones

### Cambiado

- Ajuste completo del layout de biblioteca en dispositivos móviles

### Corregido

- Orden correcto de volúmenes y series por título y numeración
- Carga de fuentes personalizadas en clases utilitarias de Tailwind

## v0.2.0-alpha

### Añadido

- Estructura completa de biblioteca de manga
- Escaneo de ruta y almacenamiento en base de datos
- Funcionalidad de marcar como favorito en series y volúmenes
- Extracción de portadas desde archivos CBZ
- Página de favoritos con mapeo de series y volúmenes destacados

### Cambiado

- Refactorización de componentes del servidor (de `fetch` a Prisma)

## v0.1.0-alpha

### Añadido

- Interfaz y experiencia de usuario inicial
- Sistema de login con JWT + cookies
- Verificación de sesión activa y protección de rutas
- CRUD completo para usuarios
