'use client'
import { cn } from '@/utils/cn'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import ArticleCard from './ArticleCard'

export const CardHoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    score?: number
    time?: number
    description?: string
    authorName?: string
    link: string
  }[]
  className?: string
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2', className)}>
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 z-[-1] block h-full w-full rounded-3xl bg-primary dark:bg-primary"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <ArticleCard
            title={item?.title}
            time={item?.time}
            score={item?.score}
            authorName={item?.authorName}
            className="h-full w-full group-hover:z-10"
          />
        </Link>
      ))}
    </div>
  )
}
