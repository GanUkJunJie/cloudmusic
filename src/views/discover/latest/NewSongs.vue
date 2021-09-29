<template>
  <div>
    <div class="tab">
      <span @click="typeChange(0)" :class="{active:type==0}">全部</span>
      <span @click="typeChange(7)" :class="{active:type==7}">华语</span>
      <span @click="typeChange(96)" :class="{active:type==96}">欧美</span>
      <span @click="typeChange(8)" :class="{active:type==8}">韩国</span>
      <span @click="typeChange(16)" :class="{active:type==16}">日本</span>
    </div>
    <el-table
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="white"
        :data="tableData"
        @row-dblclick="playMusic"
        :row-class-name="tableRow"
        :cell-class-name="cellClass"
        :cell-style="cellStyle"
        :show-header="false"
        stripe
        empty-text=" "
        style="width: 100%"
    >
      <el-table-column
          type="index"
          :index="indexMethod"
          class="number"
          width="105">
      </el-table-column>
      <el-table-column
          width="100">
        <template slot-scope="scope">
          <img v-lazy="scope.row.album.blurPicUrl">
        </template>
      </el-table-column>
      <el-table-column
          prop="name"
          width="300">
      </el-table-column>
      <el-table-column
          width="160">
        <template slot-scope="scope">
                    <span v-for="(item, index) in scope.row.artists" :key="index">
                        {{item.name}}
                        <span v-if="index<scope.row.artists.length-1">/</span>
                    </span>
        </template>
      </el-table-column>
      <el-table-column
          prop="album.name"
          width="200">
      </el-table-column>
      <el-table-column
          width="120">
        <template slot-scope="scope">
          {{getTime(scope.row.duration)}}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import {getNewSongs} from 'api/songInfo.js';
import {songslist} from 'mixin/playMixin.js';
import {timeFormat} from 'utils/tools.js';

export default {
  name: 'NewSongs',
  mixins: [songslist],
  data() {
    return {
      tableData: [],
      limit: 20,
      getIndex: "",//当前播放歌曲下标
      type: 0,
      loading: true
    }
  },
  methods: {
    getTime(duration) {
      return timeFormat(duration)
    },
    typeChange(type) {
      this.type = type
      this.loading = true
      this.getNew()
    },
    getNew() {
      getNewSongs(this.type).then(
          response => {
            this.tableData = response.data.slice(0, this.limit)
            this.loading = false
          }
      )
    }
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

img {
  width: 80px;
  height: 80px;
  border-radius: 10px;
}

.el-table {
  min-height: 200px;
}

::v-deep .el-icon-loading {
  color: #BBBBBB;
}

::v-deep .el-loading-text {
  color: #BBBBBB;
}

::v-deep .el-loading-spinner {
  top: 100px;
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

::v-deep .el-table::before {
  height: 0;
}

::v-deep .el-loading {
  margin-top: 50px;
}
</style>