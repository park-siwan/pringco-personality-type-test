import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import title from '../../public/images/testResult/title.png';
import partner from '../../public/images/testResult/combination/partner.png';
import opposition from '../../public/images/testResult/combination/opposition.png';
import shareSpeechBubble from '../../public/images/testResult/share-speech-bubble.png';
import shareLink from '../../public/images/testResult/share-link.png';
import shareTwitter from '../../public/images/testResult/share-twitter.png';
import shareFacebook from '../../public/images/testResult/share-facebook.png';
import shareKakao from '../../public/images/testResult/share-kakao.png';
import Footer from '../../src/organism/Footer';
interface MbtiResult {
  [x: string]: string;
}

const result: MbtiResult = {
  INTJ: '0번젖소',
  ISTJ: '0번젖소',
  ENFJ: '1번쿼카',
  ISFP: '2번코끼리',
  ISTP: '2번코끼리',
  ENTP: '3번토끼',
  ESTP: '3번토끼',
  ENFP: '4번개구리',
  ISFJ: '5번오리',
  INFJ: '5번오리',
  ESFJ: '6번돼지',
  ESFP: '7번강아지',
  INFP: '8번곰',
  INTP: '8번곰',
  ESTJ: '9번기린',
  ENTJ: '9번기린',
};

export default function TestResult() {
  const route = useRouter();
  const { id } = route.query;
  const idResult = id as string;

  const handleLinkShare = () => {
    alert('링크가 복사되었습니다.');
    navigator.clipboard.writeText(window.location.href);
    console.log('window.location.href', window.location.href);
  };
  return (
    <div>
      <div className='flex justify-center w-full mb-5'>
        <Image src={title} alt={'you are ball is'} />
      </div>
      {/* 당신은 {result[idResult]} */}
      <div className='flex mb-8'>
        <Image src={partner} alt={'partner'} className='mr-3' />
        <Image src={opposition} alt={'opposition'} />
      </div>
      <div className='relative flex justify-center mb-4'>
        <div>
          <Image src={shareSpeechBubble} alt={'share-speech-bubble'} />
        </div>
        <h3 className='text-white font-bold text-xl absolute top-2'>
          결과공유하기
        </h3>
      </div>
      <div className='flex flex-wrap justify-center mb-20'>
        <button onClick={handleLinkShare}>
          <Image src={shareLink} alt={'share-link'} className='mr-6 mb-6' />
        </button>
        <button>
          <Image src={shareTwitter} alt={'share-twitter'} className='mb-6' />
        </button>
        <button>
          <Image src={shareFacebook} alt={'share-facebook'} className='mr-6' />
        </button>
        <button>
          <Image src={shareKakao} alt={'share-kakao'} />
        </button>
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
