import { useRouter } from 'next/router';
import React from 'react';

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

  return (
    <div>
      당신은 {result[idResult]}
      <ul>
        <li>MBTI: {idResult}</li>
        <li>
          <a
            href='https://www.instagram.com/pringco.studio/'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            인스타그램 링크
          </a>
        </li>
        <li>
          <a
            href='https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fapi.channel.io%252Ffront%252Fv5%252Fapp%252Fkakao%252Fauthorize%26state%3DUDlX8qX3%26through_account%3Dtrue%26client_id%3D4e2c3b003da72eb73123e5772434125f'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            카톡링크
          </a>
        </li>
      </ul>
    </div>
  );
}
// export async function getStaticPaths() {
//   // const postData = getPostData(params.id);
//   return {
//     paths: [{ params: { id: 1 } }],
//   };
// }
