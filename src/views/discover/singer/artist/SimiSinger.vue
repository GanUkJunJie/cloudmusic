<template>
  <div>
    <SingerBox :artists="artists" style="margin-left: -40px;"/>
  </div>
</template>
<script>
import SingerBox from 'components/discover/singers/SingerBox.vue';
import {getSimiSingers} from 'api/singerInfo.js';

export default {
  name: 'SimiSinger',
  props: ['singerId'],
  components: {SingerBox},
  data() {
    return {
      artists: []
    }
  },
  watch: {
    singerId() {
      getSimiSingers(this.singerId).then(
          response => {
            this.artists = response.artists
          }
      )
    }
  }

}
</script>
<style>

</style>