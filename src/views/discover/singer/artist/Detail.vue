<template>
  <div>
    <p>{{singerName}}简介</p>
    <div class="intro">{{introduce.briefDesc}}</div>
    <div class="introduce" v-for="(item, index) in introduce.introduction" :key="index">
      <p>{{item.ti}}</p>
      <div class="intro pre"
           v-for="(text, textIndex) in getText(item.txt)"
           :key="textIndex"
      >
        {{text}}
      </div>
    </div>
  </div>
</template>
<script>
import {getArtistTntroduce} from 'api/singerInfo.js'

export default {
  name: 'Detail',
  props: ['singerId', 'singerName'],
  data() {
    return {
      introduce: {}
    }
  },
  methods: {
    getText(texts) {
      return texts.split('\n')
    }
  },
  watch: {
    singerId() {
      getArtistTntroduce(this.singerId).then(
          response => {
            this.introduce = response
          }
      )
    }
  }
}
</script>
<style scoped>
p {
  font-size: 15px;
  font-weight: bold;
}

.intro {
  text-indent: 2em;
  color: rgb(103, 103, 103);
  line-height: 40px;
  font-size: 15px;
}

.introduce {
  margin: 25px 0;
}

.pre {
  /* 识别 \n */
  white-space: pre-line;
}
</style>