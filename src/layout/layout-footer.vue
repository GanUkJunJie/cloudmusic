<template>
  <div class="layoutFooter">
    <div class="music">
      <div class="imgbox">
        <img style="height: 100%;border-radius: 10px;" v-lazy="songpicUrl">
      </div>
      <div class="song">
        <p class="songname">{{songName}}</p>
        <p style="margin: 5px 0;font-size: 15px;">{{singer}}</p>
      </div>
    </div>
    <div class="musicControl">
      <div class="control">
        <span class="iconfont">&#xe7d9;</span>
        <span class="iconfont" @click="playPre()">&#xe76e;</span>
        <span class="iconfont" v-show="!isPlay" @click="setIsPlay()">&#xe61c;</span>
        <span class="iconfont"
              style="font-size: 20px;line-height: 30px;width: 30px;"
              v-show="isPlay" @click="setIsPlay()">&#xe624;
            </span>
        <span class="iconfont" @click="playNext()">&#xe76d;</span>
      </div>
      <div class="musicLine">
        <span style="color: rgb(204,205,200);">{{getCurrentTime()}}</span>
        <el-slider
            style="width: 350px;"
            :show-tooltip="false"
            v-model="currentTime"
            :max="durationTime"
            @change="setMusicCurrent()"
        >
        </el-slider>
        <span style="color: rgb(204,205,200);">{{getDurationTime()}}</span>
        <!-- autoplay -->
        <audio
            :src="songUrl"
            
            @timeupdate="audioTimeUpdate()"
            @ended="musicEnded()"
            ref="audio"
        ></audio>
      </div>
    </div>
    <div class="buttons">
      <span class="iconfont">&#xe61f;</span>
      <span class="iconfont">&#xe67f;</span>
      <span class="iconfont">&#xe6fe;</span>
      <span class="iconfont">&#xe6a8;</span>
    </div>
  </div>
</template>
<script>
import {getSong, getSongInfo} from 'api/songInfo.js'
import {timeFormat} from 'utils/tools.js'

export default {
  name: 'LayoutFooter',
  data() {
    return {
      playList: [1456673752],//设置一个默认歌单
      songId: 1456673752,//设置一个默认当前播放
      song: {},
      songUrl: {},//歌曲url
      currentTime: 0,//开始时间
      durationTime: 0,//结束时间
      isPlay: true,
    }
  },
  mounted() {
    this.getMusicInfo()
    this.$bus.$on("playMusicItem", (playList, songId) => {
      this.isPlay = true
      this.playList = playList[0]
      this.songId = songId
    })
  },
  computed: {
    songName() {
      return this.song.name ? this.song.name : ''
    },
    singer() {
      return this.song.ar ? this.song.ar[0].name : ''
    },
    songpicUrl() {
      return this.song.al?.picUrl ? this.song.al.picUrl : ''
    }
  },
  watch: {
    songId() {
      this.getMusicInfo()
    }
  },
  methods: {
    //获取歌曲信息
    getMusicInfo() {
      getSongInfo(this.songId).then(
          response => {
            this.song = response.songs[0]
            this.durationTime = this.song.dt / 1000
            this.getMusicUrl(this.song.id)
          }
      )
    },
    //歌曲音频
    getMusicUrl(id) {
      getSong(id).then(
          response => {
            this.songUrl = response.data[0].url
          }
      )
    },
    //将音频时间与滑块绑定
    audioTimeUpdate() {
      this.currentTime = this.$refs.audio.currentTime
    },
    //格式化开始时间
    getCurrentTime() {
      return timeFormat(this.currentTime * 1000)
    },
    //格式化结束时间
    getDurationTime() {
      return timeFormat(this.durationTime * 1000)
    },
    //拖动滑块，音频时间改变
    setMusicCurrent() {
      this.$refs.audio.currentTime = this.currentTime
      this.isPlay = true
    },
    //播放与暂停
    setIsPlay() {
      this.isPlay = !this.isPlay
      if (this.isPlay) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()

      }
    },
    playNext() {
      console.log(this.playList);
      let count = this.playList.indexOf(this.songId)
      if (count >= this.playList.length - 1) {
        this.songId = this.playList[0]
      } else {
        this.songId = this.playList[count + 1]
      }
    },
    playPre() {
      let count = this.playList.indexOf(this.songId)
      if (count <= 0) {
        this.songId = this.playList[this.playList.length - 1]
      } else {
        this.songId = this.playList[count - 1]
      }
    },
    //当前音频播放完成
    musicEnded() {
      this.playNext()
    }

  },

}
</script>
<style scoped>
.layoutFooter {
  margin: 0 auto;
  margin-top: 0;
  width: 1280px;
  height: 93px;
  position: relative;
  top: 20px;
  background-color: rgb(255, 255, 255);
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
}

.music {
  margin-left: 20px;
  width: 300px;
  height: 70px;
  display: flex;
}

.imgbox {
  height: 70px;
  width: 70px;
  border: 1px solid #FAFAFA;
  border-radius: 10px;
}

.song {
  text-align: left;
  padding: 15px;
}

.songname {
  margin: 0;
  width: 200px;
  height: 20px;
  overflow-x: scroll;
  white-space: nowrap;
  overflow: hidden;
}

.musicControl {
  position: relative;
  left: 5%;
  width: 500px;
  height: 70px;
  text-align: center;
}

.control {
  position: relative;
  left: 20%;
  width: 250px;
  display: flex;
  justify-content: space-around;
}

.control span {
  font-size: 30px;
  cursor: pointer;
}

.musicLine {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.el-slider ::v-deep .el-slider__bar {
  background-color: rgba(253, 84, 78);
}

.el-slider ::v-deep .el-slider__button {
  border: 1px solid #ccc;
  width: 12px;
  height: 12px;
}

.buttons {
  position: relative;
  left: 15%;
  width: 250px;
  display: flex;
  justify-content: space-around;
}

.buttons span {
  font-size: 25px;
}

::v-deep .el-slider__button:hover {
  cursor: pointer;
}

::v-deep .el-slider__button-wrapper:hover {
  cursor: pointer;
}
</style>