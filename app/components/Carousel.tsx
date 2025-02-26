"use client"

import type React from "react"
import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselProps {
  images: string[]
  onImageClick: (index: number) => void
}

export const Carousel: React.FC<CarouselProps> = ({ images, onImageClick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_80%] lg:flex-[0_0_70%] pl-4">
              <div
                className="relative aspect-[16/9] cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
                onClick={() => onImageClick(index)}
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Event photo ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white/90"
        onClick={scrollPrev}
        size="icon"
        variant="secondary"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white/90"
        onClick={scrollNext}
        size="icon"
        variant="secondary"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

