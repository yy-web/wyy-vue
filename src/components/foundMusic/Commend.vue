<template>
    <div class="commend">
        <banner></banner>
        <div class="tool">
            <div class="item">
                <img :src="require('../../../static/img/topbtn_fm.png')"/>
                <span>私人电台</span>
            </div>
            <div class="item">
                <img :src="require('../../../static/img/topbtn_special.png')"/>
                <span>每日歌曲推荐</span>
            </div>
            <div class="item">
                <img :src="require('../../../static/img/topbtn_rank.png')"/>
                <span>云音乐热歌榜</span>
            </div>
        </div>
        <song-list :listData="listData"></song-list>
    </div>
</template>
<script>
import banner from '@/components/foundMusic/Banner'
import songList from '@/components/SongList'
export default{
    name:'commend',
    data(){
        return{
          listData:[{imgSrc:'http://p1.music.126.net/wn3eF0GEWBqmgYFy5tj4gA==/109951162985002004.jpg?param=140y140',num:'100w',desc:'案件法律框架的法律框架房东'}
        ,{imgSrc:'http://p1.music.126.net/wn3eF0GEWBqmgYFy5tj4gA==/109951162985002004.jpg?param=140y140',num:'100w',desc:'案件法律框架的法律框架房东'},
      {imgSrc:'http://p1.music.126.net/wn3eF0GEWBqmgYFy5tj4gA==/109951162985002004.jpg?param=140y140',num:'100w',desc:'案件法律框架的法律框架房东'},]
        }
    },
    components:{
        banner,
        songList
    }
}

</script>
<style lang="scss" scoped>
@import '../../style/index.scss';
.tool{
    background: #fff;
    height: rem(100);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:0 rem(15);
    border-bottom: 1px solid #ddd;
    .item{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: rem(12);
        width: 30%;
    }
}
    img{
        border-radius: 50%;
        border: 1px solid $baseColor;
        margin-bottom: rem(8);
        width: rem(50);
        height: rem(50);
    }

</style>
