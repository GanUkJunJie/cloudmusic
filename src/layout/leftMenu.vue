<template>
  <el-container id="leftMenu">
    <el-row class="tac" style="width: 100%;">
      <el-col :span="12">
        <el-menu
            default-active="/discoverMusic"
            router
            class="elmenu"
            @open="handleOpen"
            @close="handleClose">
          <el-menu-item
              index="/discoverMusic"
              class="top"
          >
            <span>发现音乐</span>
          </el-menu-item>
          <el-menu-item class="top" index="2">
            <span slot="title">播客</span>
          </el-menu-item>
          <el-menu-item class="top" index="3">
            <span slot="title">视频</span>
          </el-menu-item>
          <el-menu-item class="top" index="4">
            <span slot="title">朋友</span>
          </el-menu-item>
          <el-menu-item class="top" index="5">
            <span slot="title">直播</span>
          </el-menu-item>
          <el-menu-item class="top" index="6">
            <span slot="title">私人FM</span>
          </el-menu-item>
          <el-menu-item index="7" disabled>
            <span slot="title" style="font-size: 15px;">我的音乐</span>
          </el-menu-item>
          <el-menu-item index="8">
            <span class="iconfont">&#xe730;</span>
            <span slot="title">本地与下载</span>
          </el-menu-item>
          <el-menu-item index="9">
            <span class="iconfont">&#xe6d7;</span>
            <span slot="title">最近播放</span>
          </el-menu-item>
          <el-menu-item index="10">
            <span class="iconfont">&#xe70a;</span>
            <span slot="title">我的音乐云盘</span>
          </el-menu-item>
          <el-menu-item index="11">
            <span class="iconfont">&#xe605;</span>
            <span slot="title">我的播客</span>
          </el-menu-item>
          <el-menu-item index="12">
            <span class="iconfont">&#xe74a;</span>
            <span slot="title">我的收藏</span>
          </el-menu-item>
          <el-submenu index="13">
            <template slot="title">
              <span>创建的歌单</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1" style="padding-left: 20px;">
                <span class="iconfont">&#xe6cd;</span>
                <span slot="title">我喜欢的音乐</span>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="2" style="padding-left: 20px;">
                <span class="iconfont">&#xe780;</span>
                <span slot="title">夜阑听雪</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="14">
            <template slot="title">
              <span>收藏的歌单</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1">选项1</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
export default {
  name: 'LeftMenu',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style scoped>
#leftMenu {
  width: 20%;
  height: 100%;
  border-right: 1px solid #ccc;
  overflow: scroll;
}

.el-menu {
  border-right: 0;
}

.el-menu-item {
  font-size: 18px;
  height: 45px;
  line-height: 45px;
}

.el-col-12 {
  width: 100%;
}

.iconfont {
  margin-right: 10px;
}

.el-menu-item:focus, .el-menu-item:hover {
  outline: 0;
  background-color: rgb(245, 245, 246);
  font-weight: 510;
}

.el-menu-item.is-active {
  /* font-weight: bold; */
  color: black;
}

.top.is-active {
  font-weight: bold;
  color: black;
}

::v-deep .el-menu-item.is-disabled {
  cursor: pointer;
}

::-webkit-scrollbar {
  width: 0;
}
</style>