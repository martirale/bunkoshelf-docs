# Manga

¡Esto es el _núcleo_ de **Bunko Shelf**! Por ello, hay algunos conceptos importantes que debemos repasar para poder utilizar la aplicación de forma correcta y que esta gestione nuestra biblioteca de la forma esperada.

- Los mangas (denominados internamente como "volúmenes") se refieren principalmente a los archivos en disco.
- Los mangas se agrupan en `series` y `oneshots`.
- Los [metadatos](/referencia/metadatos.md) son un conjunto de información asociada a una obra, como su título, autor, editorial, entre otros.

## Formatos compatibles

La siguiente tabla describe los formatos admitidos para mangas en **Bunko Shelf**:

| Formato     | Extensión(es) | Básico | Streaming | Notas        |
| ----------- | ------------- | ------ | --------- | ------------ |
| Archivo ZIP | `.cbz`        | ✅     | ✅        |              |
| Archivo RAR | `.cbr`        | ❌     | ❌        | Próximamente |
| PDF         | `.pdf`        | ❌     | ❌        | Próximamente |

#### Básico

El soporte básico engloba la funcionalidad mínima viable para un formato determinado. En general, esto incluye aspectos cómo:

- Descubrimiento de archivos
- Extracción de metadatos
- Servicio de archivos

#### Streaming

La "compatibilidad con streaming" en **Bunko Shelf** significa que las páginas de un manga se sirven como archivos de imagen individuales accesibles mediante URLs específicas, permitiendo al cliente cargar solo las páginas que necesita visualizar en cada momento. El backend descomprime el volumen completo inicialmente en un directorio temporal y expone cada página como un recurso separado, por lo que no se envía el volumen completo de una sola vez, sino que el cliente descarga cada página de forma individual bajo demanda.

## Formatos de imagen

**Bunko Shelf** busca ofrecer un soporte amplio para imágenes en los mangas. Actualmente los siguientes formatos de imagen son compatibles directamente:

- JPEG
- PNG
- WebP
- GIF

Asegúrate de que tu navegador admita el formato que planeas usar. Si usas navegadores modernos como Google Chrome, Microsoft Edge o Apple Safari, no deberías experimentar ningún tipo de incompatibilidad.

## Estructura esperada

Para garantizar una correcta lectura y escaneo del contenido, los archivos `CBZ/CBR` deben seguir esta estructura:

1. **Imágenes ordenadas secuencialmente:** Los archivos de imagen (JPG, PNG, etc.) deben tener nombres que reflejen su orden de lectura (`001.jpg`, `002.jpg`, `003.jpg`, etc).
2. **Portada:** La primera imagen será tratada como la portada del volumen.
3. **Organización opcional por capítulos:** Se permite un único nivel de carpetas dentro del volumen para separar capítulos, por ejemplo: `/Capítulo 1/001.jpg`, `/Capítulo 2/001.jpg`, `/Capítulo 3/001.jpg`, etc.
4. **Metadatos:** El archivo `ComicInfo.xml` debe estar ubicado en la raíz del volumen.

Esta estructura permite al sistema procesar correctamente los volúmenes, detectar la portada y extraer metadatos. Si utilizas la organización por capítulos, no se permiten subcarpetas dentro de estas carpetas.

### Ejemplo de CBZ/CBR básico

```
Nombre Volumen.cbz/
├── 001.png (portada)
├── 002.png
├── 003.png
├── [...]
├── 074.png
├── 075.png
└── ComicInfo.xml
```

### Ejemplo de CBZ/CBR ordenado por capítulos

```
Nombre Volumen.cbz/
├── Capítulo 1/
│   ├── 001.png (portada)
│   ├── 002.png
│   ├── 003.png
│   └── [...]
├── Capítulo 2/
│   ├── 001.png
│   ├── 002.png
│   ├── 003.png
│   └── [...]
├── Capítulo 3 [...]
└── ComicInfo.xml
```
