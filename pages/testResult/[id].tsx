import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Footer from '../../src/organism/Footer';
import title from '../../public/images/testResult/title.png';
import partner from '../../public/images/testResult/combination/partner.png';
import opposition from '../../public/images/testResult/combination/opposition.png';
import shareSpeechBubble from '../../public/images/testResult/share/share-speech-bubble.png';
import shareLink from '../../public/images/testResult/share/share-link.png';
import shareTwitter from '../../public/images/testResult/share/share-twitter.png';
import shareFacebook from '../../public/images/testResult/share/share-facebook.png';
import shareKakao from '../../public/images/testResult/share/share-kakao.png';
import resultBack from '../../public/images/testResult/result-back.png';
import ball0 from '../../public/images/characters/ball0.png';
import ball1 from '../../public/images/characters/ball1.png';
import ball2 from '../../public/images/characters/ball2.png';
import ball3 from '../../public/images/characters/ball3.png';
import ball4 from '../../public/images/characters/ball4.png';
import ball5 from '../../public/images/characters/ball5.png';
import ball6 from '../../public/images/characters/ball6.png';
import ball7 from '../../public/images/characters/ball7.png';
import ball8 from '../../public/images/characters/ball8.png';
import ball9 from '../../public/images/characters/ball8.png';
import resultBackSm from '../../public/images/testResult/combination/result-back.png';
import { GetServerSideProps } from 'next';

type mbtiList =
  | 'INTJ'
  | 'ISTJ'
  | 'ENFJ'
  | 'ISFP'
  | 'ISTP'
  | 'ENTP'
  | 'ESTP'
  | 'ENFP'
  | 'ISFJ'
  | 'INFJ'
  | 'ESFJ'
  | 'ESFP'
  | 'INFP'
  | 'INTP'
  | 'ESTJ'
  | 'ENTJ';

