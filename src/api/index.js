import axios from 'axios';
var http = axios.create({
  baseURL: 'http://localhost:4000'

});
const getHttp = (action,cb,errcb) => {
    http.get(action).then(res =>{
        console.log(res,'action'+action);
        cb && cb(res.data)
    }).catch(err =>{
        console.log(err,action+'err');
        errcb && errcb(err)
    })
}
const postHttp = (action,data,cb,errcb) => {
    http.post(action,data).then(res =>{
        console.log(res.data,'action:'+action);
        cb(res.data)
    }).catch(err =>{
        console.log(err,action+'err');
        errcb && errcb(err)
    })
}
const fetchAll = (actionArr,cb,errcb) => {
  axios.all(actionArr)
    .then(res=>{
      cb && cb(res)
    })
    .catch(err => {
      errcb && errcb(err)
    })
}
export default{
    fetchAlls:(actionArr,cb,err)=>{
        fetchAll(actionArr,cb,err)
    },
    login:(cb,err) =>{
        const action = '/login/cellphone?phone=13249224519&password=yaoyue0726'
        return http.get(action)
    },
    //获取每日推荐歌单
    getSongList:(cb,err)=>{
        const action = '/personalized'
        if(cb){
            getHttp(action,cb,err)
        }else{
            return http.get(action)
        }
    },
    //获取独家放送
    getPrivate:(cb,err)=>{
        const action = '/personalized/privatecontent'
        if(cb){
            getHttp(action,cb,err)
        }else{
            return http.get(action)
        }
    },
    //获取最新音乐
    getNewSong:(cb,err)=>{
        const action = '/personalized/newsong'
        if(cb){
            getHttp(action,cb,err)
        }else{
            return http.get(action)
        }
    },
    //获取推荐mv
    commendMV:(cb,err)=>{
        const action = '/personalized/mv'
        if(cb){
            getHttp(action,cb,err)
        }else{
            return http.get(action)
        }
    },
    //获取主播电台
    getRadioList:(cb,err)=>{
        const action = '/personalized/djprogram'
        if(cb){
            getHttp(action,cb,err)
        }else{
            return http.get(action)
        }
    },
    getplayList:(cb,err)=>{
        const action = '/top/playlist/highquality?limit=1'
        if(cb){
            getHttp(action,cb,err)
        }else{
            return http.get(action)
        }
    },
    //获取全部歌单
    getAllSongList:(cb,err)=>{
        const action = '/top/playlist?limit=20&order=hot'
        if(cb){
            getHttp(action,cb,err)
        }else{
            return http.get(action)
        }
    },
    //获取最新mv
    getNewMV:(cb,err)=>{
        const action = '/mv/first?limit=10'
        if(cb){
            getHttp(action,cb,err)
        }else{
            return http.get(action)
        }
    },
    getMVbillboard:(cb,err)=>{
        const action = 'top/mv?limit=10'
        if(cb){
            getHttp(action,cb,err)
        }else{
            return http.get(action)
        }
    },
    getCharts:(_num,cb,err,)=>{
        const action = '/top/list?idx='+_num
        if(cb){
            getHttp(action,cb,err)
        }else{
            return http.get(action)
        }
    },
    getSonglistDetail:(_id,cb,err)=>{
        const action = '/playlist/detail?id='+_id
        if(cb){
            getHttp(action,cb,err)
        }else{
            return http.get(action)
        }
    },
    getHotSonglist:(_cat,cb,err)=>{
        const action = '/top/playlist/highquality?limit=30&cat='+_cat
        if(cb){
            getHttp(action,cb,err)
        }else{
            return http.get(action)
        }
    }

}
