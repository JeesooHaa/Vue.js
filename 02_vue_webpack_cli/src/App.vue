<template>
  <!-- 여기서부터 모든 프로젝트가 시작된다. -->
  <!-- 하나의 태그만 있어야 한다. 하나의 엘리먼트. -->
  <div>
    <!-- self closing 은 필수인듯... -->
    <TodoList category="취업"/>
    <TodoList category="SSAFY"/>
    <TodoList category="기타"/>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  components: {
    TodoList
  }
}
</script>

<style>
  /* css loader 가 필요함 */
  /* h1 {
    color: salmon;
  } */
</style>