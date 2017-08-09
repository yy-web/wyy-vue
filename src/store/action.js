import api from '../api/index'
export default{
    login({ commit }){
        api.getSongList('/login/cellphone?phone=13249224519&password=yaoyue0726',(res)=>{
            commit('LOGIN',{user:res})
        })
    },
    getSongList({ commit }){
        api.getSongList('/personalized',(res)=>{
            commit('GETSONGLIST',{list:res.result})
        })
    },
    privates({ commit }){
        api.getPrivate('/personalized/privatecontent',(res)=>{
            commit('PRIVATES',{privateList:res.result})
        })
    },
    getNewSong({ commit }){
        api.getNewSong('/personalized/newsong',(res)=>{
            commit('NEWSONG',{newSongList:res.result.slice(0,6)})
        })
    },
    commendMV({ commit }){
        api.commendMV('/personalized/mv',(res)=>{
            commit('COMMENDMV',{commendMV:res.result})
        })
    },
    getRadioList({ commit }){
        api.commendMV('/dj/recommend',(res)=>{
            commit('RADIOLIST',{radioList:res.djRadios.slice(0,6)})
        })
    },
    getAllSongList({ commit }){
        api.commendMV('/top/playlist?limit=20&order=hot',(res)=>{
            commit('ALLSONGLIST',{allSongList:res.playlists})
        })
    },
    fetchAlls(arr,cb,errcb){
        api.fetchAlls(arr,cb,errcb)
    }
}
