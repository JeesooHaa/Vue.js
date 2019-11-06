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