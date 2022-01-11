## 22.01.11(월)

### 1. UI 설계(글작성, 상세페이지, 검색, 공연 상세 페이지)

![1](README_준석.assets/1.png)

![2](README_준석.assets/2.png)

### 2. React를 사용하는 이유?

####  :raising_hand: 무엇을 개발하는가?

프로젝트의 주제는 웹 큐레이션 SNS로, 이용자가 글을 작성하고 이에 대해 다른 이용자의 상호작용이 필수적이다. 



예를 들어, 게시글에 좋아요 기능이 존재하고 누군가가 좋아요 버튼을 누른다면 해당하는 값이 1 올라야 한다.

이 값을 업데이트하여 실시간으로 반영해야 하는데 좋아요 요소를 찾아 내부를 일일이 수정하는 것은 애플리케이션 규모가 커진다면 매우 복잡해지고 성능도 떨어질 것이다.



이러한 단점을 개선하기 위해, 데이터가 변할 때마다 기존 뷰를 날려 버리고 처음부터 새로 렌더링하는 방식을 채용한 것이다. 그런데 여기까지 생각 했을 때, 하나의 정보를 수정하기 위해 전체를 렌더링한다면 사용자 경험이 떨어지게 될거라고 예상할 수 있다.



#### :ok_woman: 리액트의 기능

리액트는 자바스크립트 라이브러리로 다른 프레임워크와 달리 오직 View만 신경 쓰는 라이브러리이다.



1. 초기 렌더링

   리액트에서 사용하는 render 함수는 컴포넌트가 어떻게 생겼는지를 정의하는 역할을 한다. 이 함수는 html 형식의 문자열을 반환하는 것이 아니라, 뷰가 어떻게 생겼고 어떻게 작동하는지에 대한 정보를 지낸 객체를 반환한다.

   렌더링 작업을 통해 지니고 있는 정보들을 사용하여 HTML 마크업을 만들고, 이를 우리가 정하는 실제 페이지의 DOM 요소 안에 주입하게 된다.



2. 업데이트

   여기서 리액트가 어떻게 사용자 경험을 살리면서 렌더링을 하는지 알 수 있다. 컴포넌트는 데이터를 업데이트 했을 때 단순히 업데이트한 값을 수정하는 것이 아니라, 새로운 데이터를 통해 render함수를 다시 호출하게 된다.

   그렇다면 이 데이터를 가진 새로운 뷰가 생성될텐데, 이전에 render함수가 만들었던 컴포넌트 정보와 현재 render함수가 만든 텀포넌트 정보를 비교한 후 둘의 차이를 알아내 DOM 트리를 업데이트 하는 것이다.



3. Virtual DOM



## 22.01.11(화)

### 1. Git 사용법 

분명 공부를 하면서 git을 사용하기는 하는데, 내가 할 수 있는 거라곤 git add 와 git commit 밖에 없었다...

이번에 git을 공부해야 될 상황이 생겨, 추후에 나같은 사람이나 git을 까먹을 미래의 나를 위해 정리하기로 했다..!

 

### [**Git 커밋**](https://kimcookie-lab.tistory.com/entry/Git-1#Git%--%EC%BB%A-%EB%B-%-B)

커밋이란 Git 저장소에 나의 디렉토리에 있는 **모든 파일에 대한 스냅샷을 기록**하는 것이다. 각 커밋은 저장소의 이전 버전과 다음 버전의 변경내역을 저장하기 때문에, 대부분의 커밋이 그 커밋 위의 부모 커밋을 가리킨다.

 

### [**Git 브랜치**](https://kimcookie-lab.tistory.com/entry/Git-1#Git%--%EB%B-%-C%EB%-E%-C%EC%B-%--)

브랜치는 특정 커밋에 대한 참조라고 할 수 있다. 브랜치를 많이 만들어도 메모리나 디스크 공간에 부담이 되지 않기 때문에, 작업을 할 때 작은 단위로 잘게 나누는 것이 좋다.

 

**하나의 커밋과 그 부모 커밋들을 포함하는 작업 내역**

 

git branch [브랜치 이름] : 브랜치 생성git checkout [브랜치 이름] : 브랜치로 이동

 

### [**브랜치와 합치기(Merge)**](https://kimcookie-lab.tistory.com/entry/Git-1#%EB%B-%-C%EB%-E%-C%EC%B-%--%EC%--%--%--%ED%--%A-%EC%B-%--%EA%B-%B--Merge-)

