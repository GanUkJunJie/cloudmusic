<template>
  <div>
    <div class="tab">
      <div class="btn">
        <routerLink
            class="left"
            active-class="actived"
            to="/discoverMusic/latest/newSongs"
        >
          新歌速递
        </routerLink>
        <routerLink
            class="right"
            active-class="actived"
            to="/discoverMusic/latest/newDisc"
        >
          新碟上架
        </routerLink>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Latest',
  data() {
    return {
      clicked: true
    }
  },
  methods: {
    btnClicked() {
      this.clicked = !this.clicked
    },
  },

}
</script>
<style scoped>
.tab {
  width: 100%;
  display: flex;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
}

.btn {
  display: flex;
  border: 1px solid #BBBBBB;
  border-radius: 50px;
}

.left {
  color: black;
  padding: 8px 30px;
  text-decoration: none;
}

.right {
  color: black;
  padding: 8px 30px;
  text-decoration: none;
}

.actived {
  background-color: #BBBBBB;
  color: white;
  border-radius: 50px;
}
</style>