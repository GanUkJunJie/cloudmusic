export const songslist = {
    methods: {
        //音乐序号(01)
        indexMethod(index) {
            //正在播放的显示播放图标，不显示序号
            if (index === this.getIndex) return ""
            //0-9添加前缀 0
            if (index < 9) return "0" + (index + 1)
            return index + 1;
        },
        //传到播放列表
        playMusic(e) {
            this.getIndex = e.index//获取马上播放
            let songList = []
            songList.push(this.tableData.map(item => item.id))
            this.$bus.$emit('playMusicItem', songList, e.id)
        },
        //每一行添加下标
        tableRow({row, rowIndex}) {
            row.index = rowIndex
        },
        //当前播放音乐显示播放图标
        cellClass({rowIndex, columnIndex}) {
            if (rowIndex === this.getIndex &&
                columnIndex === 0) {
                //阿里巴巴矢量播放图标
                return "iconfont icon-yinliang"
            }
        },
        //当前播放音乐标题显红
        cellStyle({rowIndex, columnIndex}) {
            if (rowIndex === this.getIndex &&
                (columnIndex === 2 || columnIndex === 0)) {
                return {
                    "color": "rgb(236,65,65)"
                }
            }
        }
    },
}
