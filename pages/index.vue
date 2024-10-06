<script lang="ts" setup>
import { navbarData, headData, myData } from '~/data'

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: headData.description,
    },
  ],
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: myData.headline,
  title: navbarData.homeTitle,
  description: myData.description,
  link: myData.image,
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />
    <MainRecent />
  </main>
</template>
