'use client';
import handler from './action';

export default function Contact() {
  return (
    <div className='flex flex-col rounded-md p-4 m-4 items-center w-full'>
      <h1 aria-label='contact me title' className='text-black dark:text-white '>
        Contact Me
      </h1>
      <form
        target='hiddenFrame'
        className='flex flex-col items-center '
        name='contact-form'
        method='POST'
        action={handler}
      >
        <div className='m-4 flex flex-col justify-between'>
          <label className='dark:text-white text-black' htmlFor='name'>
            Name:
          </label>
          <input
            id='name'
            name='name'
            required
            type='text'
            className='text-black rounded-lg p-2 '
          />
        </div>
        <div className='flex flex-col m-4'>
          <label className='dark:text-white text-black' htmlFor='email'>
            E-mail:
          </label>
          <input
            id='email'
            type='email'
            name='email'
            required
            className='text-black rounded-lg p-2'
          />
        </div>
        <div className='flex flex-col m-4'>
          <label className='dark:text-white text-black' htmlFor='message'>
            Message:
          </label>
          <textarea
            className='rounded-lg text-black'
            id='message'
            name='message'
            required
          />
        </div>
        <button className='m-4' type='submit'>
          Submit
        </button>
      </form>
      <iframe
        name='hiddenFrame'
        width='0'
        height='0'
        border='0'
        className='display-none'
      ></iframe>
    </div>
  );
}
