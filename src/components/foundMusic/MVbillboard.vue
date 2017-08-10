<template>
<div class="MVbillboard">
    <div class="billboardItem" v-for="(item,index) in billboardData">
        <img :src="item.cover" alt="" />
        <div class="top">
            <div class="pos">
                <img class="r_icon" :src="require('../../../static/img/cover_video.png')" alt=""/>
                <span class="num">{{item.playCount}}</span>
            </div>
        </div>
        <div class="bottom">
            <div class="info">
                <div class="ranking" :class="index < 3  ? 'red' : ''">
                    {{getRank(item.lastRank)}}
                </div>
                <div class="box">
                    <p class="songName">{{item.name}}</p>
                    <p class="art">{{item.artistName}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>

export default {
  name: 'mvBillboard',
  data() {
    return {

    }
  },
  methods:{
      getRank(_rank){
          console.log(String(_rank).length);
          if(String(_rank).length === 2 || String(_rank).length > 2){
              return String(_rank)
          }else{
              return '0'+ String(_rank)
          }
      }
  },
  props:{
      billboardData:Array,
  }
}
</script>
<style lang="scss" scoped>@import "../../style/index.scss";
.MVbillboard{
    font-size: 0
}
.billboardItem{
    position: relative;
    margin:0 rem(10);
    margin-bottom: rem(5);
    img{
        width: 100%;
        height: 100%;
    }
    .top{
        position: absolute;
        top: 0;
        right: rem(5);
        color: #fff;
        font-size: rem(12);
        .pos{
            display: flex;
            align-items: center;
            .r_icon{
                width: rem(12);
                height: rem(12);
                margin-right: rem(5);
            }
        }
    }
    .bottom{
        position: absolute;
        bottom: rem(10);
        color: #fff;
        font-size: rem(14);
        .info{
            display: flex;
            align-items: center;
            .songName{
                margin-bottom: rem(5);
            }
            .art{
                font-size: rem(12);
            }
            .ranking{
                font-size: rem(26);
                font-weight: 500;
                margin-right: rem(10);
            }
            .red{
                color: $baseColor
            }
        }

    }

}
</style>
