<template>
    <div class="private" >
        <div class="item" v-for="item in privateData">
            <div class="item_top">
                <img class="l_icon" :src="require('../../static/img/topic_sm.png')" alt=""/>
                <img :src="item.imgSrc" alt=""/>
            </div>
            <p class="p_desc ell2">{{item.desc}}</p>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        props:{
            privateData:Array,
        }
    }

</script>
<style scoped lang="scss">
    @import '../style/index.scss';
    .private{
        font-size: rem(12);
        display: flex;
        flex-wrap: wrap;
        padding:0 rem(10);
        .item{
            width: 100%;
            margin-bottom: rem(8);
            img{
                width: 100%;
                height: rem(100) ;
            }
        }
        p{
            line-height: 1.5;
        }
        .item_top{
            position: relative;
            .l_icon{
                position: absolute;
                top: rem(5);
                left:rem(5);
                width: rem(22);
                height: rem(22);
            };
        }
    }
</style>
