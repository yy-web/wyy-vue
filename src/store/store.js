import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'

const initialState = {
    user:undefined,
    commendPage:{
        songList:[],
        privateList:[],
        newSongList:[],
        commendMVData:[],
        radioList:[],
    },
    songListPage:{
        allSongList:[],
        playList:{}
    },
    moreMVPage:{
        newMV:[],
        billboard:[]
    },
    chartsPage:{
        chartsList:[],
        globalCharts:[]
    },
    songlistDetail:{},
    albumDetail:{},
    hotSonglist:[],
    playPage:{
        songDetail:[],
        lyric:{},
        songUrl:''
    }
}

Vue.use(Vuex);
const store =  new Vuex.Store({
    state:initialState,
    actions,
    mutations
})

export default store
