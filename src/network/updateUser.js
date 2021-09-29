import axios from 'axios'

export function update(config){
    const a = axios.create({
        method:'post',
        baseURL: '/back/userInfo/updateUserInfo',
    })
    return a(config)
}

export function updateUserInfo(userInfo){
        // axios.post('/back/userInfo/updateUserInfo',{userInfo:userInfo}).then(
        //     response =>{
        //         console.log(response);
        //     }
        // )
    return update({
        data:{
            userInfo:userInfo
        }
    })
}