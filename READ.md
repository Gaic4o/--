# 민수코드 Project 

Discord 클론 코딩 

nest.js 는 기본적으로 express 를 (내부적) 사용합니다.
express 도 기본적으로 알고 있는 것이 좋습니다.

Nest.js 셋팅하기.






미들웨어 : 각각 미들웨어 기능들을 쪼개 각각의 요소들로 나눠 놓음.

req, res 안좋은 이유는 - test 할 떄 항상 response, request 모킹을 해 줘야 함.
가짜로 넣어줘야 함.

컨트롤러는 req, res 알 수도 있지만 모르는 경우에는 일반 함수처럼 test 할 수 있음.
express 가 구식 설계.

implements 쓰면 좋은점 typescript + 에디터 강점을 모두 활용 할 수 있습니다. 
configure 같은 것을 무조건 구현 해야 합니다.



Injectable() 은? provider 라고 부릅니다. 모듈에다가 넣어 줘야 합니다. 쓰고 있으면.
AppService에서 다른 서비르르 쓰고 있다?

그럴 떄 모듈에 넣어줘야 합니다.



// b, c 는 남이 넣어줌. 
function a(b, c) {
    return b + c; 
}


controller -> service -> repository -> entity 
언어들은 대부분 장점들을 가져와서 만듬.
언어들이 다 서로서로 참고 node spring nest 나 서로서로 해서 최적의 구조가 잡힘.


nest g mo workspaces 모듈 추가 
nest g co users 이런 식으로 테스트코드, 서비스 추가 컨틀ㄹ


Body, Query, Param 

 JoinRequestDto - 데이터를 전달하는 object 