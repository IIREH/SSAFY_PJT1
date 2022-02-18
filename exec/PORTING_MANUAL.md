# 1. 빌드환경
- OS: Ubuntu 20.04.3 LTS (GNU/Linux 5.11.0-1028-aws x86_64)
- JAVA: openjdk version "1.8.0_312"
OpenJDK Runtime Environment (build 1.8.0_312-8u312-b07-0ubuntu1~20.04-b07)
OpenJDK 64-Bit Server VM (build 25.312-b07, mixed mode)
- Spring boot: 2.5.8
- WAS: Spring boot 내장 톰캣
- DB: mongoDB 5.0.5 (port# 27017, 기본계정)
- node: v16.13.2
- IDE: IntelliJ IDEA 2021.3.1 (Community Edition)

# 2. 빌드
## 백엔드
maven으로 jar 빌드하여 배포, 8080 포트로 접속 예시)
- backend-java 경로로 이동
- mvn clean package로 jar 빌드
- java -jar ./target/webcuration-0.0.1-SNAPSHOT.jar 실행

## 프론트엔드
npm으로 빌드하여 배포, 3000 포트로 접속 예시)
- frontend/frontend 경로로 이동
- npm install --legacy-peer-deps
- npm run build
- serve -s build 실행

# 3. DB 덤프
git exec/dump 폴더 내에 위치

# 4. 시연 시나리오
