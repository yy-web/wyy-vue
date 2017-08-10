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
            commit('RADIOLIST',{radioList:res[4].data.djRadios.slice(0,6)})
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
    }

}
