/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CarouselProps {
  images: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className='relative mx-auto max-w-screen-2xl'>
      <div className='overflow-hidden rounded-lg' ref={emblaRef}>
        <div className='flex gap-4'>
          {images.map((src, index) => (
            <div
              key={index}
              className='flex-[0_0_95%] md:flex-[0_0_80%] lg:flex-[0_0_70%] min-w-0 pl-4'
            >
              <div className='relative aspect-[16/9] cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]'>
                <Image
                  src={src}
                  alt={`Event photo ${index + 1}`}
                  fill
                  className='object-cover transition-transform duration-300'
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors'
        onClick={scrollPrev}
      >
        <ArrowLeft className='h-6 w-6' />
      </button>

      <button
        className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors'
        onClick={scrollNext}
      >
        <ArrowRight className='h-6 w-6' />
      </button>
    </div>
  );
};
