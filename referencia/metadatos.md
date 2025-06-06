# Metadatos

Los metadatos son un conjunto de información asociada a una obra, como su título, autor, como su título, autor, editorial, entre otros. Los diferentes formatos tienen distintas maneras de almacenar y representar metadatos. **Bunko Shelf** intentará extraer la mayor cantidad posible de metadatos de un manga o libro, pero no siempre será posible. Por ejemplo, los archivos PDF no suelen tener buena compatibilidad con metadatos y los archivos de mangas (CBZ/CBR) suelen tener metadatos mal formados o inexistentes.

## Fuentes por formato

A continuación, se describen las fuentes de metadatos compatibles por cada formato:

### CBZ/CBR

Los metadatos se extraen de un fichero llamado `ComicInfo.xml` dentro de los ficheros de tipo CBZ y CBR en caso de existir. Actualmente, **Bunko Shelf** puede detectar los metadatos de la siguiente plantilla XML (que puedes utilizar para añadir y/o adaptar los metadatos de tus mangas):

::: code-group

```xml [ComicInfo.xml]
<?xml version="1.0" encoding="utf-8"?>
<ComicInfo>
    <!-- Título de la serie y volumen -->
    <Series></Series>
    <Title></Title>
    <Number></Number>

    <!-- Metadatos de publicación -->
    <Publisher></Publisher>
    <Genre></Genre>
    <LanguageISO></LanguageISO>
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
    <Year></Year>
    <Month></Month>
    <Day></Day>

    <!-- Información de identificación -->
    <Count></Count>
    <GTIN></GTIN>

    <!-- Dirección de lectura -->
    <Manga>YesAndRightToLeft</Manga>
</ComicInfo>
```

:::

### Ejemplo con datos reales

Para el ejemplo, un `ComicInfo.xml` con los metadatos del volumen 1 de 37 del manga: **Komi-San Wa Komyushou Desu**.

::: code-group

```xml [ComicInfo.xml]
<?xml version="1.0" encoding="utf-8"?>
<ComicInfo>
    <!-- Título de la serie y volumen -->
    <Series>Komi-San Wa Komyushou Desu</Series>
    <Title>Komi-San Wa Komyushou Desu 1</Title>
    <Number>1</Number>

    <!-- Metadatos de publicación -->
    <Publisher>Shogakukan</Publisher>
    <Genre>comedia,romance</Genre>
    <LanguageISO>es</LanguageISO>
    <AgeRating>Teen</AgeRating>

    <!-- Información de los creadores -->
    <Writer>Tomohito Oda</Writer>
    <Penciller>Tomohito Oda</Penciller>
    <Inker></Inker>
    <Colorist></Colorist>
    <Letterer></Letterer>
    <CoverArtist></CoverArtist>
    <Editor></Editor>
    <Translator></Translator>

    <!-- Información adicional -->
    <Summary>¡Una comedia adictiva sobre una heroína con ansiedad social! Quiero hablar, pero no puedo. ¿Y si esa tensión se le transmite a él? Komi-san, una hermosa chica a la que todos miran, es una paciente con trastorno de ansiedad social. ¿Eres muy malo comunicándote y la gente a tu alrededor encuentra difícil acercarse a ti? Komi-san siempre está pensando en "¿cómo debería hablar con alguien?" y "¿qué debería hacer después de hablar con él?" ¡La vida escolar comienza para Komi-san y su nuevo amigo Tadano-kun! Su corazón y sus dedos tiemblan, ¡pero su objetivo es hacer 100 amigos! ¡Una comedia comunicativa que te hará sonreír, pero también te tocará el corazón a veces!</Summary>
    <Web></Web>
    <Tags>escolar,recuentos de la vida,shonen</Tags>

    <!-- Detalles de publicación -->
    <Year>2016</Year>
    <Month>09</Month>
    <Day>16</Day>

    <!-- Información de identificación -->
    <Count>37</Count>
    <GTIN></GTIN>

    <!-- Dirección de lectura -->
    <Manga>YesAndRightToLeft</Manga>
</ComicInfo>
```

:::

::: info GÉNERO Y ETIQUETAS
Los campos para género (`<Genre>`) y etiquetas (`<Tags>`) deben rellenarse en minúsculas, sin espacios entre ellas y por comas: `escolar,recuentos de la vida,shonen`.
:::

::: info AGE RATING
Para más información de los valores soportados para `<AgeRating>`, por favor revisa la guía de referencia: [Control Parental](/referencia/parental.md).
:::
