import { StaticImageData } from 'next/image';
import ball0 from '../../../public/images/characters/ball0.png';
import ball1 from '../../../public/images/characters/ball1.png';
import ball2 from '../../../public/images/characters/ball2.png';

import ball4 from '../../../public/images/characters/ball4.png';
import ball5 from '../../../public/images/characters/ball5.png';
import ball6 from '../../../public/images/characters/ball6.png';
import ball7 from '../../../public/images/characters/ball7.png';
import ball8 from '../../../public/images/characters/ball8.png';

import { ENTP, ESTJ, INFP, INTJ, ISFJ, ISFP } from './commonType';

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
}

export const result: MbtiResult = {
  INTJ,
  ISTJ: {
    ...INTJ,
  },
  ENFJ: {
    title: '프로뉴잡러',
    number: 1,
    img: ball1,
    desc: `잘하는 거 재밌는 거 배우고 싶은 거 다해봐야 적성이 풀리는 1번 쿼카. 너무 즉흥적인 거 아니냐는 소리도 종종 듣지만 궁금한 건 해봐야 적성이 풀리는걸! 물론 시작한 일을 모두 완벽하게 마무리하는 건 아니다. 과자 끊기 다이어트는 매번 중간에 포기하곤 하지만 ‘이봐 시작이 반 아니겠어~?’ 라며 웃어넘겨 버리는 긍정킹. 친구들을 데리고 여기저기 새로운 장소 도장 깨기가 취미인 1번 쿼카. 그래서 당구공 마을 친구들은 겉으로는 귀찮은척하지만 항상 웃는 1번 쿼카의 모습에 매료되어, 비타민 같은 매력을 뿜뿜하는 쿼카랑 놀기를 은근 기다린다고 한다.`,
    combination: {
      partner: { number: 8, img: ball8 },
      opposition: { number: 6, img: ball6 },
    },
  },
  ISFP,
  ISTP: {
    ...ISFP,
  },
  ENTP,
  ESTP: {
    ...ENTP,
  },
  ENFP: {
    title: '모두의스타',
    number: 4,
    img: ball4,
    desc: `이 세상 최고의 인기쟁이가 되는 것이 꿈인 4번 개구리! 동물 친구들의 주목과 인기를 쭉 독차지 해왔다. 당구공 마을의 유행은 다 내가 선도한다고 후훗. 한번은 4번 개구리의 ‘개구리 뒷다리 춤’ 추기 챌린지가 마을에서 대유행을 하기도 했다. 아직 우주 대스타는 아니지만 내가 걷는 이 길이 곧 레드 카펫 아니겠어? 본인에 대한 믿음과 근거 있는 자신감이 매력 포인트이며, 쫓기지 않고 항상 여유 있는 느긋한 성격이 인기 비결이다.`,
    combination: {
      partner: { number: 5, img: ball5 },
      opposition: { number: 2, img: ball2 },
    },
  },
  ISFJ,
  INFJ: {
    ...ISFJ,
  },
  ESFJ: {
    title: '평화주의자',
    number: 6,
    img: ball6,
    desc: `평화로운 일상을 가장 중요시하는 6번 돼지. 변화도 좋지만 익숙한 게 마음이 편한걸. 낯가림은 조금 있어 새로운 친구 사귀는 걸 좋아하지는 않지만, 오래된 친구들에게 이미 나는 없어서는 안 될 인생의 동반자! 누구랑 있든 조화롭게 어울릴 수 있는 카멜레온 같은 능력이 있
    다고 한다. 동물 친구들이 다툴 때면 항상 중간에서 중재해 주곤 해, 당구공 마을에는 싸우더
    라도 6번 돼지 앞에서 싸워라라는 말이 있을 정도.`,
    combination: {
      partner: { number: 2, img: ball2 },
      opposition: { number: 1, img: ball1 },
    },
  },
  ESFP: {
    title: '모두의댕댕',
    number: 7,
    img: ball7,
    desc: `친구들이 너무너무 좋아! 혼자 있는 건 심심해서 견딜 수가 없는걸.. 일주일 7일 중에 7일 다 약속이 잡혀있는 7번 강아지. 새로운 친구도 오래된 친구도 함께 있으면 행복해! 항상 웃고 다녀서 다들 7번 강아지는 아무 고민이 없을거라고 생각하곤 하는데 사실은 늘 나름의 고
    민이 있다. 하지만 금방 금방 잊어버리며 훌훌털고 일어나는 강인한 면이 7번 강아지의 강
    점! 제일 못 견디는 건 어색한 침묵, 제일 싫어하는 건 나 빼고 약속 잡는 거!`,
    combination: {
      partner: { number: 0, img: ball0 },
      opposition: { number: 6, img: ball6 },
    },
  },
  INFP,
  INTP: {
    ...INFP,
  },
  ESTJ,
  ENTJ: {
    ...ESTJ,
  },
};
