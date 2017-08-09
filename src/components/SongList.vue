<template >
  <div class="songList" v-if="type" >
      <div class="item"  :class="klass" v-for="(item,index) in listData" :key="index">
          <img :src="item.picUrl" alt=""/>
          <div class="topBg">
              <div class="top">
                <img class="icon" :src="require('../../static/img/cover_music.png')"/>
                <span class="num">{{item.playCount}}</span>
              </div>
          </div>
          <div>
              <p class="ell2">{{item.name}}</p>
          </div>
      </div>
  </div>
  <div  class="songList" v-else >
      <div  class="item"  :class="klass" v-for="(item2,index) in listData" :key="index">
          <img :src="item2.song.album.picUrl" alt=""/>
          <div>
              <p class="ell">{{item2.name}}</p>
              <p class="ell art">{{item2.song.artists[0].name}}</p>
          </div>
      </div>
  </div>
</template>
<script>
  export default{
    name:'songList',
    data(){
      return{

      }
    },
    props:{
      listData:Array,
      klass:String,
      type:Boolean
    }
  }
</script>
<style lang="scss" scoped>
@import '../style/index.scss';
.songList{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 rem(10);
  .small{
    width: 31%;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .big{
    width: 49%;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .item{
    position: relative;
    font-size: rem(12);
    margin-bottom: rem(10);
    .topBg{
      position: absolute;
      top: 0;
      right: 0;
      color: #fff;
      left: 0;
      background: rgba(0,0,0,0.1);
      .top{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: rem(5);
        padding:rem(2) 0;
      }
    }
    .art{
        color: #999;
    }
    .icon{
      display: inline-block;
      width: rem(10);
      height: rem(12);
      margin-right: rem(5);
    }
    p{
        line-height: 1.5;
    }
  }
}
</style>
