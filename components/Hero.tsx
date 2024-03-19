import { TextGenerateEffect } from './TextGenerateEffect'

const words = `Unleashing Creativity: Empowering Innovation Through Collaboration`

function Hero() {
  return (
    <div className="bg-gradient-to-b from-primary/20 py-5">
      <div className="pb-0 pt-12 xl:py-24">
        <div className="container px-4">
          <div className="flex flex-col-reverse items-center lg:flex-row lg:gap-12">
            <div className="grid items-center lg:w-1/2">
              <TextGenerateEffect words={words} />
            </div>
            <div className="aspect-[1/1] w-full overflow-hidden rounded-xl lg:w-1/2">
              <figure>
                <img
                  alt="Hero Image"
                  className="w-full object-cover"
                  height="500"
                  src="/icons/placeholder.svg"
                  style={{
                    aspectRatio: '500/500',
                    objectFit: 'cover',
                  }}
                  width="500"
                />
                <figcaption>Hero Image</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
