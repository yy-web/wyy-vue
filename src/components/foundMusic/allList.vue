<template>
    <div class="allList">
        <div class="item big"   v-for="(item,index) in allList" :key="index">
            <img :src="item.coverImgUrl" alt=""/>
            <div class="topBg">
                <div class="top">
                  <img class="icon" :src="require('../../../static/img/cover_music.png')"/>
                  <span class="num">{{item.playCount}}</span>
                </div>
            </div>
            <div class="bottomBg">
                <div class="bottom">
                  <img class="icon" :src="require('../../../static/img/user.png')"/>
                  <span class="userName ell">{{item.creator.nickname}}</span>
                </div>
            </div>
            <div>
                <p class="ell2">{{item.name}}</p>
            </div>
        </div>
    </div>
</template>
<script>
  export default{
    name:'allList',
    data(){
      return{

      }
    },
    props:{
      allList:Array,
    }
  }
</script>
<style lang="scss" scoped>
@import '../../style/index.scss';
.allList{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 rem(10);
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
      background: rgba(0,0,0,0.03);
      .top{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: rem(5);
        padding:rem(2) 0;
      }
    }
    .bottomBg{
        position: absolute;
        bottom: rem(38);
        right: 0;
        color: #fff;
        left: 0;
        background: rgba(0,0,0,0.03);
        font-size: rem(12);
        .bottom{
          display: flex;
          align-items: center;
          height: rem(18);
          justify-content: flex-start;
          margin-left: rem(5);
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
        height: rem(36);
    }
  }
}
</style>
