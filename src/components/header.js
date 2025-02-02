import Link from 'next/link';

export default function Header() {
  return (
    <header className=' flex flex-row items-center w-full '>
      <Link className='text-2xl font-bold w-1/2' href='/'>
        <h1>Elizabeth Treimanis Events</h1>
      </Link>
      <div className='flex flex-row justify-between w-1/2'>
        <Link href='/About'>
          <h1>About</h1>
        </Link>
        <Link href='/Contact'>
          <h1>Contact</h1>
        </Link>
      </div>
    </header>
  );
}
