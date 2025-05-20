import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "es",
  title: "Bunko Shelf",
  description: "Self-hosted server for managing-reading manga & ebooks.",
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Administración", link: "/guia/instalacion" },
      { text: "Usuarios", link: "/referencia/" },
    ],

    sidebar: [
      {
        text: "Guía",
        items: [
          { text: "¿Qué es Bunko Shelf?", link: "/guia/bunkoshelf" },
          { text: "Instalación", link: "/guia/instalacion" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/martirale" }],

    footer: {
      message: "De un otaku al que le gusta leer para el mundo",
      copyright: "Bunko Shelf &trade; &amp; &copy; 2025 AM",
    },
  },

  outDir: "./docs",
});
