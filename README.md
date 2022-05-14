> ## 소개

리액트에서 작성한 코드의 템플릿을 저장하는 공간입니다.

<br />

> ## 필요 라이브러리
style 적용을 위해 styled-components가 필요합니다.

```
npm install styled-components
```

<br />

> ## 구성

<details>
<summary> On / Off형 토글 스위치</summary>
<div markdown="1">
  
- 목표  
  
  - 기존에는 input의 checkedbox 속성으로 on, off 표시
  - 기존 방식은 다소 투박하게 느껴져, On / Off 스위치 방식으로 바꿔보고자 함.  
  
- 구현방법  
  
  - useState를 통해 클릭 여부에 따른 boolean형태의 상태값 저장
  - before 가상 선택자 이용
  - styled-components의 props 기능을 이용해 상태값에 따라 transform 속성 값 바꾸기
  
- 구현  
  
![ezgif com-gif-maker](https://user-images.githubusercontent.com/79782594/168438894-3894233f-1174-4271-a02e-ebd04cfb543c.gif)


</div>
</details>
