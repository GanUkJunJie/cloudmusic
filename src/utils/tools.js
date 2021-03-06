//年月日时间戳转换为时间格式字符串
export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
}

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}

//转换秒为单位的时间
export function timeFormat(time) {
    // console.log(time);
    let timee = parseInt(time / 1000);
    //分钟
    var minute = timee / 60;
    var minutes = parseInt(minute);

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    //秒
    var second = timee % 60;
    var seconds = Math.round(second);
    seconds = parseInt(seconds)
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return `${minutes}:${seconds}`;
}