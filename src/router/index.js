import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//二级路由，发现音乐
const DiscoverMusic = () => import('views/discover/DiscoverMusic')
const Personality = () => import('views/discover/children/Personality')
const Custom = () => import('views/discover/children/Custom')
const Playlist = () => import('views/discover/children/Playlist')
const Rank = () => import('views/discover/children/Rank')
const Singer = () => import('views/discover/children/Singer')
const Latest = () => import('views/discover/children/Latest')

//用户信息
const UserInfo = ()=>import('views/user/UserInfo')
const UpdateUserInfo = ()=>import('views/user/UpdateUserInfo')
//歌单信息
const MusicList = () => import('views/discover/playlistInfo/MusciList')
const SingerInfo = () => import('views/discover/singer/SingerInfo')

//三级路由，新歌推送
const NewSongs = () => import('views/discover/latest/NewSongs')
const NewDisc = () => import('views/discover/latest/NewDisc')

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/discoverMusic'
        },
        {
            path:'/userInfo',
            component:UserInfo,
        },
        {
            path:'/updateUserInfo',
            component:UpdateUserInfo,
        },
        {
            path: '/discoverMusic',
            component: DiscoverMusic,
            redirect: '/discoverMusic/personality',
            children: [
                {
                    path: 'personality',
                    component: Personality
                },
                {
                    path: 'custom',
                    component: Custom
                },
                {
                    path: 'playlist',
                    component: Playlist
                },
                {
                    path: 'rank',
                    component: Rank
                },
                {
                    path: 'singer',
                    component: Singer
                },
                {
                    path: 'latest',
                    component: Latest,
                    children: [
                        {
                            path: 'newSongs',
                            component: NewSongs
                        },
                        {
                            path: 'newDisc',
                            component: NewDisc
                        }
                    ]
                },

            ]
        },
        {
            path: '/musicList',
            component: MusicList,
        },
        {
            path: '/singerInfo',
            component: SingerInfo,
        }
    ]
})