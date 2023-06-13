// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Ali Khalouf | Front-end Developer and an open source enthusiast",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Hey, I'm Ali Khalouf and I am a Front-end Developer and an open source enthusiast.",
        },
        {
          name: "keywords",
          content:
            "vuejs,vue3,vue,nuxt,nuxtjs,nuxt3,vuejsdeveloper,nuxtjsdeveloper,vuedeveloper,nuxtdeveloper,frontend,frontenddeveloper,javascriptdeveloper,sass,stylus,freelancer,opensourcedeveloper,html,HTML,css,CSS,animation,Animations,gsap,webgl,webGL,cryptodeveloper",
        },
        { favicon: "/logo.png" },
        { name: "author", content: "Ali Khalouf" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@itsAliKhalouf" },
        { name: "twitter:creator", content: "@itsAliKhalouf" },
        { name: "twitter:image", content: "/personal.jpeg" },
        {name: "twitter:site", content: "@itsAliKhalouf"},
        {name: "twitter:description", content: "Hey, I'm Ali Khalouf and I am a Front-end Developer and an open source enthusiast."},
        {name: "og:title", content: "Ali Khalouf | Front-end Developer and an open"},
        {name: "og:description", content: "Hey, I'm Ali Khalouf and I am a Front-end Developer and an open source enthusiast."},
        {name: "og:image", content: "/personal.jpeg"},
        {name: "og:url", content: "https://itsAliKhalouf.com"},
        {name: "lang", content: "en_US"},
        {name: "icon", content: "/logo.png"},
        {
          name: "twitter:title",
          content:
            "Ali Khalouf | Front-end Developer and an open source enthusiast",
        },
        { name: "site", content: "https://alikhalouf.me" },
      ],
    },
  },
});
