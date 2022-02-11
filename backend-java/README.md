### 소개

웹 디자인 프로젝트의 Backend  코드

기술스택 및 라이브러리

Project	Version	Description
Java   	1.8    	           
Maven  	  		Build Tool
Mongdb	5



개발 환경 구성

Windows 기준 개발 환경 구성 설명

1. OpenJDK 설치
   1. JDK 다운로드 사이트에서 1.8.x 설치 파일 다운로드 및 실행
      - Zulu OpenJDK: https://www.azul.com/downloads/?version=java-8-lts&package=jdk
      - OJDK Build: https://github.com/ojdkbuild/ojdkbuild
   2. 설치 후 명령 프롬프트(cmd) 확인
      > java -version

      출력 예)
      openjdk version "1.8.0_192"
      OpenJDK Runtime Environment (Zulu 8.33.0.1-win64) (build 1.8.0_192-b01)
      OpenJDK 64-Bit Server VM (Zulu 8.33.0.1-win64) (build 25.192-b01, mixed mode)

2. Docker 및 데이터베이스 구성 
   1. Docker 사이트를 참조하여 Docker For Windows 설치

      - https://docs.docker.com/docker-for-windows/install/


   - 까는 방식은 vm을 추천
   - 리눅스로 하면 성능향상이있어서 좋다고 하지만, 설치 방식이 생각보다 귀찮음.




3. Lombok 설치

   - [이클립스(Eclipse)에 롬복(Lombok) 설치하기 (tistory.com)](https://congsong.tistory.com/31)
   - 인텔리제이를 사용하면,  lombok 설치후 플러그인만 설치하면 됨.



4.  stack.yml에 있는 폴더에서 

   ``` 
   docker-compose -f stack.yml up
   ```

   ​

5. 이제 스프링을 돌리면 끝!!!  

   - 안돌아가면, WebCurationApplication.java를 run 하게 유도하면 되요.

     ​

   ​