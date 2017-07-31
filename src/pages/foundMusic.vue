<template>
    <div class="foundMusic">
        <found-music-head></found-music-head>
        <div class="topBar">
          <!-- <router-link to='/' activeClass="select">commend</router-link>
          <router-link to='/songList' activeClass="select">songList</router-link>
          <router-link to='/radioStation' activeClass="select">radioStation</router-link>
          <router-link to='/charts' activeClass="select">charts</router-link> -->
          <router-link v-for="list in topBar" :to="list.link" activeClass="select">{{list.name}}</router-link>
        </div>

        <router-view></router-view>
        <foot-nav></foot-nav>
    </div>
</template>
<script>
    import foundMusicHead from '@/components/foundMusic/FoundMusicHead'
    import footNav from '@/components/FootNav'

    export default {
        data(){
            return{
              topBar:[{name:'个性推荐',link:'/'},{name:'歌单',link:'/songList'},{name:'主播电台',link:'radioStation'},{name:'排行榜',link:'charts'}]
            }
        },
        components:{
            foundMusicHead,
            footNav
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
    .select{
        border-bottom: 1px solid #d33a31;
        color: #d33a31;
    }
    a{
      color: #000;
      display: inline-block;
      width:20%;
      padding:0 rem(10);
      text-align: center;
    }
  }
</style>
