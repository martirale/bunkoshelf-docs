# Instalación

## Docker Compose

La imagen está publicada en [Docker Hub](https://hub.docker.com/r/itsmrtr/bunkoshelf) y puede ser desplegada en casi cualquier instancia Linux que tenga Docker instalado. En el caso de **Docker para Windows**, es posible levantarla, pero solo si se ejecuta en **modo WSL 2** o con una configuración adecuada para imágenes Linux. Para la instalación necesitaremos crear nuestro `compose.yml`, o en su defecto, un stack en **Portainer**:

::: code-group

```yaml [Estable]
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

```yaml [Desarrollo]
services:
  bunkoshelf:
    image: itsmrtr/bunkoshelf:nightly
    container_name: bunkoshelf-dev
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

:::warning PROXY INVERSO NECESARIO
**La aplicación requiere HTTPS para funcionar, lo que implica usar un proxy inverso con certificado válido.** Si no cuentas con un proxy, puedes optar por la [instalación alternativa](/guia/instalacion-alternativa.md).
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

## Docker CLI

Si prefieres la línea de comandos, puedes desplegar el contenedor vía `Docker CLI`:

::: code-group

```bash [Estable]
docker run -d \
  --name bunkoshelf \
  --restart unless-stopped \
  -p 3000:3000 \
  -v bunko_db:/app/prisma/data \
  -v /path/to/your/library/manga:/library/manga \
  -v $(pwd)/public/covers:/app/public/covers \
  itsmrtr/bunkoshelf:latest
```

```bash [Desarrollo]
docker run -d \
  --name bunkoshelf-dev \
  --restart unless-stopped \
  -p 3000:3000 \
  -v bunko_db:/app/prisma/data \
  -v /path/to/your/library/manga:/library/manga \
  -v $(pwd)/public/covers:/app/public/covers \
  itsmrtr/bunkoshelf:nightly
```

:::

## Monitoreo

Para supervisar los registros del contenedor, puedes utilizar el siguiente comando:

```bash
docker logs -f bunkoshelf
```
