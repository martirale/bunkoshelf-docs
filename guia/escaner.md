# Escáner

El escaneo es el proceso de indexar tu sistema de archivos para detectar nuevos archivos multimedia, cambios y/o actualizaciones. Los escaneos son esenciales para crear la biblioteca así como para mantenerla actualizada en **Bunko Shelf**. El escáner es un proceso en cola que se realiza en segundo plano tras iniciarse.

## ¿Cómo funciona?

Al iniciar un análisis, **Bunko Shelf** explorará tu sistema de archivos (el path establecido en tu [`compose.yml`](/guia/instalacion.md) durante la instalación) para detectar cualquier serie o volumen nuevo, actualizado o eliminado. Posteriormente, guardará estos cambios o adhesiones en la base de datos, que luego los pondrá a tu disposición en la interfaz de usuario.

1. ### Comprobación inicial

   La aplicación comprueba que exista la biblioteca en el path especificado. En caso de no encontrarla, fallará.

2. ### Cola de tareas

   Tras la comprobación, el escáner ejecutará de forma secuencial en tres etapas el recorrido por el sistema de archivos para detectar: series y volúmenes. Durante esta tarea, el escáner indexará todos los directorios de series y volúmenes, extraerá las portadas y finalmente los metadatos guardando todo en la base de datos.

## Realizando un escaneo

Para realizar un escaneo, solo debes dirigirte a `Ajustes > Ajustes de biblioteca` y ahí encontrarás dos opciones: "Escanear biblioteca" y "Descargar database". Inicia el escaneo presionando el botón "Escanear biblioteca" y espera a que se complete el escaneo.

::: warning TIEMPO DE ESPERA
El tiempo de escaneo dependerá de la potencia del host y el tamaño de tu biblioteca. En equipos con SSD será considerablemente más rápido que en aquellos con HDD.
:::
