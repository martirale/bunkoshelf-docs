# Manga

¡Esto es el _core_ de **Bunko Shelf**! Por ello, hay algunos conceptos importantes que debemos repasar para poder utilizar la aplicación de forma correcta y que esta gestione nuestra biblioteca de la forma esperada.

- Los mangas (denominados internamente como "volúmenes") se refieren principalmente a los archivos en disco.
- Los mangas se agrupan en `series` y `oneshots`.
- Los [metadatos](/referencia/metadatos.md) son un conjunto de información asociada a una obra, como su título, autor, editorial, entre otros.

## Formatos compatibles

La siguiente tabla describe los formatos admitidos para mangas en Bunko Shelf:

| Formato     | Extensión(es) | Básico | Transmisión | Notas         |
| ----------- | ------------- | ------ | ----------- | ------------- |
| Archivo ZIP | `.cbz`        | ✅     | ✅          |               |
| Archivo RAR | `.cbr`        | ❌     | ❌          | Próximamente. |
| PDF         | `.pdf`        | ❌     | ❌          | Próximamente. |

#### Básico

El soporte básico engloba la funcionalidad mínima viable para un formato determinado. En general, esto incluye aspectos cómo:

- Descubrimiento de archivos
- Extracción de metadatos
- Servicio de archivos

#### Transmisión

La "compatibilidad con la transmisión" en Bunko Shelf significa que las páginas de un manga se sirven como archivos de imagen individuales accesibles mediante URLs específicas, permitiendo al cliente cargar solo las páginas que necesita visualizar en cada momento. El backend descomprime el volumen completo inicialmente en un directorio temporal y expone cada página como un recurso separado, por lo que no se envía el volumen completo de una sola vez, sino que el cliente descarga cada página de forma individual bajo demanda.

## Formatos de imagen

Bunko Shelf busca ofrecer un soporte amplio para imágenes en los mangas. Actualmente los siguientes formatos de imagen son compatibles directamente:

- JPEG
- [PNG](https://caniuse.com/?search=png)
- [WebP](https://caniuse.com/?search=webp)
- [GIF](https://caniuse.com/?search=gif)

Asegúrate de que tu navegador admita el formato que planeas usar. Puedes visitar las URL con hipervínculos para comprobarlo. Si usas navegadores modernos como Google Chrome, Microsoft Edge o Apple Safari, no deberías experimentar ningún tipo de incompatibilidad.

## Estructura esperada

Para garantizar una correcta lectura y escaneo del contenido, los archivos `.cbz/.cbr` deben seguir esta estructura:

1. **Imágenes ordenadas secuencialmente:** Los archivos de imagen (JPG, PNG, etc.) deben tener nombres que reflejen su orden de lectura (`001.jpg`, `002.jpg`, `003.jpg`, etc).
2. **Portada:** La primera imagen será tratada como la portada del volumen.
3. **Organización opcional por capítulos:** Se permite un único nivel de carpetas dentro del CBZ para separar capítulos, por ejemplo: `/Capítulo 1/001.jpg`, `/Capítulo 2/001.jpg`, `/Capítulo 3/001.jpg`, etc.
4. **Metadatos:** El archivo `ComicInfo.xml` debe estar ubicado en la raíz del archivo CBZ.

Esta estructura permite al sistema procesar correctamente los volúmenes, detectar la portada y extraer metadatos. Si utilizas la organización por capítulos, no se permiten subcarpetas dentro de estas carpetas.

### Ejemplo de CBZ/CBR básico

```
Volume Name.cbz/
├── 001.png (cover art)
├── 002.png
├── 003.png
├── [...]
├── 074.png
├── 075.png
└── ComicInfo.xml
```

### Ejemplo de CBZ/CBR ordenado por capítulos

```
Volume Name.cbz/
├── Chapter 1/
│   ├── 001.png (cover art)
│   ├── 002.png
│   ├── 003.png
│   └── [...]
├── Chapter 2/
│   ├── 001.png
│   ├── 002.png
│   ├── 003.png
│   └── [...]
├── Chapter 3 [...]
└── ComicInfo.xml
```
