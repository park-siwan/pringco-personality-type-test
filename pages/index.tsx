import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import mainBilliards from '../public/images/main-billiards.png';
import hourglass from '../public/images/hourglass.png';
import mainFooter from '../public/images/main-footer.png';
import startBtn from '../public/images/start-btn.svg';
import { css } from '@emotion/react';
import Footer from '../src/organism/Footer';
export default function Home() {
  const route = useRouter();

  const handleTestStart = () => {
    route.push('/test');
  };
  return (
    <div className='max-h-screen overflow-hidden'>
      <Head>
        {/* What is the ball you chose? */}
        <title>8BALL FRIENDS</title>
        <meta name='8 ball friends' content='성격 유형 검사 시작' />
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>

      <main className='w-full'>
        <div className='w-full flex justify-center'>
          <Image
            src={mainBilliards}
            alt='당구공 이미지'
            className='mb-[23px]'
          />
        </div>
        <button
          onClick={handleTestStart}
          // className='bg-[#D7D4CF] text-[#110306] w-full p-3 mb-[49px]'
          className='flex justify-center w-full mb-[10%]'
        >
          <Image src={startBtn} alt='What is the ball you chose?' />
        </button>
        <div className='w-full flex justify-center'>
          <Image src={hourglass} alt='모래시계' className='mb-[10%]' />
        </div>
      </main>
      <Footer />
    </div>
  );
}
