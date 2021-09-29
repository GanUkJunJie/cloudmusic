<template>
  <div id="app">
    <layoutHeader/>
    <layoutCenter/>
    <layoutFooter/>
  </div>
</template>

<script>
import LayoutHeader from './layout/layout-header.vue'
import LayoutCenter from './layout/layout-center.vue'
import LayoutFooter from './layout/layout-footer.vue'

export default {
  name: 'App',
  components: {
    LayoutHeader,
    LayoutCenter,
    LayoutFooter
  }
}
</script>

<style scoped>
#app {
  height: 100%;
  width: 100%;
  background: url(./assets/img/background.jpg) no-repeat;
  background-size: cover;
  background-position: center center;
  top: 0;
  left: 0;
  position: fixed;
}
</style>
