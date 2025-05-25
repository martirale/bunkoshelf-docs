# Bibliotecas

## Manga

La **Biblioteca** es el directorio donde se almacenan los mangas que serán escaneados por la aplicación. Este path debe definirse en el archivo `compose.yml`, dentro del volumen que se monta hacia el contenedor ([+info](/guia/instalacion.md)).

La estructura debe seguir el formato proporcionado en el ejemplo siguiente para que el escaneo funcione correctamente.

Aunque las series y los oneshots comparten la misma estructura de carpetas, su tratamiento interno es distinto. Para que la aplicación reconozca un título como oneshot, simplemente añade el sufijo `[oneshot]` al nombre del directorio que lo contiene.

```
library/
└── manga/
    ├── Series Name/
    │   ├── Series Name 1.cbz
    │   ├── Series Name 2.cbz
    │   └── Series Name 3.cbz
    └── Volume Name [oneshot]/
        └── Volume Name.cbz
```

- `library/manga` representa el directorio raíz de tu biblioteca.
- Cada subcarpeta corresponde a una serie o un oneshot.
- Dentro de cada carpeta, se esperan archivos `CBZ`, uno por volumen.
- Para que un título sea tratado como "oneshot", el nombre de su carpeta debe incluir el sufijo `[oneshot]` tal cual se muestra.

Este formato permite que el escáner de la aplicación identifique correctamente y procese de forma distinta las series y los volúmenes únicos.

::: info NOTA
Los nombres `library/` y `manga/` son solo una convención. Puedes nombrarlos libremente, siempre que los directorios internos respeten la estructura descrita.
:::
