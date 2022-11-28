# PRINGCO 8BALL 프로젝트


## 경험 기록

### 스타일링
- utility first css 프레임 워크인 tailwindcss 에 첫 도전을 해본 프로젝트였다. 평소 익숙했던 스타일링 라이브러리인 emotion보다 더 간결하게 className에서 한줄로 쓸 수 있다는 점에서 마음에 들었다. 하지만 약간의 러닝커브가 있었다. 처음 만들 때는 빨랐지만, 장기적인 유지보수 관점에서는 약간의 시간 낭비가 느껴졌다. 이번 심리검사 프로젝트는 규모가 빠르게 커지지 않는 프로젝트이기 때문에 리스크가 상쇄되었다.

### Nextjs 의 SSR(server-side-render)
- getServerSideProps 활용해 route.query로 들어오는 성격 유형을 활용해 해당되는 이미지를 props로 전달해주었다.
- 초기 페이지 렌더링이 CSR보다 빨리지게 되었다. 일부 완성된 html 문서로 가져오기 때문에 사용자 경험이 나아진다는 걸 알았다.
- next/head 에 meta 태그를 삽입해주어서 페이스북 공유시 이미지가 들어가게 만들었다. 순수하게 리액트만 사용할 때 보다 훨씬 간단했다.

### 커뮤니케이션
- [Ju eun](https://github.com/cobaltune)에게 해당 프로젝트의 구조를 설명 해주고 원리를 이해할 수 있게 슬랙 허들을 활용해 설명해주었다.
  - nextjs 기본구조, `npm run dev`, Typescript 등 궁금해 하는점에 대해 브리핑 해주었다.
- figma에 있는 시안과 대조해보며 데이터를 object로 만들어 해당 프로젝트에 기여할 수 있는 환경을 조성해주었다.
- 슬랙 허들과 git을 활용해 서로 pull 과 push를 이어받으면서 페어 프로그래밍(pair programming) 작업을 했다.
- 학습자의 학습상태를 고려해 그것을 쉬운 언어로 설명해주는것. 인수인계하는 방법, 이해할 수 있는 의사 전달에 대해 생각하며 노력했다


![스크린샷 2022-11-28 오후 8 06 23](https://user-images.githubusercontent.com/39171933/204262743-81758e7a-515c-4290-9092-dae1cc1cb3ba.png)
![스크린샷 2022-11-28 오후 8 05 50](https://user-images.githubusercontent.com/39171933/204262796-6b788396-8323-4f04-848f-081bbad54a10.png)
