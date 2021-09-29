import {request} from "./request";

//获取轮播图
export function swiper(){
    return request({
        url:'banner'
    })
}

//获取歌单详情
export function getListDetail(id) {
    return request({
        url: 'playlist/detail',
        params: {
            id: id
        }
    })
}

//获取歌曲详情
export function getSongInfo(ids) {
    return request({
        url: 'song/detail',
        params: {
            ids: ids
        }
    })
}

//获取音乐url
export function getSong(id) {
    return request({
        url: 'song/url',
        params: {
            id: id
        }
    })
}

//获取标签
export function getTags(){
    return request({
        url:'playlist/catlist',
    })
}

//获取热门标签
export function getHotTags() {
    return request({
        url: 'playlist/hot'
    })
}

//获取不同歌单
export function getPlaylist(cat, limit, offset) {
    return request({
        url: 'top/playlist',
        params: {
            cat: cat,
            limit: limit,
            offset
        }
    })
}

//获取精品歌单
export function getHighquality(cat) {
    return request({
        url: 'top/playlist/highquality',
        params: {
            cat: cat,
        }
    })
}

//获取榜单
export function getRankList() {
    return request({
        url: 'toplist'
    })
}

//新歌速递
export function getNewSongs(type) {
    return request({
        url: 'top/song',
        params: {
            type: type,
        }
    })
}

//新碟上架
export function getNewAlbums(area, limit, offset) {
    return request({
        url: 'top/album',
        params: {
            area: area,
            limit: limit,
            offset: offset
        }
    })
}