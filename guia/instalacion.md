# Instalación

La imagen está publicada en [Docker Hub](https://hub.docker.com/r/itsmrtr/bunkoshelf) y puede ser desplegada en casi cualquier instancia Linux que tenga Docker instalado. En el caso de **Docker para Windows**, es posible levantarla, pero solo si se ejecuta en **modo WSL 2** o con una configuración adecuada para imágenes Linux. Para la instalación necesitaremos crear nuestro `compose.yml`, o en su defecto, un stack en **Portainer**.

## Instalación

Si estamos instalando por primera vez **Bunko Shelf** y no disponemos de una base de datos previa, deberemos utilizar el siguiente `compose.yml`. Si por el contrario, estamos reinstalando y tenemos un [respaldo de la base de datos](/guia/respaldo) y/o estamos por actualizar por primera vez la aplicación, deberemos usar el segundo `compose.yml`.

::: code-group

```yaml [Instalar (nueva)]
services:
  bunkoshelf:
    image: itsmrtr/bunkoshelf:new
    container_name: bunkoshelf
    restart: unless-stopped
    ports:
      - "3443:443"
    volumes:
      - ./bunko_db:/app/prisma/data
      - ./public/covers:/app/public/covers
      - /path/to/your/library/manga:/library/manga
```

```yaml [Actualizar/Reinstalar]
services:
  bunkoshelf:
    image: itsmrtr/bunkoshelf:latest
    container_name: bunkoshelf
    restart: unless-stopped
    ports:
      - "3443:443"
    volumes:
      - ./bunko_db:/app/prisma/data
      - ./public/covers:/app/public/covers
      - /path/to/your/library/manga:/library/manga
```

:::

## Iniciar el contenedor

### Línea de comandos

Si estás haciendo el proceso desde la terminal, dentro del directorio donde tengas el `compose.yml`, ejecuta el siguiente comando:

```bash
docker compose up -d
```

### Portainer

Si por el contrario, estás en **Portainer**, debes ir al final de la página, en la sección **"Actions** y dar clic al botón `Deploy the stack`.

## Actualizar el contenedor

:::info CAMBIO DE ETIQUETA
Recuerda que la **primera vez que actualices**, debes cambiar la etiqueta `:new` por `:latest`.
:::

### Línea de comandos

Cuando haya una nueva imagen `estable` disponible, puedes actualizar ejecutando los siguientes comandos:

```bash
docker compose pull bunkoshelf
docker compose up -d
```

### Portainer

Si estás usando **Portainer**, el proceso es similar.

1. En la sección **"Stacks"**, entra al stack correspondiente a **Bunko Shelf**.
2. Una vez dentro, haz clic en la pestaña **"Editor"**.
3. Debajo del editor, verás un botón `Update the stack` al cual hay que dar clic.
4. Se abrirá un modal donde deberás activar `Re-pull image and redeploy`.
5. Finalmente, haz clic en el botón `Update` y espera a que termine la actualización.

## Volúmenes

**Es requisito** definir en el `compose.yml` o en el comando para `Docker CLI` la ruta real y absoluta de la biblioteca.

| Ruta                          | Tipo       | Descripción                                                                                    |
| ----------------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| `./bunko_db`                  | Directorio | Persistencia de la base de datos. **No modificar**.                                            |
| `./public/covers`             | Directorio | Portadas extraídas de los mangas durante el escaneo de la biblioteca. **No modificar**.        |
| `/path/to/your/library/manga` | Montaje    | **Ruta real de la biblioteca en el host.** Debe ser una ruta válida en el sistema de archivos. |

## Docker CLI

Si prefieres la línea de comandos sin **Docker Compose**, puedes desplegar el contenedor vía `Docker CLI` de la siguiente manera:

::: code-group

```bash [Instalar (nueva)]
docker run -d \
  --name bunkoshelf \
  --restart unless-stopped \
  -p 3443:443 \
  -v $(pwd)/bunko_db:/app/prisma/data \
  -v $(pwd)/public/covers:/app/public/covers \
  -v /path/to/your/library/manga:/library/manga \
  itsmrtr/bunkoshelf:new
```

```bash [Actualizar/Reinstalar]
docker run -d \
  --name bunkoshelf \
  --restart unless-stopped \
  -p 3443:443 \
  -v $(pwd)/bunko_db:/app/prisma/data \
  -v $(pwd)/public/covers:/app/public/covers \
  -v /path/to/your/library/manga:/library/manga \
  itsmrtr/bunkoshelf:latest
```

:::

## Monitoreo

Para supervisar los registros del contenedor, puedes utilizar el siguiente comando:

```bash
docker logs -f bunkoshelf
```
