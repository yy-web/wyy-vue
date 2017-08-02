<template>
    <div class="foundMusic">
        <found-music-head></found-music-head>
        <div class="topBar">
          <router-link v-for="(list,index) in topBar" key="index" :to="list.link" activeClass="select">{{list.name}}</router-link>
        </div>

        <router-view></router-view>
        <foot-nav></foot-nav>
    </div>
</template>
<script>
    import foundMusicHead from '@/components/foundMusic/FoundMusicHead';
    import footNav from '@/components/FootNav';

    export default {
        data(){
            return{
              topBar:[{name:'个性推荐',link:'/'},{name:'歌单',link:'/songList'},{name:'主播电台',link:'radioStation'},{name:'排行榜',link:'charts'}]
            }
        },
        components:{
            foundMusicHead,
            footNav,
        }
    }
</script>
<style lang="scss" scoped="">
  @import '../style/index.scss';
  .topBar{
    background-color: #fff;
    display: flex;
    height: rem(40);
    border-bottom: 1px solid #ddd;
    justify-content: space-around;
    align-items: center;
    font-size: rem(12);
    .select{
        border-bottom: 1px solid #d33a31;
        color: #d33a31;
        text-decoration: none;
    }
    a{
      color: #000;
      display: inline-block;
      width:20%;
      height: rem(40);
      line-height: rem(40);
      margin:0 rem(10);
      text-align: center;
    }
  }
</style>
