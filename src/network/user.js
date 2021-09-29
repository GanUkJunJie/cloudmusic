import { backRequest } from './backRequest.js';

// 登录
export function login(tel,pwd){
    return backRequest({
        url:'user/login',
        params:{
            tel:tel,
            pwd:pwd
        }
    })
}

//注册
export function regist(tel,pwd){
    return backRequest({
        url:'user/regist',
        params:{
            tel:tel,
            pwd:pwd
        }
    })
}

//获取用户头信息
export function getUserHeader(tel){
    return backRequest({
        url:'userInfo/getHeaderInfo',
        params:{
            tel:tel
        }
    })
}

//获取用户私人信息
export function getUserInfo(tel){
    return backRequest({
        url:'userInfo/getUserInfo',
        params:{
            tel:tel
        }
    })
}

// 修改私人信息
export function updateUserInfo(userInfo){
    return backRequest({
        method:'POST',
        url:'userInfo/updateUserInfo',
        data:{
            userInfo:userInfo
        }
    })
}


//获取用户动态信息
export function getUserBase(tel){
    return backRequest({
        url:'userBase/getUserBase',
        params:{
            tel:tel
        }
    })
}
