import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

type personalityType = 'E' | 'I' | 'N' | 'S' | 'F' | 'T' | 'J' | 'P';

export default function Home() {
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
    console.log('type', type);
    setTypeCounts({ ...typeCounts, [type]: typeCounts[type] + 1 });
  };
  console.log('typeCounts', typeCounts);

  const handleTestStart = () => {
    setIsTestStart(true);
  };
  const btnStyle = 'bg-red-500 text-white w-full p-6 rounded-full mb-3';
  /** */
  const TestDoc = () => {
    return (
      <div className='flex flex-col'>
        <h2 className='text-center mb-24'>1 단계</h2>
        <h1 className='text-2xl font-bold text-center mb-24'>
          친구와 약속이 취소되었을때 나는
        </h1>
        <div className={'flex flex-col'}>
          <button onClick={() => handleTestCount('E')} className={btnStyle}>
            다른 친구에게 연락해서 나오라고 한다
          </button>
          <button onClick={() => handleTestCount('I')} className={btnStyle}>
            혼자 집에서 뒹굴뒹굴 거린다
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className='max-w-sm mx-auto px-3 pt-14'>
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
    </div>
  );
}
