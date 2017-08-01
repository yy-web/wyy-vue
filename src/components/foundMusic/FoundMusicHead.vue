<template>
    <div class="headBg">
        <span class="icon topBar_mic"></span>
        <div class="search_box">
          <input type="text" placeholder="搜索音乐、歌词、电台"/>
          <span class="icon topBar_search"></span>
        </div>
        <span class="icon topBar_play"></span>
    </div>
</template>
<script>
export default{
    name:'foundMusicHead',
    data(){
        return{

        }
    }
}

</script>
<style scoped lang="scss">
  @import "../../style/index.scss";
  .headBg{
    width: 100%;
    height: 64px;
    background-color: $baseColor;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding-bottom: 12px;
    box-sizing: border-box;
  }
  .headBg .icon{
    display: inline-block;
    width: rem(28);
    height: rem(28);
  }
  .topBar_mic{
    background: url('../../../static/img/topbar_mic2.png')
  }
  .topBar_play{
    background: url('../../../static/img/topbar_playing.png')
  }
  .search_box{
    position: relative;
    input{
      width: rem(260);
      height:rem(28);
      border: none;
      font-size: rem(12);
      border-radius: rem(5);
      text-align: center;
    }
    .topBar_search{
      width: rem(14);
      height: rem(14);
      position: absolute;
      left: rem(25);
      top: rem(8);
      background: url('../../../static/img/topbar_search2.png')
    }
  }

</style>
