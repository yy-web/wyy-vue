export default{
    GETSONGLIST:(state,{list})=>{
        state.songList = list
    },
    LOGIN:(state,{user})=>{
        state.user = user
    },
    PRIVATES:(state,{privateList}) =>{
        state.privateList = privateList
    },
    NEWSONG:(state,{newSongList}) =>{
        state.newSongList = newSongList
    },
    COMMENDMV:(state,{commendMV})=>{
        state.commendMVData = commendMV
    },
    RADIOLIST:(state,{radioList})=>{
        state.radioList = radioList
    },
    ALLSONGLIST:(state,{allSongList})=>{
        state.allSongList = allSongList
    }

}
