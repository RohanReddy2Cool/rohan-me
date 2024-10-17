import type { ParsedContent } from '@nuxt/content'

export interface BlogPostMetadata {
  published: boolean
  title: string
  date: string
  description: string
  image?: string
  alt?: string
  ogImage?: string
  tags: string[]
}

export interface BlogPost {
  metadata: BlogPostMetadata
  path: string
}

export function blogPostFromParsedContent(parsedContent: ParsedContent | null): BlogPost {
  let date
  try {
    date = new Date(parsedContent?.date).toLocaleDateString(
      undefined,
      { timeZone: 'UTC', month: 'short', year: 'numeric', day: 'numeric' },
    )
  }
  catch {
    date = 'not-date-available'
  }
  return {
    metadata: {
      title: parsedContent?.title || 'no-title available',
      description: parsedContent?.description || 'no-description available',
      image: parsedContent?.image,
      alt: parsedContent?.alt,
      ogImage: parsedContent?.ogImage || parsedContent?.image,
      date,
      tags: parsedContent?.tags || [],
      published: !!parsedContent?.published,
    },
    path: parsedContent?._path || 'not_found',
  }
}
