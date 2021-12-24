# 연준이 채팅 앱
*****

## Description

- 채팅방 (슬랙 채널)
  - 공개방
  - 방장이 초대해서 들어갈 수 있는 비밀방

- 채팅방 안에서 파일 공유 기능
  - 모든파일은 Cloud에 저장
  - 해당 파일의 URL을 공유
  - 프론트단에서 용량 제한

- 로그인
  - ID / PW
- 회원 가입
  - ID
  - PW
  - 권한
  - 이름
  - 전화번호
  
- 게임
  - 해당 HTML URL만 클라에 붙이는거임
  - 클라이언트 (HTML)에서 작동함.
  - 게임 결과가 나오면 그 결과만 서버에 전송해서 DB에 저장
  
- 실시간 접속자 확인 가능


## Stack
- Frontend
  - React / Next JS <-- SSR을 지원하는 React 프레임워크임 
- Backend
  - Typescript 기반 Node
  - NodeJS / Nest JS  <-- TypeScript, java의 Spring 같은 존재

- REST API
- DB
  - PostgreSQL / MySQL (RDBMS)
  - MongoDB (NoSQL)
