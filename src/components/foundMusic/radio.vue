<template >
  <div class="radioList" >
      <div class="item" v-for="(item,index) in radioData" :key="index">
          <div class="img_box">
              <img :src="item.picUrl" alt=""/>
              <div class="bottomBg">
                  <div class="bottom">
                      <span class="name ell">{{item.dj.nickname}}</span>
                      <img class="icon" :src="require('../../../static/img/btn_play.png')"/>
                  </div>
              </div>
          </div>
          <div>
              <p class="ell2">{{item.copywriter}}</p>
          </div>
      </div>
  </div>
</template>
<script>
  export default{
    name:'radioList',
    data(){
      return{

      }
    },
    props:{
      radioData:Array,
    }
  }
</script>
<style lang="scss" scoped>
@import '../../style/index.scss';
.radioList{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 rem(10);
  .item{
    font-size: rem(12);
    margin-bottom: rem(10);
    width:30%;
    img{
        width: 100%;
        height: 100%;
    }
    .img_box{
        position: relative;
    }
    .bottomBg{
      position: absolute;
      bottom: rem(3);
      right: 0;
      color: #fff;
      left: 0;
      background: rgba(0,0,0,0.1);
      .bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:rem(2) 0 rem(2) rem(5);
      }
    }
    .icon{
      display: inline-block;
      width: rem(25);
      height: rem(25);
    }
    p{
        line-height: 1.5;
        height: rem(36);
    }

  }
}
</style>
