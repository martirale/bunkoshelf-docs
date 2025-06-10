<div class="title-block" style="text-align: center;" align="center">

# Bunko Shelf

<img title="Bunko Shelf Logo" src="/public/bunko-shelf-devices.webp">

</div>

## Introducción

**Bunko Shelf** es un servidor gratuito y auto-hospedado para organización y lectura de manga y libros digitales. Está completamente desarrollado con [Next.js 15](https://nextjs.org/), [SQLite](https://www.sqlite.org/) y [Prisma](https://www.prisma.io/).

## Docker Compose

```yaml
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

## Docker CLI

```bash
docker run -d \
  --name bunkoshelf \
  --restart unless-stopped \
  -p 3443:443 \
  -v $(pwd)/bunko_db:/app/prisma/data \
  -v $(pwd)/public/covers:/app/public/covers \
  -v /path/to/your/library/manga:/library/manga \
  itsmrtr/bunkoshelf:new
```

<br>

Licencia y documentación: [Bunko Shelf](https://bunko.amlab.site).
