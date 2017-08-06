<template>
  <div class="option">
    <div class="o_bar">
      <div class="o_left down"></div>
      <div class="o_right">
        {{optionData.title}}（{{optionData.num}}）
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name:'vOption',
    data(){
      return{

      }
    },
    props:{
      optionData:Object
    }
  }
</script>
<style scoped lang="scss">
@import "../../style/index.scss";
.option{
  .o_bar{
    display: flex;
    align-items: center;
    font-size: rem(12);
    background-color: #eee;
    color: #999;
    height: rem(25);
    padding: 0 rem(10);

  }
  .o_left{
    display: inline-block;
    width: rem(10);
    height: rem(6);
  }
  .o_right{
    margin-left: rem(8);
  }
  .down{
    background: url('../../../static/img/arr_down.png') no-repeat;
    background-size: 100%;
  }
  .right{
    background: url('../../../static/img/arr_right.png') no-repeat;
    background-size: 100%;
    height: rem(10);
    width: rem(6);
  }
}
</style>
