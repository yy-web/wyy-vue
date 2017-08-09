import { getHttp,fetchAll } from '../api/index'
export default{
    login({ commit }){
        getHttp('/login/cellphone?phone=13249224519&password=yaoyue0726',(res)=>{
            commit('LOGIN',{user:res})
        })
    },
    getSongList({ commit }){
        getHttp('/personalized',(res)=>{
            commit('GETSONGLIST',{list:res.result})
        })
    },
    privates({ commit }){
        getHttp('/personalized/privatecontent',(res)=>{
            commit('PRIVATES',{privateList:res.result})
        })
    },
    getNewSong({ commit }){
        getHttp('/personalized/newsong',(res)=>{
            commit('NEWSONG',{newSongList:res.result.slice(0,6)})
        })
    },
    commendMV({ commit }){
        getHttp('/personalized/mv',(res)=>{
            commit('COMMENDMV',{commendMV:res.result})
        })
    },
    getRadioList({ commit }){
        getHttp('/dj/recommend',(res)=>{
            commit('RADIOLIST',{radioList:res.djRadios.slice(0,6)})
        })
    },
    getAllSongList({ commit }){
        getHttp('/top/playlist?limit=20&order=hot',(res)=>{
            commit('ALLSONGLIST',{allSongList:res.playlists})
        })
    },
    fetchAlls(arr,cb,errcb){
        fetchAll(arr,cb,errcb)
    }
}
