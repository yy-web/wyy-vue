<template>
<div class="yunMusic">
  <div class="item" v-for="(item,index) in yunMusic">
      <div class="left">
          <img :src="item.data.result.coverImgUrl" alt="">
      </div>
      <div class="right">
          <p v-for='(list,listIndex) in item.data.result.tracks.slice(0,3)'>
              <span>{{listIndex+1}}.</span>
              <span >{{list.name}}</span>
              -
              <span v-for="(arts,artsIndex) in list.artists">{{arts.name}}<span v-if="artsIndex == 0 && list.artists.length > 1">/</span></span>
          </p>
      </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'yunMusic',
  components: {},

  data() {
    return {}

},
  props:{
      yunMusic:Array
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/index.scss';
.yunMusic{
    .item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: rem(14);
        margin-left: rem(10);
        margin-bottom: rem(5);
    }
    .left{
        flex:1;
        img{
            width: rem(115);
            height: rem(115);
        }
    }
    .right{
        flex:2;
        height: rem(130);
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: rem(15);
        border-bottom: 1px solid #e2e2e2;
        p{
            line-height: 2;
        }
    }
}
</style>
