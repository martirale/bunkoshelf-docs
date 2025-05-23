# Metadatos

Los metadatos son un conjunto de información asociada a una obra, como su título, autor, como su título, autor, editorial, entre otros. Los diferentes formatos tienen distintas maneras de almacenar y representar metadatos. Bunko Shelf intentará extraer la mayor cantidad posible de metadatos de un manga o libro, pero no siempre será posible. Por ejemplo, los archivos PDF no suelen tener buena compatibilidad con metadatos y los archivos de mangas (CBZ/CBR) suelen tener metadatos mal formados o inexistentes.

## Fuentes por formato

A continuación, se describen las fuentes de metadatos compatibles por cada formato:

### CBZ/CBR

Los metadatos se extraen de un fichero llamado `ComicInfo.xml` dentro de los ficheros de tipo CBZ y CBR en caso de existir. Actualmente, Bunko Shelf puede detectar los metadatos de la siguiente plantilla XML (que puedes utilizar para añadir y/o adaptar los metadatos de tus mangas):

::: code-group

```xml [ComicInfo.xml]
<?xml version="1.0" encoding="utf-8"?>
<ComicInfo>
    <!-- Título de la serie y volumen -->
    <Series></Series>
    <Title></Title>
    <Number>1</Number>

    <!-- Metadatos de publicación -->
    <Publisher></Publisher>
    <Genre></Genre>
    <LanguageISO>es</LanguageISO>
    <AgeRating></AgeRating>

    <!-- Información de los creadores -->
    <Writer></Writer>
    <Penciller></Penciller>
    <Inker></Inker>
    <Colorist></Colorist>
    <Letterer></Letterer>
    <CoverArtist></CoverArtist>
    <Editor></Editor>
    <Translator></Translator>

    <!-- Información adicional -->
    <Summary></Summary>
    <Web></Web>
    <Tags></Tags>

    <!-- Detalles de publicación -->
    <Year>YYYY</Year>
    <Month>MM</Month>
    <Day>DD</Day>

    <!-- Información de identificación -->
    <Count>1</Count>
    <GTIN></GTIN>

    <!-- Dirección de lectura -->
    <Manga>YesAndRightToLeft</Manga>
</ComicInfo>
```

:::
