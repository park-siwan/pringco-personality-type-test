import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isTestStart, setIsTestStart] = useState(false);
  /** */
  const handleTestStart = () => {
    console.log('on');
    setIsTestStart(true);
  };
  /** */
  const TestDoc = () => {
    return (
      <div className='flex'>
        <button
          onClick={handleTestStart}
          className='bg-red-500 text-white w-full p-3'
        >
          테스트 시작하기
        </button>
        <button
          onClick={handleTestStart}
          className='bg-red-500 text-white w-full p-3'
        >
          테스트 시작하기
        </button>
      </div>
    );
  };
  return (
    <div className='max-w-sm mx-auto'>
      <div className='flex items-center justify-center'>
        <Head>
          {/* What is the ball you chose? */}
          <title>8BALL FRIENDS</title>
          <meta name='8 ball friends' content='성격 유형 검사 시작' />
          {/* <link rel='icon' href='/favicon.ico' /> */}
        </Head>

        <main>
          {isTestStart ? (
            <TestDoc />
          ) : (
            <>
              <h1 className='text-3xl font-bold text-center'>
                What is the ball you chose?
              </h1>
              <button
                onClick={handleTestStart}
                className='bg-red-500 text-white w-full p-3'
              >
                테스트 시작하기
              </button>
            </>
          )}
        </main>

        <footer>
          {/* <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a> */}
        </footer>
      </div>
    </div>
  );
}
