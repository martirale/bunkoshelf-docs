import { defineConfig } from "vitepress";
import fs from "node:fs";
import path from "node:path";

// Ruta al archivo version.json
const versionFile = path.resolve(__dirname, "../public/version.json");

// Leer y parsear el archivo
const versionData = JSON.parse(fs.readFileSync(versionFile, "utf-8"));
const currentVersion = versionData.latest || "0.0.0";

export default defineConfig({
  lang: "es-MX",
  title: "Bunko Shelf",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  description: "Self-hosted server for managing-reading manga & ebooks.",
  lastUpdated: true,

  themeConfig: {
    logo: {
      dark: "/BunkoShelfPearl.svg",
      light: "/BunkoShelfLilah.svg",
    },

    siteTitle: false,
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Guía", link: "/guia/instalacion", activeMatch: "/guia/" },
      {
        text: "Referencia",
        link: "/referencia/app",
        activeMatch: "/referencia/",
      },
      {
        text: currentVersion,
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
            {
              text: "Instalación alternativa",
              link: "/guia/instalacion-alternativa",
            },
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
      { icon: "docker", link: "https://hub.docker.com/r/itsmrtr/bunkoshelf" },
      { icon: "threads", link: "https://www.threads.com/@bunkoshelf" },
      { icon: "github", link: "https://github.com/martirale" },
    ],

    lastUpdated: {
      text: "Actualizado",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short",
      },
    },

    docFooter: {
      prev: "Página anterior",
      next: "Próxima página",
    },

    footer: {
      message: "De un otaku friki al que le gusta leer.",
      copyright:
        "<a href='/otros/licencia'>Bunko Shelf &trade; &amp; &copy; 2025 AM</a>",
    },
  },

  outDir: "./docs",
});
