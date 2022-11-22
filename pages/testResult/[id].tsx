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
