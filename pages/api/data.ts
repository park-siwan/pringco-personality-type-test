export type personalityType = 'E' | 'I' | 'N' | 'S' | 'F' | 'T' | 'J' | 'P';

interface Data {
  question: string;
  firstAnswer: { desc: string; type: personalityType };
  secondAnswer: { desc: string; type: personalityType };
}
export const mockupData: Data[] = [
  {
    question: '친구와 약속이 취소되었을때 나는',
    firstAnswer: { desc: `다른 친구에게 연락해서 나오라고 한다`, type: 'E' },
    secondAnswer: { desc: `오히려 좋아`, type: 'I' },
  },
  {
    question: '예전에 한 번 했던거에 대해서 나는',
    firstAnswer: { desc: `한 번 해봤지만 생생하게 기억한다.`, type: 'S' },
    secondAnswer: { desc: `한 번 해봤는데 어떻게 기억해?'`, type: 'N' },
  },
  {
    question: '내가 가장 좋아하는게 별로라고 소문이 났을 때 나는',
    firstAnswer: { desc: `그래도 계속 좋아 한다`, type: 'T' },
    secondAnswer: { desc: `괜히 별로라고 느껴진다.`, type: 'F' },
  },
  {
    question: '시험기간, 업무 등 중요한 일이 있을 때 나는',
    firstAnswer: {
      desc: `"내일을 위해 오늘의 목표대로 해야겠다."
    계획대로 차근차근 진행한다.`,
      type: 'J',
    },
    secondAnswer: {
      desc: `"아직 시간 많이남았네~"
      놀다가 벼락치기 한다.`,
      type: 'P',
    },
  },
  {
    question: '사람이 많은 길거리에 넘어졌을 때 나는',
    firstAnswer: {
      desc: `"아야! 뭐야 이건??"
      괜히 큰소리 친다`,
      type: 'E',
    },
    secondAnswer: {
      desc: `"(머쓱;;) 꾹 참고 가던길 간다."`,
      type: 'I',
    },
  },
  {
    question: '내가 좋아하는 것에 대해 설명할 때 나는',
    firstAnswer: {
      desc: `"그건 말이야,, 이러쿵 저러쿵,,
      구체적으로 설명한다."`,
      type: 'S',
    },
    secondAnswer: {
      desc: `"넘나 좋은 것!"
      단순하게 설명한다.`,
      type: 'N',
    },
  },
  {
    question: '친구와 사이좋게 먹던 디저트가 한조각 남았을 때 나는',
    firstAnswer: {
      desc: `"가위바위보 할래?
      정정당당하게 맞선다"`,
      type: 'T',
    },
    secondAnswer: {
      desc: `"너 먹어~"
      양보한다`,
      type: 'F',
    },
  },
  {
    question: '휴가 계획을 짤 때 나는',
    firstAnswer: {
      desc: `"7시 30분까지는 관람을 마쳐야해"
      구체적으로 짠다`,
      type: 'J',
    },
    secondAnswer: {
      desc: `"이날은 먹방데이~~~"
      대충 테마만 생각해둔다."`,
      type: 'P',
    },
  },
  {
    question: '오랜만에 맛집을 찾았을 때 나는',
    firstAnswer: {
      desc: `"여러분 이 과자 좀 보세요!!!!!!!!!!"
      동네방네 소문내며 추천한다.`,
      type: 'E',
    },
    secondAnswer: {
      desc: `"오~ 제법 하는데~?"
      혼자 생각한다.`,
      type: 'I',
    },
  },
  {
    question: '고를 때 나는 ',
    firstAnswer: {
      desc: `"역시 이게 짱이지!"
      최애를 선택한다.`,
      type: 'S',
    },
    secondAnswer: {
      desc: `"오? 새로나온 과자네?"
      신상을 선택한다.`,
      type: 'N',
    },
  },
  {
    question: '조별과제를 할 때 나는',
    firstAnswer: {
      desc: `"무임승차 OUT!"
      제대로 못하는 팀원들을 제명한다`,
      type: 'T',
    },
    secondAnswer: {
      desc: `"사정이 있겠지..."
      한 번 봐준다`,
      type: 'F',
    },
  },
  {
    question: '친구가 우리집에 놀러와서 물건을 찾을 때 나는',
    firstAnswer: {
      desc: `"그거 왼쪽 서랍 세번째 칸에 있어"
      정확히 알고 있다.`,
      type: 'J',
    },
    secondAnswer: {
      desc: `"음 책상 쪽 한번 잘 봐봐
      대충은 안다"`,
      type: 'P',
    },
  },
];
