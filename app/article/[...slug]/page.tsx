import AuthorIntroduction from '@/components/AuthorIntroduction'
import { BentoGrid, BentoGridItem } from '@/components/BentoGrid'
import Hero from '@/components/Hero'
import { PromoSlider } from '@/components/PromoSlider'
import { TracingBeam } from '@/components/TracingBeam'
import Image from 'next/image'

const dummyContent = [
  {
    title: 'Here are some jokes to brighten your day!',
    description: (
      <>
        <p>
          Why don't developers go sunbathing? Because they can't live without their shadows
          (box-shadows, to be precise). They prefer the comfort of their ergonomic chairs and the
          glow of their monitors.
        </p>
        <p>
          Have you heard about the new restaurant called Karma? There's no menu: You get what you
          deserve! Similarly, in the world of coding, what you write is what you get. Write clean
          code, get a bug-free application.
        </p>
        <p>
          Why was the JavaScript developer sad? Because he didn't Node how to Express himself. In
          the world of programming, understanding your language is key, whether it's JavaScript,
          Python, or even the language of humans.
        </p>
      </>
    ),
    badge: 'What?',
    image: '',
  },
  {
    title: 'How to Make a Great Cup of Coffee',
    description: (
      <>
        <p>
          Making a great cup of coffee is an art. It requires patience, practice, and a deep
          appreciation for the rich aroma of freshly ground beans. Here's a step-by-step guide to
          help you brew the perfect cup.
        </p>
        <p>
          Start with freshly roasted coffee beans. Grind them to a medium consistency to ensure the
          perfect balance of flavor. Add the ground coffee to a filter and place it in your coffee
          maker. Pour hot water over the grounds, allowing the coffee to bloom. Wait for a few
          minutes, then enjoy your freshly brewed coffee.
        </p>
      </>
    ),
    badge: 'How?',
    image: '',
  },
  {
    title: 'The Science of Laughter',
    description: (
      <>
        <p>
          Laughter is a universal language. It's a powerful tool that can break down barriers and
          bring people together. But what exactly happens in our brains when we laugh?
        </p>
        <p>
          When we laugh, our brain releases endorphins, which are chemicals that make us feel good.
          Laughter also reduces the levels of stress hormones in our bodies, which can help to boost
          our immune system and improve our overall health.
        </p>
        <p>
          So, the next time you're feeling down, find something to laugh about. It's the best
          medicine for the soul!
        </p>
        <p>
          Thank you for reading! If you enjoyed this article, please consider sharing it with your
          friends and family. You can also leave a comment below to let me know what you think.
        </p>
      </>
    ),
    badge: 'When?',
    image: '',
  },
]

const Skeleton = () => (
  <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"></div>
)

const relatedArticles = [
  {
    title: "Why Chickens Don't Have Email",
    description:
      "Explore the hilarious reasons why chickens are technologically challenged. Spoiler alert: They can't find the 'send' button!",
    header: <Skeleton />,
  },
  {
    title: 'The Unexpected Adventures of a Potato',
    description:
      "Join Spud on his comical journey from the soil to the supermarket. It's a root vegetable's life like you've never imagined!",
    header: <Skeleton />,
  },
  {
    title: 'The Secret Life of Punctuation Marks',
    description:
      'Ever wondered what happens when a comma and a semicolon meet at a bar? Dive into the humorous world of punctuation personalities.',
    header: <Skeleton />,
  },
  {
    title: 'The Hilarious History of Bad Hair Days',
    description:
      'From towering wigs in the 18th century to mullets in the 80s, join us on a laughter-filled tour through the most disastrous hair trends in history.',
    header: <Skeleton />,
  },
  {
    title: 'The Great Doughnut Heist: A Glazed and Confused Tale',
    description:
      'Join us on a sugar-coated journey of mischief and mystery as we uncover the hilarious truth behind the great doughnut heist.',
    header: <Skeleton />,
  },
  {
    title: 'The Unlikely Love Story Between a Cat and a Vacuum Cleaner',
    description:
      'In a world where cats and vacuum cleaners are mortal enemies, one brave feline dares to challenge the status quo. A tale of love, courage, and furballs.',
    header: <Skeleton />,
  },
  {
    title: 'The Misadventures of a Left-Handed Spatula',
    description:
      'Ever wondered what life is like for a left-handed spatula in a right-handed world? Join us on this comical journey of culinary chaos.',
    header: <Skeleton />,
  },
]

