export type personalityType = 'E' | 'I' | 'N' | 'S' | 'F' | 'T' | 'J' | 'P';

interface Data {
  question: string;
  firstAnswer: { desc: string; type: personalityType };
  secondAnswer: { desc: string; type: personalityType };
}
export const mockupData: Data[] = [
  {
    question: `1. 당구공 마을에 초대받았다!
    초대장을 늦게 받아 출발 시간이 얼마 남지 않았다. 이때 나는?`,
    firstAnswer: { desc: `'당구공 마을? 너무 기대된다 설레><
    뭐 입고가지?'`, type: 'P' },
    secondAnswer: { desc: `'출발 장소까지 가는 데 30분 걸리니까 정각까지 준비하면 10분 여유롭게 도착하겠다.'`, type: 'J' },
  },
  {
    question: `2. 마을 입구에 도착하니 주민들이 앞구르기를 하며 입장하고 있다. 이때 나는?`,
    firstAnswer: { desc: `'이 마을은 원래 이렇게 입장하나 보다.'
    하며 앞구르기를 한다`, type: 'S' },
    secondAnswer: { desc: `'왜 앞구르기를 하면서 들어가는 거지?'
    하는 의문을 가진다.`, type: 'N' },
  },
  {
    question: `3. 숙소 키를 받아 방에 들어가 보니, 내 방에만 웰컴 쿠키가 없는 거 같다. 이때 나는?`,
    firstAnswer: { desc: `'왜 나만 없지..?'
    누군가 알아차려 줄 때까지 기다린다.`, type: 'I' },
    secondAnswer: { desc: `곧바로 프론트에 전화해서 물어본다.`, type: 'E' },
  },
  {
    question: `4. 마을 주민 쿼카가 직접 만든 케이크를 나눠 줬는데 너무 달다. 나의 반응은?`,
    firstAnswer: { desc: `와! 달긴 한데 진짜 맛있어! 고마워.`, type: 'F' },
    secondAnswer: { desc: `오.. 설탕 조금만 덜 넣었으면 맛있었겠다!`, type: 'T' },
  },
  {
    question: `5. 마을 축제가 열린다는 카탈로그를 받았다. 이때 나는?`,
    firstAnswer: { desc: `몇 시에 무슨 행사가 잡혀 있는지
    처음부터 차분히 읽어본다.`, type: 'S' },
    secondAnswer: { desc: `전체적으로 한번 훑어보고
    관심 있는 거 몇 개만 기억해둔다.`, type: 'N' },
  },
  {
    question: `6. 마을 축제에 다양한 행사가 준비되어 있다. 참여하고 싶은 곳은?`,
    firstAnswer: { desc: `혼자 여유롭게 들을 수 있는
    동물 합창단의 음악 감상회`, type: 'I' },
    secondAnswer: { desc: `다 함께 즐기는 개구리의 댄스파티`, type: 'E' },
  },
  {
    question: `7. 기린의 마술 공연을 보러 가던 중 행운권 추첨 부스를 발견했다. 이때 나는?`,
    firstAnswer: { desc: `이게 뭐지? 당장 참여해 보고 간다.`, type: 'P' },
    secondAnswer: { desc: `늦을 거 같은데 공연 끝나고 와야겠다.`, type: 'J' },
  },
  {
    question: `8. 곰과 오리와 함께 노래자랑에 나가기로 했다. 곰이 메인보컬을 하고 싶어 하는데 노래는 오리가 제일 잘한다. 나의 반응은?`,
    firstAnswer: { desc: `그래! 대신 열심히 연습해 보자!`, type: 'F' },
    secondAnswer: { desc: `그래도 메인보컬은 오리가 하는 게
    좋을 거 같은데?`, type: 'T' },
  },
  {
    question: `9. 노래를 부르다 내 파트에서 삑사리가 났다. 이때 나는?`,
    firstAnswer: { desc: `연습할 땐 잘 했는데... 속상하다ㅠㅠ`, type: 'E' },
    secondAnswer: { desc: `다들 속으로 비웃었겠지 ..? 쪽팔린다ㅠㅠ`, type: 'I' },
  },
  {
    question: `10. 숙소에 들어왔는데 방이 엉망이다.`,
    firstAnswer: { desc: `피곤해 죽을 거 같은데..
    자고 내일 치워야겠다~`, type: 'P' },
    secondAnswer: { desc: `피곤하지만 치우고 편하게 자야지~`, type: 'J' },
  },
  {
    question: `11. 집으로 돌아가기 전날, 동물 친구들에게 줄 머핀을 굽기로 했다.`,
    firstAnswer: { desc: `한 이만큼 구우면
    인당 하나씩 줄 수 있겠지?`, type: 'N' },
    secondAnswer: { desc: `인당 하나씩 주려면..
    10개만 구우면 되겠다!`, type: 'S' },
  },
  {
    question: `12. 당구공 마을에서의 마지막 날, 헤어지기 아쉬워서 우는 강아지 친구에게 나는`,
    firstAnswer: { desc: `울지마ㅠㅠ 니가 우니까 나도 눈물 나잖아..`, type: 'F' },
    secondAnswer: { desc: `울긴 왜 울어! 다음에 또 놀러 올게!`, type: 'T' },
  },
];