import { Image as BaseImage } from '@/components/ui/image'

interface ImageProps {
  src?: string
  alt?: string
  children?: any
  width?: string
  height?: string
  loading?: 'eager' | 'lazy'
  className?: string
  useBackgroundImage?: boolean
  style?: React.CSSProperties
}

function Image({ src, children, useBackgroundImage = false, className, ...props }: ImageProps) {
  return (
    <BaseImage src={src} useBackgroundImage={useBackgroundImage} className={className} {...props}>
      {children}
    </BaseImage>
  )
}

export { Image }
export type { ImageProps }
