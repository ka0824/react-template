> ## 소개

리액트에서 작성한 코드의 템플릿을 저장하는 공간입니다.

<br />

> ## 필요 라이브러리
style 적용을 위해 styled-components가 필요합니다.  
icon 적용을 위해 react-icons가 필요합니다.

```
npm install styled-components
npm install react-icons --save
```

<br />

> ## 구성

<details>
<summary> On / Off형 토글 스위치</summary>
<div markdown="1">
  
- 목표  
  
  - 기존에는 input의 checkedbox 속성으로 on, off 표시하였다.
  - 기존 방식은 다소 투박하게 느껴져, On / Off 스위치 방식으로 바꿔보고자 한다.
  
- 구현방법  
  
  - useState를 통해 클릭 여부에 따른 boolean형태의 상태값 저장한다.
  - before 가상 선택자 이용한다.
  - styled-components의 props 기능을 이용해 상태값에 따라 transform 속성 값 바꾼다.
  
- 구현  
  
![ezgif com-gif-maker](https://user-images.githubusercontent.com/79782594/168438894-3894233f-1174-4271-a02e-ebd04cfb543c.gif)


</div>
</details>

<br />

<details>
<summary> 선택형 토글 스위치</summary>
<div markdown="1">
  
- 목표  
  
  - On/Off형 토글은 2가지 중 하나만 선택 가능한 한계가 있었다.
  - 선택 가능한 항목이 2개 이상일 때에 활용할 수 있는 토글 스위치를 만들려고 한다.
  
- 구현방법  
  
  - useState를 통해 클릭된 텍스트의 인덱스를 상태값으로 저장한다.
  - 현재 저장된 인덱스와 해당 텍스트의 인덱스가 동일할 시 배경 색상을 변경한다.
  - 텍스트 태그에 그림자 속성을 추가하여 구분선 효과를 만든다.
  
- 구현  
  
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/79782594/168454555-ca56bdb3-6db1-4804-a507-66810eea0676.gif)



</div>
</details>

<br />

<details>
<summary> Select 박스 </summary>
<div markdown="1">
  
- 목표  
  
  - 기존 셀렉트 태그를 CSS로 수정하기에는 어려움이 느껴져 해당 기능을 하는 컴포넌트를 직접 구현해서 이후 디자인 수정을 용이하게 한다.
  
- 구현방법  
  
  - useState를 통해 클릭 여부, 선택된 option 값을 상태 값으로 저장한다.
  - 클릭 여부는 선택 가능한 요소들을 보여주는 박스를 보여 줄 지를 결정한다.
  - 선택된 option 값을 동기화하여 현재 어떤 값이 선택됐는 지에 따라 보여지는 값을 변화시킨다.
  
- 구현  
  
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/79782594/168456151-95f111da-1b35-453b-a43b-e7b0aa499fa9.gif)



</div>
</details>
