<template>
  <!-- :default-active="$route.path" 刷新高亮不消失 -->
  <el-menu
      :default-active="$route.path"
      router
      class="el-menu-demo"
      mode="horizontal"
  >
    <el-menu-item index="/discoverMusic/personality">个性推荐</el-menu-item>
    <el-menu-item index="/discoverMusic/custom">专属定制</el-menu-item>
    <el-menu-item index="/discoverMusic/playlist">歌单</el-menu-item>
    <el-menu-item index="/discoverMusic/rank">排行榜</el-menu-item>
    <el-menu-item index="/discoverMusic/singer">歌手</el-menu-item>
    <el-menu-item index="/discoverMusic/latest/newSongs">最新音乐</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'DiscoverNav'
}
</script>
<style scoped>
.el-menu {
  padding-left: 20px;
  border-bottom: 0;
}

.el-menu-item {
  font-size: 20px;
  color: #303133;
}

.el-menu-item.is-active {
  font-size: 25px;
  font-weight: 1000;
  border-bottom: 2px solid rgba(253, 84, 78);
}
</style>