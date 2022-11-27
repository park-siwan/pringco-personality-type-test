import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import mainBilliards from '../public/images/main-billiards.png';
import hourglass from '../public/images/hourglass.png';
import mainFooter from '../public/images/main-footer.png';
import startBtn from '../public/images/start-btn.png';
import mainTalk from '../public/images/main-talk.png';

import Footer from '../src/organism/Footer';
export default function Home() {
  const route = useRouter();

  const handleTestStart = () => {
    route.push('/test');
  };
  return (
    <div
    // className='max-h-screen overflow-hidden'
    >
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
        <div className='flex justify-center items-center relative'>
          <Image src={mainTalk} alt='메인 글' className='mb-[23px]' />
          <h3 className='absolute mx-8 font-bold mb-3 text-center text-[13px]'>
            당구공 마을에 사는 데굴데굴 당구공동물들 나의 당구공은 누구일까?
          </h3>
        </div>
        <button
          onClick={handleTestStart}
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
