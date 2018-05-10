<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/v-header/Header'
export default {
  components: {
    'v-header': Header
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
