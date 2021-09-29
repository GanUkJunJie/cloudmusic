<template>
  <div class="album">
    <div class="topImg">
      <img v-lazy="topImg">
      <span class="top">TOP</span>
      <span class="fifty">50</span>
    </div>
    <div class="songs">
      <el-table
          :data="tableData"
          @row-dblclick="playMusic"
          :row-class-name="tableRow"
          :cell-class-name="cellClass"
          :cell-style="cellStyle"
          :show-header="false"
          stripe
          style="width: 100%">
        <el-table-column
            type="index"
            :index="indexMethod"
            label=""
            class="number"
            width="40">
        </el-table-column>
        <el-table-column
            prop=""
            label=""
            width="80">
          <span class="iconfont" style="color: rgb(184,184,184);padding-right: 5px;">&#xe6cd;</span>
          <span class="iconfont">&#xe730;</span>
        </el-table-column>
        <el-table-column
            prop="name"
            width="400">
        </el-table-column>
        <el-table-column
            prop="dt"
            width="100">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import {getTopFifty} from 'api/singerInfo.js';
import SongList from 'views/discover/playlistInfo/SongList.vue';
import {timeFormat} from 'utils/tools.js'
import {songslist} from 'mixin/playMixin.js';

export default {
  name: 'Album',
  props: ['singerId'],
  //混入
  mixins: [songslist],
  data() {
    return {
      tableData: [],
      topImg: '',
      getIndex: ""//当前播放歌曲下标
    }
  },
  watch: {
    singerId() {
      getTopFifty(this.singerId).then(
          response => {
            this.tableData = response.songs
            this.topImg = this.tableData[0].al.picUrl
            this.tableData.map(item => {
              item.dt = timeFormat(item.dt)
            })
          }
      )
    }
  },
}
</script>
<style scoped>
.album {
  display: flex;
}

.songs {
  padding-left: 100px;
  top: 10px;
}

.topImg {
  position: relative;
  display: flex;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
}

.topImg img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  filter: blur(15px);
}

.topImg span {
  position: absolute;
  color: white;
}

.topImg .top {
  left: 60px;
  top: 35px;
  font-size: 40px;
  font-weight: bold;
}

.topImg .fifty {
  left: 50px;
  top: 60px;
  font-size: 80px;
  font-weight: 1000;
}

.el-table::before {
  height: 0;
}

::v-deep .el-table .el-table__cell {
  padding: 7px 0;
}

::v-deep .el-table_1_column_1 {
  text-align: center;
}

::v-deep .cell {
  white-space: nowrap;
}
</style>