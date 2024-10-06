<script lang="ts" setup>
import { blogPostFromParsedContent } from '@/types/blog'

const route = useRoute()

// take category from route params & make first char upper
const category = computed(() => {
  const name = route.params.category || ''
  let strName = ''

  if (Array.isArray(name))
    strName = name.at(0) || ''
  else strName = name
  return strName
})

const { data: blogPostParsedContent } = await useAsyncData(`category-data-${category.value}`, () =>
  queryContent('/blogs')
    .where({ tags: { $contains: category.value } })
    .find(),
)


const blogPosts = computed(() => {
  return blogPostParsedContent.value?.map((blogPostParsedContent) => {
    return blogPostFromParsedContent(blogPostParsedContent);
  })
})

useHead({
  title: category.value,
  meta: [
    {
      name: 'description',
      content: `You will find all the ${category.value} related post here`,
    },
  ],
})

// Generate OG Image
const siteData = useSiteConfig()
defineOgImage({
  props: {
    title: category.value?.toUpperCase(),
    description: `You will find all the ${category.value} related post here`,
    siteName: siteData.url,
  },
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600 px-4">
    <CategoryTopic />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <BlogCard
        v-for="post in blogPosts"
        :path="post.path"
        :key="post.metadata.title"
        :title="post.metadata.title"
        :date="post.metadata.date"
        :description="post.metadata.description"
        :image="post.metadata.image"
        :alt="post.metadata.alt"
        :og-image="post.metadata.ogImage"
        :tags="post.metadata.tags"
        :published="post.metadata.published"
      />
      <BlogEmpty v-if="blogPosts?.length === 0" />
    </div>
  </main>
</template>
