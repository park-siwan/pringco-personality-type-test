import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

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
  console.log('typeCounts', typeCounts);

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
        <h2 className='text-center mb-24 h'>{typeCounts.step + 1} 단계</h2>
        <h1 className='text-2xl font-bold text-center mb-24 h-12'>
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
          <button onClick={() => handleTestCount('I')} className={btnStyle}>
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

      <main className='w-full'>
        {isTestStart ? (
          <TestDoc />
        ) : (
          <>
            <h1 className='text-3xl font-bold text-center'>
              What is the ball you chose?
            </h1>
            <button
              onClick={handleTestStart}
              className='bg-red-500 text-white w-full p-3 rounded-full'
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
  );
}
