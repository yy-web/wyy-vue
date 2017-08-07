import api from '../api/index'
export default{
    getList({ commit }){
        api.getList('/top/list?idx=6',(res)=>{
            commit('GETLIST',{list:res})
        })
    }
}
