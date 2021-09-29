<template>
  <div class="playlist">
    <div class="top">
      <div class="back" :style='{"background-image":"url("+highOne.coverImgUrl+")"}'>
      </div>
      <div class="highImg"><img v-lazy="highOne.coverImgUrl"></div>
      <div class="highInfo">
        <button>
          <span class="iconfont">&#xe6a7;</span>
          精品歌单
        </button>
        <p class="hName">{{highOne.name}}</p>
        <p class="hWriter">{{highOne.copywriter}}</p>
      </div>

    </div>
    <Catlist/>
    <div style="margin-left: -40px;">
      <MusicBox :list="playList"/>
    </div>
  </div>
</template>
<script>
import Catlist from 'components/discover/playlist/catlist.vue';
import MusicBox from 'components/discover/musicBox/MusicBox.vue'

export default {
  name: 'Playlist',
  data() {
    return {
      playList: [],
      highquality: [],
    }
  },
  components: {
    Catlist,
    MusicBox
  },
  methods: {},
  computed: {
    highOne() {
      return this.highquality[0] ? this.highquality[0] : ''
    }
  },
  mounted() {
    this.$bus.$on('getPlayList', playList => {
      this.playList = playList
    })
    this.$bus.$on('getHighquality', highquality => {
      this.highquality = highquality
      console.log(this.highquality[0]);
    })
  },


}
</script>
<style scoped>
.playlist {
  position: relative;
  top: 20px;
  left: 40px;
}

.top {
  border-radius: 10px;
  width: 920px;
  height: 180px;
  overflow: hidden;
  display: flex;
}

.back {
  width: 100%;
  height: 100%;
  background-position: center;
  filter: blur(50px) brightness(70%);
}

.tips {
  padding-top: 20px;
  height: 50px;
}

.highImg {
  position: absolute;
  left: 15px;
  top: 15px;
  border-radius: 10px;
  height: 150px;
}

.highImg img {
  height: 100%;
  border-radius: 10px;
}

.highInfo {
  position: absolute;
  left: 180px;
  top: 35px;
}

.highInfo .hName {
  color: white;
}

.highInfo .hWriter {
  color: rgb(180, 171, 185);
}

.highInfo button {
  height: 30px;
  width: 100px;
  border-radius: 20px;
  border: 1px solid rgb(231, 170, 90);
  color: rgb(231, 170, 90);
  background-color: transparent;
  padding: 0;
  cursor: pointer;
}
</style>