SPA : Single Page Application 

하나의 html 에서 전부 이루어짐

안에 역할들이 분할되있음 

MVVM ; Model-View-ViewModel (MVC, MTV)

console 에 치면 실시간으로 바뀜 (app.message = 'Bye, Vue!')

vue devtools

app.$data
app.$data.message === app.message (shortcut)

callback 

모든 비동기 처리를 callback 함수로? 

async - await 

Local Storage : 브라우저를 껏다 켜도 정보가 저장되어 있다. 
Session Storage

localStorage.setItem('key', '안녕하세요')
localStorage.getItem('key')

localStorage.setItem('numbers', [1, 2, 3])
localStorage.getItem('numbers') // "1, 2, 3"

localStorage.setItem('object', { message: '안녕하세요' })
localStorage.getItem('object') // "[object Object]"

localStorage.setItem('object', JSON.stringify({ message: '안녕하세요' }))
localStorage.getItem('object') // "{"message":"안녕하세요"}"
JSON.parse(localStorage.getItem('object')) // {message: "안녕하세요"}


javascript array length 
.splice / .indexOf 

반복을 지양하라
component 
케밥케이스 / 파스칼케이스는 거른다. 안되는게 있어서 


webpack 
node.js 에서..

src 폴더 : 소스코드가 담겨짐
main.js : entry point 로 사용 

createElement => h

component 파일 구조 ; templata, script, style 

webpack 이 build 를 해준다...

npm run build

public 폴더에 app.js 를 사용하는 html 페이지를 만든다 

수정이 일어나면 다시 빌드업해야함 

production 모드라 f12 vue extension 을 지워하지 않는다 


호출이 여러번되면 느리다... ux 상 좋지 않아... 
웹팩은 한 개의 파일로 만들어줌 와 webpack!

npm install -g 전역 설치 
npm install -g @vue/cli

vue create youtube-browser

babel : transpiler?
옛날 문법으로 바꿔서 적용해줌 / 번역해준다는 느낌 

eslint : js 문제 식별 코드 / 문제가 있으면 commit 도 안되....

npm run serve ; 라이브서버를 킨다
npm run build ; 번들링할때... 배포하기 위한 과정... // dist 생성! webpack 이 하는 일! dist 폴더만 배포하면됨! 
npm run lint ; eslint 를 통해 코드의 문제를 검사하고 결과를 알려줌 

cli 사용, webpack 은 아마 따로 사용안할겁니다.. 

component 구조 나누기 
props 단방향 데이터 전달 

event.target.value

App 의 함수를 SearchBar 로 넘겨줌 
App 에게 데이터가 있고 SearchBar 에게 실행시키라고 함 

npm install axios

.env.local 환경변수에 key 저장 