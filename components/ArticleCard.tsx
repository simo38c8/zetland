import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

function ArticleCard({
  title,
  time,
  score,
  authorName,
  className,
}: {
  title: string
  time?: number
  score?: number
  authorName?: string
  className?: string
}) {
  //convert unix timestamp to human readable date like "1 February 2022, 12:00"
  const formattedTimeStamp = new Date((time ?? 0) * 1000).toLocaleString('dk-DK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })

  return (
    <Card className="h-full cursor-pointer">
      <CardContent className="flex flex-col justify-between p-6">
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                alt="Author"
                className="rounded-full"
                height={40}
                src="/icons/placeholder.svg"
                style={{
                  aspectRatio: '40/40',
                  objectFit: 'cover',
                }}
                width={40}
              />
              <div className="text-lg font-semibold">{authorName}</div>
            </div>
            <div className="flex items-center gap-2">
              <ChevronRightIcon className="h-4 w-4" />
              <span className="text-sm font-medium">+ Follow</span>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Irure ut amet mollit. Ipsum incididunt nostrud exercitation duis ipsum. Consectetur
              culpa veniam non cupidatat. Tempor minim sint nulla. Ipsum sunt in fugiat do ut enim
              nisi adipisicing anim minim. Veniam enim deserunt fugiat magna sit sint sint. Esse qui
              ut proident labore proident ut dolore in esse duis. Eiusmod sint consectetur mollit
              consequat laborum incididunt dolore anim sint in.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <ClockIcon className="h-4 w-4" />
              <time dateTime="2023-08-12T16:24:00Z">{formattedTimeStamp}</time>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <StarIcon className="h-4 w-4" />
              <span>{score}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ChevronRightIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function ClockIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function StarIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export default ArticleCard
