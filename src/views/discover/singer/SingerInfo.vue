<template>
  <div class="singerInfo">
    <div class="top">
      <div class="artistImg"><img v-lazy="artist.cover"></div>
      <div class="info">
        <p>{{artist.name}}</p>
        <el-button class="catbtn">
          <i class="el-icon-folder-add"/>
          收藏
        </el-button>
        <div class="musicCount">
          <span>单曲数: {{ artist.musicSize }}</span>
          <span>专辑数: {{ artist.albumSize }}</span>
          <span>MV数: {{ artist.mvSize }}</span>
        </div>
      </div>
    </div>
    <div style="margin-top: 50px;">
      <el-tabs v-model="activeName">
        <el-tab-pane label="专辑" name="first">
          <Album :singerId="artist.id"/>
        </el-tab-pane>
        <el-tab-pane label="MV" name="second">
          <MvBox :singerId="artist.id" showName="false"/>
        </el-tab-pane>
        <el-tab-pane label="歌手详情" name="third">
          <Detail :singerId="artist.id" :singerName="artist.name"/>
        </el-tab-pane>
        <el-tab-pane label="相似歌手" name="forth">
          <SimiSinger :singerId="artist.id"/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import {getArtistInfo} from 'api/singerInfo.js'
import Album from './artist/Album.vue';
import Detail from './artist/Detail.vue'
import MvBox from './artist/MvBox.vue';
import SimiSinger from './artist/SimiSinger.vue'

export default {
  name: 'SingerInfo',
  components: {Album, Detail, MvBox, SimiSinger},
  data() {
    return {
      artist: {},
      activeName: 'first'
    }
  },
  methods: {
    getSinger() {

      const id = this.$route.query.singerId
      console.log(id);
      getArtistInfo(id).then(
          response => {
            // console.log(response.data.artist);
            this.artist = response.data.artist
          }
      )
    }
  },
  watch: {
    $route: function (to, from) {
      console.log(123);
      this.getSinger()
    }
  },
  mounted() {
    this.getSinger()
  },
}
</script>
<style scoped>
.singerInfo {
  padding-top: 20px;
  padding-left: 40px;
}

.top {
  display: flex;
}

.artistImg {
  width: 260px;
  height: 240px;
}

.artistImg img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.info {
  padding-left: 30px;
}

.info p {
  margin: 0;
  margin-bottom: 30px;
  font-size: 25px;
  font-weight: bold;
}

.el-button {
  padding: 5px 20px;
}

.catbtn {
  background-color: white;
  border-radius: 20px;
  height: 35px;
}

.catbtn:focus, .catbtn:hover {
  color: black;
  border-color: #DCDFE6;
  background-color: rgb(242, 242, 242);
}

.musicCount {
  margin-top: 30px;
  font-size: 15px;
  color: #606266;
}

.musicCount span {
  margin-right: 30px;
}

::v-deep .el-tabs__nav-wrap::after {
  height: 0;
}

::v-deep .el-tabs__item.is-active {
  color: black;
  font-weight: bold;
}

::v-deep .el-tabs__active-bar {
  background-color: rgb(236, 65, 65);
}
</style>