interface MbtiResult {
  [x: string]: {
    title: string;
    number: number;
    desc: string;
    img: StaticImageData;
    combination: {
      partner: { img: StaticImageData; number: number };
      opposition: { img: StaticImageData; number: number };
    };
  };
  // [x: mbtiList]: {
  //   title: string;
  //   number: number;
  //   desc: string;
  //   combination: { partner: number; opposition: number };
  // };
}
// INTJ: '0번젖소',
// ISTJ: '0번젖소',
// ENFJ: '1번쿼카',
// ISFP: '2번코끼리',
// ISTP: '2번코끼리',
// ENTP: '3번토끼',
// ESTP: '3번토끼',
// ENFP: '4번개구리',
// ISFJ: '5번오리',
// INFJ: '5번오리',
// ESFJ: '6번돼지',
// ESFP: '7번강아지',
// INFP: '8번곰',
// INTP: '8번곰',
// ESTJ: '9번기린',
// ENTJ: '9번기린',
const result: MbtiResult = {
  INTJ: {
    title: '직진 불도저',
    number: 0,
    img: ball0,
    desc: `이봐 난 멈추는 법을 모르는 젖손데 괜찮겠어..?! 
  일단 한번 일을 시작하면 끝장을 보고마는
  0번 젖소. 
  무시무시한 집중력을 발휘할 때는 콧구멍이 커지는 
  습관이 있다. 계획이 틀어지는 건 절. 대.로 있을 수 
  없는 일. 호불호 명확하고 확실하게 딱딱 떨어지는걸 
  좋아하는 편이다. 미덥지 그 한 건 딱 질색이야! 
  개인주의적인 성향이 있어서 리더는 하기 싫다고 
  말하지만 반장 선거하면 누가 나를 추천해 주지 
  않을까 속으로 은근 기대하며 콧구멍을 벌렁이곤 한다.`,
    combination: {
      partner: { number: 8, img: ball8 },
      opposition: { number: 8, img: ball0 },
    },
  },
  ISTJ: {
    title: '직진 불도저',
    number: 1,
    img: ball0,
    desc: `이봐 난 멈추는 법을 모르는 젖손데 괜찮겠어..?! 
    일단 한번 일을 시작하면 끝장을 보고마는
    0번 젖소. 
    무시무시한 집중력을 발휘할 때는 콧구멍이 커지는 
    습관이 있다. 계획이 틀어지는 건 절. 대.로 있을 수 
    없는 일. 호불호 명확하고 확실하게 딱딱 떨어지는걸 
    좋아하는 편이다. 미덥지 그 한 건 딱 질색이야! 
    개인주의적인 성향이 있어서 리더는 하기 싫다고 
    말하지만 반장 선거하면 누가 나를 추천해 주지 
    않을까 속으로 은근 기대하며 콧구멍을 벌렁이곤 한다.`,
    combination: {
      partner: { number: 8, img: ball8 },
      opposition: { number: 8, img: ball0 },
    },
  },
  ENFJ: {
    title: '프로 뉴잡러',
    number: 0,
    img: ball1,
    desc: `잘하는 거 재밌는 거 배우고 싶은 거 다해봐야 적성이 풀리는 1번 쿼카. 너무 즉흥적인 거 아니냐는 소리도 종종 듣지만 
    궁금한 건 해봐야 적성이 풀리는걸! 물론 시작한 일을 모두 
    완벽하게 마무리하는 건 아니다. 과자 끊기 다이어트는 매번 중간에 포기하곤 하지만 ‘이봐 시작이 반 아니겠어~?’라며 
    웃어넘겨 버리는 긍정 킹. 친구들을 데리고 여기저기 새로운 장소 도장 깨기가 취미인 1번 쿼카. 그래서 당구공 마을 친구들은 겉으로는 귀찮은척하지만 항상 웃는 1번 쿼카의 모습에 매료되어, 비타민 같은 매력을 뿜뿜하는 쿼카랑 놀기를 은근 기다린다고 한다.`,
    combination: {
      partner: { number: 8, img: ball8 },
      opposition: { number: 8, img: ball0 },
    },
  },
  ISFP: {
    title: '',
    number: 0,
    img: ball0,
    desc: ``,
    combination: {
      partner: { number: 0, img: ball0 },
      opposition: { number: 0, img: ball0 },
    },
  },
  ISTP: {
    title: '',
    number: 0,
    img: ball0,
    desc: ``,
    combination: {
      partner: { number: 0, img: ball0 },
      opposition: { number: 0, img: ball0 },
    },
  },
  ENTP: {
    title: '',
    number: 0,
    img: ball0,
    desc: ``,
    combination: {
      partner: { number: 0, img: ball0 },
      opposition: { number: 0, img: ball0 },
    },
  },
  ESTP: {
    title: '',
    number: 0,
    img: ball0,
    desc: ``,
    combination: {
      partner: { number: 0, img: ball0 },
      opposition: { number: 0, img: ball0 },
    },
  },
  ENFP: {
    title: '',
    number: 0,
    img: ball0,
    desc: ``,
    combination: {
      partner: { number: 0, img: ball0 },
      opposition: { number: 0, img: ball0 },
    },
  },
  ISFJ: {
    title: '',
    number: 0,
    img: ball0,
    desc: ``,
    combination: {
      partner: { number: 0, img: ball0 },
      opposition: { number: 0, img: ball0 },
    },
  },
  INFJ: {
    title: '',
    number: 0,
    img: ball0,
    desc: ``,
    combination: {
      partner: { number: 0, img: ball0 },
      opposition: { number: 0, img: ball0 },
    },
  },
  ESFJ: {
    title: '',
    number: 0,
    img: ball0,
    desc: ``,
    combination: {
      partner: { number: 0, img: ball0 },
      opposition: { number: 0, img: ball0 },
    },
  },
  ESFP: {
    title: '',
    number: 0,
    img: ball0,
    desc: ``,
    combination: {
      partner: { number: 0, img: ball0 },
      opposition: { number: 0, img: ball0 },
    },
  },
  INFP: {
    title: '',
    number: 0,
    img: ball0,
    desc: ``,
    combination: {
      partner: { number: 0, img: ball0 },
      opposition: { number: 0, img: ball0 },
    },
  },
  INTP: {
    title: '',
    number: 0,
    img: ball0,
    desc: ``,
    combination: {
      partner: { number: 0, img: ball0 },
      opposition: { number: 0, img: ball0 },
    },
  },
  ESTJ: {
    title: '',
    number: 0,
    img: ball0,
    desc: ``,
    combination: {
      partner: { number: 0, img: ball0 },
      opposition: { number: 0, img: ball0 },
    },
  },
  ENTJ: {
    title: '',
    number: 0,
    img: ball0,
    desc: ``,
    combination: {
      partner: { number: 0, img: ball0 },
      opposition: { number: 0, img: ball0 },
    },
  },
};

