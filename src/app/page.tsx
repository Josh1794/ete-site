import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from './components/Carousel';
import { Instagram } from 'lucide-react';
import handler from './action';

const galleryImages = [
  {
    path: '/websiteContent/image1.png',
    alt: 'Bride with mother and sister getting ready',
  },
  {
    path: '/websiteContent/image2.png',
    alt: 'Wedding Ceremony with Bride and Groom',
  },
  {
    path: '/websiteContent/image3.png',
    alt: 'Bride and Groom under the Huppah at the ceremony',
  },
  {
    path: '/websiteContent/image4.png',
    alt: 'Bride and Groom Kissing at the ceremony',
  },
  {
    path: '/websiteContent/image5.png',
    alt: 'Bride and Groom exiting the ceremony with guests blowing bubbles',
  },
  {
    path: '/websiteContent/image6.png',
    alt: 'Reception room set up for the evening',
  },
  {
    path: '/websiteContent/image7.png',
    alt: 'Bride and groom on the chairs during the hora',
  },
  {
    path: '/websiteContent/image8.png',
    alt: 'Bride feeding a bridesmaid pizza on the dance floor',
  },
  {
    path: '/websiteContent/image9.png',
    alt: 'Guests dancing during the wedding reception',
  },
  {
    path: '/websiteContent/image10.png',
    alt: 'Bride and Groom with guests dancing in santa hats',
  },
  {
    path: '/websiteContent/image11.png',
    alt: 'Bride and groom exiting the reception with guests holding streamers',
  },
  {
    path: '/websiteContent/image12.png',
    alt: 'Bride and Groom kissing while crossing the street with wedding party',
  },
  {
    path: '/websiteContent/image13.png',
    alt: 'Bride and Groom kissing in a classic NYC Taxi Cab',
  },
];

const services = [
  {
    name: 'Partial Planning',
    description:
      'For couples who’ve started planning but need professional guidance, our partial planning service ensures every detail is thoughtfully managed. From vendor booking and contract reviews to timeline creation and venue walkthroughs, we help shape your vision into a well-executed plan. With structured meetings, personalized support, and ten hours of onsite coordination, we ensure your wedding day unfolds seamlessly.',
  },
  {
    name: 'Day-of Coordination',
    description:
      'You’ve planned it all—now let us bring it to life. Our day-of coordination service ensures a seamless wedding day with vendor communication, setup and breakdown, and expert onsite management. We’ll meet four weeks before your wedding, check in the week of, and provide ten hours of hands-on coordination so you can relax and enjoy every moment. ',
  },
  {
    name: 'Month-of Coordination',
    description:
      'The final month before your wedding is crucial—let us help you stay organized and stress-free. Starting six weeks out, we’ll review vendor contracts, manage final payments, and keep everything on schedule with regular check-ins. We collaborate with you to finalize logistics, ensuring no detail is overlooked. With ten hours of onsite coordination, we bring it all together so your wedding day unfolds exactly as planned.',
  },
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
  return (
    <div className='flex flex-col min-h-screen min-w-screen font-thin'>
      <header className='min-h-12 flex flex-row items-center justify-center md:justify-between sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 '>
        <div className='hidden md:flex h-14 items-center pl-3 pr-3'>
          <Link href='/' className='flex items-center space-x-2'>
            <span className='font-normal text-xl'>
              Elizabeth Treimanis Events
            </span>
          </Link>
        </div>
        {/* RIGHT NAV */}
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
            <Link
              href='#contact'
              className='text-sm font-medium hover:underline underline-offset-4'
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      {/* MAIN SECTION */}
      <main className='flex-1'>
        <section className='relative h-[600px]'>
          <Image
            src='/websiteContent/image11.png'
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
                href='#contact'
                // href='mailto:elizabeth@elizabethtreimanisevents.com'
                // target='_blank'
                // rel='noopener noreferrer'
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
        {/* ABOUT SECTION */}
        <section id='about' className='p-16 md:max-w-6xl mx-auto'>
          <h2 className=' md:text-3xl font-medium mb-6 text-center'>
            About Elizabeth Treimanis Events
          </h2>

          <p className='md:text-lg text-center max-w-1xl mx-auto'>
            Elizabeth Treimanis Events is a wedding coordination firm founded by
            Elizabeth Treimanis, a former executive assistant in luxury fashion
            and beauty. Her industry experience enables her to add a chic,
            bespoke touch to every event with flawless attention to detail. Her
            capable team is made up of wedding coordinators and assistants from
            diverse professional backgrounds, from executive assistants to
            startup vets to creative industry pros. Her team brings a unique
            perspective to your wedding, drawing on expert knowledge from the
            wedding industry and beyond.
          </p>
          <p className='md:text-lg text-center max-w-1xl mx-auto mt-3'>
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
        {/* SERVICES SECTION */}
        <section id='services' className='p-16 bg-muted'>
          <div className=' md:max-w-6xl mx-auto'>
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
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* VENUES SECTION */}
        <section
          id='venues'
          className='p-16 md:max-w-6xl mx-auto max-md:hidden'
        >
          <h2 className='text-3xl font-medium mb-8 text-center'>
            Venues We&apos;ve Worked With
          </h2>
          {/* <p className='text-lg text-center mb-12 max-w-3xl mx-auto text-muted-foreground'>
            We&apos;ve had the privilege of creating unforgettable events at
            some of New York&apos;s most prestigious venues. Our established
            relationships with these locations, and others, ensure a seamless
            planning experience.
          </p> */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center'>
            <Image
              src='/websiteContent/social media.png'
              alt='Collage of logos from venues where we have worked'
              layout='responsive'
              width='400'
              height='400'
              className='col-span-2 md:col-span-3 lg:col-span-4 w-full h-auto'
            />
          </div>
        </section>
        {/* GALLERY SECTION */}
        <section id='gallery' className='py-16 bg-muted'>
          {/* <h2 className='text-3xl font-medium mb-8 text-center'>
            Special Moments
          </h2> */}
          <Carousel images={galleryImages} />
        </section>
        {/* SOCIALS SECTION */}
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
        {/* CONTACT SECTION */}
        <section id='contact' className='p-16 bg-muted'>
          <h2 className='text-3xl font-medium mb-8 text-center'>
            Get in Touch
          </h2>
          <form action={handler} className='max-w-md mx-auto space-y-6'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                required
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500'
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                required
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500'
              />
            </div>
            <div>
              <label
                htmlFor='eventDate'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Event Date
              </label>
              <input
                type='date'
                id='eventDate'
                name='eventDate'
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500'
              />
            </div>
            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Message
              </label>

              <textarea
                id='message'
                name='message'
                required
                rows={4}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500'
              />
            </div>
            <button
              type='submit'
              className='w-full rounded-lg bg-stone-700 text-white py-3 px-6 text-lg font-semibold
                transition-all duration-300 ease-in-out
                hover:bg-stone-600 hover:shadow-lg
                focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-50'
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
      {/* FOOTER */}
      <footer className='border-t py-6 text-center'>
        <p>
          &copy; {new Date().getFullYear()} Elizabeth Treimanis Events. All
          rights reserved.
          <br />
          <a
            className='transition hover:underline hover:text-blue-500'
            href='mailto:elizabeth@elizabethtreimanisevents.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            elizabeth@elizabethtreimanisevents.com
          </a>
        </p>
      </footer>
    </div>
  );
}
