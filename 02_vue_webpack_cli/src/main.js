import Vue from 'vue' // export default 랑 한세트 
import App from './App.vue'

// App 최상위 component
// #app 에 그리겠다. 
new Vue({
  render: h => h(App)
}).$mount('#app')