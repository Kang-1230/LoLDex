## 배포 주소

[https://lol-6vpc2a97b-sujins-projects-7ed1fdca.vercel.app/](https://lol-6vpc2a97b-sujins-projects-7ed1fdca.vercel.app/)

## 작업 기간

24.09.24(화요일)~24.10.08(화요일)

## 프로젝트 구조
```
src
 ┣ app
 ┃ ┣ api
 ┃ ┃ ┗ rotation
 ┃ ┃ ┃ ┗ route.ts
 ┃ ┣ champions
 ┃ ┃ ┣ [id]
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┗ page.tsx
 ┃ ┣ items
 ┃ ┃ ┗ page.tsx
 ┃ ┣ rotation
 ┃ ┃ ┗ page.tsx
 ┃ ┣ globals.css
 ┃ ┣ layout.tsx
 ┃ ┗ page.tsx
 ┣ assets
 ┃ ┗ fonts
 ┣ components
 ┃ ┗ providers.tsx
 ┣ public
 ┃ ┗ images
 ┃ ┃ ┣ champions.jpg
 ┃ ┃ ┣ ezreal.jpeg
 ┃ ┃ ┣ items.jpg
 ┃ ┃ ┣ jhin.jpeg
 ┃ ┃ ┗ logo.png
 ┣ styles
 ┣ types
 ┃ ┣ Champion.ts
 ┃ ┣ ChampionRotation.ts
 ┃ ┗ Item.ts
 ┗ utils
 ┃ ┗ serverApi.ts
```

## 구성 페이지

### 1. 홈

![홈](https://github.com/user-attachments/assets/690f307a-57f9-4a15-b6fe-fabae12eac81)

1. 메인 페이지입니다. 이미지를 누르면 챔피언, 아이템, 로테이션 페이지로 넘어갑니다. 오른쪽 위 Home 버튼을 누르면 Home으로 넘어갑니다.
   상단 nav는 고정되어 있으며 해당 페이지 버튼을 누르면 이동합니다.

### 2. 챔피언

![챔피언](https://github.com/user-attachments/assets/9c9d5a06-70f7-4e0e-8136-9ecad2e7a878)

2. 챔피언 목록을 확인할 수 있습니다. 

### 3. 아이템

![아이템](https://github.com/user-attachments/assets/779b0289-01d0-4c09-83b6-86866bbf611c)

3. 아이템 목록을 확인할 수 있습니다. 

### 4. 상세 페이지

![상세 페이지](https://github.com/user-attachments/assets/9cba39b3-9c66-4d7d-a2bf-1a0bd0cbff56)

4. 챔피언 페이지나 로테이션 페이지에서 챔피언을 클릭하면 상세 페이지로 이동합니다.

### 5. 로테이션

![로테이션](https://github.com/user-attachments/assets/ee405042-2ae9-4dea-b1d6-494a9519f6e3)

로테이션으로 돌아오는 무료 챔피언 목록을 확인할 수 있습니다. 


## 트러블 슈팅

1. Type 지정을 정확히 해 주지 않아 TypeError가 많이 발생했다. 변수에 맞는 Type을 각각 지정해주니 오류가 사라지는
   경우가 많았다. 또한 데이터에 접근할 때 데이터 값에 해당하는 Type을 제대로 지정해주지 않아 코드가 꼬이는 경우가
   많이 발생했다. 이어진 코드들을 차근차근 console로 확인해 보는 방식으로 오류를 해결했다.
  
2. 불러온 data를 잘 불러왔는지 console로 그때그때 확인하지 않아 나중에 거슬러 올라가서 하나하나 console을 찍어야
   하는 경우가 발생했다. 한번 호되게 당한 뒤로 console을 계속 체크하기 시작했다. 

## 회고

Typescript를 처음 써보는데 정말 부딪히면서 배웠다. 이번 과제를 수행하면서 typescript랑 tailwind는 어느 정도 숙달이
된 듯 하다. jsx에서 tsx로 넘어오면서 console이 더욱 중요해졌으니 type과 더불어 console을 확인하고 차근차근!!!!!
차근차근 제발 차근차근 안하면 나중에 더 힘들다는 것을 기록해 둔다. 
로직 자체는 크게 어렵진 않았다. Typescritpt에 익숙지 않아 어려웠던 것 빼면 기간도 길고 할만했던 것 같다. 이번엔 스케줄
관리에 크게 중점을 뒀는데, 혼자 못하면 누군가에게 보고하면서라도 컴퓨터 앞에 앉아 있는 게 크게 도움이 됐다. 튜터님들에게
많이 도움받으려 이리저리 다닌 것도 큰 역할을 했고. 
내가 못하면 도움을 받으면 된다. 회사는 학원이랑 다르긴 하겠지만 ... 사람에게 도움받는 걸 꺼려하지는 말자고 생각했다. 
