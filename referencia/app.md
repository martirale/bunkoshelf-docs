# Web App

![Bunko Shelf devices](/bunko-shelf-devices.webp)

## Acceso a la app

Se puede acceder a la aplicación web desde el navegador a través de la dirección IP del host (equipo donde se desplegó el contenedor) y el puerto predeterminado.

Por lo que si **Bunko Shelf** se instala en un equipo local se ingresaría navegando a `https://localhost:3443`. Sin embargo, si se instala en un _home server_ o equipo tipo NAS en la misma red local, se accedería navegando a `http://{host_ip}:3443`.

::: info
Acceder a la aplicación web desde otra máquina en una red distinta es un poco más complicado y queda fuera del alcance de esta guía. Personalmente, recomiendo el uso **Tailscale** con acceso a la subred para ello, aunque hay muchas maneras más de hacerlo.
:::

## Usuario predeterminado

Toda instalación nueva incluye un usuario administrador listo para su uso inmediato:

- **Usuario:** `bunko`
- **Contraseña:** `admin123`

**Por seguridad, se recomienda encarecidamente cambiar tanto el nombre de usuario como la contraseña tras iniciar sesión por primera vez.** Esto ayuda a proteger el acceso administrativo de usos no autorizados, especialmente si la instancia está expuesta públicamente.

---

\*_Las imágenes de las portadas son utilizadas con fines ilustrativos. Los derechos de autor pertenecen a sus respectivos autores._
