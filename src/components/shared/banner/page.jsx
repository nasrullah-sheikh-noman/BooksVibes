
import API from '@/lib/func/func';
import React from 'react';
import Marquee from 'react-fast-marquee';

const BannerPage = async () => {
  const books = await API();
  return (
    <div className='container flex items-center bg-gray-100 mx-auto py-3 px-6 my-8 rounded-lg'>
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
  );
};

export default BannerPage; 