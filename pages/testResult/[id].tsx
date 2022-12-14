import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Footer from '../../src/components/organism/Footer';
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
import greenBtn from '../../public/images/testResult/greenBtn.png';
import { GetServerSideProps } from 'next';
import { result } from '../api/testResult/characterList';
import Head from 'next/head';
import Script from 'next/script';
import { characterList } from '../../src/type';

const URL = 'https://pringco-personality-type-test.vercel.app/';
export default function TestResult({
  id,
  url,
  img,
}: {
  id: characterList;
  url: string;
  img: StaticImageData;
}) {
  const IMG_URL = `${url}${img.src}`;
  const TEST_RESULT_URL = `${url}/testResult/${id}`;
  console.log('id', id);
  console.log('img', img);
  const route = useRouter();
  useEffect(() => {
    if (!route.isReady) return;
  }, [route.isReady]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleLinkShare = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then((res) => alert('????????? ?????????????????????.'));
  };

  const shareTitle = '[8BALL FRIENDS] - ';

  const handleTwitter = () => {
    const sendText = `${shareTitle}????????? ????????? ?????? ???????????? ????????? ????????? ?????? ???????????? ?????????????`; // ????????? ?????????
    const sendUrl = window.location.href; // ????????? URL
    window.open(
      'https://twitter.com/intent/tweet?text=' + sendText + '&url=' + sendUrl,
    );
  };

  const handleFacebook = () => {
    const sendUrl = window.location.href; // ????????? URL
    window.open('http://www.facebook.com/sharer/sharer.php?u=' + sendUrl);
  };

  const handleKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init('a4ca4b010f24f9eeef3534dace2e545d');
      }

      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: result[id].title,
          description: result[id].desc,
          imageUrl: IMG_URL,
          link: {
            // [??? ??????????????????] > [?????????] ?????? ????????? ????????? ???????????? ???????????? ???
            mobileWebUrl: URL,
            webUrl: URL,
          },
        },
        buttons: [
          {
            title: `????????? ??????`,
            link: {
              mobileWebUrl: TEST_RESULT_URL,
              webUrl: TEST_RESULT_URL,
            },
          },
          {
            title: '????????? ?????????',
            link: {
              mobileWebUrl: URL,
              webUrl: URL,
            },
          },
        ],
      });
    }
  };

  const BallTag = ({ num }: { num: number }) => {
    return (
      <div className='absolute bg-[#E8E33D] border-solid border-[#040000] border px-1 font-semibold text-[11.8px] -left-4 top-10'>
        BALL {num}
      </div>
    );
  };
  console.log(IMG_URL);
  return (
    <div>
      <Script
        src='https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.min.js'
        integrity='sha384-eKjgHJ9+vwU/FCSUG3nV1RKFolUXLsc6nLQ2R1tD0t4YFPCvRmkcF8saIfOZNWf/'
        crossOrigin='anonymous'
      />
      <Head>
        {/* <script></script> */}
        {/* <meta property='fb:app_id' content='APP_ID' /> */}

        {/* <script></script> */}

        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content={`${shareTitle}${result[id].title}`}
        />
        <meta property='og:url' content={TEST_RESULT_URL} />
        <meta
          property='og:description'
          content={`${result[id].desc.slice(0, 100)}...`}
        />
        <meta property='og:image' content={IMG_URL} />
      </Head>
      <div className='flex justify-center w-full mb-5'>
        <Image src={title} alt={'you are ball is'} />
      </div>

      {/* ?????? ?????? */}
      <div className='flex justify-center'>
        <div className='relative w-[323px]'>
          <Image src={resultBack} alt={'you are ball is'} className='mb-7' />
          <h1 className='absolute flex justify-center w-full top-14 font-bold text-2xl'>
            {result[id].title}
          </h1>
          <div className='absolute flex flex-col top-24 w-full'>
            <div className='w-full flex justify-center mb-6'>
              <Image src={img} alt={'?????? ??????'} className='' />
            </div>
            <p className='text-sm p-4'>{result[id].desc}</p>
          </div>
          <BallTag num={result[id].number} />
        </div>
      </div>
      {/* ?????? */}
      <div className='flex justify-center mb-20 h-[181px]'>
        <div className='relative mr-6 w-[161px] flex justify-center'>
          <Image src={resultBackSm} alt={'resultBackSm'} className='absolute' />
          <Image
            src={result[id].combination.partner.img}
            alt={'????????? ??????'}
            className='absolute w-[105px] -bottom-5'
          />
          <BallTag num={result[id].combination.partner.number} />
          <h3 className='absolute text-white left-2.5 top-[3.5px] font-normal text-[12px]'>
            ????????? ??????
          </h3>
        </div>
        <div className='relative mr-3 w-[161px] flex justify-center'>
          <Image src={resultBackSm} alt={'resultBackSm'} className='absolute' />
          <Image
            src={result[id].combination.opposition.img}
            alt={'????????? ??????'}
            className='absolute w-[105px] -bottom-5'
          />
          <BallTag num={result[id].combination.opposition.number} />
          <h3 className='absolute text-white left-2.5 top-[3.5px] font-normal text-[12px]'>
            ????????? ??????
          </h3>
        </div>
      </div>

      {/* ?????? */}
      <div className='relative flex justify-center mb-4'>
        <div>
          <Image src={shareSpeechBubble} alt={'share-speech-bubble'} />
        </div>
        <h3 className='text-white font-bold text-xl absolute top-2'>
          ??????????????????
        </h3>
      </div>
      <div className='flex flex-wrap justify-center flex-col items-center mb-24'>
        <div className='flex'>
          <button onClick={handleLinkShare}>
            <Image src={shareLink} alt={'?????? ??????'} className='mr-6 mb-6' />
          </button>
          <button onClick={handleTwitter}>
            <Image src={shareTwitter} alt={'????????? ??????'} className='mb-6' />
          </button>
        </div>
        <div className='flex'>
          <button onClick={handleFacebook}>
            <Image src={shareFacebook} alt={'???????????? ??????'} className='mr-6' />
          </button>
          <button onClick={handleKakao}>
            <Image src={shareKakao} alt={'???????????? ??????'} />
          </button>
        </div>
      </div>
      <div className='flex flex-col items-center space-y-3 mb-24'>
        <button
          onClick={() => route.push('/')}
          className='relative flex justify-center items-center'
        >
          <Image src={grayBtn} alt='????????? ????????????' />
          <h4 className='absolute font-bold'>????????? ????????????</h4>
        </button>
        <a
          className='relative flex justify-center items-center'
          href='https://tumblbug.com/8ballfriends?_branch_match_id=1055431723609304126&utm_source=8ballFriendsTest&utm_campaign=%25EB%258B%25B9%25EA%25B5%25AC%25EA%25B3%25B5%2520%25ED%2585%258C%25EC%258A%25A4%25ED%258A%25B8%2520%25EB%25A7%2581%25ED%2581%25AC%2520%25EC%259C%25A0%25EC%259E%2585&utm_medium=358d538f0ace3696&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9YrKc1NykkqTddLzs%2FV9yit9M73L47MKksCAGo5J3olAAAA'
          target='_blank'
          rel='noreferrer'
        >
          <Image src={greenBtn} alt='8BALL FRIENDS ????????????' />
          <h4 className='absolute font-bold'>8BALL FRIENDS ????????????</h4>
        </a>
        <a
          href='https://www.instagram.com/pringco.studio'
          className='relative flex justify-center items-center'
          target='_blank'
          rel='noreferrer'
        >
          <Image src={grayBtn} alt='PRINGCO ???????????????' />
          <h4 className='absolute font-bold'> PRINGCO ???????????????</h4>
        </a>
        <a
          href='https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fapi.channel.io%252Ffront%252Fv5%252Fapp%252Fkakao%252Fauthorize%26state%3DUDlX8qX3%26through_account%3Dtrue%26client_id%3D4e2c3b003da72eb73123e5772434125f'
          target='_blank'
          rel='noreferrer'
          className='relative flex justify-center items-center'
        >
          <Image src={grayBtn} alt='???????????? ????????????' />
          <h4 className='absolute font-bold'>???????????? ????????????</h4>
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
      url: URL,
      img: result[id as characterList]?.img,
    },
  };
};
