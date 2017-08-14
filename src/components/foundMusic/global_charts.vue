<template>
<div class="globalCharts">
    <div class="item" v-for="item in globalCharts">
        <img :src="item.data.result.coverImgUrl" alt=""/>
        <span class="ell2">{{item.data.result.name}}</span>
    </div>
</div>
</template>
<script>
export default {
  name: 'globalCharts',
  components: {},

  data() {
    return {}

},
  props:{
      globalCharts:Array
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/index.scss';
.globalCharts{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 rem(10);
    .item{
        width: rem(115);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-bottom: rem(5);
        span{
            height: rem(36);
            padding-top: rem(5);
            display: inline-block;
            font-size: rem(12);
        }
    }
    img{
        width: rem(115);
        height: rem(115);
    }
}
</style>
