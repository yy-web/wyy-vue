<template>
    <div class="songlistDetail">
        <div class="cover blur" :style="{'background-image':'url('+songlistDetail.coverImgUrl+')','background-size':'cover'}">
            <div class="coverBg"></div>
        </div>
        <div class="wrap">
          <div class="headBg">
            <div class="back" @click="routerBack"></div>
            <div class="mid">
              歌单
            </div>
            <span class="icon topBar_play"></span>
          </div>
        </div>
        <div class="block user_mes_pos">
            <div class="user_mes">
                <div class="left">
                    <img class="songlistBg" :src="songlistDetail.coverImgUrl" alt=""/>
                    <div class="topBg">
                        <div class="hot_logo" v-if="songlistDetail.highQuality">
                        </div>
                        <div class="top">
                          <img class="icon" :src="require('../../static/img/cover_music.png')"/>
                          <span class="num">{{count(songlistDetail.playCount)}}</span>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="title">
                        {{songlistDetail.name}}
                    </div>
                    <div class="user">
                        <img :src="songlistDetail.creator.avatarUrl" alt=""/>
                        <span class="userName">{{songlistDetail.creator.nickname}}</span>
                    </div>
                </div>
            </div>
            <div class="bar">
                <div class="barItem">
                    <span class="new barIcon"></span>
                    <span class="bar_text">{{songlistDetail.subscribedCount}}</span>
                </div>
                <div class="barItem">
                    <span class="cmt barIcon"></span>
                    <span class="bar_text">{{songlistDetail.commentCount}}</span>
                </div>
                <div class="barItem">
                    <span class="share barIcon"></span>
                    <span class="bar_text">{{songlistDetail.shareCount}}</span>
                </div>
                <div class="barItem">
                    <span class="dld barIcon"></span>
                    <span class="bar_text">下载</span>
                </div>
            </div>
        </div>
        <div class="block">
            <song-item :songData="songlistDetail.tracks"/>
        </div>
    </div>
</template>
<script>
import songItem from '@/components/songItem';
import {
  mapState,
  mapActions
} from 'vuex';
export default{
    name:'songlistDetail',
    components:{
        songItem
    },
    data(){
        return{

        }
    },
    computed: {
      ...mapState(['songlistDetail']),
    },
    methods: {
      ...mapActions(['getSonglistDetail']),
      routerBack(){
        this.$router.go(-1);
      }
    },
    mounted() {
        this.getSonglistDetail(this.$route.query.id)
    },
}

</script>
<style scoped lang="scss">
@import "../style/index.scss";
.cover{
    height: rem(260);
    opacity: 0.8;
    overflow: hidden;
    background-position: 50%;
}
.coverBg{
    background: rgba(0,0,0,0.15);
    height: 100%;
}
.wrap {
    position: fixed;
    width: 100%;
    top: 0;
}
.blur {
    //filter: url(blur.svg#blur); /* FireFox, Chrome, Opera */
    -webkit-filter: blur(21px); /* Chrome, Opera */
    -moz-filter: blur(21px);
    -ms-filter: blur(21px);
    filter: blur(21px);
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=21, MakeShadow=false); /* IE6~IE9 */
}

.headBg {
    width: 100%;
    height: rem(64);
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
.user_mes_pos{
    position: absolute;
    top: rem(64);
    margin: 0 rem(20);
}
.user_mes{
    display: flex;
    align-items: center;
    .left{
        position: relative;
        .songlistBg{
            width:rem(130);
            height:rem(130);
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
              background-image: url('../../static/img/sup_hot.png');
              width: rem(20);
              height:rem(20);
              position: absolute;
          }
          .top{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-right: rem(5);
          }
        }
    }
    .right{
        margin-left: 20px;
        color: #fff;
        img{
            width: rem(30);
            height: rem(30);
            border-radius: 50%;
        }
        .user{
            margin-top: rem(20);
            display: flex;
            align-items: center;
        }
        .userName{
            color: #eee;
            font-size: rem(12);
            margin-left: rem(10);
        }
    }
}
.bar{
    display: flex;
    color: #fff;
    font-size: rem(12);
    .barItem{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
    }
    .barIcon{
        width: rem(45);
        height: rem(45);
        display: inline-block;
        background-size: 100%;
    }
    .new{
        background-image: url('../../static/img/fav_new.png');
    }
    .cmt{
        background-image: url('../../static/img/icn_cmt.png');
    }
    .share{
        background-image: url('../../static/img/icn_share.png');
    }
    .dld{
        background-image: url('../../static/img/icn_dld.png');
    }
    .bar_text{
        margin-top: rem(-5);
    }
}

</style>
