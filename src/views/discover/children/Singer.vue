<template>
  <div class="singer">
    <SingerNav :options="areas" name="语种" @setIndex="setArea"/>
    <SingerNav :options="types" name="分类" @setIndex="setType"/>
    <SingerNav :options="Fnames" name="筛选" @setIndex="setName"/>
    <SingerBox :artists="artists"/>
  </div>
</template>
<script>
import SingerNav from 'components/discover/singers/SingerNav.vue'
import SingerBox from 'components/discover/singers/SingerBox.vue'
import {areas, types, Fnames} from 'common/data.js'
import {getArtists} from 'api/singerInfo.js'

export default {
  name: 'Singer',
  components: {SingerNav, SingerBox},
  data() {
    return {
      areas,
      types,
      Fnames,
      currentArea: -1,
      currentType: -1,
      currentName: -1,
      limit: 30,
      offset: 1,
      artists: [],
    }
  },
  methods: {
    setArea(index) {
      this.currentArea = index
      this.getArtist()
    },
    setType(index) {
      this.currentType = index
      this.getArtist()
    },
    setName(index) {
      this.currentName = index
      this.getArtist()
    },
    getArtist() {
      getArtists(
          this.currentArea,
          this.currentType,
          this.currentName,
          this.limit,
          this.offset).then(
          response => {
            this.artists = response.artists
          }
      )
    }

  },
  mounted() {
    this.getArtist()
  },
}
</script>
<style scoped>
.singer {
  padding-top: 20px;
}
</style>