작업을 하다보면 여러개의 브랜치가 생성되게 될 텐데, 이 브랜치를 합치는 몇가지 방법을 알아볼 것이다. merge는 두 개의 부모를 가리키는 특별한 커밋을 만들어 낸다. 두 개의 부모가 있는 커밋이라는 것은 **한 부모의 모든 작업내역과 나머지 부모의 모든 작업 내역, 그리고 그 두 모의 모든 부모들의 작업내역을 포함**한다.

 

1. bugFix 브랜치를 main 브랜치에 merge

```
$ git merge bugFix
```

두 브랜치가 합쳐지면서 main이 두 부모가 있는 커밋을 가리키게 된다.

 

2. main 브랜치에 bugFix를 merge

```
$ git checkout bugFix
$ git merge main
```

bugFix가 main의 부모쪽에 있었기 때문에, git이 별다른 일을 할 필요가 없어진다.

 

### [**Git 리베이스(Rebase)**](https://kimcookie-lab.tistory.com/entry/Git-1#Git%--%EB%A-%AC%EB%B-%A-%EC%-D%B-%EC%-A%A--Rebase-)

브랜치끼리의 작업을 접목하는 두번째 방법은 리베이스이다. 리베이스는 기본적으로 커밋들을 모아서 복사한 뒤, 다른 곳에 떨궈 놓는 것을 의미한다.

이를 이용하면, 커밋들의 흐름을 보기 좋게 한 줄로 만들 수 있다는 장점이 있다.

 

브랜치를 사용해 두 개의 작업을 수행했을 때, rebase를 통해 합친다면 실제로는 두 기능을 따로 개발했지만 마치 순서대로 개발한 것처럼 보이게 된다.

 

1. bugFix 브랜치를 생성해 작업한 후 bugFix 브랜치를 선택

```
$ git branch bugFix
$ git checkout bugFix
```

 

2. rebase

```
$ git rebase main
```

bugFix 브랜치의 작업 내용이 main을 부모로 하게 되는 한 줄의 커밋을 생성

(기존 커밋은 어딘가에 아직 남아있고 main 위에 올려진것은 복사본)

 

3. main 브랜치를 bugFix 브랜치쪽으로 리베이스

```
$ git checkout main
$ git rebase bugFix
```

main 브랜치를 선택하고 리베이스



### [**HEAD**](https://kimcookie-lab.tistory.com/entry/Git-2?category=1023358#HEAD)

"HEAD"는 현재 체크아웃된 커밋을 가리킨다. 즉 현재 작업중인 커밋을 의미한다.

 

HEAD는 항상 작업트리의 가장 최근 커밋을 가리키므로 작업트리에 변화를 주는 git 명령어들은 대부분 HEAD를 변경하는것으로 시작한다.

 

일반적으로 HEAD는 브랜치의 이름을 가리키고 있는데, 커밋을 하게 되면 해당 브랜치의 상태가 바뀌고 이 변경은 HEAD를 통해서 확인이 가능하다.

 

#### [**HEAD 분리하기**](https://kimcookie-lab.tistory.com/entry/Git-2?category=1023358#HEAD%--%EB%B-%--%EB%A-%AC%ED%--%--%EA%B-%B-)

HEAD를 분리한다는 것은 HEAD를 브랜치 대신 커밋에 붙이는 것을 의미한다. 명령어를 사용하기 전의 모습은

 

HEAD -> main -> C1

 

이다.

```
$ git checkout [commit 해시]
```

다음 명령어를 통해,

HEAD -> C1

으로 변경한다.

 

#### [**상대참조**](https://kimcookie-lab.tistory.com/entry/Git-2?category=1023358#%EC%--%--%EB%-C%--%EC%B-%B-%EC%A-%B-)

실제 Git에서 해시는 매우 길기 때문에, 해시 자리에 앞의 4글자만 입력해줘도 된다.

 

하지만, 커밋들을 해시로 구분하고 사용하는것이 그렇게 썩 편하지는 않다. Git의 상대 참조를 활용하면 내가 기억할 만한 지점에서 출발하여 이동한 후 다른 지점에 도달해 작업을 할 수 있다.

 

상대 커밋의 방법 중 두가지가 있다.

```
한 번에 한 커밋 위로 움직이는 ^
한 번에 여러 커밋 위로 올라가는 ~<num>
```

 

C2(main) -> C1 -> C0

 

다음과 같은 구조에서

```
$ git checkout main^
```

명령어를 실행하게 되면, HEAD가 C1을 가리키게 된다.

 

이번에는, 한번에 커밋을 두번 옮겨보도록 하자.

```
$ git checkout main~2
```

위 명령어를 통해, HEAD는 C0를 가리키게 된다.

 

### [**브랜치 강제로 옮기기**](https://kimcookie-lab.tistory.com/entry/Git-2?category=1023358#%EB%B-%-C%EB%-E%-C%EC%B-%--%--%EA%B-%--%EC%A-%-C%EB%A-%-C%--%EC%--%AE%EA%B-%B-%EA%B-%B-)

