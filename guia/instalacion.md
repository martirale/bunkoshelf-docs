# Instalación

La imagen está publicada en **Docker Hub** y puede ser desplegada en casi cualquier instancia Linux que tenga Docker instalado. En el caso de **Docker para Windows**, es posible levantarla, pero solo si se ejecuta en **modo WSL 2** o con una configuración adecuada para imágenes Linux.

:::warning USUARIO PRIVILEGIADO
En todo el procedimiento estamos operando con el usuario `root`. Si no es tu caso, asegúrate de que tu usuario en uso **tenga privilegios de administrador** y añade el comando `sudo` al inicio de cada comando `docker`.
:::

## Docker Compose

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

### Iniciar el contenedor

```bash
docker compose up -d
```

### Actualizar el contenedor

Cuando haya una nueva imagen disponible, puedes actualizar usando estos comandos:

```bash
docker compose pull bunkoshelf
docker compose up -d
```

## Volúmenes

**Es requisito** definir en el `compose.yml` o en el comando para `Docker CLI` la ruta real y absoluta de la biblioteca.

| Ruta                          | Tipo       | Descripción                                                                                    |
| ----------------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| `bunko_db`                    | Volumen    | Persistencia de la base de datos. **No modificar**.                                            |
| `/path/to/your/library/manga` | Montaje    | **Ruta real de la biblioteca en el host.** Debe ser una ruta válida en el sistema de archivos. |
| `./public/covers`             | Directorio | Portadas extraídas de los mangas durante el escaneo de la biblioteca. **No modificar**.        |

## Instalación alternativa

Si prefieres la línea de comandos, puedes desplegar el contenedor vía `Docker CLI`:

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

## Monitoreo

Para supervisar los registros del contenedor, puedes utilizar el siguiente comando:

```bash
docker logs -f bunkoshelf
```
