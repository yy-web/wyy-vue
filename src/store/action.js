import api from '../api/index'
export default{
    login({ commit }){
        api.getSongList((res)=>{
            commit('LOGIN',{user:res})
        })
    },
    fetchCommend({ commit }){
        const arr = [api.getPrivate(),api.getSongList(),api.getNewSong(),api.commendMV(),api.getRadioList()]
        const cb = (res)=>{
            commit('PRIVATES',{privateList:res[0].data.result})
            commit('GETSONGLIST',{songList:res[1].data.result})
            commit('NEWSONG',{newSongList:res[2].data.result.slice(0,6)})
            commit('COMMENDMV',{commendMV:res[3].data.result})
            commit('RADIOLIST',{radioList:res[4].data.result})
        }
        api.fetchAlls(arr,cb)
    },
    fetchSongList({ commit }){
        const arr = [api.getAllSongList(),api.getplayList()]
        const cb = (res)=>{
            commit('ALLSONGLIST',{allSongList:res[0].data.playlists})
            commit('PLAYLIST',{playList:res[1].data.playlists[0]})
        }
        api.fetchAlls(arr,cb)
    },
    getNewMV({ commit }){
        api.getNewMV(res=>{
            commit('NEWMV',{newMV:res.data})
        })
    },
    getMVbillboard({ commit }){
        api.getMVbillboard(res=>{
            commit('GETBILLBOARD',{billboard:res.data})
        })
    },
    getCharts({commit}){
        const arr = [api.getCharts(3),api.getCharts(0),api.getCharts(2),api.getCharts(1)]
        const cb = (res)=>{
            console.log(res,'res');
            commit('GETCHARTS',{chartsList:res})
        }
        api.fetchAlls(arr,cb)
    },
    getGlobalCharts({commit}){
        const arr = [api.getCharts(4),api.getCharts(21),api.getCharts(10),api.getCharts(5),api.getCharts(6),api.getCharts(19),api.getCharts(8),api.getCharts(9),api.getCharts(7),api.getCharts(20),api.getCharts(14),api.getCharts(15),api.getCharts(16)]
        const cb = (res)=>{
            console.log(res,'res');
            commit('GlOBALCHARTS',{globalCharts:res})
        }
        api.fetchAlls(arr,cb)
    },
    getSonglistDetail({ commit },id){
        api.getSonglistDetail(id,res=>{
            commit('GETSONGLISTDETAIL',{songlistDetail:res.playlist})
        })
    },
    getalbumDetail({ commit },id){
        api.getalbumDetail(id,res=>{
            commit('GETALBUMDETAIL',{albumDetail:res})
        })
    },
    getHotSonglist({ commit },cat){
        api.getHotSonglist(cat,res=>{
            commit('GETHOTSONGLIST',{hotSonglist:res.playlists})
        })
    },
    fetchSong({ commit },_id){
        console.log(_id,'2222');
        const arr = [api.getSongDetail(_id),api.getLyric(_id),api.getSongUrl(_id)]
        const cb = (res)=>{
            console.log(res[0].data.songs);
            commit('GETSONGDETAIL',{songDetail:res[0].data.songs[0]})
            commit('GETLYRIC',{lyric:res[1].data.lrc})
            commit('GETSONGURL',{songUrl:res[2].data.data.url})
        }
        api.fetchAlls(arr,cb)
    },

}