C4(main, bugFix*) -> C3 -> C2 -> C1 -> C0

 

상대 참조를 통해 브랜치를 강제로 옮길 수 있다. " -f " 옵션을 이용하여 브랜치를 특정 커밋에 직접적으로 재지정 할 수 있다.

 

main 브랜치를 HEAD에서 세번 뒤로 옮기고 싶다면 다음 명령어를 실행하면 된다.

```
$ git branch -f main HEAD~3
```

C4(bugFix*) -> C3 -> C2 -> C1(main) -> C0

 

### [**Git 에서 작업 되돌리기**](https://kimcookie-lab.tistory.com/entry/Git-2?category=1023358#Git%--%EC%--%--%EC%--%-C%--%EC%-E%--%EC%--%--%--%EB%--%--%EB%-F%-C%EB%A-%AC%EA%B-%B-)

Git에는 작업한 것을 되돌리는 여러가지 방법이 존재한다. 변경내용을 되돌리는 것도 커밋과 마찬가지로 낮은 수준의 일(개별 파일이나 묶음을 스테이징 하는 것)과 높은 수준의 일(실제 변경이 복구되는 방법)이 있다. 우선, 여기서 후자에 대해 알아보자.

 

Git에서 변경한 내용을 되돌리는 방법은 크게 두가지가 있는데, "git reset"과 "git revert"이다.

 

#### [**Git 리셋(reset)**](https://kimcookie-lab.tistory.com/entry/Git-2?category=1023358#Git%--%EB%A-%AC%EC%--%-B-reset-)

git reset은 브랜치로 하여금 예전의 커밋을 가리키도록 이동시키는 방식으로 변경 내용을 되돌린다. 즉, 애초에 커밋하지 않은 것처럼 예전 커밋으로 브랜치를 옮기는 것이다.

 

#### [**Git 리버트(revert)**](https://kimcookie-lab.tistory.com/entry/Git-2?category=1023358#Git%--%EB%A-%AC%EB%B-%--%ED%-A%B--revert-)

각자의 컴퓨터에서 작업하는 로컬 브랜치의 경우 리셋을 효율적으로 사용할 수 있다. 하지만 "히스토리를 고쳐쓴다"는 점 때문에 다른 사람이 작업하는 리모트 브랜치에는 사용할 수 없게 된다.

 

내용을 되돌리고, 이 되돌린 내용을 다른 사람들과 공유하기 위해서는, git revert를 써야한다.

 

C2(main) -> C1 -> C0

 

```
$ git revert HEAD
```

C2`(main) - > C2 -> C1 -> C0

위 코드를 실행하면, HEAD 바로 위의 커밋으로 되돌릴 수 있다. 그런데, 우리가 되돌리려고 한 커밋의 아래에 새로운 커밋이 생기게 된다.

 

바로 이 커밋이, 되돌리고자 하는 내용을 담은 변경내용이 기록된다. 이 변경 내역을 push 하여 다른 사람과 공유할 수 있다.



### [**Git 체리-픽(Cherry-pick)**](https://kimcookie-lab.tistory.com/entry/Git-3?category=1023358#Git%--%EC%B-%B-%EB%A-%AC-%ED%--%BD-Cherry-pick-)

```
$ git cherry-pick <Commit1> <Commit2> <...>
```

이 명령어는 현재 위치(HEAD) 아래에 있는 일련의 커밋들에 대한 복사본을 만들겠다는 것을 의미한다.

 



![img](https://blog.kakaocdn.net/dn/UPwBN/btrqmNCRu2Y/UzngjTHMVqb9vwr9KKv25k/img.png)



HEAD가 C5를 가르키고 있을 때, C2와 C4의 내용의 복사본을 다음과 같이 손쉽게 붙일 수 있다.

 

### [**Git 인터렉티브 리베이스**](https://kimcookie-lab.tistory.com/entry/Git-3?category=1023358#Git%--%EC%-D%B-%ED%--%B-%EB%A-%--%ED%-B%B-%EB%B-%-C%--%EB%A-%AC%EB%B-%A-%EC%-D%B-%EC%-A%A-)

인터렉티브 리베이스 대화창을 통해 3가지 기능을 수행 할 수 있다.

\- 적용할 커밋들의 순서를 UI를 통해 바꿀 수 있다.

\- 원하지 않는 커밋들을 뺄 수 있다.

\- 커밋을 스쿼시 할 수 있다.(커밋을 합칠 수 있다.)

 

```
$ git rebase -i HEAD~2
```

 