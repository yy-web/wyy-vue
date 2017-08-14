<template>
  <div class="main">
    <div class="block">
      <v-title :name="'全部歌单'"></v-title>
      <div class="c_pos">
        <div class="choose">
          <span class="c_icon"></span>
          <span>选择分类</span>
        </div>
      </div>
    </div>
    <div class="block hot_box">
      <div class="left">
        <img :src="songListPage.playList.coverImgUrl" alt="">
      </div>
      <div class="right" >
        <div class="top">
          <span class="hot"></span>
          <span class="hotTitle">精品歌单</span>
        </div>
        <p>{{songListPage.playList.name}}</p>
      </div>
       <span class="arrow"></span>
    </div>
    <div class="block list">
        <all-list :allList="songListPage.allSongList" :type=true :klass="big"></all-list>
    </div>
  </div>
</template>
<script>
import vTitle from '@/components/foundMusic/Title';
import allList from '@/components/foundMusic/allList';
import {mapState , mapActions} from 'vuex';
export default{

    name:'songListIndex',
    components:{
      vTitle,
      allList
    },
    computed: {
      ...mapState(['songListPage']),
    },
    methods: {
      ...mapActions(['fetchSongList'])
    },
    mounted() {
        this.fetchSongList();

    },
    data(){
        return{
          big:'big',
        }
    }
}

</script>
<style lang="scss" scoped>
@import "../style/index.scss";
.block{
  position: relative;
}
.c_pos{
  position: absolute;
  right: rem(10);
  top: rem(12);
}
.choose{
  font-size: rem(12);
  width: rem(70);
  border: rem(1) solid #ddd;
  border-radius: rem(3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:rem(3) rem(7);
  .c_icon{
    background: url('../../static/img/theme.png') no-repeat;
    background-size: cover;
    display: inline-block;
    width: rem(15);
    height: rem(15);
  }
}
.hot_box{
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin:0 rem(10) rem(5) rem(10);
  font-size: rem(12);
  color: #999;
  .hot{
    background: url('../../static/img/slist_hot.png')no-repeat;
    display: inline-block;
    background-size: cover;
    width: rem(22);
    height: rem(22);
  }
  .left img{
    width: rem(80);
    height: rem(80);
  }
  .right{
    flex:2;
    margin-left: rem(15);
    line-height: 1.5;
  }
  .hotTitle{
    font-size: rem(18);
    color: #666;

  }
  .arrow{
    background: url('../../static/img/r_arrow.png') no-repeat;
    display: inline-block;
    background-size: 100%;
    width: rem(50);
    height: rem(30);
  }
}
</style>
