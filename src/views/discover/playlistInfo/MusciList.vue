<template>
  <div class="musicList">
    <div class="top">
      <img class="head" v-lazy="musicList.coverImgUrl">
      <div>
        <div class="title">
          <span>歌单</span>
          <h2>{{musicList.name}}</h2>
        </div>
        <div class="creator">
          <img class="author" v-lazy="musicList.creator.avatarUrl">
          <span style="margin-left: 10px;">{{musicList.creator.nickname}}</span>
          <span>{{musicList.createTime | showData}} 创建</span>
        </div>
        <div class="optionBox">
          <div class="option"
               style="background-color: rgb(236,65,65);color: white;"
          >
            <span class="iconfont">&#xe61c;</span>
            <span> 播放全部 </span>
            <i class="el-icon-plus"/>
          </div>
          <div class="option">
            <i class="el-icon-folder-add"/>
            <span> 收藏 ({{ musicList.subscribedCount }}) </span>
          </div>
          <div class="option">
            <span class="iconfont">&#xe601;</span>
            <span> 分享 ({{ musicList.shareCount }}) </span>
          </div>
          <div class="option">
            <span class="iconfont">&#xe730;</span>
            <span> 下载全部 </span>
          </div>
        </div>
        <div class="discribe">
          <p>
            标签：
            <a
                href="#"
                v-for="(item, index) in musicList.tags"
                :key="index"
            >
              {{index + 1 === musicList.tags.length ? item : item + " / "}}
            </a>
          </p>
          <p>
            歌曲：{{ musicList.trackCount }}
            播放：{{ (musicList.playCount / 10000).toFixed(0) }} 万
          </p>
        </div>
      </div>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="歌曲列表" name="first">
        <SongList :trackIds="trackIds"/>
      </el-tab-pane>
      <el-tab-pane label="评论" name="second">评论</el-tab-pane>
      <el-tab-pane label="收藏者" name="third">收藏者</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import SongList from './SongList.vue'

import {getListDetail} from 'api/songInfo.js'
import {formatDate} from 'utils/tools.js'

export default {
  name: 'MusicList',
  data() {
    return {
      musicList: {creator: {nickname: ''}},
      activeName: 'first'
    }
  },
  components: {
    SongList,
  },
  methods: {
    getList() {
      const listId = this.$route.query.listId
      if (!listId) return;
      getListDetail(listId).then(
          response => {
            console.log(response.playlist);
            this.musicList = response.playlist
          }
      )
    }
  },
  computed: {
    trackIds() {
      const arr = []
      if (!this.musicList.trackIds) return;
      for (const iterator of this.musicList.trackIds) {
        arr.push(iterator.id)
      }
      return arr
    }
  },
  created() {
    this.getList()
  },
  filters: {
    showData: function (time) {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }

}
</script>
<style scoped>
/* .musicList{

} */
.top {
  margin: 30px;
  display: flex;
}

.head {
  width: 200px;
  height: 200px;
  border-radius: 10px;
}

.title {
  margin: 10px 20px;
  display: flex;
  text-align: center;
  line-height: 20px;
}

.title span {
  width: 35px;
  height: 18px;
  border: 1px solid rgb(236, 65, 65);
  color: rgb(236, 65, 65);
  border-radius: 5px;
  font-size: 12px;
  line-height: 18px;
}

.title h2 {
  margin: 0 20px;
}

.creator {
  margin: 15px 10px;
  width: 370px;
  height: 25px;
  line-height: 25px;
  display: flex;
  justify-content: space-around;
}

.author {
  height: 100%;
  border-radius: 50%;
}

.optionBox {
  display: flex;
  margin: 10px;
  justify-content: space-around;
  width: 650px;
}

.option {
  width: 140px;
  height: 35px;
  line-height: 35px;
  border: 1px solid rgb(216, 216, 216);
  border-radius: 20px;
  text-align: center;
}

.discribe {
  margin: 0 20px;
}

.discribe p {
  margin: 5px 0;
}

::v-deep .el-tabs__header {
  padding-left: 30px;
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