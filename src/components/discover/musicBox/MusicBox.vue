<template>
  <div class="box">
    <div
        class="musicBox"
        v-for="(item,index) in list"
        :key="index"
        @click="enterBox(item.id)"
    >
      <span class="iconfont">&#xe769;  {{(item.playCount/10000).toFixed(0)+"万"}}</span>
      <img v-lazy="item.coverImgUrl" style="width: 100%;height: 100%;border-radius: 10px;">
      <span class="name">{{item.name}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MusicBox',
  props: {
    list: {
      type: Array,
      default: () => []
    },
  },
  methods: {
    enterBox(boxId) {
      this.$router.push(`/musicList?listId=${boxId}`)
    }
  },
}
</script>
<style scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0px;
}

.musicBox {
  position: relative;
  left: 10px;
  width: 160px;
  height: 160px;
  margin: 0 0 50px 30px;
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
}
</style>