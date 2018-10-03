<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    console.log('App.created()')
    this.checkCurrentLogin()
  },
  updated () {
    console.log('App.updated()')
    this.checkCurrentLogin()
  },
  methods: {
    checkCurrentLogin () {
      console.log('App.checkCurrentLogin()')
      if (!localStorage.token && this.$route.path !== '/') {
        this.$router.push('/?redirect=' + this.$route.path)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
