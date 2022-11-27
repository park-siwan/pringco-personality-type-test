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
import grayBtn from '../../public/images/grayBtn.png';
import { GetServerSideProps } from 'next';
import { result } from '../api/testResult/data';
import Head from 'next/head';

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

export default function TestResult({
  id,
  url,
  img,
}: {
  id: mbtiList;
  url: string;
  img: StaticImageData;
}) {
  console.log('id', id);
  console.log('img', img);
  const route = useRouter();
  useEffect(() => {
    if (!route.isReady) return;
  }, [route.isReady]);

  const handleLinkShare = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then((res) => alert('링크가 복사되었습니다.'));
  };

  const handleTwitter = () => {
    const sendText =
      '[8BALL FRIENDS] - 당구공 마을에 사는 데굴데굴 당구공 동물들 나의 당구공은 누구일까?'; // 전달할 텍스트
    const sendUrl = window.location.href; // 전달할 URL
    window.open(
      'https://twitter.com/intent/tweet?text=' + sendText + '&url=' + sendUrl,
    );
  };

  const handleFacebook = () => {
    const sendUrl = window.location.href; // 전달할 URL
    window.open('http://www.facebook.com/sharer/sharer.php?u=' + sendUrl);
  };

  const BallTag = ({ num }: { num: number }) => {
    return (
      <div className='absolute bg-[#E8E33D] border-solid border-[#040000] border px-1 font-semibold text-[11.8px] -left-4 top-10'>
        BALL {num}
      </div>
    );
  };
  console.log(`${url}${img.src}`);
  return (
    <div>
      <Head>
        {/* <meta property='fb:app_id' content='APP_ID' /> */}
        <meta property='og:type' content='website' />
        <meta property='og:title' content={`${result[id].title}`} />
        <meta property='og:url' content={`${url}/testResult/${id}`} />
        <meta
          property='og:description'
          content={`${result[id].desc.slice(0, 100)}...`}
        />
        <meta property='og:image' content={`${url}${img.src}`} />
      </Head>
      <div className='flex justify-center w-full mb-5'>
        <Image src={title} alt={'you are ball is'} />
      </div>

      {/* 유형 설명 */}
      <div className='flex justify-center'>
        <div className='relative w-[323px]'>
          <Image src={resultBack} alt={'you are ball is'} className='mb-7' />
          <h1 className='absolute flex justify-center w-full top-14 font-bold text-2xl'>
            {result[id].title}
          </h1>
          <div className='absolute flex flex-col top-24 w-full'>
            <div className='w-full flex justify-center mb-6'>
              <Image src={img} alt={'유형 결과'} className='' />
            </div>
            <p className='text-sm p-4'>{result[id].desc}</p>
          </div>
          <BallTag num={result[id].number} />
        </div>
      </div>
      {/* 케미 */}
      <div className='flex justify-center mb-20 h-[181px]'>
        <div className='relative mr-3 w-[161px] flex justify-center'>
          <Image src={resultBackSm} alt={'resultBackSm'} className='absolute' />
          <Image
            src={result[id].combination.partner.img}
            alt={'환상의 짝꿍'}
            className='absolute w-[105px] -bottom-5'
          />
          <BallTag num={result[id].combination.partner.number} />
          <h3 className='absolute text-white left-2 top-[3px] font-normal text-[12px]'>
            환상의 짝꿍
          </h3>
        </div>
        <div className='relative mr-3 w-[161px] flex justify-center'>
          <Image src={resultBackSm} alt={'resultBackSm'} className='absolute' />
          <Image
            src={result[id].combination.opposition.img}
            alt={'환장의 짝꿍'}
            className='absolute w-[105px] -bottom-5'
          />
          <BallTag num={result[id].combination.opposition.number} />
          <h3 className='absolute text-white left-2 top-[3px] font-normal text-[12px]'>
            환장의 짝꿍
          </h3>
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
            <Image src={shareLink} alt={'링크 공유'} className='mr-6 mb-6' />
          </button>
          <button onClick={handleTwitter}>
            <Image src={shareTwitter} alt={'트위터 공유'} className='mb-6' />
          </button>
        </div>
        <div className='flex'>
          <button onClick={handleFacebook}>
            <Image src={shareFacebook} alt={'페이스북 공유'} className='mr-6' />
          </button>
          <button>
            <Image src={shareKakao} alt={'카카오톡 공유'} />
          </button>
        </div>
      </div>
      <div className='flex flex-col items-center space-y-3 mb-24'>
        <button
          onClick={() => route.push('/')}
          className='relative flex justify-center items-center'
        >
          <Image src={grayBtn} alt='테스트 다시하기' />
          <h4 className='absolute font-bold'>테스트 다시하기</h4>
        </button>
        <a
          className='relative flex justify-center items-center'
          href='https://tumblbug.com/u/donigamugonujodi/created'
          target='_blank'
          rel='noreferrer'
        >
          <Image src={grayBtn} alt='8BALL FRIENDS 입양하기' />
          <h4 className='absolute font-bold'>8BALL FRIENDS 입양하기</h4>
        </a>
        <a
          href='https://www.instagram.com/pringco.studio'
          className='relative flex justify-center items-center'
          target='_blank'
          rel='noreferrer'
        >
          <Image src={grayBtn} alt='PRINGCO 인스타그램' />
          <h4 className='absolute font-bold'> PRINGCO 인스타그램</h4>
        </a>
        <a
          href='https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fapi.channel.io%252Ffront%252Fv5%252Fapp%252Fkakao%252Fauthorize%26state%3DUDlX8qX3%26through_account%3Dtrue%26client_id%3D4e2c3b003da72eb73123e5772434125f'
          target='_blank'
          rel='noreferrer'
          className='relative flex justify-center items-center'
        >
          <Image src={grayBtn} alt='카카오톡 문의하기' />
          <h4 className='absolute font-bold'>카카오톡 문의하기</h4>
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
      url: `https://pringco-personality-type-test.vercel.app`,
      img: result[id as mbtiList].img,
    },
  };
};
