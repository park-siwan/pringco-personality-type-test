import { StaticImageData } from 'next/image';
import ball0 from '../../../public/images/characters/ball0.png';
import ball1 from '../../../public/images/characters/ball1.png';
import ball2 from '../../../public/images/characters/ball2.png';
import ball3 from '../../../public/images/characters/ball3.png';
import ball4 from '../../../public/images/characters/ball4.png';
import ball5 from '../../../public/images/characters/ball5.png';
import ball6 from '../../../public/images/characters/ball6.png';
import ball7 from '../../../public/images/characters/ball7.png';
import ball8 from '../../../public/images/characters/ball8.png';
import ball9 from '../../../public/images/characters/ball9.png';

// import { ENTP, ESTJ, INFP, INTJ, ISFJ, ISFP } from './commonType';

interface Result {
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
const milkCow = {
  title: '직진불도저',
  number: 0,
  img: ball0,
  desc: `이봐 난 멈추는 법을 모르는 젖손데 괜찮겠어..?! 일단 한번 일을 시작하면 끝장을 보고마는 0번 젖소. 무시무시한 집중력을 발휘할 때는 콧구멍이 커지는 습관이 있다. 계획이 틀어지는 건 절. 대.로 있을 수 없는 일. 호불호 명확하고 확실하게 딱딱 떨어지는걸  좋아하는 편이다. 미덥지 그 한 건 딱 질색이야! 개인주의적인 성향이 있어서 리더는 하기 싫다고 말하지만 반장 선거하면 누가 나를 추천해 주지 않을까 속으로 은근 기대하며 콧구멍을 벌렁이곤 한다.`,
  combination: {
    partner: { number: 3, img: ball3 },
    opposition: { number: 8, img: ball8 },
  },
};

const elephant = {
  title: '방구석인싸',
  number: 2,
  img: ball2,
  desc: `코끼리는 코도 손이라서 많이 먹을 수밖에 없어! 하루종일 침대에서 누워 코로 오렌지 주스를 먹는 게 취미이자 특기이다. 게을러 보이지만 나도 다 계획이 있다고! 집에서도 할게 얼마나 많은데 바쁘다 바빠! 동물 친구들끼리 2번 코끼리를 집에서 나오게하는 내기를 할 정도의
하우스 러버. 종종 친구들이 놀러 온다고 하면 썩 달갑진 않지만 거절하기는 힘들다. 하지만 막상 놀러 오면 세상 너무 즐거워!

(ps. 놀러 온 동물 친구들은 2번 코끼리 침대의 포근함에
의식을 잃고 기절했다는 무서운 소문이..!)`,
  combination: {
    partner: { number: 1, img: ball1 },
    opposition: { number: 4, img: ball4 },
  },
};

const rabbit = {
  title: '나도좋아나',
  number: 3,
  img: ball3,
  desc: `늘 털 관리에 진심인 3번 토끼. 부드럽고 보송보송한 귀와, 토실토실한 꼬리는 철저한 자기 관리의 자랑스러운 결과물! 하지만 다른 친구들한테 잘 보이기 위해서가 아니라 내만족을 위한 거니까 오해 없었으면 좋겠다고? 이것저것 잘하는 게 많은 재능 부자이며 한번 꽂히면
엄청난 집념을 보여준다. 당구공 마을에서 가장 빠른 동물이 되기 위해 3년간 쉬지 않고 새벽 러닝을 해왔다고 하는데.. 가리는 것 없이 솔직함이 매력인 3번 토끼!`,
  combination: {
    partner: { number: 0, img: ball0 },
    opposition: { number: 8, img: ball8 },
  },
};

const duck = {
  title: '침착해오리',
  number: 5,
  img: ball5,
  desc: `기분이 나쁜 건가? 호.. 혹시 화난 건가? 부리 속에 감춰진 기분을 짐작하기 어려운 5번 오리. 하지만 5번 오리의 미소는 자세히 보아야 보인다는 사실! 부리 끝 살짝 올라가있는 입꼬리를 발견하는 순간 5번 오리의 사랑스러운 매력에 빠져 헤어 나오지 못하는 동물 친구
  들이 속출하고 있다. 한번 마음에 들면 평생 내 마음속에 저장하는 알고 보면 가장 사랑이 넘치는 5번 오리. 가끔 상처를 받으면 호수를 떠다니며 평정심을 찾는 혼자만의 시간을 갖고는 한다.`,
  combination: {
    partner: { number: 3, img: ball3 },
    opposition: { number: 2, img: ball2 },
  },
};

const bear = {
  title: '은은한관종',
  number: 8,
  img: ball8,
  desc: `스스로 나서는 건 부담스럽지만 머릿속으로는 이미 무대에서 춤추고 1등 해서 수상소감 중. 늘 속으로 ‘친구들한테 주목받고 싶다! 나 센터 시켜줬으면 좋겠다..’ 생각하는 8번 곰. 말 안 해도 내 마음 다 알아주길 바라는 답정너스러운 면이 있다. 여러 명이서 놀기보다는 친한 친구 두세명이서 약속 잡는 걸 좋아한다. 눈치가 빨라서 내 친구들이 하고 싶은 거 척척 맞추는 마을의 1등 센스쟁이다. 하지만 자기 맘을 너무 몰라주면 꿍해있다가 빵! 터지고는 해서 분조장, 시한폭탄이라는 별명을 갖고 있다. (tip. 이럴 때는 잠시 혼자만의 시간을 갖게 해주었다가 달달한 간식으로 달래주는 것을 추천)`,
  combination: {
    partner: { number: 1, img: ball1 },
    opposition: { number: 2, img: ball2 },
  },
};

const giraffe = {
  title: '만능해결사',
  number: 9,
  img: ball9,
  desc: `마을 물건들 중에 9번 기린의 손을 거치지 않은 물건들이 없을 정도로 뚝딱뚝딱 손재주가 좋다고 한다. 항상 문제가 있으면 제일 먼저 나서는 모습에 다들 9번 기린은 착하다고 칭찬이 자자하지만 사실 본인이 하지 않으면 성에 차지 않는 자존감이 높고 남에게 의지하기 껄끄러워하는 성격이다. 우는 친구를 달래주거나 고민을 공감해 주는 건 조금 어렵다. 하지만 본인 일처럼 생각하고 꼭 해결 방안을 찾아 제시해 주곤 하는 9번 기린. 본인은 모르지만 남들은 다 알고 있는 다정둥이다.`,
  combination: {
    partner: { number: 8, img: ball8 },
    opposition: { number: 4, img: ball4 },
  },
};

export const result: Result = {
  ['milk-cow1']: { ...milkCow },
  ['milk-cow2']: { ...milkCow },
  quokka: {
    title: '프로뉴잡러',
    number: 1,
    img: ball1,
    desc: `잘하는 거 재밌는 거 배우고 싶은 거 다해봐야 적성이 풀리는 1번 쿼카. 너무 즉흥적인 거 아니냐는 소리도 종종 듣지만 궁금한 건 해봐야 적성이 풀리는걸! 물론 시작한 일을 모두 완벽하게 마무리하는 건 아니다. 과자 끊기 다이어트는 매번 중간에 포기하곤 하지만 ‘이봐 시작이 반 아니겠어~?’ 라며 웃어넘겨 버리는 긍정킹. 친구들을 데리고 여기저기 새로운 장소 도장 깨기가 취미인 1번 쿼카. 그래서 당구공 마을 친구들은 겉으로는 귀찮은척하지만 항상 웃는 1번 쿼카의 모습에 매료되어, 비타민 같은 매력을 뿜뿜하는 쿼카랑 놀기를 은근 기다린다고 한다.`,
    combination: {
      partner: { number: 8, img: ball8 },
      opposition: { number: 6, img: ball6 },
    },
  },
  elephant1: { ...elephant },
  elephant2: { ...elephant },
  rabbit1: { ...rabbit },
  rabbit2: { ...rabbit },
  frog: {
    title: '모두의스타',
    number: 4,
    img: ball4,
    desc: `이 세상 최고의 인기쟁이가 되는 것이 꿈인 4번 개구리! 동물 친구들의 주목과 인기를 쭉 독차지 해왔다. 당구공 마을의 유행은 다 내가 선도한다고 후훗. 한번은 4번 개구리의 ‘개구리 뒷다리 춤’ 추기 챌린지가 마을에서 대유행을 하기도 했다. 아직 우주 대스타는 아니지만 내가 걷는 이 길이 곧 레드 카펫 아니겠어? 본인에 대한 믿음과 근거 있는 자신감이 매력 포인트이며, 쫓기지 않고 항상 여유 있는 느긋한 성격이 인기 비결이다.`,
    combination: {
      partner: { number: 5, img: ball5 },
      opposition: { number: 2, img: ball2 },
    },
  },
  duck1: { ...duck },
  duck2: { ...duck },
  pig: {
    title: '평화주의자',
    number: 6,
    img: ball6,
    desc: `평화로운 일상을 가장 중요시하는 6번 돼지. 변화도 좋지만 익숙한 게 마음이 편한걸. 낯가림은 조금 있어 새로운 친구 사귀는 걸 좋아하지는 않지만, 오래된 친구들에게 이미 나는 없어서는 안 될 인생의 동반자! 누구랑 있든 조화롭게 어울릴 수 있는 카멜레온 같은 능력이 있다고 한다. 동물 친구들이 다툴 때면 항상 중간에서 중재해 주곤 해, 당구공 마을에는 싸우더라도 6번 돼지 앞에서 싸워라라는 말이 있을 정도.`,
    combination: {
      partner: { number: 2, img: ball2 },
      opposition: { number: 1, img: ball1 },
    },
  },
  puppy: {
    title: '모두의댕댕',
    number: 7,
    img: ball7,
    desc: `친구들이 너무너무 좋아! 혼자 있는 건 심심해서 견딜 수가 없는걸.. 일주일 7일 중에 7일 다 약속이 잡혀있는 7번 강아지. 새로운 친구도 오래된 친구도 함께 있으면 행복해! 항상 웃고 다녀서 다들 7번 강아지는 아무 고민이 없을거라고 생각하곤 하는데 사실은 늘 나름의 고민이 있다. 하지만 금방 금방 잊어버리며 훌훌털고 일어나는 강인한 면이 7번 강아지의 강점! 제일 못 견디는 건 어색한 침묵, 제일 싫어하는 건 나 빼고 약속 잡는 거!`,
    combination: {
      partner: { number: 0, img: ball0 },
      opposition: { number: 6, img: ball6 },
    },
  },
  bear1: { ...bear },
  bear2: { ...bear },
  giraffe1: { ...giraffe },
  giraffe2: { ...giraffe },
};
