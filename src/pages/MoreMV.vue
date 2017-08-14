<template>
<div class="more_mv">
  <div class="wrap">
    <div class="headBg">
      <router-link class="back" to="/foundMusic">
      </router-link>
      <div class="mid">
        <div v-for="(item,index) in topBar"  @click="clickHandle(index)" :class="index == selectPos ? 'select' : 0">
          {{item.name}}
        </div>
      </div>
      <span class="icon topBar_play"></span>
    </div>
  </div>
  <div class="content">
    <div class="block" v-if="!changeOption">
      <v-title :name="'最新MV'"></v-title>
      <mv-list :type="false" :mvData="moreMVPage.newMV"></mv-list>
    </div>
    <div class="block" v-if="changeOption">
        <div class="tips">
            <p>最近更新：今天</p>
            <span class="dis_i" @click="showTips"></span>
        </div>
        <div class="tipsBox" :class="tipFlag ? 'tipsBoxActive' : ''">
          <div class="bubble">
            <p>选取云音乐中三个月内发布的热度最高的50支MV， 每天更新。热度由MV播放、收藏、分享数量综合计算</p>
          </div>
          <div id="triangleUp"></div>
        </div>
      <mv-billboard :type="false" :billboardData="moreMVPage.billboard"></mv-billboard>
    </div>
  </div>
</div>
</template>
<script>
import {
  mapState,
  mapActions
} from 'vuex';
import vTitle from '@/components/foundMusic/Title';
import mvBillboard from '@/components/foundMusic/MVbillboard';
import mvList from '@/components/mv';
export default {
  name: 'moremv',
  components: {
    vTitle,
    mvList,
    mvBillboard
  },
  computed: {
    ...mapState(['moreMVPage']),
  },
  methods: {
    ...mapActions(['getNewMV','getMVbillboard']),
    clickHandle(_index){
        if(this.$store.state.moreMVPage.billboard.length === 0){
            this.getMVbillboard();
        }
        this.changeOption = !this.changeOption
        this.selectPos = _index;
    },
    showTips(){
        this.tipFlag = !this.tipFlag
    }
  },
  mounted() {
    this.getNewMV();
  },
  data() {
    return {
        changeOption:false,
        selectPos : 0,
        topBar:[{name:'最新'},{name:'排行榜'}],
        tipFlag:false

    }
  }
}
</script>
<style lang="scss" scoped>@import "../style/index.scss";
.wrap {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
}
.block{
  position: relative;
}
.content {
    margin-top: rem(64);
    margin-bottom: rem(49);
}
.tips{
    font-size: rem(12);
    margin: 0 rem(10);
    height: rem(30);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .dis_i{
        background: url('../../static/img/i.png')no-repeat;
        width: rem(20);
        height: rem(20);
        background-size: 100%;
        display: inline-block;
    }

}

.tipsBox{
    transition: opacity 1s ease-in-out;
    position: absolute;
    top: rem(40);
    right: rem(1);
    z-index: 101;
    opacity:0;
    filter: alpha(opacity=0);
  .bubble{
      background: #000;
      border-radius: rem(5);
      width: 99%;
      height: rem(46);
      color:#fff;
      font-size: rem(12);
      p{
        display: flex;
        align-items: center;
        padding: 0 rem(10);
        height: rem(46);
        line-height: 1.5;
      }
  }
  #triangleUp {
    position: absolute;
    top: rem(-13);
    right: rem(8);
    z-index: 101;
    width: 0;
    height: 0;
    border-right: rem(13) solid transparent;
    border-bottom: rem(13) solid black;
    border-left: rem(13) solid transparent;
    }
}
.tipsBoxActive{
    opacity:1;
    filter: alpha(opacity=1);
}
.headBg {
    width: 100%;
    height: rem(64);
    background-color: $baseColor;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding-bottom: rem(12);
    box-sizing: border-box;
    color: #fff;
    .back {
        background: url('../../static/img/topbar_back.png') no-repeat;
        width: rem(28);
        height: rem(28);
        background-size: 100%;
    }
    .mid {
        margin: 0 rem(65);
        width: rem(130);
        border-radius: rem(3);
        border: 1px solid #fff;
        color: #fff;
        display: flex;
        align-items: center;
        font-size: 0;
        div {
            width: 50%;
            height: rem(26);
            border-top-left-radius: rem(2);
            border-bottom-left-radius: rem(2);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: rem(14);
        }
        .select {
            background-color: #fff;
            border: 1px solid #fff;
            color: $baseColor;
        }
    }
    .icon {
        display: inline-block;
        width: rem(28);
        height: rem(28);
    }
    .topBar_play {
        background: url('../../static/img/topbar_playing.png')no-repeat;
    }

}
</style>
