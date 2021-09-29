<template>
  <div>
    <DiscoverNav/>
    <router-view></router-view>
  </div>
</template>
<script>
import DiscoverNav from 'components/discover/common/DiscoverNav'

export default {
  name: 'DiscoverMusic',
  components: {
    DiscoverNav,
  }
}
</script>
<style>
</style>