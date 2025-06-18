# Instalación (beta)

Esta es una **versión preliminar** publicada en [Docker Hub](https://hub.docker.com/r/itsmrtr/bunkoshelf), pensada para pruebas y retroalimentación temprana. Aunque es funcional, aún puede contener errores o cambios pendientes, por lo que no se recomienda para usar con tu biblioteca real. Si decides probarla, basta con crear un `compose.yml`, o bien configurar un stack en **Portainer**.

## Instalación

Antes de instalar esta versión, asegurate de tener ya desplegada la imagen `:new`. Luego, puedes actualizar a la `beta` modificando la etiqueta de la imagen en tu `compose.yml`.

::: code-group

```yaml [Paso 1 (instalar)]
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

```yaml [Paso 2 (actualizar)]
services:
  bunkoshelf:
    image: itsmrtr/bunkoshelf:beta
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

### Línea de comandos

Cuando haya una nueva imagen `beta` disponible, puedes actualizar ejecutando los siguientes comandos:

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
