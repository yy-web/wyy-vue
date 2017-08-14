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
};
