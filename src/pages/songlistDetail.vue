<template>
    <div class="songlistDetail">
        <div class="wrap" :style="{'background':'url('+songlistDetail.coverImgUrl+')'}">
          <div class="headBg">
            <span>编辑</span>
            <div class="mid">
              我的音乐
            </div>
            <span class="icon topBar_play"></span>
          </div>
        </div>
        <div class="block">

        </div>
    </div>
</template>
<script>
import {
  mapState,
  mapActions
} from 'vuex';
export default{
    name:'songlistDetail',
    data(){
        return{

        }
    },
    computed: {
      ...mapState(['songlistDetail']),
    },
    methods: {
      ...mapActions(['getSonglistDetail'])
    },
    mounted() {
        this.getSonglistDetail(this.$route.query.id)
    },
}

</script>
<style scoped lang="scss">
@import "../style/index.scss";
.wrap {
    position: fixed;
    width: 100%;

}
.blur {
    //filter: url(blur.svg#blur); /* FireFox, Chrome, Opera */
    -webkit-filter: blur(10px); /* Chrome, Opera */
    -moz-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false); /* IE6~IE9 */
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
