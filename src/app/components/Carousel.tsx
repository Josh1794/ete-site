'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';

interface CarouselImage {
  path: string;
  alt: string;
}

interface CarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({
  images,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isLoading, setIsLoading] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const toggleAutoPlay = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || !isPlaying) return;

    const interval = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, isPlaying, autoPlayInterval, emblaApi]);

  // Listen for carousel events
  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      } else if (event.key === ' ') {
        event.preventDefault();
        toggleAutoPlay();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [scrollPrev, scrollNext, toggleAutoPlay]);

  return (
    <div className='relative mx-auto max-w-7xl px-4'>
      <div className='relative group'>
        <div
          className='overflow-hidden rounded-xl shadow-2xl bg-transparent'
          ref={emblaRef}
          onMouseEnter={() => autoPlay && setIsPlaying(false)}
          onMouseLeave={() => autoPlay && setIsPlaying(true)}
        >
          <div className='flex'>
            {images.map((image: CarouselImage, index) => (
              <div
                key={index}
                className='flex-[0_0_100%] sm:flex-[0_0_90%] md:flex-[0_0_80%] lg:flex-[0_0_70%] min-w-0 pr-4'
              >
                <div className='relative aspect-[4/3] sm:aspect-[16/9] cursor-pointer overflow-hidden rounded-lg transition-all duration-500 hover:scale-[1.02]'>
                  <Image
                    src={image.path}
                    alt={image.alt}
                    fill
                    className='object-cover transition-transform duration-700 hover:scale-110'
                    priority={index === 0}
                    onLoad={() => setIsLoading(false)}
                    sizes='(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 70vw'
                  />
                  {isLoading && index === 0 && (
                    <div className='absolute inset-0  animate-pulse flex items-center justify-center'>
                      <div className='w-8 h-8 border-4 border-stone-400 border-t-transparent rounded-full animate-spin'></div>
                    </div>
                  )}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='absolute bottom-4 left-4 right-4 text-white'>
                      <p className='text-sm sm:text-base font-medium truncate'>
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {showArrows && (
          <>
            <button
              className='absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-stone-500'
              onClick={scrollPrev}
              aria-label='Previous image'
            >
              <ArrowLeft className='h-5 w-5 text-stone-800' />
            </button>

            <button
              className='absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-stone-500'
              onClick={scrollNext}
              aria-label='Next image'
            >
              <ArrowRight className='h-5 w-5 text-stone-800' />
            </button>
          </>
        )}
        {autoPlay && (
          <button
            className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-stone-500'
            onClick={toggleAutoPlay}
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? (
              <Pause className='h-4 w-4 text-stone-800' />
            ) : (
              <Play className='h-4 w-4 text-stone-800' />
            )}
          </button>
        )}
      </div>
      {showDots && (
        <div className='flex justify-center mt-6 space-x-2'>
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 ${
                index === selectedIndex
                  ? 'bg-stone-800 scale-125'
                  : 'bg-stone-300 hover:bg-stone-400'
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === selectedIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      )}
    </div>
  );
};
