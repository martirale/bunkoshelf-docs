# Instalación alternativa

## Proxy inverso

Un proxy inverso es un intermediario que recibe las solicitudes de los usuarios y las reenvía al servidor correspondiente, permitiendo gestionar conexiones, mejorar seguridad y habilitar funcionalidades como HTTPS. En nuestro caso, el proxy se usa principalmente para ofrecer acceso seguro mediante HTTPS a la aplicación, que requiere un certificado válido para el correcto manejo de la autenticación.

Para esta instalación alternativa, usaremos un **stack de Docker Compose** que incluye una instancia de [Nginx Proxy Manager](https://nginxproxymanager.com/) para que puedas gestionar el certificado SSL y el acceso seguro a **Bunko Shelf.**

::: code-group

```yaml [compose.yml]
services:
  nginx-proxy-manager:
    image: jc21/nginx-proxy-manager:latest
    container_name: nginx_proxy_manager
    restart: unless-stopped
    ports:
      - "80:80"
      - "81:81"
      - "443:443"
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt

  bunkoshelf:
    image: itsmrtr/bunkoshelf:latest
    container_name: bunkoshelf
    restart: unless-stopped
    expose:
      - "3000"
    volumes:
      - bunko_db:/app/prisma/data
      - /path/to/your/library/manga:/library/manga
      - ./public/covers:/app/public/covers

volumes:
  bunko_db:
```

:::

:::warning DOMINIO NECESARIO
El proxy inverso requiere de un dominio (o subdominio) real y válido para funcionar.
:::

### Iniciar el stack

```bash
docker compose up -d
```

### Actualizar el contenedor

Cuando haya una nueva imagen disponible, puedes actualizar usando estos comandos:

```bash
docker compose pull
docker compose up -d
```

## Volúmenes

**Es requisito** definir en el `compose.yml` la ruta real y absoluta de la biblioteca.

| Ruta                             | Tipo       | Descripción                                                                                    |
| -------------------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| `./data:/data`                   | Volumen    | Persistencia de datos de Nginx Proxy Manager. **No modificar**.                                |
| `./letsencrypt:/etc/letsencrypt` | Volumen    | Persistencia de datos de Let's Encrypt. **No modificar**.                                      |
| `bunko_db`                       | Volumen    | Persistencia de la base de datos. **No modificar**.                                            |
| `/path/to/your/library/manga`    | Montaje    | **Ruta real de la biblioteca en el host.** Debe ser una ruta válida en el sistema de archivos. |
| `./public/covers`                | Directorio | Portadas extraídas de los mangas durante el escaneo de la biblioteca. **No modificar**.        |

## Monitoreo

Para supervisar los registros del contenedor, puedes utilizar el siguiente comando:

```bash
docker compose logs -f
```
