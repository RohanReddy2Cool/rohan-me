<script lang="ts" setup>
import { blogPostFromParsedContent } from '~/utils/blog'

const { data: blogPostsParsedContent } = await useAsyncData('home', () => queryContent('/blogs').sort({ date: -1 }).find())

const elementPerPage = ref(5)
const pageNumber = ref(1)
const searchTest = ref('')

const blogPosts = computed(() => {
  return blogPostsParsedContent.value?.map((blogPostParsedContent) => {
    return blogPostFromParsedContent(blogPostParsedContent)
  })
})

const searchedBlogPosts = computed(() => {
  return blogPosts.value?.filter((blogPost) => {
    const lowerTitle = blogPost.metadata.title.toLocaleLowerCase()
    if (lowerTitle.search(searchTest.value) !== -1)
      return true
    else return false
  }) || []
})

const paginatedBlogPosts = computed(() => {
  return searchedBlogPosts.value.filter((blogPost, idx) => {
    const startInd = ((pageNumber.value - 1) * elementPerPage.value)
    const endInd = (pageNumber.value * elementPerPage.value) - 1

    if (idx >= startInd && idx <= endInd)
      return true
    else return false
  }) || []
})

function onPreviousPageClick() {
  if (pageNumber.value > 1)
    pageNumber.value -= 1
}

const totalPage = computed(() => {
  const ttlContent = searchedBlogPosts.value.length || 0
  const totalPage = Math.ceil(ttlContent / elementPerPage.value)
  return totalPage
})

function onNextPageClick() {
  if (pageNumber.value < totalPage.value)
    pageNumber.value += 1
}

useHead({
  title: 'Archive',
  meta: [
    {
      name: 'description',
      content: 'Here you will find all the blog posts I have written & published on this site.',
    },
  ],
})

// Generate OG Image
const siteData = useSiteConfig()
defineOgImage({
  props: {
    title: 'Archive',
    description: 'Here you will find all the blog posts I have written & published on this site.',
    siteName: siteData.url,
  },
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <ArchiveHero />

    <div class="px-6">
      <input
        v-model="searchTest"
        placeholder="Search"
        type="text"
        class="block w-full bg-[#F1F2F4] dark:bg-slate-900 dark:placeholder-zinc-500 text-zinc-300  rounded-md border-gray-300 dark:border-gray-800 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
    </div>

    <ClientOnly>
      <div class="space-y-5 my-5 px-4">
        <template
          v-for="post in paginatedBlogPosts"
          :key="post.title"
        >
          <ArchiveCard
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

      <template #fallback>
        <!-- this will be rendered on server side -->
        <BlogLoader />
        <BlogLoader />
      </template>
    </ClientOnly>

    <div class="flex justify-center items-center space-x-6 ">
      <button
        :disabled="pageNumber <= 1"
        @click="onPreviousPageClick"
      >
        <Icon
          name="fa6-solid:less-than"
          size="30"
          :class="{ 'text-sky-700 dark:text-sky-400': pageNumber > 1 }"
        />
      </button>
      <p>{{ pageNumber }} / {{ totalPage }}</p>
      <button
        :disabled="pageNumber >= totalPage"
        @click="onNextPageClick"
      >
        <Icon
          name="fa6-solid:greater-than"
          size="30"
          :class="{ 'text-sky-700 dark:text-sky-400': pageNumber < totalPage }"
        />
      </button>
    </div>
  </main>
</template>
