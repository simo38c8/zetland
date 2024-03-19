'use client'
import { useEffect, useRef } from 'react'
import { Parallax, Autoplay, Keyboard, Mousewheel, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { cn } from '@/lib/utils'
import { Image } from '@/components/Image'

interface PromoSliderProps {
  slides: PromoSlideProps[]
  autoplay?: boolean
  className?: string
}

interface PromoSlideProps {
  id: number
  backgroundImage: { src: string; alt: string }
  illustration?: { src: string; alt: string }
  text: string
}

function PromoSlider({ slides, autoplay = true, className }: PromoSliderProps) {
  const swiperRef = useRef(null)

  useEffect(() => {
    if (autoplay) {
      swiperRef.current.swiper.autoplay.start()
    } else {
      swiperRef.current.swiper.autoplay.stop()
    }
  }, [autoplay])

  return (
    <div className={cn('relative h-full', className)}>
      <Swiper
        grabCursor={true}
        ref={swiperRef}
        className="h-full cursor-grab"
        loop={true}
        direction="horizontal"
        modules={[Pagination, Parallax, Autoplay, Keyboard, Mousewheel]}
        spaceBetween={0}
        speed={1000}
        slidesPerView={1}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          waitForTransition: true,
        }}
        parallax={true}
        keyboard={{
          enabled: true,
        }}
        mousewheel={{ forceToAxis: true }}
        pagination={{ clickable: true }}
      >
        {slides?.map(slide => (
          <SwiperSlide key={slide.id} className="transition-all !duration-500 ease-in-out">
            <PromoSlide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const PromoSlide = ({ id, illustration, backgroundImage, text }: PromoSlideProps) => {
  return (
    <div className="relative flex h-full flex-col pb-[50px] pt-5">
      <Image
        src={backgroundImage.src}
        alt={backgroundImage.alt}
        className="absolute inset-0 z-0 h-full w-full object-cover"
        data-swiper-parallax="-25%"
      />
      <div
        className="relative z-10 m-auto h-full max-h-[404px] w-full max-w-[294px] lg:max-h-[533px] lg:max-w-[390px]"
        data-swiper-parallax="-50%"
      >
        <figure className="aspect-h-4 aspect-w-3">
          {illustration !== null && (
            <Image
              src={illustration?.src}
              alt={illustration?.alt}
              className={`h-full w-full object-cover brightness-75 filter lg:h-[500px] lg:w-[390px] ${!illustration?.src ? 'opacity-0' : ''}`}
            />
          )}
        </figure>
      </div>
      <h4
        className="absolute bottom-[6rem] left-[8.5%] z-10 w-10/12 text-center text-xl leading-9 text-white lg:bottom-[25%] lg:left-[15%] lg:w-8/12 lg:text-3xl"
        data-swiper-parallax="-100%"
      >
        {text}
      </h4>
    </div>
  )
}

export { PromoSlider }
export type { PromoSliderProps, PromoSlideProps }
