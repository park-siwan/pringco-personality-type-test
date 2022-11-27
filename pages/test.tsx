import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { mockupData, personalityType } from './api/data';
import question from '../public/images/test/1/question.png';
import first from '../public/images/test/1/first.png';
import second from '../public/images/test/1/second.png';

export default function Test() {
  const route = useRouter();
  const [flow, setFlow] = useState<'start' | 'test' | 'result'>('start');
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
      setFlow('result');
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
  /**
   * - pre-line 으로 줄바꿈 표현
   * @link https://aboooks.tistory.com/187
   **/
  const btnStyle =
    'bg-red-500 text-white w-full p-6 rounded-xl mb-3 h-32 whitespace-pre-line';
  const TestDoc = () => {
    return (
      <div className='flex flex-col'>
        <Image src={question} alt={mockupData[typeCounts.step].question} />
        <h2 className='text-center mb-24'>{typeCounts.step + 1} 단계</h2>
        {mockupData[typeCounts.step].question}
        {/* <h1 className='text-2xl font-bold text-center mb-24 h-12 whitespace-pre-line'></h1> */}
        <div className='mb-6'>
          {/* <Image src={question} alt={mockupData[typeCounts.step].question} /> */}
          {/* {mockupData[typeCounts.step].question} */}
        </div>
        <div className={'flex flex-col w-full items-center'}>
          <button
            onClick={() =>
              handleTestCount(mockupData[typeCounts.step].firstAnswer.type)
            }
            className={'mb-4'}
            // className={btnStyle}
          >
            <Image
              src={first}
              alt={mockupData[typeCounts.step].firstAnswer.desc}
            />
            {mockupData[typeCounts.step].firstAnswer.desc}
          </button>
          <button
            onClick={() =>
              handleTestCount(mockupData[typeCounts.step].secondAnswer.type)
            }
            // className={btnStyle}
          >
            <Image
              src={second}
              alt={mockupData[typeCounts.step].secondAnswer.desc}
            />
            {mockupData[typeCounts.step].secondAnswer.desc}
          </button>
        </div>
      </div>
    );
  };
  return <TestDoc />;
}
