import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'

const initialState = {
    songList:[],
    user:undefined,
    privateList:[],
    newSongList:[],
    commendMVData:[],
    radioList:[],
    allSongList:[]
}

Vue.use(Vuex);
const store =  new Vuex.Store({
    state:initialState,
    actions,
    mutations
})

export default store
