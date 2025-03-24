import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Lumen',
  description: 'Documentation for Lumen',
  base: '/LumenWeb/',

  themeConfig: {
    logo: '/logo.svg', // optional
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/LumenMC/LumenWeb' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Getting Started', link: '/guide/getting-started' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LumenMC/LumenWeb' }
    ]
  }
})
