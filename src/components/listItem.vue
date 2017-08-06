<template>
  <div class="group">
    <div class="show_item" v-for='item in data'>
      <div class="s_left">
        <img :src="item.imgSrc" alt=""/>
      </div>
      <div class="s_right">
        <p>{{item.title}}</p>
        <p>
          <span>{{item.total}}首</span>
          <span>by 123123123</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'listItem',
    data(){
      return{

      }
    },
    props:{
      data:Array
    }
  }
</script>
<style scoped lang="scss">
@import "../style/index.scss";
.show_item{
  display: flex;
  align-items: center;
  padding-left: rem(10);
  .s_left {

    font-size: 0;
   img{
    width: rem(50);
    height: rem(50);
    }
  }
  .s_right{
    width: 100%;
    height: rem(50);
    padding:rem(5) 0;
    margin-left: rem(8);
    border-bottom: 1px solid #eee;
    p{
      font-style: rem(14);
    }
    span{
      font-size: rem(12);
      color: #999;
    }
  }
}
</style>
