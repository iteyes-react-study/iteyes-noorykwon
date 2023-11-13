// var 함수는 혼란스럽게 한다
// 변수를 중복으로 사용하는 것을 허용한다
// 그러므로 let 키워드만 사용하자!

// const 상수
// 상수는 값 변경 불가 read only.

// js의 자료형
/* primitive data
  - number (정수, 실수, infinity, Nan 포함)
  - string ("", '' (``을 사용하면 변수 함께 사용가능))
  - boolen
  - null (의도적으로 값이 없음을 가르킬때)
  - undefined
*/

/* js에는 형변환(casting)기능이 존재함
ex) 12 * "2" 의 콘솔 결과값은 24임. (암묵적 형변환)
    
    12 + "2" 의 콘솔 결과는 "122"임. (덧셈은 붙이는 기능이 존재하기에 암묵적 형변환이 이뤄지지 않는듯)
    12 + parseInt("2") 로 해야 14가 됨
*/


[대입연산자]
=
[산술연산자]
+-*/
[연결연산자]
+ (덧셈을 하고싶으면 꼭 두 변수의 데이터형이 숫자형이어야 함)
[복합연산자]
a +=10
[증감연산자]
a++
++a
