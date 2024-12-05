<script lang="ts">
import LoginView from './views/LoginView.vue'
import TodoView from './views/TodoView.vue'
export default {
  name: 'App',
  components: { LoginView, TodoView },
}
</script>

<template>
  <router-view>
    <div id="app">
      <LoginView />
      <TodoView />
    </div>
  </router-view>
</template>

<style scoped></style>
