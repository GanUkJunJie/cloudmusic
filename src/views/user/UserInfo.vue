<template>
    <div>
        <div class="userInfo">
            <div class="photo">
                <img src="../../assets/img/header/user.jpg">
            </div>
            <div class="info">
                <div style="border-bottom: 1px solid;width: 650px;">
                    <div class="name">
                        {{user.name}}
                    </div>
                    <div style="display: flex;align-items: center;margin-bottom: 10px;">
                        <button class="level">Lv{{base.level}}</button>
                        <span v-if="user.sex=='男'" class="iconfont">&#xe6e1;</span>
                        <span v-else class="iconfont">&#xe76a;</span>
                    </div>
                    <button class="modify" @click="update">
                        <span class="iconfont">&#xe8cf;</span>
                        编辑个人信息
                    </button>
                </div>
                <div class="states">
                    <div class="state">
                        <div>{{base.state}}</div>
                        <div>动态</div>
                    </div>
                    <div class="state">
                        <div>{{base.focus}}</div>
                        <div>关注</div>
                    </div>
                    <div class="state">
                        <div>{{base.fans}}</div>
                        <div>粉丝</div>
                    </div>
                </div>
                <div>
                    <div>
                        社交网络:
                        <span class="iconfont">&#xe61a;</span>
                    </div>
                    <div>个人介绍: {{user.intro}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { getUserInfo, getUserBase } from 'network/user.js';
    export default {
        name:'UserInfo',
        data() {
            return {
                tel:'',
                user:[],
                base:[],
            }
        },
        methods: {
            getUserInfos(){
                this.tel = window.sessionStorage.getItem('user')
                getUserInfo(this.tel).then(
                    response => {
                        this.user = response
                    }
                )
                getUserBase(this.tel).then(
                    response => {
                        console.log('###',response);
                        this.base = response
                    }
                )
            },
            update(){
                this.$router.push('/updateUserInfo')
            }

        },
        created() {
            this.getUserInfos()
        },
    }
</script>
<style scoped>
    .userInfo{
        margin: 0 auto;
        padding: 20px 0;
        width: 900px;
        display: flex;
    }
    .info{
        padding-left: 30px;
    }
    .photo{
        width: 200px;
        height:200px;
    }
    .photo img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .name{
        font-weight: bold;
        font-size: 25px;
        padding-bottom: 10px;
    }
    .level{
        border: 0;
        border-radius: 10px;
    }
    .modify{
        position: absolute;
        right: 90px;
        top: 45px;
        padding: 10px 20px;
        border: 1px solid #D8D8D8;
        border-radius: 20px;
        color: black;
        background-color: white;
        cursor: pointer;
    }
    .modify:hover{
        background-color: #F2F2F2;
    }
    .iconfont{
        padding-left: 5px;
        font-size: 18px;
    }
    .states{
        display: flex;
        margin: 10px 0 10px -25px;
    }
    .state{
        width: 80px;
        text-align: center;
    }
    .state > div:first-child{
        font-weight: bold;
        font-size: 20px;
    }
</style>