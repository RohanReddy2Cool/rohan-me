export const myData = {
  name: 'Rohan Reddy',
  fullName: 'Rohan R. Reddy',
  title: 'Rohan Reddy\'s Blog on robotics related topics',
  image: 'https://rohanr.me/rohan.jpeg',
  description: 'Rohan Reddy, student at Iron Horse Middle school, interested in robotics.',
  headline: 'Greetings 👋, from Rohan Reddy'
}

export const navbarData = {
  homeTitle: 'Rohan\'s Blog',
}

export const homePage = {
  title: 'Welcome To My Blog Site',
  description: 'Follow my journey as I learn about areas needed to become good at robotics, for now mostly digging deeper into mathematics as it is  universal for everything else.',
}

export const headData = {
  description: `${homePage.title}. ${homePage.description}`,
}

export const footerData = {
  aboutAuthor: 'Hi! I am Rohan Reddy, an aspring robotist and a golfer. Currently studying at Iron Horse Middle School in San Ramon, CA.',
  authorInterest: 'I am keen on working in robotics as I love building. I am learning mathematics to build strong foundations as it is used everywhere. I am also learning basics of mechanical design and 3D printing to become good at robotics. Eventually I want to learn physics, programming, mechatronics, control systems, AI, and business. OMG that is lot of interdisciplinary learning for robotics, which is why i love it!',
  aboutTheSite: 'This is a personal blog site for posting on my findings and learnings about topics of my interest.',
}

export const blogsPage = {
  title: 'All Blogs',
  description: 'Here you will find all the blog posts I have written & published on this site.',
}

export const categoryPage = {
  title: 'Categories',
  description: 'Specific topic tags I have posted about.',
}

export const aboutPage = {
  title: 'Rohan R. Reddy',
  description: 'Middle schooler with interest in Robotics and Golf.',
  aboutMe: 'Hello! I\'m a middle schooler who spends most of his time outside school finishing books in the AOPS set. My current target is to finish AOPS Calculus by the end of 8th grade. Apparently that is when fun starts as you use Calculus in physics and modelling systems. When I\'m not solving problems, you can find me resting or playing golf with my dad.'
}

export const linksData = {
  mySite: 'https://rohanr.me/',
  github: 'https://github.com/RohanReddy2Cool/',
  linkedin: 'https://www.linkedin.com/in/',
  mailAddress: 'rohanreddy2cool@gmail.com',
}

export const siteMetaData = [
  {
    name: 'description',
    content: myData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: linksData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: linksData.mySite,
  },
  {
    property: 'og:title',
    content: myData.title,
  },
  {
    property: 'og:description',
    content: myData.description,
  },
  {
    property: 'og:image',
    content: myData.image,
  },
]
