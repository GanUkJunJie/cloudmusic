<template>
  <div class="nav">
    <span>{{name}}:</span>
    <div class="btn">
            <span
                v-for="(item, index) in options"
                :key="index"
            >
                <button
                    :class="{clickBtn:index==choosed}"
                    @click="changeIndex(index)"
                >
                    {{item.content}}
                </button>
                <span id="bar">|</span>
            </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SingerNav',
  props: ["name", "options"],
  data() {
    return {
      choosed: 0
    }
  },
  methods: {
    //点击切换选择
    changeIndex(index) {
      this.choosed = index
      // this.setArea(this.options[index].value)
      this.$emit('setIndex', this.options[index].value);
      // this.$bus.$emit('setArea',this.options[index].value)
    }
  },
}
</script>
<style scoped>
.nav {
  padding-left: 40px;
  display: flex;
  font-size: 12px;
}

.nav span {
  color: rgb(55, 55, 55);
  padding: 5px;
}

.btn {
  width: 900px;
}

.clickBtn {
  color: red;
  background-color: rgb(253, 245, 245);
}

.clickBtn:hover {
  background-color: rgb(253, 237, 237);
}

button {
  width: 50px;
  margin: 5px 10px;
  border-radius: 10px;
  padding: 1px;
  text-align: center;
  border: 0;
  background-color: white;
  color: rgb(103, 103, 103);
}

#bar {
  padding: 0;
  color: rgb(242, 242, 242);
}
</style>