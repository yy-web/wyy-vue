exports.install = function (Vue, options) {
    Vue.prototype.count = (_total)=>{
        let num = _total
        if(String(_total).length <= 5){
            return num
        }else{
            num = parseInt(_total/10000)+'万'
            return num
        }
    }
    Vue.prototype.getDate = (_timeStamp)=>{
        let date = new Date(_timeStamp);
        const Y = date.getFullYear() + '-';
        const M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        const D = date.getDate() + ' ';
        return (Y+M+D);
    }
};
