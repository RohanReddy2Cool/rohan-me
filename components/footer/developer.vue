<script setup lang="ts">
import { myData, footerData, linksData } from '~/data'
</script>

<template>
  <div>
    <p class="text-black dark:text-zinc-300   text-2xl py-1 font-semibold">
      {{ myData.name }}
    </p>
    <p class="py-2 dark:text-zinc-300  ">
      {{ footerData.aboutAuthor }}
    </p>
    <div class="my-3 space-x-3 pb-3">
      <NuxtLink
        :to="linksData.github"
        target="_blank"
        class="p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]"
        aria-label="Github"
      >
        <Icon
          name="fa6-brands:github"
          size="1em"
        />
      </NuxtLink>
      <!-- NuxtLink
        :to="linksData.linkedin"
        target="_blank"
        class="p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]"
        aria-label="LinkedIn"
      >
        <Icon name="fa6-brands:linkedin" size="1em" />
      </NuxtLink -->
    </div>
  </div>
</template>
