import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { mockupData, personalityType } from './api/data';
import mainBilliards from '../public/images/main-billiards.png';
import hourglass from '../public/images/hourglass.png';
import mainFooter from '../public/images/main-footer.png';
import startBtn from '../public/images/start-btn.svg';
import { css } from '@emotion/react';
export default function Home() {
  const route = useRouter();
  const [isTestStart, setIsTestStart] = useState(false);
  const [typeCounts, setTypeCounts] = useState({
    E: 0,
    I: 0,
    N: 0,
    S: 0,
    F: 0,
    T: 0,
    J: 0,
    P: 0,
    step: 0,
  });

  /**
   * @todo
   * - 12가지의 선택지와 24가지의 질문이 있다.
   * - 질문은 2개중 택 1이다.
   * - 질문을 선택하면 해당되는 유형을 카운팅한다.
   * - 12번의 질문이 끝나면 최종 카운팅된 유형 조합에 맞춰 유형을 보여준다.
   * - 공유 기능이 있어야 한다.
   */
  const handleTestCount = (type: personalityType) => {
    if (typeCounts.step === 11) {
      const { E, I, S, N, T, F, J, P } = typeCounts;
      console.log('typeCounts', typeCounts);
      const extrovertedOrInTroverted = E > I ? 'E' : 'I';
      const sensingOrIntuition = S > N ? 'S' : 'N';
      const thinkingOrFeeling = T > F ? 'T' : 'F';
      const judgeOrRecognize = J > P ? 'J' : 'P';

      const result =
        extrovertedOrInTroverted +
        sensingOrIntuition +
        thinkingOrFeeling +
        judgeOrRecognize;

      console.log('result', result);
      route.push(`/testResult/${result}`);
      return;
    }
    console.log('type', type);
    setTypeCounts({
      ...typeCounts,
      [type]: typeCounts[type] + 1,
      step: typeCounts.step + 1,
    });
  };

  const handleTestStart = () => {
    setIsTestStart(true);
  };
  /**
   * - pre-line 으로 줄바꿈 표현
   * @link https://aboooks.tistory.com/187
   **/
  const btnStyle =
    'bg-red-500 text-white w-full p-6 rounded-xl mb-3 h-32 whitespace-pre-line';

  const TestDoc = () => {
    return (
      <div className='flex flex-col'>
        <h2 className='text-center mb-24'>{typeCounts.step + 1} 단계</h2>
        <h1 className='text-2xl font-bold text-center mb-24 h-12 whitespace-pre-line'>
          {mockupData[typeCounts.step].question}
        </h1>
        <div className={'flex flex-col w-full'}>
          <button
            onClick={() =>
              handleTestCount(mockupData[typeCounts.step].firstAnswer.type)
            }
            className={btnStyle}
          >
            {mockupData[typeCounts.step].firstAnswer.desc}
          </button>
          <button
            onClick={() =>
              handleTestCount(mockupData[typeCounts.step].secondAnswer.type)
            }
            className={btnStyle}
          >
            {mockupData[typeCounts.step].secondAnswer.desc}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Head>
        {/* What is the ball you chose? */}
        <title>8BALL FRIENDS</title>
        <meta name='8 ball friends' content='성격 유형 검사 시작' />
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>

      <main className='px-7 w-full pt-[110px] flex flex-wrap justify-center'>
        {isTestStart ? (
          <TestDoc />
        ) : (
          <>
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
              className='flex justify-center w-full mb-[64px]'
            >
              <Image src={startBtn} alt='What is the ball you chose?' />
            </button>
            <div className='w-full flex justify-center'>
              <Image src={hourglass} alt='모래시계' className='mb-[64px]' />
            </div>
          </>
        )}
      </main>

      {!isTestStart && (
        <footer className='px-7 flex flex-wrap justify-center'>
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
      )}
    </div>
  );
}
