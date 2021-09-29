<template>
  <div class="box">
    <div
        class="musicBox"
        v-for="(item,index) in artists"
        :key="index"
        @click="enterBox(item.id)"
    >
      <img v-lazy="item.img1v1Url" style="width: 100%;height: 100%;border-radius: 10px;">
      <span class="name">{{item.name}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SingerBox',
  props: {
    artists: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    enterBox(id) {
      this.$router.push(`/singerInfo?singerId=${id}`)
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