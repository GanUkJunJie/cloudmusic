<template>
    <div class="login">
        <div style="margin: 0 auto;width: 100%;text-align: center;">
            <div class="phone"><img src="../../assets/img/phone.png" alt=""></div>
            <div class="table">
                <el-input v-model="tel" placeholder="请输入手机号" style="width: 300px;">
                    <el-select v-model="select"  slot="prepend" placeholder="请选择">
                        <el-option label="+86" value="1"></el-option>
                    </el-select>
                </el-input>
                <el-input v-model="pwd" placeholder="请输入密码" style="width: 300px;"></el-input>
            </div>
            <el-button :plain="true" @click="logging()">登录</el-button>
            <div @click="register()"><span style="border-bottom: 1px solid;">注册</span></div>
        </div>
    </div>
</template>
<script>
    import { Message } from 'element-ui';
    import { login, regist } from 'network/user.js';
    export default {
        name:'Login',
        data() {
            return {
                select:"1",
                tel:'',
                pwd:'',
            }
        },
        methods: {
            logging(){
                login(this.tel,this.pwd).then(
                    response => {
                        if (response==this.tel) {
                            Message.success("登录成功！")
                            window.sessionStorage.setItem("user",JSON.stringify(response))
                            this.$emit('loginSuccess',false);
                        } else{
                            Message.error(response)
                        }
                    }
                )
            },
            register(){
                regist(this.tel,this.pwd).then(
                    response => {
                        if (response==true) {
                            Message.success("注册成功！")
                        } else{
                            Message.error(response)
                        }
                    }
                )
            }
        },
    }
</script>
<style scoped>
    .login{
        width: 350px;
        height: 530px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        background-color: white;
        z-index: 999;
    }
    .phone{
        margin-top: 50px;
        width: 350px;
        height: 169px;
    }
    .el-select{
        width: 100px;
    }
    .table{
        border-radius: 5px;
    }
    .el-button{
        width: 300px;
        margin: 20px 0;
        color: white;
        background-color: #EA4848;
    }
    ::v-deep .el-button:hover{
        color: white;
        background-color: #C72E2E;
    }
</style>