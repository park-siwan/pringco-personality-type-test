import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { mockupData, personalityType } from './api/data';
import questionBox from '../public/images/test/question-box.png';
import first from '../public/images/test/1/first.png';
import second from '../public/images/test/1/second.png';
import grayBtn from '../public/images/grayBtn.png';
import steper from '../public/images/test/steper.png';
import { characterList } from '../src/type';
interface dictionary {
  [x: string]: characterList;
}
const dictionary: dictionary = {
  INTJ: 'milk-cow1',
  ISTJ: 'milk-cow2',
  ENFJ: 'quokka',
  ISFP: 'elephant1',
  ISTP: 'elephant2',
  ENTP: 'rabbit1',
  ESTP: 'rabbit2',
  ENFP: 'frog',
  ISFJ: 'duck1',
  INFJ: 'duck2',
  ESFJ: 'pig',
  ESFP: 'puppy',
  INFP: 'bear1',
  INTP: 'bear2',
  ESTJ: 'giraffe1',
  ENTJ: 'giraffe2',
};

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
      // console.log('typeCounts', typeCounts);
      const extrovertedOrInTroverted = E > I ? 'E' : 'I';
      const sensingOrIntuition = S > N ? 'S' : 'N';
      const thinkingOrFeeling = T > F ? 'T' : 'F';
      const judgeOrRecognize = J > P ? 'J' : 'P';

      const personType =
        extrovertedOrInTroverted +
        sensingOrIntuition +
        thinkingOrFeeling +
        judgeOrRecognize;

      // console.log('result', result);
      setFlow('result');

      const result = dictionary[personType];
      route.push(`/testResult/${result}`);
      return;
    }
    // console.log('type', type);
    setTypeCounts({
      ...typeCounts,
      [type]: typeCounts[type] + 1,
      step: typeCounts.step + 1,
    });
  };

  const LoadingBar = ({ index }: { index: number }) => {
    const leftNumber = 12 * (index + 1);
    return (
      <div
        className={`w-[9.36px] h-[20px] bg-[#476492] absolute top-[29px]`}
        style={{ left: leftNumber }}
      ></div>
    );
  };

  const Question = () => {
    return (
      <div className='flex justify-center mb-[49px]'>
        <div className='flex justify-center items-center relative w-[332px]'>
          <Image src={questionBox} alt={mockupData[typeCounts.step].question} />
          <h1 className='absolute whitespace-pre-line m-8 text-center'>
            {mockupData[typeCounts.step].question}
          </h1>
        </div>
      </div>
    );
  };

  const Answer = () => {
    return (
      <div className={'flex flex-col w-full items-center'}>
        <button
          onClick={() =>
            handleTestCount(mockupData[typeCounts.step].firstAnswer.type)
          }
          className='mb-7 relative flex justify-center items-center'
        >
          <Image
            src={grayBtn}
            className='w-[277px] h-[83px]'
            alt={mockupData[typeCounts.step].firstAnswer.desc}
          />
          <h2 className='absolute font-bold m-6 text-[13px]'>
            {mockupData[typeCounts.step].firstAnswer.desc}
          </h2>
        </button>
        <button
          onClick={() =>
            handleTestCount(mockupData[typeCounts.step].secondAnswer.type)
          }
          className='mb-4 relative flex justify-center items-center'
        >
          <Image
            className='w-[277px] h-[83px]'
            src={grayBtn}
            alt={mockupData[typeCounts.step].secondAnswer.desc}
          />
          <h2 className='absolute font-bold m-6 text-[13px]'>
            {mockupData[typeCounts.step].secondAnswer.desc}
          </h2>
        </button>
      </div>
    );
  };

  const Stepper = () => {
    return (
      <div className='flex justify-center w-full'>
        <div className='flex justify-center mb-7 relative'>
          <Image
            src={steper}
            className=''
            alt={`${(typeCounts.step + 1).toString()}번째`}
          />
          {Array.from({ length: typeCounts.step + 1 }).map((item, index) => (
            <LoadingBar key={index} index={index} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className='flex flex-col'>
      <Stepper />
      <Question />
      <Answer />
    </div>
  );
}
