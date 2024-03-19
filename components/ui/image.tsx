import { cn } from '@/lib/utils'
import * as React from 'react'

interface ImageProps extends React.HTMLProps<HTMLDivElement> {
  src?: string
  alt?: string
  width?: string
  height?: string
  loading?: 'eager' | 'lazy'
  useBackgroundImage?: boolean
}

const Image = React.forwardRef<HTMLDivElement, ImageProps>(
  (
    {
      className,
      src,
      alt = '',
      width,
      loading = 'lazy',
      height,
      useBackgroundImage = false,
      style,
      ...divProps
    },
    ref
  ) => {
    if (useBackgroundImage) {
      const backgroundStyle = {
        backgroundImage: `url(${src})`,
        ...style,
      }
      return <div className={className} style={backgroundStyle} ref={ref} {...divProps}></div>
    } else {
      return (
        <img
          className={cn('h-full w-full object-cover', className)}
          style={style}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
        />
      )
    }
  }
)

Image.displayName = 'Image'

export { Image }
export type { ImageProps }
