interface AuthorIntroductionProps {
  name: string
  about: string
  score: number
  time: number
}

function AuthorIntroduction({ name, about, score, time }: AuthorIntroductionProps) {
  return (
    <div className="my-5 flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <img
            alt="John Doe"
            className="rounded-full"
            height="40"
            src="/icons/placeholder.svg"
            style={{
              aspectRatio: '40/40',
              objectFit: 'cover',
            }}
            width="40"
          />
          <div className="flex flex-col gap-1">
            <div className="font-semibold">John Doe</div>
            <div className="text-xs leading-tight text-gray-500 dark:text-gray-400">
              Renowned writer with over 10 years of experience
            </div>
          </div>
        </div>
      </div>

      {/* Time and Rating */}
      <div className="flex gap-x-4 lg:pl-1">
        <div className="flex items-center gap-2">
          <ClockIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <div className="text-xs text-gray-500 dark:text-gray-400">5 min read</div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <StarIcon className="h-4 w-4" />
          <span>0</span>
        </div>
      </div>
    </div>
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

export default AuthorIntroduction
