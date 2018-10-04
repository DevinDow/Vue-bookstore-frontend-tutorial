<template>
  <div/>
</template>

<script>
export default {
  name: 'Logout',
  created () {
    console.log('Logout.created')
    delete localStorage.token
    this.$store.dispatch('logout')
    this.$router.push('/')
  }
}
</script>