export default function TestResult({ id }: { id: mbtiList }) {
  console.log('id', id);
  const route = useRouter();
  useEffect(() => {
    if (!route.isReady) return;
  }, [route.isReady]);
  // const { id } = route.query;
  // const idResult = id as mbtiList;
  // if (idResult === undefined) return;
  // console.log('idResult', idResult);

  const handleLinkShare = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then((res) => alert('링크가 복사되었습니다.'));
  };

  const BallTag = ({ num }: { num: number }) => {
    return (
      <div className='absolute bg-[#E8E33D] border-solid border-[#040000] border px-1 font-semibold text-[11.8px] -left-4 top-10'>
        BALL {num}
      </div>
    );
  };

  return (
    <div>
      <div className='flex justify-center w-full mb-5'>
        <Image src={title} alt={'you are ball is'} />
      </div>

      {/* 유형 설명 */}
      <div className='relative flex justify-center'>
        <Image src={resultBack} alt={'you are ball is'} className='mb-7' />
        <h1 className='absolute top-14 font-bold text-2xl'>
          {result[id].title}
        </h1>
        <div className='absolute flex flex-col top-24'>
          <div className='w-full flex justify-center mb-6'>
            <Image src={result[id].img} alt={'직진'} className='' />
          </div>
          <p className='text-sm p-4'>{result[id].desc}</p>
        </div>
        <BallTag num={0} />
      </div>

      {/* 케미 */}
      <div className='flex justify-center mb-20 h-[181px]'>
        <div className='relative mr-3 w-full flex justify-center'>
          <h3>환상의 짝궁</h3>
          <Image src={resultBackSm} alt={'resultBackSm'} className='absolute' />
          <Image
            src={result[id].combination.partner.img}
            alt={'직진'}
            className='absolute w-[105px] top-8'
          />
          <BallTag num={0} />
        </div>
        <div className='relative mr-3 w-full flex justify-center'>
          <Image src={resultBackSm} alt={'resultBackSm'} className='absolute' />
          <Image
            src={result[id].combination.opposition.img}
            alt={'직진'}
            className='absolute w-[105px] top-8'
          />
          <BallTag num={0} />
        </div>
      </div>

      {/* 공유 */}
      <div className='relative flex justify-center mb-4'>
        <div>
          <Image src={shareSpeechBubble} alt={'share-speech-bubble'} />
        </div>
        <h3 className='text-white font-bold text-xl absolute top-2'>
          결과공유하기
        </h3>
      </div>
      <div className='flex flex-wrap justify-center flex-col items-center mb-24'>
        <div className='flex'>
          <button onClick={handleLinkShare}>
            <Image src={shareLink} alt={'share-link'} className='mr-6 mb-6' />
          </button>
          <button>
            <Image src={shareTwitter} alt={'share-twitter'} className='mb-6' />
          </button>
        </div>
        <div className='flex'>
          <button>
            <Image
              src={shareFacebook}
              alt={'share-facebook'}
              className='mr-6'
            />
          </button>
          <button>
            <Image src={shareKakao} alt={'share-kakao'} />
          </button>
        </div>
      </div>
      <div className='flex flex-col items-center space-y-3 mb-24'>
        <button onClick={() => route.push('/')}>테스트 다시하기</button>
        <button>8BALL FRIENDS 입양하기</button>
        <a
          href='https://www.instagram.com/pringco.studio/'
          target='_blank'
          rel='noreferrer'
          // className='underline'
        >
          PRINGCO 인스타그램
        </a>
        <a
          href='https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fapi.channel.io%252Ffront%252Fv5%252Fapp%252Fkakao%252Fauthorize%26state%3DUDlX8qX3%26through_account%3Dtrue%26client_id%3D4e2c3b003da72eb73123e5772434125f'
          target='_blank'
          rel='noreferrer'
          className='block'
        >
          카카오톡 문의하기
        </a>
      </div>
      <Footer />
    </div>
  );
}
// export async function getStaticPaths() {
//   // const postData = getPostData(params.id);
//   return {
//     paths: [{ params: { id: 1 } }],
//   };
// }
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { id } = query;
  return {
    props: {
      id,
    },
  };
};
