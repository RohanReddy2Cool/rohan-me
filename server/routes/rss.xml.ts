import { Feed } from 'feed'
import { serverQueryContent } from '#content/server'
import { myData, linksData } from '~/data'

export default defineEventHandler(async (event) => {
  setHeader(event, 'content-type', 'text/xml')
  const docs = await serverQueryContent(event).sort({ date: -1 }).find()
  const feed = new Feed({
    title: myData.title,
    description: myData.description,
    id: linksData.mySite,
    link: linksData.mySite,
    language: 'en',
    favicon: `${linksData.mySite}/favicon.ico`,
    copyright: 'MIT',
    author: {
      name: myData.fullName,
      email: linksData.mailAddress,
      link: linksData.mySite,
    },
  })

  // Add the feed items
  docs.forEach((doc) => {
    feed.addItem({
      title: doc.title || '',
      id: linksData.mySite + doc._path,
      link: linksData.mySite + doc._path,
      description: doc.description,
      content: doc.description,
      date: new Date(doc.date),
    })
  })

  return feed.rss2()
})
