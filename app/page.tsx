import ArticleCard from '@/components/ArticleCard'
import { CardHoverEffect } from '@/components/CardHoverEffect'
import { GlobeSpinner } from '@/components/GlobeSpinner'
import { TypewriterEffect } from '@/components/TypeWriterEffect'
import { Suspense } from 'react'

interface StoryWithAuthor {
  story: Story
  author: Author
}

type StoriesWithAuthor = StoryWithAuthor[]

export interface Story {
  id: number
  title: string
  score: number
  time: number
  url: string
  kids: number[]
  by: string
}

interface Author {
  about: string
  created: number
  id: string
  karma: number
}

async function getData(): Promise<StoriesWithAuthor> {
  try {
    // Fetch top stories ids
    const storyIDReponse = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    const storyIDArray = await storyIDReponse.json()

    // Get 10 random ids from the array
    const randomIDs = storyIDArray.sort(() => 0.5 - Math.random()).slice(0, 10)

    // Fetch stories
    const stories = await Promise.all(
      randomIDs.map(async (id: number) => {
        const itemResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        const { title, score, time, url, kids, by } = await itemResponse.json()
        return { id: id, title, score, time, url, kids, by }
      })
    )

    // Fetch data from author and add it to the story
    const storiesWithAuthor = await Promise.all(
      stories.map(async story => {
        const authorResponse = await fetch(
          `https://hacker-news.firebaseio.com/v0/user/${story.by}.json`
        )
        const { about, created, id, karma } = await authorResponse.json()
        return { story: story, author: { about, created, id, karma } }
      })
    )

    return storiesWithAuthor as StoriesWithAuthor
  } catch (error) {
    console.error('Error fetching data: ', error)
    throw new Error('Error fetching data from the API')
  }
}

const HeroText = [
  {
    text: 'Good',
  },
  {
    text: 'News',
  },
  {
    text: 'Travel',
    className: 'text-primary',
  },
  {
    text: 'fast',
    className: 'text-primary',
  },
]

export default async function Page() {
  const storiesWithAuthor: StoriesWithAuthor = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <TypewriterEffect words={HeroText} />

      <div className="w-full lg:px-24">
        <GlobeSpinner />
      </div>

      {storiesWithAuthor ? (
        <Suspense fallback={<div>Loading...</div>}>
          <section className="px-5 lg:px-24">
            <CardHoverEffect
              items={storiesWithAuthor.map(item => ({
                title: item.story?.title,
                time: item.story?.time,
                score: item.story?.score,
                authorName: item.story?.by,
                link: `article/${item.story?.id}`,
              }))}
            />
          </section>
        </Suspense>
      ) : (
        <div>error</div>
      )}
    </main>
  )
}
