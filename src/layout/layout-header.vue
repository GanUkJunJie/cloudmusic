<template>
  <div id="layoutHeader">
    <div class="left">
      <img src="../assets/img/logo.png">
    </div>
    <div class="center">
      <div class="back">
        <div class="circle"></div>
        <img class="imgBack" src="../assets/img/header/back.png">
      </div>
      <div class="forward">
        <div class="circle"></div>
        <img class="imgForward" src="../assets/img/header/forward.png">
      </div>
      <div class="searchBox">
        <input class="search" type="text" placeholder="搜索">
        <img class="imgSearch" src="../assets/img/header/search.png" alt="">
      </div>
      <div class="voice">
        <div class="circle"></div>
        <img class="imgVoice" src="../assets/img/header/voice.png">
      </div>
    </div>
    <div class="user">
        <div class="photo" @click="photoClick()">
          <img 
          v-if="logined"
          style="width: 100%;border-radius: 50%;" 
          src="../assets/img/header/user.jpg">
        </div>
        <span v-if="!logined" class="text" @click="loginBox=!loginBox">未登录</span>
        <span v-if="logined" class="text" @click="intoUerInfo()">{{user.name}}</span>
        <i class="el-icon-caret-bottom"></i>
      <span class="text">开通VIP</span>
    </div>
    <div class="operation">
      <span class="iconfont" style="color: white">&#xe6e0;</span>
      <span class="iconfont" style="color: white">&#xe803;</span>
      <span class="iconfont" style="color: white">&#xe610;</span>
      <span class="iconfont" style="color: white">&#xe665;</span>
      <span class="iconfont" style="color: white">&#xe606;</span>
      <span class="iconfont" style="color: white">&#xe66c;</span>
      <span class="iconfont" style="color: white">&#xe66b;</span>
      <span class="iconfont" style="color: white">&#xe8e7;</span>
    </div>

    <Login class="login" v-if="loginBox" @loginSuccess="loginSuccess"/>
  </div>
</template>
<script>
  import Login from 'components/user/Login';
  import { getUserHeader } from 'network/user.js';
  export default {
    name: 'LayoutHeader',
    components:{Login},
    data() {
      return {
        loginBox:false,
        logined:false,
        user:[],
        tel:''
      }
    },
    methods: {
      photoClick(){
        if (!this.logined) {
          this.loginBox = !this.loginBox
        } else{
          this.intoUerInfo()
        }
      },
      intoUerInfo(){
        this.$router.push('/userInfo')
      },
      loginSuccess(loginBox){
        this.loginBox = loginBox
        this.getUserInfo()
      },
      getUserInfo(){
        this.tel = window.sessionStorage.getItem('user')
        if (this.tel !== null) {
          getUserHeader(this.tel).then(
            response => {
              this.user = response
              this.logined = true
            }
          )
        }
      }
    },
    created() {
      this.getUserInfo()
    },
  }
</script>
<style scoped>
#layoutHeader {
  margin: 0 auto;
  margin-bottom: 0;
  width: 1280px;
  height: 75px;
  position: relative;
  top: 40px;
  background-color: rgba(253, 84, 78);
  /* background-color: rgba(57,175,234); */
  display: flex;
}

.left {
  position: relative;
  top: 25%;
  left: 2%;
}

.center {
  position: relative;
  top: 30%;
  left: 10%;
  display: flex;
}

.back {
  display: flex;
}

.forward {
  position: relative;
  left: 50px;
  display: flex;
}

.searchBox {
  position: relative;
  left: 100px;
  display: flex;
}

.voice {
  position: relative;
  left: 320px;
}

.imgBack {
  position: absolute;
  left: -2px;
  top: -1px;
}

.imgForward {
  position: absolute;
  left: 1px;
  top: -1px;
}

.imgSearch {
  position: absolute;
  left: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
}

.imgVoice {
  position: absolute;
  left: -1px;
}

.circle {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: rgb(234, 234, 234);
  /* background-image: url(../../assets/img/header/back.png); */
  background-position: 50% 50%;
  opacity: 0.25;
}

.search {
  position: absolute;
  border-radius: 50px;
  border: 0;
  padding: 0;
  width: 200px;
  height: 30px;
  background-color: rgb(234, 234, 234);
  opacity: 0.5;
  outline: none;
  text-indent: 30px;
}

.user {
  position: relative;
  left: 45%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 180px;
  cursor: pointer;
}
.userLogin{
  display: flex;
  align-items: center; 
}
.login{
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
}
.photo {
  width: 35px;
  height: 35px;
  background-color: white;
  border-radius: 50%;
}

.text {
  margin-left: 5px;
  font-family: serif;
  font-size: 15px;
  color: white
}

.operation {
  position: relative;
  left: 48%;
  display: flex;
  align-items: center;
  letter-spacing: 25px;
}

i {
  color: rgb(234, 234, 234)
}
</style>