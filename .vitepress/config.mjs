import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "es",
  title: "Bunko Shelf",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  description: "Self-hosted server for managing-reading manga & ebooks.",
  lastUpdated: true,

  themeConfig: {
    logo: "/BunkoShelfLilah.svg",
    siteTitle: false,
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Guía", link: "/guia/instalacion", activeMatch: "/guia/" },
      {
        text: "Referencia",
        link: "/referencia/inicio",
        activeMatch: "/referencia/",
      },
      {
        text: "0.11.0",
        items: [
          { text: "Changelog", link: "/otros/changelog" },
          { text: "Licencia", link: "/otros/licencia" },
        ],
      },
    ],

    sidebar: {
      "/guia/": [
        {
          text: "Introducción",
          items: [
            { text: "¿Qué es Bunko Shelf?", link: "/guia/bunkoshelf" },
            { text: "Instalación", link: "/guia/instalacion" },
          ],
        },
        {
          text: "Referencia",
          items: [
            { text: "Bibliotecas", link: "/guia/bibliotecas" },
            { text: "Escáner", link: "/guia/escaner" },
          ],
        },
        {
          text: "Otros",
          collapsed: true,
          items: [
            { text: "Registro de cambios", link: "/otros/changelog" },
            { text: "Licencia", link: "/otros/licencia" },
          ],
        },
      ],

      "/referencia/": [
        {
          text: "Empezando",
          items: [
            { text: "App", link: "/referencia/app" },
            { text: "Funciones", link: "/referencia/funciones" },
          ],
        },
        {
          text: "Biblioteca",
          items: [
            { text: "Manga", link: "/referencia/manga" },
            { text: "Libros", link: "/referencia/libros" },
            { text: "Metadatos", link: "/referencia/metadatos" },
          ],
        },
        {
          text: "Control de acceso",
          items: [{ text: "Control parental", link: "/referencia/parental" }],
        },
      ],

      "/otros/": [
        {
          text: "Guía",
          items: [
            { text: "¿Qué es Bunko Shelf?", link: "/guia/bunkoshelf" },
            { text: "Instalación", link: "/guia/instalacion" },
          ],
        },
        {
          text: "Otros",
          collapsed: true,
          items: [
            { text: "Registro de cambios", link: "/otros/changelog" },
            { text: "Licencia", link: "/otros/licencia" },
          ],
        },
      ],
    },

    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/martirale/bunkoshelf-docs" },
      { icon: "instagram", link: "https://www.instagram.com/itsmrtr" },
    ],

    footer: {
      message: "De un otaku al que le gusta leer para el mundo",
      copyright: "Bunko Shelf &trade; &amp; &copy; 2025 AM",
    },
  },

  outDir: "./docs",
});
