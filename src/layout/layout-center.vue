<template>
  <div id="layoutCenter">
    <leftMenu/>
    <RightMain/>
  </div>
</template>
<script>
import LeftMenu from './leftMenu.vue'
import RightMain from './rightMain.vue'

export default {
  name: 'LayoutCenter',
  components: {
    LeftMenu,
    RightMain
  }
}
</script>
<style>
#layoutCenter {
  margin: 0 auto;
  margin-bottom: 0;
  margin-top: 0;
  width: 1280px;
  height: 675px;
  position: relative;
  top: 40px;
  background-color: rgb(255, 255, 255);
  display: flex;
}
</style>