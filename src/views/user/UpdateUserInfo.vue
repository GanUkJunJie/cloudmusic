<template>
    <div class="updateUserInfo">
        <p style="font-weight: bold;">编辑个人信息</p>
        <div>
            <div class="message">
                <span>昵称：</span>
                <el-input v-model="user.name" placeholder="请输入内容"></el-input>
            </div>
            <div class="message">
                <span>介绍：</span>
                <el-input type="textarea" placeholder="请输入内容" v-model="user.intro">
                </el-input>
            </div>
            <div class="message">
                <span>性别：</span>
                <el-radio-group v-model="user.sex">
                    <el-radio label="保密">保密</el-radio>
                    <el-radio label="男">男</el-radio>
                    <el-radio label="女">女</el-radio>
                </el-radio-group>
            </div>
            <div class="message">
                <span>生日：</span>
                <el-input v-model="user.birth" placeholder="请输入内容"></el-input>
            </div>
            <div class="message">
                <span>地区：</span>
                <el-input v-model="user.address" placeholder="请输入内容"></el-input>
            </div>
            <div class="btns">
                <el-button 
                  class="btn"
                  :plain="true" 
                  @click="save()"
                  style="background-color: #D73535;color: white;"
                >
                    保存
                </el-button>
                <button class="btn" @click="cancel()">取消</button>
            </div>
            <div class="photo">
                <img :src="user.regPhoto">
                <button class="btn updateHead">修改头像</button>
            </div>
        </div>
    </div>
</template>
<script>
    import { getUserInfo,updateUserInfo } from 'network/user.js';
    import { Message } from 'element-ui';
    export default {
        name:'UpdateUerInfo',
        data() {
            return {
                user:{
                    tel:'',
                    name:'',
                    sex:'',
                    intro:'',
                    birth:'',
                    address:'',
                    regPhoto:''
                },
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
            },
            save(){
                console.log(this.user);
                updateUserInfo(this.user).then(
                    response => {
                        Message.success(("修改成功！"))
                        this.$router.push('/userInfo')
                    }
                )
            },
            cancel(){
                this.$router.push('/userInfo')
            }
        },
        created() {
            this.getUserInfos()
        },
    }
</script>
<style scoped>
    .updateUserInfo{
        width: 900px;
        margin: 0 auto;
    }
    .message{
        display: flex;
        padding: 15px 0;
    }
    .message span{
        width: 50px;
        font-size: 15px;
        line-height: 40px;
        color: #373737;
    }
    .el-input{
        width:500px;
    }
    .el-textarea{
        width: 500px;
    }
    .el-radio-group{
        padding-top: 15px;
    }
    .btns{
        margin-top: 50px;
        display: flex;
        width: 350px;
        justify-content: space-around;
    }
    .btn{
        padding: 10px 40px;
        border: 1px solid #D8D8D8;
        border-radius: 20px;
        color: black;
        background-color: white;
        cursor: pointer;
    }
    .btn:hover{
        background-color: #F2F2F2;
    }
    .updateHead{
        margin: 30px;
    }
    .photo{
        position: absolute;
        top: 70px;
        right: 100px;
        width: 200px;
        height: 200px;
        border-radius: 10px;
    }
    .photo img{
        width: 100%;
        border-radius: 10px;
    }
</style>