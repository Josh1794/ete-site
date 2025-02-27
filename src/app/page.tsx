'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollToHash } from './hooks/useScrollToHash';
import { Carousel } from './components/Carousel';
import { Instagram } from 'lucide-react';

const galleryImages = [
  '/websiteContent/imageOne.jpg',
  '/websiteContent/imageTwo.jpg',
  '/websiteContent/imageThree.jpeg',
  '/websiteContent/imageFour.jpeg',
  '/websiteContent/imageFive.jpg',
  '/websiteContent/imageSix.jpg',
  '/websiteContent/imageSeven.jpeg',
];

const services = [
  { name: 'Wedding Planning' },
  { name: 'Corporate Events' },
  { name: 'Social Gatherings' },
];

const BlueSkyIcon = () => (
  <Image
    src='/websiteContent/Bluesky-Logo-Vector.svg-.png'
    width='40'
    height='40'
    alt='BlueSky Logo'
  />
);

export default function Home() {
  useScrollToHash();

  return (
    <div className='flex flex-col min-h-screen min-w-screen font-thin'>
      <header className='flex flex-row items-center justify-between sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className=' flex h-14 items-center pl-3 pr-3'>
          <Link href='/' className='flex items-center space-x-2'>
            <span className='font-normal text-xl'>
              Elizabeth Treimanis Events
            </span>
          </Link>
        </div>

        <div className='flex items-center gap-4'>
          <nav className='ml-auto flex pr-3 gap-4'>
            <Link
              href='#about'
              className='text-sm font-medium hover:underline underline-offset-4'
            >
              About
            </Link>
            <Link
              href='#services'
              className='text-sm font-medium hover:underline underline-offset-4'
            >
              Services
            </Link>
            <Link
              href='#venues'
              className='text-sm font-medium hover:underline underline-offset-4'
            >
              Venues
            </Link>
            <Link
              href='#gallery'
              className='text-sm font-medium hover:underline underline-offset-4'
            >
              Gallery
            </Link>
            <Link
              href='#social'
              className='text-sm font-medium hover:underline underline-offset-4'
            >
              Socials
            </Link>
          </nav>
        </div>
      </header>

      <main className='flex-1'>
        <section className='relative h-[600px]'>
          <Image
            src='/websiteContent/imageSix.jpg'
            alt='Grand exit for bride and groom surrounded by guests'
            layout='fill'
            objectFit='cover'
            priority
          />
          <div className='absolute inset-0 bg-black/30 flex items-center justify-center'>
            <div className='text-center text-white'>
              <h1 className='text-4xl font-normal mb-4'>
                Elizabeth Treimanis Events
              </h1>
              <a
                href='mailto:elizabeth@elizabethtreimanisevents.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button
                  className='rounded-lg bg-stone-700 text-white py-3 px-6 text-lg font-semibold
                     transition-all duration-300 ease-in-out
                     hover:bg-white hover:text-stone-800 hover:shadow-lg
                     transform hover:scale-105 hover:-translate-y-1
                     focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-50'
                >
                  Plan Your Event
                </button>
              </a>
            </div>
          </div>
        </section>

        <section id='about' className=' p-16'>
          <h2 className='text-3xl font-medium mb-6 text-center'>
            About Elizabeth Treimanis Events
          </h2>
          <p className='text-lg text-center max-w-1xl mx-auto'>
            Elizabeth Treimanis Events is a wedding coordination firm founded by
            Elizabeth Treimanis, a former executive assistant in luxury fashion
            and beauty. Her industry experience enables her to add a chic,
            bespoke touch to every event with flawless attention to detail. Her
            capable team is made up of wedding coordinators and assistants from
            diverse professional backgrounds, from executive assistants to
            startup vets to creative industry pros. Her team brings a unique
            perspective to your wedding, drawing on expert knowledge from the
            wedding industry and beyond. Photo Credits: Sasha Erwitt, Tati and
            Roman, Maria Burton
          </p>
          <p className='text-lg text-center max-w-1xl mx-auto mt-3'>
            From the time you book, we provide tools, guidance, and open
            communication, ensuring a seamless handoff when we step in. Whether
            you book us for partial planning, month-of or day-of coordination,
            we&apos;re here for you with vendor recommendations, expert advice,
            or for quick contract reviews. We also have connections with an
            incredible group of vendors. We believe in supporting individual
            business owners and artists, especially those who work in weddings
            alongside other pursuits in theatre, fashion, beauty and other
            creative industries.
          </p>
        </section>

        <section id='services' className='p-16 bg-muted'>
          <h2 className='text-3xl font-medium mb-6 text-center'>
            Our Services
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {services.map((service) => (
              <div
                key={service.name}
                className='bg-white border rounded-lg p-6 text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg'
              >
                <h3 className='text-xl font-normal mb-4'>{service.name}</h3>
                <p className='text-muted-foreground font-thin'>
                  From concept to execution, we handle every detail to make your{' '}
                  {service.name.toLowerCase()} truly memorable.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id='venues' className='p-16 '>
          <h2 className='text-3xl font-medium mb-8 text-center'>
            Venues We&apos;ve Worked With
          </h2>
          <p className='text-lg text-center mb-12 max-w-3xl mx-auto text-muted-foreground'>
            We&apos;ve had the privilege of creating unforgettable events at
            some of New York&apos;s most prestigious venues. Our established
            relationships with these locations, and others, ensure a seamless
            planning experience.
          </p>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center'>
            <Image
              src='/websiteContent/social media.png'
              alt='Collage of logos from venues where we have worked'
              width={1200}
              height={800}
              className='col-span-2 md:col-span-3 lg:col-span-4 w-full h-auto'
            />
          </div>
        </section>

        <section id='gallery' className='py-16 bg-muted'>
          <h2 className='text-3xl font-medium mb-8 text-center'>
            Special Moments
          </h2>
          <Carousel images={galleryImages} />
        </section>

        <section id='social' className='p-16 '>
          <h2 className='text-3xl font-medium mb-8 text-center'>
            Connect With Us
          </h2>
          <div className='flex justify-center space-x-8'>
            <a
              href='https://www.instagram.com/elizabethtreimanisevents'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-gray-800 transition-colors'
            >
              <Instagram size={40} />
              <span className='sr-only'>Instagram</span>
            </a>
            <a
              href='https://bsky.app/profile/etevents.bsky.social'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-gray-800 transition-colors'
            >
              <BlueSkyIcon />
              <span className='sr-only'>BlueSky</span>
            </a>
            <a
              target='_blank'
              href='https://www.zola.com/wedding-vendors/wedding-planners/elizabeth-treimanis-events?utm_source=vendor&utm_medium=various&utm_content=badge'
              rel='noreferrer'
            >
              <Image
                height='40'
                width='40'
                alt='Featured on Zola image'
                src='/websiteContent/zolaImage.png'
              />
            </a>
          </div>
        </section>
      </main>

      <footer className='border-t py-6 text-center'>
        <p>
          &copy; {new Date().getFullYear()} Elizabeth Treimanis Events. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}
