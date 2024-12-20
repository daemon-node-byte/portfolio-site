// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  pages: true,
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui'],
  ssr: true,
  ui: {
    global: true,
  },
  content: {
    highlight: {
      theme: 'monokai',
      langs: ['javascript', 'typescript', 'json', 'html', 'css', 'scss', 'markdown', 'bash', 'shell', 'yaml', 'xml', 'python', 'java', 'csharp', 'php', 'ruby', 'go', 'rust', 'swift', 'kotlin', 'dart', 'groovy', 'powershell', 'sql', 'c']
    },
    markdown: {
      remarkPlugins: ['remark-gfm'],
      rehypePlugins: [],
      
    }
  },
  tailwindcss: {
    cssPath: './assets/css/tailwind.css',
    config: {
      theme: {
        extend: {
        
        }
      }
    }
  }
})