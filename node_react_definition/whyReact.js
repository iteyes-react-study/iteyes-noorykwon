/*
React는 왜 필요한걸까?

1) 컴포넌트화 방식
    -> 유지보수시 반복되는 중복코드 수정하는 상황(SHotgun Surgery(산탄총 수술))을 피할 수 있음
2) 명령형 프로그래밍 방식(절차를 하나하나 다 나열)이 아닌 선언형 프로그래밍으로 로직이 간결함
    - ex) 명령형 : jQuery
          선언형 : react
3) Virtual DOM
    : 업데이트 요소를 실제 DOM에 실시간으로 업데이트 하는 게 아닌,
      가상의 DOM에 렌더링없이 업데이트를 시켜보고 후에 리얼돔에 업데이트 시키는 방식
    -> 과다 연산을 해결할 수 있음
    
    *DOM(document object model) 문서객체모델
    계속 DOM을 변경하는 일이 생길수록 많은 연산을 수행해야 하고 결국 성능 저하의 문제가 있을 수 있음



    
React는 Component 기반, Node 기반의 Javascript UI 라이브러리
        Node.js 기반의 웹서버 위에서 동작하고 있음

*/

/*
React App 을 만드는 방법

- Boiler Plate 
    : 마치 보일러를 찍어내듯 서비스를 개발할 수 있도록 필요한 라이브러리와 복잡한 환경세팅이 포함된 패키지
      ex) create-react-app
*/