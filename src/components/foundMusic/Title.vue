<template>
    <div class="title">
        <span class="line"></span>
        <span>{{name}}</span>
    </div>

</template>
<script>
export default{
    name:'vTitle',
    data(){
        return{

        }
    },
    props:{
      name:String
    }
}

</script>
<style lang="scss" scoped>
@import "../../style/index.scss";
  .title{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding:0 rem(10);
    height: rem(45);
    .line{
      background-color: $baseColor;
      border-radius: rem(5);
      display: inline-block;
      width: rem(3);
      height: rem(18);
      margin-right: rem(6);
    }
  }

</style>
