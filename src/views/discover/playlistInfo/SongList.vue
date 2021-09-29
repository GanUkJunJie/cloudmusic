<template>
  <el-table
      :data="tableData"
      @row-dblclick="playMusic"
      :row-class-name="tableRow"
      :cell-class-name="cellClass"
      :cell-style="cellStyle"
      stripe
      style="width: 100%">
    <el-table-column
        type="index"
        :index="indexMethod"
        label=""
        class="number"
        width="80">
      <!-- <span class="iconfont" 
      style="color: rgba(253,84,78);">&#xe753;</span> -->
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
        label="音乐标题"
        width="340">
    </el-table-column>
    <el-table-column
        prop="ar[0].name"
        label="歌手"
        width="200">
    </el-table-column>
    <el-table-column
        prop="al.name"
        label="专辑"
        width="200">
    </el-table-column>
    <el-table-column
        prop="dt"
        label="时长"
        width="100">
    </el-table-column>
  </el-table>
</template>
<script>
import {getSongInfo} from 'api/songInfo.js'
import {timeFormat} from 'utils/tools.js'
import {songslist} from 'mixin/playMixin.js';

export default {
  name: 'SongList',
  props: {
    trackIds: {
      type: Array,
      default: () => []
    }
  },
  mixins: [songslist],
  data() {
    return {
      tableData: [],//歌单
      songCount: 20,//获取歌曲数量
      getIndex: ""//当前播放歌曲下标
    }
  },
  watch: {
    trackIds() {
      //获取歌单歌曲
      getSongInfo(this.trackIds.slice(0, this.songCount).toString()).then(
          response => {
            this.tableData = response.songs
            this.tableData.map(item => {
              item.dt = timeFormat(item.dt)
            })
          }
      )
    }
  },
  filters: {
    songTime(time) {
      return timeFormat(time)
    }
  }
  // mounted() {
  //     this.getMusicList()
  // },
}
</script>
<style scoped>
::v-deep .el-table_1_column_1 {
  text-align: center;
}

::v-deep .cell {
  white-space: nowrap;
}
</style>