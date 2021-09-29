<template>
  <div class="box">
    <div class="rankBox">
      <div class="imgBox" @click="toAll(rankInfo.id)">
        <img v-lazy="rankInfo.coverImgUrl">
        <span class="time">{{update}}</span>
      </div>
      <el-table
          :data="songs"
          @row-dblclick="playMusic"
          stripe
          :cell-style="cellStyle"
          style="width: 100%"
      >
        <el-table-column
            type="index"
            width="50">
        </el-table-column>
        <el-table-column
            prop="name"
            width="450">
        </el-table-column>
        <el-table-column
            prop="ar[0].name"
            width="200">
        </el-table-column>
      </el-table>
    </div>
    <span class="all" @click="toAll(rankInfo.id)">查看全部></span>
  </div>
</template>
<script>
import {getListDetail, getSongInfo} from 'api/songInfo.js'
import {formatDate} from 'utils/tools.js'

export default {
  name: 'RankBox',
  props: {
    rankInfo: {
      type: Object,
      default: "",
    }
  },
  data() {
    return {
      musicIds: [],
      songs: [],
      update: ''
    }
  },
  methods: {
    //获取前五首歌信息
    getMusic() {
      getListDetail(this.rankInfo.id).then(
          response => {
            const musicList = response.playlist.trackIds.splice(0, 5)
            musicList.map(item => this.musicIds.push(item.id))
            getSongInfo(this.musicIds.toString()).then(
                response => {
                  this.songs = response.songs
                }
            )
          }
      )
    },
    //获取最新更新时间
    getUpdateTime() {
      let date = new Date(this.rankInfo.updateTime)
      this.update = formatDate(date, 'MM月dd日更新')
    },
    //查看该榜单中所有歌曲
    toAll(boxId) {
      this.$router.push(`/musicList?listId=${boxId}`)
    },
    //传到播放列表
    playMusic(e) {
      this.getIndex = e.index//获取马上播放
      this.$bus.$emit('playMusicItem', this.musicIds, e.id)
    },
    //设置table样式
    cellStyle({rowIndex, columnIndex}) {
      //前三序号标红
      if (rowIndex <= 2 && columnIndex == 0) {
        return {
          "color": "red"
        }
      }
      //歌手居右
      if (columnIndex == 2) {
        return {
          "text-align": "right",
          "color": "rgb(155,155,155)"
        }
      }
    }
  },
  mounted() {
    this.getMusic()
    this.getUpdateTime()
  },
}
</script>
<style scoped>
.box {
  width: 970px;
  height: 260px;
}

.rankBox {
  display: flex;
}

.imgBox {
  width: 200px;
  height: 200px;
}

.imgBox img {
  width: 100%;
  border-radius: 10px;
}

.all {
  position: relative;
  font-size: 10px;
  top: -35px;
  left: 260px;
  color: rgb(55, 55, 55);
  cursor: pointer;
}

.time {
  position: relative;
  top: -70px;
  left: 45px;
  color: white;
}

::v-deep .el-table__row {
  height: 30px;
}

::v-deep .el-table {
  top: -35px;
  padding-left: 50px;
}

::v-deep .el-table::before {
  height: 0;
}

::v-deep .el-table .el-table__cell {
  padding: 8px 0;
}

::v-deep .el-table .cell {
  white-space: nowrap;
}
</style>