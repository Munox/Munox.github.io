import { defineConfig } from 'vitepress'
import renderPermaLink from './render-perma-link'
import MarkDownItCustomAnchor from './markdown-it-custom-anchor'
import {getChildren} from 'vuepress-sidebar-atuo'
const ogDescription = '轻浏览器'
const ogImage = '/images/logo-sm.png'
const ogTitle = 'TheDreams\'Blog'
const ogUrl = 'https://munox.github.io'

export default defineConfig({
  title: 'TheDreams Blog',
  description: 'TheDreams个人网站',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/icon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
  ],

  vue: {
    reactivityTransform: true
  },

  themeConfig: {
    carbonAds: {
      code: 'CEBIEK3N',
      placement: 'vitejsdev'
    },

    footer: {
      message: 'Thanks to ❤️ my family, teachers and friends.',
      copyright: 'Copyright © 2023 TheDreams',
    },

    nav: [
      { text: '我的世界', link: '/myworld/', activeMatch: '/myworld/' },
      { text: '博客',link: '/blogs/',activeMatch: '/blogs/',},
      { text: '联系我', link: '/connect/index', activeMatch: '/connect/index' },
      
    ],

    sidebar: {
      '/blogs':[
        {
          text: '我的博客',
          items: [
            {
              text: '为什么要做轻浏览器',
              link: '/blogs/index'
            },
            {
              text: '用户协议',
              link: '/blogs/user-agreement'
            },
            {
              text: '隐私政策',
              link: '/blogs/privacy-policy'
            },
            
            {
              text: '更新日志',
              link: '/blogs/update-log'
            }
          ]
        }
      ]
      // '/blogs':getChildren('./blogs')
    }
  },

  markdown: {
    anchor: {
      permalink: renderPermaLink,
    },
    config: (md) => {
      md.use(MarkDownItCustomAnchor)
    }
  }
})