<template>
  <div id="app">
    <PostingPage />
  </div>
</template>

<script>
import PostingPage from '@/views/PostingPage.vue';

export default {
  name: 'App',
  components: {
    PostingPage,
  },
};
</script>

<style>
#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
