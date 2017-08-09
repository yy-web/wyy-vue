<template>
<div class="commend">
  <banner></banner>
  <div class="tool">
    <div class="item">
      <img :src="require('../../../static/img/topbtn_fm.png')" />
      <span>私人电台</span>
    </div>
    <div class="item">
      <img :src="require('../../../static/img/topbtn_special.png')" />
      <span>每日歌曲推荐</span>
    </div>
    <div class="item">
      <img :src="require('../../../static/img/topbtn_rank.png')" />
      <span>云音乐热歌榜</span>
    </div>
  </div>
  <div class="block">
    <title-bar :titleBar="commend"></title-bar>
    <song-list :listData="songList" :type=true :klass="small"></song-list>
  </div>
  <div class="block">
    <title-bar :titleBar="exclusive"></title-bar>
    <private-commend :privateData="privateList"></private-commend>

  </div>
  <div class="block">
    <title-bar :titleBar="newMusic"></title-bar>
    <song-list :listData="newSongList" :type=false :klass="small"></song-list>
  </div>
  <div class="block">
    <title-bar :titleBar="mv"></title-bar>
    <mv-list :mvData="commendMVData "></mv-list>
  </div>
  <div class="block">
    <title-bar :titleBar="radio"></title-bar>
    <radio-list :radioData="radioList"></radio-list>
  </div>
</div>
</template>
<script>
import banner from '@/components/foundMusic/Banner';
import titleBar from '@/components/foundMusic/TitleBar';
import radioList from '@/components/foundMusic/radio';
import songList from '@/components/SongList';
import privateCommend from '@/components/Private';
import mvList from '@/components/mv';
import {
  mapState,
  mapActions
} from 'vuex';
export default {
  name: 'commend',
  components: {
    banner,
    songList,
    titleBar,
    privateCommend,
    mvList,
    radioList
},
    computed: {
      ...mapState(['songList','privateList','newSongList','commendMVData','radioList']),
    },
    methods: {
      ...mapActions(['getSongList','privates','getNewSong','commendMV','getRadioList','fetchAlls'])
    },
    mounted() {
        //this.privates();
        this.getSongList();
      //  this.getNewSong();
        //this.commendMV();
        //this.getRadioList();
        // let arr = [this.privates(),this.getSongList()]
        // this.fetchAlls(arr)
    },
  data() {
    return {
      small: 'small',
      commend: {
        name: '推荐歌单',
        class: "commend",
        link: '/foundMusic/songList'
      },
      exclusive: {
        name: '独家放送',
        class: "exclusive",
        link: 'songList'
      },
      newMusic: {
        name: '最新音乐',
        class: "newMusic",
        link: 'songList'
      },
      mv: {
        name: '推荐MV',
        class: "mv",
        link: 'songList'
      },
      radio: {
        name: '主播电台',
        class: "radio",
        link: 'radioStation'
      }
    }
  },

}
</script>
<style lang="scss" scoped>@import '../../style/index.scss';
.tool {
    background: #fff;
    height: rem(100);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 rem(15);
    border-bottom: 1px solid #ddd;
    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: rem(12);
        width: 30%;
    }
    img {
        border-radius: 50%;
        border: 1px solid $baseColor;
        margin-bottom: rem(8);
        width: rem(50);
        height: rem(50);
    }
}
.block {
    margin-bottom: rem(15);
}
</style>
