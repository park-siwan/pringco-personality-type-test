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

import resultBackSm from '../../public/images/testResult/combination/result-back.png';
import { GetServerSideProps } from 'next';
import { result } from '../api/testResult/data';

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
          <BallTag num={result[id].combination.partner.number} />
        </div>
        <div className='relative mr-3 w-full flex justify-center'>
          <Image src={resultBackSm} alt={'resultBackSm'} className='absolute' />
          <Image
            src={result[id].combination.opposition.img}
            alt={'직진'}
            className='absolute w-[105px] top-8'
          />
          <BallTag num={result[id].combination.opposition.number} />
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
