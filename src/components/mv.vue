<template>
    <div class="mvList">
        <div class="item" v-for="item in mvData">
            <div class="item_top">
                <div class="mes">
                    <div class="pos">
                        <img class="r_icon" :src="require('../../static/img/cover_video.png')" alt=""/>
                        <span class="num">123123</span>
                    </div>

                </div>
                <img :src="item.imgSrc" alt=""/>
            </div>
            <p class="ell">{{item.desc}}</p>
            <p class="ell art">{{item.art}}</p>
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
            mvData:Array,
        }
    }

</script>
<style scoped lang="scss">
    @import '../style/index.scss';
    .mvList{
        font-size: rem(12);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding:0 rem(10);
        .item{
            width: 49%;
            margin-bottom: rem(10);
            img{
                width: 100%;
                height: rem(100) ;
            }
            .art{
                color: #999;
            }
        }
        p{
            line-height: 1.5;
        }
        .item_top{
            position: relative;
            color: #fff;
            .mes{
                position: absolute;
                top: rem(5);
                right:rem(8);
                .pos{
                    display: flex;
                    align-items: center;
                    .r_icon{
                        width: rem(12);
                        height: rem(12);
                        margin-right: rem(5);
                    };
                }

            }

        }
    }
</style>
