<template>
  <div id="app">
    <v-header></v-header>
    <v-tab></v-tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from 'components/v-header/Header'
import Tab from 'components/tab/tab'
export default {
  components: {
    'v-header': Header,
    'v-tab': Tab
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
