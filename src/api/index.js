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
    .then(axios.spread(function(acct,perms){
      //当这两个请求都完成的时候会触发这个函数，两个参数分别代表返回的结果
      console.log(acct,'acct');
      console.log(perms,'perms');
    }))
    .catch(err => {
      //errcb && errcb(err)
    })
}
export default{
    fetchAlls:(actionArr,cb,err)=>{
        fetchAll(actionArr,cb,err)
    },
    login:(action,cb,err) =>{
        getHttp(action,cb,err)
    },
    //获取每日推荐歌单
    getSongList:(action,cb,err)=>{
        getHttp(action,cb,err)
    },
    //获取独家放送
    getPrivate:(action,cb,err)=>{
        getHttp(action,cb,err)
    },
    //获取最新音乐
    getNewSong:(action,cb,err)=>{
        getHttp(action,cb,err)
    },
    //获取推荐mv
    commendMV:(action,cb,err)=>{
        getHttp(action,cb,err)
    },
    //获取主播电台
    getRadioList:(action,cb,err)=>{
        getHttp(action,cb,err)
    },
    //获取全部歌单
    getAllSongList:(action,cb,err)=>{
        getHttp(action,cb,err)
    },
}
