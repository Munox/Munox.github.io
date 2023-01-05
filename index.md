---
layout: home

title: TheDreams
titleTemplate: TheDreams个人网站
hero:
  name: Welcome!
  text: 欢迎来到我的个人网站
  tagline: 「 长风破浪会有时，直挂云帆济沧海 」
  image:
    src: ./icon-nobg.png
    alt: Vite
  actions:
    - theme: brand
      text: 进入我的世界
      link: /myworld/
    - theme: alt
      text: 查看我的博客
      link: /blogs/index
features:
  - icon: 💡
    title: 极简体验
    details: 使用界面极致简洁
  - icon: ⚡️
    title: 雅俗共赏
    details: 小众而不失优雅
  - icon: 🛠️
    title: 随心所欲
    details: 高度自定义
---
<script setup>
import { onMounted } from 'vue'
import { fetchReleaseTag } from './.vitepress/utils/fetchReleaseTag.js'

onMounted(() => {
  fetchReleaseTag()
})
</script>
