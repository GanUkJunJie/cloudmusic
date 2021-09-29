import {request} from "./request";

//根据筛选获取歌手s
export function getArtists(area, type, name, limit, offset) {
    return request({
        url: 'artist/list',
        params: {
            area: area,
            type: type,
            limit: limit,
            initial: name,
            offset: offset
        }
    })
}

//获取单个歌手详情
export function getArtistInfo(id) {
    return request({
        url: 'artist/detail',
        params: {
            id: id
        }
    })
}

//热门50首歌
export function getTopFifty(id) {
    return request({
        url: 'artist/top/song',
        params: {
            id: id
        }
    })
}

//获取歌手介绍
export function getArtistTntroduce(id) {
    return request({
        url: 'artist/desc',
        params: {
            id: id
        }
    })
}

//获取歌手mv
export function getArtistMv(id) {
    return request({
        url: 'artist/mv',
        params: {
            id: id
        }
    })
}

//获取相似歌手
export function getSimiSingers(id) {
    return request({
        url: 'simi/artist',
        params: {
            id: id
        }
    })
}