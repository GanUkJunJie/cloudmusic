<template>
  <div>
    <div class="tab">
      <span @click="areaChange('ALL')" :class="{active:area=='ALL'}">全部</span>
      <span @click="areaChange('ZH')" :class="{active:area=='ZH'}">华语</span>
      <span @click="areaChange('EA')" :class="{active:area=='EA'}">欧美</span>
      <span @click="areaChange('KP')" :class="{active:area=='KP'}">韩国</span>
      <span @click="areaChange('JP')" :class="{active:area=='JP'}">日本</span>
    </div>
    <div
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="white"
        class="box"
    >
      <div
          class="musicBox"
          v-for="(item,index) in tableData"
          :key="index"
          @click=""
      >
        <div class="imgs"><img v-lazy="item.blurPicUrl"></div>
        <p class="name">{{item.name}}</p>
        <p class="artist">{{item.artist.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import {getNewAlbums} from 'api/songInfo.js';

export default {
  name: 'NewDisc',
  data() {
    return {
      tableData: [],
      limit: 50,
      offset: 0,
      area: 'ALL',
      loading: true
    }
  },
  methods: {
    areaChange(area) {
      this.area = area
      this.loading = true
      this.getNew()
    },
    getNew() {
      getNewAlbums(this.area, this.limit, this.offset).then(
          response => {
            this.tableData = response.weekData.slice(0, 20)
            this.loading = false

          }
      )
    },
  },
  mounted() {
    this.getNew()
  },
}
</script>
<style scoped>
.tab {
  margin-bottom: 20px;
}

.tab span {
  margin-left: 40px;
  cursor: pointer;
  color: #BBBBBB;
}

.tab span:hover {
  color: black;
}

.active {
  color: black !important;
  font-weight: bold;
}

.box {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0px;
}

.musicBox {
  position: relative;
  left: 10px;
  width: 200px;
  height: 200px;
  margin: 0 0 50px 30px;
}

.imgs {
  background-image: url('../../../assets/img/coverall.png');
  background-position: 5% 75%;
}

.imgs img {
  width: 85%;
  height: 85%;
  border-radius: 10px;
}

.iconfont {
  position: absolute;
  font-size: 10px;
  color: white;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0));
  top: 5px;
  right: 5px;
}

.name {
  font-size: 15px;
  margin: 0;
  width: 170px;
  height: 40px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.artist {
  margin: 0;
  font-size: 12px;
  color: #9F9F9F;
}

::v-deep .el-loading-spinner {
  top: 100px;
}

::v-deep .el-icon-loading {
  color: #BBBBBB;
}

::v-deep .el-loading-text {
  color: #BBBBBB;
}
</style>