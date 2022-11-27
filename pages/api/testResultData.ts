import { StaticImageData } from 'next/image';
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
const INTJ = {
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
    partner: { number: 3, img: ball3 },
    opposition: { number: 8, img: ball8 },
  },
};
const ISFP = {
  title: '',
  number: 0,
  img: ball0,
  desc: ``,
  combination: {
    partner: { number: 0, img: ball0 },
    opposition: { number: 0, img: ball0 },
  },
};
const ENTP = {
  title: '',
  number: 0,
  img: ball0,
  desc: ``,
  combination: {
    partner: { number: 0, img: ball0 },
    opposition: { number: 0, img: ball0 },
  },
};
const ISFJ = {
  title: '',
  number: 0,
  img: ball0,
  desc: ``,
  combination: {
    partner: { number: 0, img: ball0 },
    opposition: { number: 0, img: ball0 },
  },
};
export const result: MbtiResult = {
  INTJ,
  ISTJ: {
    ...INTJ,
    number: 1,
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
      opposition: { number: 6, img: ball6 },
    },
  },
  ISFP,
  ISTP: {
    ...ISFP,
    number: 0,
  },
  ENTP,
  ESTP: {
    ...ENTP,
    number: 0,
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
  ISFJ,
  INFJ: {
    ...ISFJ,
    number: 0,
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
