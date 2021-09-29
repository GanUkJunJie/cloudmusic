<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(item,index) in bannersInfo" :key="index">
      <a :href="item.url">
        <img v-lazy="item.imageUrl || item.pic" style="width: 100%;height: 100%;">
      </a>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name: 'Swiper',
  props: {
    bannersInfo: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style scoped>
.el-carousel {
  width: 920px;
  top: 20px;
  left: 40px;
}

.el-carousel__item {
  border-radius: 10px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>