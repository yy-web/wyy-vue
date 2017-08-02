<template>
  <div class="songList">
      <div class="item" :class="klass" v-for="(item,index) in listData" key="index">
          <img :src="item.imgSrc" alt=""/>
          <div class="topBg">
              <div class="top" v-if:"item.show">
                <img class="icon" :src="require('../../static/img/listen2.png')"/>
                <span class="num">{{item.num}}</span>
              </div>
          </div>
          <div>
              <p class="ell2">{{item.desc}}</p>
              <p class="ell2" v-if:"item.art">{{item.art}}</p>
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
      klass:String
    }
  }
</script>
<style lang="scss" scoped>
@import '../style/index.scss';
.songList{
  display: flex;
  align-items: center;
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
  .item{
    position: relative;
    font-size: 12px;
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
        margin-right: rem(10);
      }
    }
    .icon{
      display: inline-block;
      width: rem(29);
      height: rem(29);
    }
    p{
        line-height: 1.5;
    }
  }
}
</style>
