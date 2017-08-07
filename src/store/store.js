import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'

const initialState = {
    list:[]
}

Vue.use(Vuex);
const store =  new Vuex.Store({
    state:initialState,
    actions,
    mutations
})

export default store
