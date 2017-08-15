<template>
<div class="hotBox">
    <router-link :to="{ name: 'songlistDetail', query: { id: item.id }}" class="item" v-for="(item,index) in hotBoxData" :key="index">
        <div class="left">
            <img class="coverImg" :src="item.coverImgUrl" alt=""/>
            <div class="topBg">
                <div class="hot_logo">
                </div>
                <div class="top">
                  <img class="icon" :src="require('../../../static/img/cover_music.png')"/>
                  <span class="num">{{count(item.playCount)}}</span>
                </div>
            </div>
        </div>
        <div class="right">
            <p class="r_title"><span class="ell2 name"><span class="tab">{{item.tag}}</span>{{item.name}}</span></p>

            <p class="artName">by{{item.creator.nickname}}</p>
            <div class="bottom">
                <p class="copywriter">{{item.copywriter}}</p>
            </div>
        </div>
    </router-link>
</div>
</template>
<script>
export default {
  name: 'hotBox',
  components: {},

  data() {
    return {}

},
  props:{
      hotBoxData:Array
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/index.scss';
.hotBox{
    .item{
        display: flex;
        justify-content: space-between;
        margin-left: rem(10);
        margin-top:rem(10);
    }
    .left{
        position: relative;
        .coverImg{
            width: rem(110);
            height: rem(110);
        }
    }
    .right{
        margin-left: rem(8);
        flex:2;
        padding-top: rem(5);
        padding-right: rem(8);

        border-bottom: 1px solid #eee;
        position: relative;
        .r_title{
            display: flex;
            align-items: flex-start;

            .name{
                font-size: rem(16);
                line-height: 1.5;
                color: #666;
            }
            .tab{
                border: 1px solid $baseColor;
                color: $baseColor;
                padding:rem(1);
                text-align: center;
                display: inline-block;
                min-width:rem(30);
                line-height: rem(12);
                margin-right: rem(5);
                font-size: rem(12);
            }
        }

        .artName{
            font-size: rem(12);
            color: #999;
            margin-top: rem(8);
        }
        .copywriter{
            font-size: rem(14);
            position: absolute;
            bottom: rem(8);
            color: #666;
        }
    }

}
.topBg{
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  left: 0;
  @include opacityBG;
  .hot_logo{
      background-size: 100%;
      background-image: url('../../../static/img/sup_hot.png');
      width: rem(20);
      height:rem(20);
      position: absolute;
  }
  .top{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: rem(5);
    padding:rem(2) 0;
  }
}
</style>
