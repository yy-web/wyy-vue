import axios from 'axios';
axios.default.baseURL = 'http://localhost:4000';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.get('/top/list?idx=1').then(function(res){
    console.log(res);
}).then(function(err){
    console.log(err);
})
