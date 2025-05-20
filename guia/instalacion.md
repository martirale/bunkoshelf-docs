# Instalación

La imagen está publicada en **Docker Hub** y puede ser desplegada en casi cualquier instancia Linux que tenga Docker instalado. Como la imagen está basada en **Debian**, debería ejecutarse sin problemas en entornos Linux compatibles. En el caso de **Docker para Windows**, es posible levantarla, pero solo si se ejecuta en **modo WSL 2** o con una configuración adecuada para imágenes Linux.

:::warning USUARIO PRIVILEGIADO
En todo el procedimiento hemos asumido que estamos usando el usuario `root`. Si no es el caso, debemos asegurarnos que nuestro usuario en uso **tenga privilegios de administrador** y añadimos el comando `sudo` al inicio de cada comando `docker`.
:::

## Método 1: Docker Compose

**Docker Compose** es una de las formás más prácticas y cómodas para levantar y mantener contenedores Docker. También es la forma que yo utilizo y recomiendo.

Si utilizamos un gestor de contenedores como **Portainer**, este `compose.yml` es completamente compatible y es mucho más fácil y cómodo de desplegar.

::: code-group

```yaml [compose.yml]
services:
  bunkoshelf:
    image: itsmrtr/bunkoshelf:latest
    container_name: bunkoshelf
    restart: unless-stopped
    ports:
      - "3000:3000"
    volumes:
      - bunko_db:/app/prisma/data
      - /path/to/your/library/manga:/library/manga
      - ./public/covers:/app/public/covers

volumes:
  bunko_db:
```

:::

Una vez creado el fichero `compose.yml` lo ejecutamos y listo:

```bash
docker compose up -d
```

## Método 2: Docker Run

Si por el contrario preferimos la línea de comandos y hacerlo a mano, siempre podemos hacerlo vía `docker run`:

```bash
docker run -d \
  --name bunkoshelf \
  --restart unless-stopped \
  -p 3000:3000 \
  -v bunko_db:/app/prisma/data \
  -v /path/to/your/library/manga:/library/manga \
  -v $(pwd)/public/covers:/app/public/covers \
  itsmrtr/bunkoshelf:latest
```

## Volúmenes de Docker

Todas las rutas posibles al contenedor. **Es requisito** definir en el `compose.yml` o en el comando `docker run` la ruta real de la biblioteca.

| Ruta                          | Tipo       | Descripción                                                                                    |
| ----------------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| `bunko_db`                    | Volumen    | Persistencia de la base de datos. **No modificar**.                                            |
| `/path/to/your/library/manga` | Montaje    | **Ruta real de la biblioteca en el host.** Debe ser una ruta válida en el sistema de archivos. |
| `./public/covers`             | Directorio | Portadas extraídas de los mangas durante el escaneo de la biblioteca. **No modificar**.        |

## Actualización

El proceso de actualización es bastante rápido y sencillo. Gracias al volumen nombrado (`bunko_db`) la base de datos con los mangas indexados, progreso de lectura, favoritos y usuarios no se perderán al reconstruir el contenedor.

Si no modificaste el nombre del contenedor en el `compose.yml` o en el `docker run`, el nombre por defecto será `bunkoshelf`.

1. Detenemos el contenedor:

```bash
docker stop bunkoshelf
```

2. Eliminamos el contenedor:

```bash
docker rm bunkoshelf
```

3. Ejecutamos nuevamente el `compose.yml`:

```bash
docker compose up -d
```

Si desplegamos usando `docker run`, en lugar de ejecutar `docker compose up -d`, ejecutaremos el comando completo de instalación con `docker run`.
