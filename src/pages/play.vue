<template>
<div class="play">
  <div class="cover blur" :style="{'background-image':'url('+playPage.songDetail.al.picUrl+')','background-size':'cover'}">
    <div class="coverBg"></div>
  </div>
  <div class="wrap">
    <div class="headBg">
      <div class="back" @click="routerBack"></div>
      <div class="mid">
        <p>{{playPage.songDetail.name}}</p>
        <span v-for="(item,index) in playPage.songDetail.ar">{{item.name}}<span v-if="index == 0 && playPage.songDetail.ar.length > 1">/</span></span>
      </div>
      <span class="icon topBar_play"></span>
    </div>
  </div>
  <div class="content">
    <div class="lyric">
      <p v-for="item in playPage.lyric.lyric.split('\n')">{{item.replace(/\[\d*:\d*((\.|\:)\d*)*\]/g, '')}}</p>
    </div>


  </div>
  <div class="bottom">
    <video id="video" :src="playPage.songUrl" autoplay>

            </video>
    <div class="line_bar">
      <span class="startTime">00:00</span>
      <div class="line">
        <div class="red"></div>
        <div class="dotBox">
          <div class="dot">
            <div class="docsm"></div>
          </div>
        </div>
      </div>
      <span class="total">03:41</span>
    </div>
    <div class="bottom_bar">
      <span class="loop"></span>
      <span class="prev"></span>
      <span class="play_btn" @click="play()"></span>
      <span class="next"></span>
      <span class="multi"></span>
    </div>
  </div>
</div>
</template>
<script>
import {
  mapState,
  mapActions
} from 'vuex';
export default {
  name: 'playPage',
  components: {},
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['playPage']),
  },
  methods: {
    ...mapActions(['fetchSong']),
    routerBack() {
      this.$store.state.playPage = {};
      this.$router.go(-1);
    },
      play(){
          const video = document.getElementById('video');
          console.log(video, 'play');
      }
  },
  mounted() {
    this.fetchSong(this.$route.query.ids);
    const video = document.getElementById('video');
    console.log(this.playPage, 'mounted');
    console.log(video, 'mounted');
  },
}
</script>
<style scoped lang="scss">@import "../style/index.scss";
::-webkit-scrollbar {
    display: none;
}
.content {
    margin-top: rem(64);
    position: relative;
    z-index: 100;
}
.cover {
    opacity: 0.8;
    overflow: hidden;
    background-position: 50%;
    position: absolute;
    z-index: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.coverBg {
    background: rgba(0,0,0,0.15);
    height: 100%;
    position: absolute;
    z-index: 1;
}
.wrap {
    position: fixed;
    width: 100%;
    top: 0;
}
.blur {
    //filter: url(blur.svg#blur); /* FireFox, Chrome, Opera */
    -webkit-filter: blur(21px);
    /* Chrome, Opera */
    -moz-filter: blur(21px);
    -ms-filter: blur(21px);
    filter: blur(21px);
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=21, MakeShadow=false);
    /* IE6~IE9 */
}
.lyric {
    text-align: center;
    height: rem(350);
    overflow-y: scroll;
    margin-top: rem(150);
    line-height: 1.5;
    color: rgba(255,255,255,0.6);
}
.bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}
.line_bar {
    margin: 0 rem(10);
    font-size: rem(12);
    color: #fff;
    display: flex;
    align-items: center;
    .line {
        position: relative;
        flex: 2;
        margin: 0 rem(15);
        height: rem(2);
        background: rgba(255,255,255,0.5);
        .red {
            position: absolute;
            height: rem(2);
            background: $baseColor;
            width: rem(100);
        }
    }
    .dotBox {
        position: absolute;
        left: rem(100);
        transform: translateY(-50%);
    }
    .dot {
        display: flex;
        justify-content: center;
        align-items: center;
        width: rem(15);
        height: rem(15);
        border-radius: 50%;
        text-align: center;
        background: #fff;
        .docsm {
            width: rem(3);
            height: rem(3);
            border-radius: 50%;
            background: $baseColor;
        }
    }
}
.bottom_bar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    span {
        display: inline-block;
        background-size: cover;
    }
    .loop {
        background-image: url('../../static/img/loop.png');
        width: rem(44);
        height: rem(44);
    }
    .prev {
        background-image: url('../../static/img/btn_prev.png');
        width: rem(49);
        height: rem(49);
    }
    .play_btn {
        background-image: url('../../static/img/play.png');
        width: rem(83);
        height: rem(83);
    }
    .next {
        background-image: url('../../static/img/btn_next.png');
        width: rem(49);
        height: rem(49);
    }
    .multi {
        background-image: url('../../static/img/multi.png');
        width: rem(36);
        height: rem(36);
    }
}
.headBg {
    width: 100%;
    height: rem(64);
    border-bottom: 1px solid #999;
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
        span {
            font-size: rem(12);
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
