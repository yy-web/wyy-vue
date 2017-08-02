<template>
    <div class="titleBar">
        <div class="left">
            <span class="logo" :class="titleBar.class"></span>
            <span class="titleName">{{titleBar.name}}</span>
        </div>

        <router-link :to="titleBar.link">更多 &gt</router-link>
    </div>
</template>
<script>
export default{
  name:'titleBar',
  data(){
    return{

    }
  },
  props:{
    titleBar:Object
  }
}
</script>
<style scoped lang="scss">
    @import '../../style/index.scss';
    .titleBar{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: rem(10) rem(10) rem(5) rem(10);
        font-size: rem(12);
        a{
            color: #666;
        }
        .left{
            display: flex;
            align-items: center;
            .logo{
                width: rem(18);
                height: rem(18);
                display: inline-block;
                margin-right: rem(8);
            }
            .commend{
                background: url('../../../static/img/discover_recmd.png')no-repeat;
            }
            .exclusive{
                background: url('../../../static/img/discover_exclusive2.png')no-repeat;
            }
            .newMusic{
                background: url('../../../static/img/discover_newest.png')no-repeat;
            }
            .mv{
                background: url('../../../static/img/discover_mv2.png')no-repeat;
            }
            .radio{
                background: url('../../../static/img/discover_radio.png')no-repeat;
            }
        }

    }
</style>
