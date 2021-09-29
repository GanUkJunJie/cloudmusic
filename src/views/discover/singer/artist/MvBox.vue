<template>
  <div class="box">
    <div
        class="mvBox"
        v-for="(item,index) in mvs"
        :key="index"
        @click=""
    >
            <span class="iconfont">
                &#xe769;  {{(item.playCount/10000).toFixed(0)+"万"}}
            </span>
      <div
          class="imgurl"
          :style='{"background-image":"url("+item.imgurl+")"}'
      >
      </div>
      <p class="name">{{item.name}}</p>
    </div>
  </div>
</template>
<script>
import {getArtistMv} from 'api/singerInfo.js';

export default {
  name: 'MvBox',
  props: ['singerId', 'showName'],
  data() {
    return {
      mvs: [],
      hasMore: true,
    }
  },
  watch: {
    singerId() {
      getArtistMv(this.singerId).then(
          response => {
            console.log(response);
            this.mvs = response.mvs
            this.hasMore = response.hasMore
          }
      )
    }
  }
}
</script>
<style scoped>
.box {
  display: flex;
  flex-wrap: wrap;
}

.mvBox {
  position: relative;
  height: 200px;
  width: 300px;
  margin-right: 20px;
}

.imgurl {
  height: 150px;
  width: 300px;
  background-size: 100% 160%;
  background-position: center;
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
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>