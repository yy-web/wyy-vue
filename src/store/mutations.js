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
    },
    GETCHARTS:(state,{chartsList})=>{
        state.chartsPage.chartsList = chartsList;
    },
    GlOBALCHARTS:(state,{globalCharts})=>{
        state.chartsPage.globalCharts = globalCharts;
    },
    GETSONGLISTDETAIL:(state,{songlistDetail})=>{
        state.songlistDetail = songlistDetail;
    },
    GETHOTSONGLIST:(state,{hotSonglist})=>{
        state.hotSonglist = hotSonglist;
    },
    GETALBUMDETAIL:(state,{albumDetail})=>{
        state.albumDetail = albumDetail;
    },
    GETSONGDETAIL:(state,{songDetail})=>{
        state.playPage.songDetail = songDetail;
    },
    GETLYRIC:(state,{lyric})=>{
        state.playPage.lyric = lyric;
    },
    GETSONGURL:(state,{songUrl})=>{
        state.playPage.songUrl = songUrl;
    }
}