const PromoSlides = [
  {
    id: 1,
    backgroundImage: { src: '/images/promo-mock-background.jpg', alt: 'image alt text' },
    illustration: { src: '/images/promo-illustration-mock-1.png', alt: 'image alt text' },
    text: 'Højgradevide Katrine flygtede fra Danmark. Men nu findes en lov, der skal forhindre andre i at følge i hendes fodspor',
  },
  {
    id: 2,
    backgroundImage: { src: '/images/promo-mock-background.jpg', alt: 'image alt text' },
    illustration: { src: '/images/promo-illustration-mock-1.png', alt: 'image alt text' },
    text: 'Fem dage før fødslen flygtede Katrine Jensen fra Danmark. Besværet og med hånden om undersiden af maven satte hun sig på bagsædet af en bil for at forlade, alt hun kendte. Staten ville tage hendes barn øjeblikkeligt efter fødslen. Drengen i hendes mave skulle tvangsbortadopteres, og båndene mellem dem uigenkaldeligt slettes.',
  },
  {
    id: 3,
    backgroundImage: { src: '/images/promo-mock-background.jpg', alt: 'image alt text' },
    illustration: { src: '/images/promo-illustration-mock-1.png', alt: 'image alt text' },
    text: 'For dengang 25-årige Katrine var scenariet derfor enkelt: Bliv, og du mister dit barn. Flygt og du kan beholde det. Men i dag gør Barnets Lov det nærmest umuligt for andre kvinder at følge i Katrines fodspor. I dag kan tvangsabortadoption besluttes, før børn er kommet til verdenen.',
  },
  {
    id: 4,
    backgroundImage: { src: '/images/promo-mock-background.jpg', alt: 'image alt text' },
    illustration: { src: '/images/promo-illustration-mock-1.png', alt: 'image alt text' },
    text: 'Loven rykkes ved et af velfærdsstatens sværeste etiske spørgsmål: Hvornår er man egnet til at være forælder? Hvornår skal det være statens pligt at fjerne det mest dyrebare, vores børn?',
  },
  {
    id: 5,
    backgroundImage: { src: '/images/promo-mock-background.jpg', alt: 'image alt text' },
    text: 'Læs mere om Katrines historie og loven, der skal forhindre andre i at følge i hendes fodspor, ved at købe et abonnement her.',
  },
]

export default function ArticlePage({
  params: {
    slug: [articleID = 1],
  },
}) {
  return (
    <section>
      <Hero />

      <div className="relative mx-5 max-w-2xl pt-4 antialiased  lg:mx-auto">
        <AuthorIntroduction name={''} about={''} score={0} time={0} />
      </div>

      <TracingBeam className="px-6 pb-5">
        <div className="relative mx-5 max-w-2xl pt-4 antialiased  lg:mx-auto">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="mb-4 w-fit rounded-full bg-black px-4 py-1 text-sm text-white">
                {item.badge}
              </h2>

              <p className="mb-4 text-xl">{item.title}</p>

              <div className="prose  prose-sm dark:prose-invert text-sm">
                {item?.image && (
                  <Image
                    src="/icons/placeholder.svg"
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="mb-10 rounded-lg object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>

      <hr className="py-5" />

      <section className="mx-auto max-w-7xl">
        <h3 className="mb-5 px-4 text-2xl font-bold">Related Articles</h3>
        <BentoGrid className="mx-auto">
          {relatedArticles.map((article, i) => (
            <BentoGridItem
              key={i}
              title={article.title}
              description={article.description}
              header={article.header}
              className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
            />
          ))}
        </BentoGrid>
      </section>

      <PromoSlider slides={PromoSlides} className="h-[80svh] lg:m-24 lg:h-[80svh]" />
    </section>
  )
}
