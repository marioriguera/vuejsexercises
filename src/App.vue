<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Welcome msg="Welcome to Your Vue.js App" myName="Mario David Riguera Castillo" />
</template>

<script>
import Welcome from './components/common/Welcome.vue'

export default {
  name: 'App',
  components: {
    Welcome
  }
}
</script>

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
