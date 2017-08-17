var mp3 = [
    'http://m10.music.126.net/20170817153731/8344691ce846e7548e37c363a0763667/ymusic/f1ae/0bd1/31a9/5d64960d0cbebc0d089bc85a6ef54680.mp3']

var lrc = "[00:00.00] 作曲 : 黄家驹\n[00:01.00] 作词 : 黄家驹\n[00:18.580]今天我 寒夜里看雪飘过\n[00:25.050]怀着冷却了的心窝漂远方\n[00:30.990]风雨里追赶 雾里分不清影踪\n[00:37.150]天空海阔你与我 可会变 (谁没在变)\n[00:43.590]多少次 迎着冷眼与嘲笑\n[00:48.860]\n[00:49.360]从没有放弃过心中的理想\n[00:55.340]一刹那恍惚 若有所失的感觉\n[01:01.460]不知不觉已变淡 心里爱 (谁明白我)\n[01:08.060]\n[01:08.330]原谅我这一生不羁放纵爱自由\n[01:15.280]也会怕有一天会跌倒\n[01:21.390]背弃了理想 谁人都可以\n[01:27.770]哪会怕有一天只你共我\n[01:33.410]\n[01:42.270]今天我 寒夜里看雪飘过\n[01:48.380]怀着冷却了的心窝漂远方\n[01:55.400]风雨里追赶 雾里分不清影踪\n[02:01.160]天空海阔你与我 可会变 (谁没在变)\n[02:06.970]\n[02:07.490]原谅我这一生不羁放纵爱自由\n[02:14.660]也会怕有一天会跌倒\n[02:21.110]背弃了理想 谁人都可以\n[02:26.360]哪会怕有一天只你共我\n[02:32.180]\n[03:07.280]仍然自由自我 永远高唱我歌\n[03:13.960]走遍千里\n[03:18.210]\n[03:19.090]原谅我这一生不羁放纵爱自由\n[03:27.380]也会怕有一天会跌倒\n[03:33.050]背弃了理想 谁人都可以\n[03:38.880]哪会怕有一天只你共我\n[03:46.020]背弃了理想 谁人都可以\n[03:51.710]哪会怕有一天只你共我\n[03:56.180]\n[03:57.280]原谅我这一生不羁放纵爱自由\n[04:03.330]也会怕有一天会跌倒\n[04:09.320]背弃了理想 谁人都可以\n[04:15.430]哪会怕有一天只你共我\n";
var lrc1 = lrc.split('\n');
var p = '';
var times = '';
var lrccc = [];
var date = new Date()
var m = [];
var s = [];
var t = [];
var lrcDom = document.getElementById('lrc');
var audio = document.getElementById('audio');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var set;
var fetchTimeNum ;
//times = (lrc.match(/\[\d*:\d*((\.|\:)\d*)*\]/g))
for (var i = 0; i < lrc1.length; i++) {
    lrccc.push(lrc1[i].replace(/\[\d*:\d*((\.|\:)\d*)*\]/g, ''))
    p += '<p>' + lrccc[i] + '</p>'
}
times = (lrc.match(/\[\d*:\d*((\.|\:)\d*)*\]/g))
for (var j = 0; j < times.length; j++) {
    m.push(parseFloat(times[j].substring(1, times[j].indexOf(':'))))
    s.push(parseFloat(times[j].substring(times[j].indexOf(':') + 1, times[j].length - 1)))
    t.push(m[j] * 60 + s[j])
    //t.push(m[j] * 60 + s[j])
}
lrcDom.innerHTML = p;
console.log("t", t)


function fetchTime(){
    var totalTime = parseFloat(audio.duration.toFixed(2))
    if(totalTime === fetchTimeNum){
        console.log(123)
        clearTimeout(set)
        return
    }
    fetchTimeNum = parseFloat(audio.currentTime.toFixed(2))
    console.time('text')
    for(var q = 0 ; q < t.length ; q++){
        lrcDom.childNodes[q].style.color = 'black'
        if(fetchTimeNum > t[q] && fetchTimeNum < t[q+1]){
            lrcDom.childNodes[q].style.color = 'pink'
            console.log('123132',lrccc[q])
        }
    }
    console.timeEnd('text')
    set = setTimeout(function(){
        fetchTime()
    },200)
}

console.log(fetchTimeNum)
start.onclick = function() {
    audio.src = mp3[0];
    fetchTimeNum = 0;
    fetchTime()
    audio.play()
}
stop.onclick = function() {
    audio.pause()
    clearTimeout(set)
}
