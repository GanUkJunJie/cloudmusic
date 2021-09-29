<template>
  <div class="catlist">
    <div style="display: flex;">
      <el-button class="catbtn" @click="showList=!showList">{{cat}}></el-button>
      <div class="hotTag">
        <el-button
            type="text"
            v-for="(item, index) in hotTags"
            :key="index"
            @click="handleClick(item)"
        >
          {{item}}
        </el-button>
      </div>
    </div>
    <div class="list" v-if="showList">
      <div class="allList">全部歌单</div>
      <div class="listBox" v-for="(item,index) in categories" :key="index">
        <span :class="catList.tips[index]"></span>
        <span style="color: rgb(211,211,211);margin-left: 10px;padding: 5px;">{{item}}</span>
        <table>
          <tr v-for="row in getRow(index)" :key="row">
            <td v-for="col in cols" :key="col">
              <div v-if="(row-1)*cols+col-1 < list[index].length">
                <el-button
                    type="text"
                    @click="handleClick(getTag(index,row,col,cols).name)">
                  {{getTag(index,row,col,cols).name}}
                </el-button>
                <span v-if="getTag(index,row,col,cols).hot" id="hot">HOT</span>
              </div>

              <!--  -->
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { getTags, getHotTags, getPlaylist, getHighquality} from 'api/songInfo.js'

export default {
  name: 'Catlist',
  data() {
    return {
      showList: false,
      catList: {},
      cols: 6,
      list: [],
      hotTags: [],
      limit: 50,//每页限制
      offset: 1,//偏移量
      cat: '全部歌单'
    }
  },
  methods: {
    getCatlist() {
      getTags().then(
        response => {
          console.log(response);
          this.catList = response
          this.setCatTip()
        }
      )
      // this.axios.get('playlist/catlist').then(
      //     response => {
      //       console.log(response);
      //       this.catList = response.data
      //       this.setCatTip()
      //     }
      // )
    },
    setCatTip() {
      this.catList.tips = ['iconfont icon-network',
        'iconfont icon-gangqin', 'iconfont icon-icon-',
        'iconfont icon-xiaolian', 'iconfont icon-caidan']
    },
    getList(index) {
      return this.sub.filter(item => item.category == index)
    },
    getRow(index) {
      this.list[index] = this.getList(index)
      return Math.ceil(this.list[index].length / this.cols)
    },
    getTag(index, row, col, cols) {
      return this.list[index][(row - 1) * cols + col - 1]
    },

    getPlayList() {
      getPlaylist(this.cat, this.limit, this.getOffset).then(
          response => {
            console.log(response);
          }
      )
    },
    handleClick(tag) {
      this.cat = tag
      this.getPlaylists()
      this.getHighqualityPlaylists()
      this.showList = false
    },
    getPlaylists() {
      getPlaylist(this.cat, this.limit, this.getOffset).then(
          response => {
            this.$bus.$emit('getPlayList', response.playlists)
          }
      )
    },
    getHighqualityPlaylists() {
      getHighquality(this.cat).then(
          response => {
            this.$bus.$emit('getHighquality', response.playlists)
          }
      )
    }
  },
  computed: {
    all() {
      return this.catList.all
    },
    categories() {
      return this.catList.categories
    },
    sub() {
      return this.catList.sub
    },
    //获取偏移量
    getOffset() {
      return (this.offset - 1) * this.limit
    },
  },
  mounted() {
    this.getCatlist()
    getHotTags().then(
        response => {
          this.hotTags = response.tags.map(item => item.name)
        }
    )
    this.getPlaylists()
    this.getHighqualityPlaylists()
  },
}
</script>
<style scoped>
.catlist {
  position: relative;
  top: 20px;
  height: 60px;
}

.list {
  position: relative;
  top: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgb(0, 0, 0, 0.2);
  width: 900px;
  height: 900px;
  background-color: white;
  z-index: 1;
}

.allList {
  padding-left: 30px;
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid #ccc;
}

.el-button.is-round {
  margin-left: 30px;
}

.listBox {
  position: relative;
  left: 20px;
  margin-bottom: 20px;
  display: flex;
  line-height: 40px;
}

.iconfont {
  padding-top: 5px;
  font-size: 30px;
  color: rgb(153, 153, 153);
}

.hotTag {
  text-align: right;
  width: 820px;
}

#hot {
  vertical-align: super;
  display: inline-block;
  color: red;
  font-size: 1px;
  font-weight: bold;
  margin-right: 0;
  margin-left: -5px;
  transform: scale(0.5);
}

table {
  margin-left: 90px;
}

td {
  width: 115px;
  padding: 0;
}

.el-button {
  color: black;
}

.catbtn {
  background-color: white;
  border-radius: 20px;
  height: 30px;
  line-height: 5px;
}

.catbtn:focus, .catbtn:hover {
  color: black;
  border-color: #DCDFE6;
  background-color: rgb(242, 242, 242);
}
</style>