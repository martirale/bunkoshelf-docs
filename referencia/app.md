# Web App

Se puede acceder a la aplicación web desde el navegador a través de la dirección IP del host (equipo donde se desplegó el contenedor) y el puerto configurado durante la instalación. Si **Bunko Shelf** se instala en un equipo local y se usa el puerto predeterminado (`3000`), se ingresaría navegando a `http://localhost:3000`. Sin embargo, si se instala en un _home server_ o dispositivo NAS en la misma red local, se accedería navegando a `http://{host_ip}:3000`.

La aplicación está pensada para ejecutarse detrás de un **proxy inverso** como Nginx o Caddy. En producción, el acceso se gestiona mediante subdominios configurados con Nginx Proxy Manager, el cual redirige las peticiones entrantes al puerto local donde corre la instancia de la app (por defecto, `localhost:3000`).

::: info
Acceder a la aplicación web desde otra máquina en una red distinta es un poco más complicado y queda fuera del alcance de esta guía. Personalmente, uso Tailscale con acceso a mi subred para ello, aunque hay muchas maneras de hacerlo.
:::

## Usuario predeterminado

Toda instalación nueva incluye un usuario administrador listo para su uso inmediato:

- **Usuario:** `bunko`
- **Contraseña:** `admin123`

**Por seguridad, se recomienda encarecidamente cambiar tanto el nombre de usuario como la contraseña tras iniciar sesión por primera vez.** Esto ayuda a proteger el acceso administrativo de usos no autorizados, especialmente si la instancia está expuesta públicamente.
