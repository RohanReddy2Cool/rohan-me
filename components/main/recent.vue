<script lang="ts" setup>
import { headData } from '~/data'
import { blogPostFromParsedContent } from '~/utils/blog'

// Get Last 6 Publish Post from the content/blog directory
const { data: rawBlogPostsParsedContent } = await useAsyncData('recent-post', () =>
  queryContent('/blogs').limit(12).sort({ date: -1 }).find(),
)

const blogPosts = computed(() => {
  return rawBlogPostsParsedContent.value?.map((blogPostParsedContent) => {
    return blogPostFromParsedContent(blogPostParsedContent)
  })
})

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: headData.description,
    },
  ],
})
</script>

<template>
  <div class="pb-2 px-4">
    <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
      <Icon
        name="fa6-solid:infinity"
        size="2em"
        class="text-black dark:text-zinc-300  "
      />
      <h2 class="text-4xl font-semibold text-black dark:text-zinc-300   ">
        Recent Post
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <template
        v-for="post in blogPosts"
        :key="post.metadata.title"
      >
        <BlogCard
          :path="post.path"
          :title="post.metadata.title"
          :date="post.metadata.date"
          :description="post.metadata.description"
          :image="post.metadata.image"
          :alt="post.metadata.alt"
          :og-image="post.metadata.ogImage"
          :tags="post.metadata.tags"
          :published="post.metadata.published"
        />
      </template>
    </div>
    <div class="group pt-5 px-4">
      <NuxtLink
        to="/blogs"
        class="grid grid-cols-1 sm:grid-cols-10 gap-1"
      >
        <div class="flex group-hover:underline text-green-700 dark:text-green-400 items-center pt-2">
          <p>All posts</p>
          <LogoArrow />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
