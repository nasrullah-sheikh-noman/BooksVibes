
import API from '@/lib/func/func';
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';

const BannerPage = async () => {
  const books = await API();
  return (
    <div className='container mx-auto my-6 space-y-7 mt-12'>
      <h2 className='text-3xl font-bold text-center'>Find Your Next Read</h2>
      <div className='text-center'>
        <Link
        href="/all-books"
        className='btn btn-primary'
        >
          Browse Now
        </Link>
      </div>
      <div className=' flex items-center bg-gray-100 py-3 px-6 rounded-lg'>
        <div className='bg-green-500 text-2xl font-semibold p-2'>
          <span>New Arrivals:</span>
        </div>
        <Marquee 
        pauseOnHover="true" 
        className='cursor-pointer'
        speed="60"
        >
          
          <div className='my-8 text-green-600 font-semibold'>
          {books.map((book) => (
            <span 
            key={book.id}
            className='mx-6'
            >
              {book.title}
            </span>
          ))} 
          </div>
        </Marquee>
      </div>

    </div>
  );
};

export default BannerPage; 