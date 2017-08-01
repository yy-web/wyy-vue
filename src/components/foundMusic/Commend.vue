<template>
    <div class="commend">
        <banner></banner>
        <div class="tool">
            <div class="item">
                <img :src="require('../../../static/img/topbtn_fm.png')"/>
                <span>私人电台</span>
            </div>
            <div class="item">
                <img :src="require('../../../static/img/topbtn_special.png')"/>
                <span>每日歌曲推荐</span>
            </div>
            <div class="item">
                <img :src="require('../../../static/img/topbtn_rank.png')"/>
                <span>云音乐热歌榜</span>
            </div>
        </div>
    </div>
</template>
<script>
import banner from '@/components/foundMusic/Banner'
export default{
    name:'commend',
    data(){
        return{

        }
    },
    components:{
        banner
    }
}

</script>
<style lang="scss" scoped>
@import '../../style/index.scss';
.tool{
    background: #fff;
    height: rem(100);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:0 rem(15);
    border-bottom: 1px solid #ddd;
    .item{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: rem(12);
        width: 30%;
    }
}
    img{
        border-radius: 50%;
        border: 1px solid $baseColor;
        margin-bottom: rem(8);
        width: rem(50);
        height: rem(50);
    }

</style>
