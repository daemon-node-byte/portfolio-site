// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  pages: true,
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/ui", "v-gsap-nuxt"],
  runtimeConfig: {
    mailApiKey: process.env.EMAIL_API_KEY,
    ownerEmail: process.env.OWNER_EMAIL,
    public: {
      envDomain: process.env.ENV_DOMAIN,
    },
  },
  app: {
    head: {
      title: "J.McLain's Portfolio",
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  ssr: true,
  vgsap: {
    composable: true,
  },
  ui: {
    global: true,
  },
  content: {
    highlight: {
      theme: "monokai",
      langs: [
        "javascript",
        "typescript",
        "json",
        "html",
        "css",
        "scss",
        "markdown",
        "bash",
        "shell",
        "yaml",
        "xml",
        "python",
        "java",
        "csharp",
        "php",
        "ruby",
        "go",
        "rust",
        "swift",
        "kotlin",
        "dart",
        "groovy",
        "powershell",
        "sql",
        "c",
      ],
    },
    markdown: {
      remarkPlugins: ["remark-gfm"],
      rehypePlugins: [],
      // rehypePlugins: ['rehype-meta', 'rehype-document', 'rehype-infer-reading-time-meta', 'rehype-parse', 'rehype-stringify', 'rehype-slug'],
    },
  },
  tailwindcss: {
    cssPath: "./assets/css/tailwind.css",
    config: {
      theme: {
        extend: {},
      },
    },
  },
});
