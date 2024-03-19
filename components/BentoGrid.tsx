import { cn } from '@/utils/cn'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div className={cn('grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3', className)}>
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'group/bento row-span-1 flex cursor-pointer flex-col justify-between space-y-4 rounded-xl border border-transparent bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600/70 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  )
}
