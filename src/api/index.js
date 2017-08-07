import axios from 'axios';
var http = axios.create({
  baseURL: 'http://localhost:4000'

});
const getHttp = (action,cb,errcb) => {
    http.get(action).then(res =>{
        console.log(res);
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

export default{
    getList:(action,cb,err)=>{
        getHttp(action,cb,err)
    }
}
