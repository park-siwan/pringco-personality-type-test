import Image from 'next/image';
import React from 'react';
import mainFooter from '../../public/images/main-footer.png';
export default function Footer() {
  return (
    <footer className='flex flex-wrap justify-center'>
      <a
        href='https://pringco.com'
        target='_blank'
        rel='noreferrer'
        className='w-full mb-3 flex justify-center'
      >
        <Image src={mainFooter} alt='footer description' />
      </a>

      <p className='font-medium text-xs mb-7'>
        Copyright ⓒ 2022 Pringco. All rights reserved
      </p>
    </footer>
  );
}
