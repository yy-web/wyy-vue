export default{
    LOGIN:(state,{user})=>{
        state.user = user
    },
    GETSONGLIST:(state,{songList})=>{
        state.commendPage.songList = songList
    },
    PRIVATES:(state,{privateList}) =>{
        state.commendPage.privateList = privateList
    },
    NEWSONG:(state,{newSongList}) =>{
        state.commendPage.newSongList = newSongList
    },
    COMMENDMV:(state,{commendMV})=>{
        state.commendPage.commendMVData = commendMV
    },
    RADIOLIST:(state,{radioList})=>{
        state.commendPage.radioList = radioList
    },
    ALLSONGLIST:(state,{allSongList})=>{
        state.songListPage.allSongList = allSongList
    },
    PLAYLIST:(state,{playList})=>{
        state.songListPage.playList = playList
    },
    NEWMV:(state,{newMV})=>{
        state.moreMVPage.newMV = newMV
    },
    GETBILLBOARD:(state,{billboard})=>{
        state.moreMVPage.billboard = billboard
    }


}
