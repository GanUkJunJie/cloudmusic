<template>
  <div class="rank">
    <div>
      <p style="font-size: 20px;font-weight: 1000;">官方榜</p>
      <RankBox v-for="(item, index) in official" :key="index" :rankInfo="item"/>
    </div>
    <div>
      <p style="font-size: 20px;font-weight: 1000;">全球榜</p>
      <MusicBox :list="TheGlobalL" style="margin-left: -40px;"/>
    </div>
  </div>
</template>
<script>
import RankBox from 'components/discover/rank/RankBox.vue';
import MusicBox from 'components/discover/musicBox/MusicBox.vue'
import {getRankList} from 'api/songInfo.js'

export default {
  name: 'Rank',
  components: {RankBox, MusicBox},
  data() {
    return {
      official: [],
      TheGlobalL: []
    }
  },
  mounted() {
    getRankList().then(
        response => {
          this.official = response.list.splice(0, 4)
          this.TheGlobalL = response.list
          console.log(this.official);

        }
    )
  },
}
</script>
<style scoped>
.rank {
  padding-left: 40px;
}
</style>