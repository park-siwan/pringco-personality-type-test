import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { personalityType } from './api/data';
import questionBox from '../public/images/test/question-box.png';
import first from '../public/images/test/1/first.png';
import second from '../public/images/test/1/second.png';
import grayBtn from '../public/images/grayBtn.png';
import steper from '../public/images/test/steper.png';
import { characterList } from '../src/type';
import { GetServerSideProps } from 'next';
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
const mockupData = [
  {
    question: `당구공 마을에 초대받았다!
    초대장을 늦게 받아 출발 시간이 얼마 남지 않았다. 이때 나는?`,
    firstAnswer: {
      desc: `'당구공 마을? 너무 기대된다 설레><
    뭐 입고가지?'`,
      type: 'P',
    },
    secondAnswer: {
      desc: `'출발 장소까지 가는 데 30분 걸리니까 정각까지 준비하면 10분 여유롭게 도착하겠다.'`,
      type: 'J',
    },
  },
  {
    question: `마을 입구에 도착하니 주민들이 앞구르기를 하며 입장하고 있다. 이때 나는?`,
    firstAnswer: {
      desc: `'이 마을은 원래 이렇게 입장하나 보다.'
    하며 앞구르기를 한다`,
      type: 'S',
    },
    secondAnswer: {
      desc: `'왜 앞구르기를 하면서 들어가는 거지?'
    하는 의문을 가진다.`,
      type: 'N',
    },
  },
  {
    question: `숙소 키를 받아 방에 들어가 보니, 내 방에만 웰컴 쿠키가 없는 거 같다. 이때 나는?`,
    firstAnswer: {
      desc: `'왜 나만 없지..?'
    누군가 알아차려 줄 때까지 기다린다.`,
      type: 'I',
    },
    secondAnswer: { desc: `곧바로 프론트에 전화해서 물어본다.`, type: 'E' },
  },
  {
    question: `마을 주민 쿼카가 직접 만든 케이크를 나눠 줬는데 너무 달다. 나의 반응은?`,
    firstAnswer: { desc: `와! 달긴 한데 진짜 맛있어! 고마워.`, type: 'F' },
    secondAnswer: {
      desc: `오.. 설탕 조금만 덜 넣었으면 맛있었겠다!`,
      type: 'T',
    },
  },
  {
    question: `마을 축제가 열린다는 카탈로그를 받았다. 이때 나는?`,
    firstAnswer: {
      desc: `몇 시에 무슨 행사가 잡혀 있는지
    처음부터 차분히 읽어본다.`,
      type: 'S',
    },
    secondAnswer: {
      desc: `전체적으로 한번 훑어보고
    관심 있는 거 몇 개만 기억해둔다.`,
      type: 'N',
    },
  },
  {
    question: `마을 축제에 다양한 행사가 준비되어 있다. 참여하고 싶은 곳은?`,
    firstAnswer: {
      desc: `혼자 여유롭게 들을 수 있는
    동물 합창단의 음악 감상회`,
      type: 'I',
    },
    secondAnswer: { desc: `다 함께 즐기는 개구리의 댄스파티`, type: 'E' },
  },
  {
    question: `기린의 마술 공연을 보러 가던 중 행운권 추첨 부스를 발견했다. 이때 나는?`,
    firstAnswer: { desc: `이게 뭐지? 당장 참여해 보고 간다.`, type: 'P' },
    secondAnswer: { desc: `늦을 거 같은데 공연 끝나고 와야겠다.`, type: 'J' },
  },
  {
    question: `곰과 오리와 함께 노래자랑에 나가기로 했다. 곰이 메인보컬을 하고 싶어 하는데 노래는 오리가 제일 잘한다. 나의 반응은?`,
    firstAnswer: { desc: `그래! 대신 열심히 연습해 보자!`, type: 'F' },
    secondAnswer: {
      desc: `그래도 메인보컬은 오리가 하는 게
    좋을 거 같은데?`,
      type: 'T',
    },
  },
  {
    question: `노래를 부르다 내 파트에서 삑사리가 났다. 이때 나는?`,
    firstAnswer: { desc: `연습할 땐 잘 했는데... 속상하다ㅠㅠ`, type: 'E' },
    secondAnswer: {
      desc: `다들 속으로 비웃었겠지 ..? 쪽팔린다ㅠㅠ`,
      type: 'I',
    },
  },
  {
    question: `숙소에 들어왔는데 방이 엉망이다.`,
    firstAnswer: {
      desc: `피곤해 죽을 거 같은데..
    자고 내일 치워야겠다~`,
      type: 'P',
    },
    secondAnswer: { desc: `피곤하지만 치우고 편하게 자야지~`, type: 'J' },
  },
  {
    question: `집으로 돌아가기 전날, 동물 친구들에게 줄 머핀을 굽기로 했다.`,
    firstAnswer: {
      desc: `한 이만큼 구우면
    하나씩 줄 수 있겠지?`,
      type: 'N',
    },
    secondAnswer: {
      desc: `하나씩 주려면..
    10개만 구우면 되겠다!`,
      type: 'S',
    },
  },
  {
    question: `당구공 마을에서의 마지막 날, 헤어지기 아쉬워서 우는 강아지 친구에게 나는`,
    firstAnswer: {
      desc: `울지마ㅠㅠ 니가 우니까 나도 눈물 나잖아..`,
      type: 'F',
    },
    secondAnswer: { desc: `울긴 왜 울어! 다음에 또 놀러 올게!`, type: 'T' },
  },
];
export default function Test() {
  const route = useRouter();
  useEffect(() => {}, []);

  // const [flow, setFlow] = useState<'start' | 'test' | 'result'>('start');
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

  const handleFirstAnswer = () => {
    const type = mockupData[typeCounts.step].firstAnswer.type;
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
      // setFlow('result');

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
  const handleSecondsAnswer = () => {
    const type = mockupData[typeCounts.step].secondAnswer.type;
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
      // setFlow('result');

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

  function Stepper() {
    const LoadingBar = ({ index }: { index: number }) => {
      const leftNumber = 12 * (index + 1);
      return (
        <div
          className={`w-[9.36px] h-[20px] bg-[#476492] absolute top-[29px]`}
          style={{ left: leftNumber }}
        ></div>
      );
    };
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
  }

  function Question() {
    return (
      <div className='flex justify-center mb-[49px]'>
        <div className='flex justify-center items-center relative w-[332px]'>
          <Image
            src={questionBox}
            // alt={mockupData[typeCounts.step].question}
            alt={'질문'}
          />
          <h1 className='absolute whitespace-pre-line m-8 text-center'>
            {mockupData[typeCounts.step].question}
          </h1>
        </div>
      </div>
    );
  }

  function Answer() {
    return (
      <div className={'flex flex-col w-full items-center'}>
        <button
          onClick={() => handleFirstAnswer()}
          className='mb-7 relative flex justify-center items-center'
        >
          <Image
            src={grayBtn}
            className='w-[277px] h-[83px]'
            alt={'응답1'}
            // alt={mockupData[typeCounts.step].firstAnswer.desc}
          />
          <h2 className='absolute font-bold m-6 text-[13px]'>
            {mockupData[typeCounts.step].firstAnswer.desc}
          </h2>
        </button>
        <button
          onClick={() => handleSecondsAnswer()}
          className='mb-4 relative flex justify-center items-center'
        >
          <Image
            className='w-[277px] h-[83px]'
            src={grayBtn}
            alt={'응답2'}
            // alt={mockupData[typeCounts.step].secondAnswer.desc}
          />
          <h2 className='absolute font-bold m-6 text-[13px]'>
            {mockupData[typeCounts.step].secondAnswer.desc}
          </h2>
        </button>
      </div>
    );
  }

  return (
    <div className='flex flex-col'>
      {Stepper()}
      {Question()}
      {Answer()}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const { query } = context;
  // const { id } = query;
  return {
    props: {
      // id,
      // url: URL,
      // img: result[id as characterList].img,
    },
  };
};
