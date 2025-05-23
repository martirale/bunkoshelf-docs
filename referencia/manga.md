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

El soporte básico engloba la funcionalidad mínima viable para un formato determinado. El general, esto incluye aspectos cómo:

- Descubrimiento de archivos
- Extracción de metadatos
- Servicio de archivos

#### Transmisión

La "compatibilidad con la transmisión" se refiere a la capacidad de transmitir las páginas de un manga de forma "individual" al cliente. Esto suele ser importante para la reducción de la carga general de la red al enviar únicamente las páginas que el cliente solicita. Si un manga no admite la transmisión, se servirá el manga completo al cliente.

## Formatos de imagen

Bunko Shelf busca ofrecer un soporte amplio para imágenes en los mangas. Actualmente los siguientes formatos de imagen son compatibles directamente:

- JPEG
- [PNG](https://caniuse.com/?search=png)
- [WebP](https://caniuse.com/?search=webp)
- [GIF](https://caniuse.com/?search=gif)

Asegúrate de que tu navegador admita el formato que planeas usar. Puedes visitar las URL con hipervínculos para comprobarlo. Si usas navegadores modernos como Google Chrome, Microsoft Edge o Apple Safari, no deberías experimentar ningún tipo de incompatibilidad.
