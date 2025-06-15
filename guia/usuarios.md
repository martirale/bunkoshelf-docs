# Usuarios

**Bunko Shelf** tiene dos tipos de usuarios:

- **Administrador:** Es el propietario del servidor. Este usuario tiene control total sobre el servidor y puede agregar y eliminar usuarios.
- **Normal:** Usuario con acceso al servidor. Este usuario tiene acceso mayoritario de solo lectura, con opciones de exclusión.

Si **Bunko Shelf** no detecta en su inicio a un usuario administrador, automáticamente generará uno con las siguientes credenciales:

- **Usuario:** `bunko`
- **Contraseña:** `admin123`

## Gestión

::: warning AVISO
Las siguientes funcionalidades son exclusivas del usuario **administrador**.
:::

### Creación de usuarios

1. En la sección `Ajustes > Usuarios`, veremos una lista con todos los usuarios existentes.
2. Hacemos clic en el botón `Crear usuario` en la parte superior de la lista, se abrirá un modal con un formulario.
3. Rellenamos el formulario:
   - **Usuario:** El nombre de usuario del usuario. Se utiliza para iniciar sesión en el servidor.
   - **Contraseña:** La contraseña del usuario. Se utiliza para iniciar sesión en el servidor.
   - **Nombre y apellido:** Campos opcionales para personalización del usuario.
   - **Año de nacimiento:** Campo opcional. Necesario en caso de aplicar [control parental](/referencia/control-parental.md).
   - **Privilegios de admin:** Determina si el usuario será administrador o usuario normal.
4. Finalmente hacemos clic en el botón `Crear usuario` y habremos terminado.

### Editar un usuario

1. En la sección `Ajustes > Usuarios`, veremos la lista con los usuarios existentes.
2. Al final de la tabla ubicaremos una columna llamada `Editar`.
3. Haremos clic en el botón de edición al final de la fila del usuario a eitar abriendo así un modal con un formulario.
4. Este formulario tendrá los mismos campos que el formulario de creación de usuarios.
5. Una vez hechos los cambios, damos clic al botón `Actualizar usuario`.

### Eliminar un usuario

1. Realizamos los pasos 1, 2 y 3 anteriores.
2. En lugar de modificar el formulario, daremos clic al botón rojo `Eliminar usuario`.

## Seguriad

Actualmente, **Bunko Shelf** no exige ningún requisito de complejidad de contraseñas. **Esto puede cambiar si hay suficiente demanda.** En general, **Bunko Shelf** sigue un modelo de seguridad estándar aplicando un `hash` a la contraseña al momento de almacenarla.
