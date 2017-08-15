<template>
    <div class="hotSonglist">
        <div class="wrap">
          <div class="headBg">
            <div class="back" @click="routerBack"></div>
            <div class="mid">
              精品歌单
            </div>
            <span class="icon topBar_play"></span>
          </div>
        </div>
        <div class='content'>
            <div class="block">
                <div class="filter">
                    <span>全部</span>
                    <div class="selection">
                        <img :src="require('../../static/img/filter.png')" />
                        <span>筛选</span>
                    </div>
                </div>
            </div>
            <div class="block">
                <hot-box :hotBoxData="hotSonglist"/>
            </div>
        </div>
    </div>
</template>
<script>
import hotBox from '@/components/foundMusic/hotBox';
import {
  mapState,
  mapActions
} from 'vuex';
export default{
    name:'hotSonglist',
    components:{
        hotBox
    },
    data(){
        return{

        }
    },
    computed: {
      ...mapState(['hotSonglist']),
    },
    methods: {
      ...mapActions(['getHotSonglist']),
      routerBack(){
        this.$router.go(-1);
      }
    },
    mounted() {
        this.getHotSonglist('')
    },
}

</script>
<style scoped lang="scss">
@import "../style/index.scss";
.wrap {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 2;
}
.content{
    margin-top: rem(64);
    margin-bottom: rem(50);
}
.headBg {
    width: 100%;
    height: rem(64);
    display: flex;
    justify-content: space-around;
    background: $baseColor;
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
.filter{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding:0 rem(10);
    height: rem(35);
    .selection{
        display: flex;
        align-items: center;
        font-size: rem(14);
        img{
            margin-right: rem(3);
            width:rem(12);
            height: rem(12);
        }
    }
}
</style>
