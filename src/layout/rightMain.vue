<template>
  <div id="rightMain">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'RightMain',
  components: {}
}
</script>
<style>
#rightMain {
  width: 80%;
  height: 100%;
  overflow: scroll;
}
::-webkit-scrollbar {
  width: 0;
}
</style>