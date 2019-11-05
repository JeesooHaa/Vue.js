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