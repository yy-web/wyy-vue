<template>
    <div class="foundMusic">
      <div class="header">
        <found-music-head></found-music-head>
        <div class="topBar">
          <router-link v-for="(list,index) in topBar" key="index" exact :to="list.link" activeClass="select">{{list.name}}</router-link>
        </div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
</template>
<script>
    import foundMusicHead from '@/components/foundMusic/FoundMusicHead';
    export default {
        data(){
            return{
              topBar:[{name:'个性推荐',link:'/foundMusic'},{name:'歌单',link:'/foundMusic/songList'},{name:'主播电台',link:'/foundMusic/radioStation'},{name:'排行榜',link:'/foundMusic/charts'}]
            }
        },
        components:{
            foundMusicHead,
        }
    }
</script>
<style lang="scss" scoped="">
  @import '../style/index.scss';
  .header{
    position: fixed;
    width: 100%;
    z-index: 10;
  }
  .content{
    padding-top: rem(104);
    padding-bottom: rem(49);
  }
  .topBar{
    background-color: #fff;
    display: flex;
    height: rem(40);
    border-bottom: 1px solid #ddd;
    justify-content: space-around;
    align-items: center;
    font-size: rem(12);
    .select{
        border-bottom: 2px solid #d33a31;
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
