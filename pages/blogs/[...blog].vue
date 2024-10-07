<script setup lang="ts">
import type { BlogPost } from '@/types/blog'
import { blogPostFromParsedContent } from '@/types/blog'
import { navbarData, linksData, myData } from '~/data'

const { path } = useRoute()

const { data: blogPostParsedContent } = await useAsyncData(`blog-post-${path}`, () => queryContent(path).findOne())

const blogPost = computed<BlogPost>(() => {
  return blogPostFromParsedContent(blogPostParsedContent.value)
})

useHead({
  title: blogPost.value.metadata.title || '',
  meta: [
    { name: 'description', content: blogPost.value.metadata.description },
    {
      name: 'description',
      content: blogPost.value.metadata.description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: 'og:site_name', content: navbarData.homeTitle },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: `${linksData.mySite}/${path}`,
    },
    {
      property: 'og:title',
      content: blogPost.value.metadata.title,
    },
    {
      property: 'og:description',
      content: blogPost.value.metadata.description,
    },
    {
      property: 'og:image',
      content: blogPost.value.metadata.ogImage,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: 'twitter:site', content: '@qdnvubp' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:url',
      content: `${linksData.mySite}/${path}`,
    },
    {
      name: 'twitter:title',
      content: blogPost.value.metadata.title,
    },
    {
      name: 'twitter:description',
      content: blogPost.value.metadata.description,
    },
    {
      name: 'twitter:image',
      content: blogPost.value.metadata.ogImage,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `${linksData.mySite}/${path}`,
    },
  ],
})

// Generate OG Image
// defineOgImageComponent('About', {
//   headline: myData.headline,
//   title: blogPost.value.metadata.title,
//   description: blogPost.value.metadata.description,
//   link: blogPost.value.metadata.ogImage,
// })
</script>

<template>
  <div
    v-if="!blogPostParsedContent"
    class="py-5"
  >
    <div class="container max-w-xl   mx-auto">
      <Logo404 />
    </div>
  </div>
  <div
    v-else
    class="px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12 "
  >
    <div class="col-span-12 lg:col-span-9">
      <BlogHeader
        :title="blogPost.metadata.title"
        :image="blogPost.metadata.image"
        :alt="blogPost.metadata.alt"
        :date="blogPost.metadata.date"
        :description="blogPost.metadata.description"
        :tags="blogPost.metadata.tags"
      />
      <div
        class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg
        prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"
      >
        <ContentRenderer :value="blogPostParsedContent">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </div>
    </div>
    <BlogToc />

    <div class="flex flex-row  flex-wrap md:flex-nowrap mt-10 gap-2">
      <SocialShare
        v-for="network in ['facebook', 'twitter', 'linkedin', 'email']"
        :key="network"
        :network="network"
        :styled="true"
        :label="true"
        class="p-1"
        aria-label="Share with {network}"
      />
    </div>
  </div>
</template>
