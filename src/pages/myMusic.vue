<template>
<div class="my_music">
  <div class="wrap">
    <div class="headBg">
      <span>编辑</span>
      <div class="mid">
        我的音乐
      </div>
      <span class="icon topBar_play"></span>
    </div>
  </div>
  <div class="content">
    <div class="block ">
      <div class="bar">
        <span class="bar_left"><img :src="require('../../static/img/dld_new.png')" alt=""/></span>
        <div class="bar_right">
          <span>下载音乐</span>
          <div>
            <span class="num">0</span>
            <img :src="require('../../static/img/arr_right.png')" alt="" />
          </div>
        </div>
      </div>
      <div class="bar">
        <span class="bar_left"><img :src="require('../../static/img/time2.png')" alt=""/></span>
        <div class="bar_right">
          <span>最近播放</span>
          <div>
            <span class="num">0</span>
            <img :src="require('../../static/img/arr_right.png')" alt="" />
          </div>
        </div>
      </div>
      <div class="bar">
        <span class="bar_left"><img :src="require('../../static/img/singer.png')" alt=""/></span>
        <div class="bar_right">
          <span>我的歌手</span>
          <div>
            <span class="num">0</span>
            <img :src="require('../../static/img/arr_right.png')" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="block">
        <v-option :optionData="optionData">
          <list-item :data="itemData"></list-item>
        </v-option>
    </div>
  </div>
</div>
</template>
<script>
import vOption from '@/components/myMusic/option';
import listItem from '@/components/listItem';

import axios from 'axios';

export default {
  name: 'myMusic',
  components:{
    vOption,
    listItem
  },

  data() {
    return {
      optionData:{
        title:'我喜欢的音乐',
        num:1
      },
      itemData: [{
          imgSrc: 'http://p1.music.126.net/wn3eF0GEWBqmgYFy5tj4gA==/109951162985002004.jpg?param=140y140',
          total: '100',
          title: '案件法律框架的法律框架房东',
        }, {
          imgSrc: 'http://p1.music.126.net/wn3eF0GEWBqmgYFy5tj4gA==/109951162985002004.jpg?param=140y140',
          num: '100',
          title: '案件法律框架的法律框架房东',
        },
        {
          imgSrc: 'http://p1.music.126.net/wn3eF0GEWBqmgYFy5tj4gA==/109951162985002004.jpg?param=140y140',
          num: '100',
          title: '案件法律框架的法律框架房东',
        },
        {
          imgSrc: 'http://p1.music.126.net/wn3eF0GEWBqmgYFy5tj4gA==/109951162985002004.jpg?param=140y140',
          num: '100',
          title: '案件法律框架的法律框架房东',
        },
      ],
    }
  }
}
</script>
<style scoped lang="scss">
@import "../style/index.scss";
.wrap {
    position: fixed;
    width: 100%;
}
.content{
  padding-top: rem(64);
  .bar{
    display: flex;
    align-items: center;
    margin-left: rem(15);
    img{
      width: rem(26);
      height: rem(26);
    }
  }
  .bar_left{
    display: flex;
    align-items: center;
    margin-right: rem(20);
  }
  .bar_right{
    border-bottom: 1px solid #eee;
    width: 100%;
    height: rem(45);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #999;
    padding-right: rem(10);

    img{
      width: rem(6);
      height: rem(12);
    }
  }

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
    .mid {
        width: rem(260);
        display: inline-block;
        text-align: center;
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
