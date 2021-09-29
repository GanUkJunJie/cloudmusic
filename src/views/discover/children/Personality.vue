<template>
  <div id="personality">
    <Swiper :bannersInfo="bannersInfo"/>
    <span class="recommen">推荐歌单</span>
    <span class="recommend">></span>
    <MusicBox :list="recommenList"/>
  </div>
</template>
<script>
import Swiper from 'components/discover/common/swiper.vue'
import MusicBox from 'components/discover/musicBox/MusicBox.vue'
import { swiper, getPlaylist } from 'api/songInfo.js';

export default {
  name: 'Personality',
  data() {
    return {
      bannersInfo: [],
      recommenList: [],
      limit:30,
      offset:0,
      cat:'全部歌单'
    };
  },
  components: {
    Swiper,
    MusicBox
  },
  methods: {
    getSwiter() {
      swiper().then(
        response => {
          console.log(response);
          this.bannersInfo = response.banners
        }
      )
      // this.axios.post('banner').then(
      //     response => {
      //       console.log(response);
      //       this.bannersInfo = response.data.banners
      //     }
      // )
    },
    getRecommenList() {
      getPlaylist(this.cat,this.limit,this.offset).then(
        response => {
          console.log(response);
          this.recommenList = response.playlists
        }
      )
    }

  },
  created() {
    this.getSwiter()
    this.getRecommenList()
  },
}
</script>
<style>
.recommen {
  position: relative;
  left: 40px;
  font-size: 25px;
  font-weight: bold;
}

.recommend {
  position: relative;
  left: 45px;
  height: 10px;
  font-size: 30px;
  font-weight: normal;
}

</style>