<template>
    <div class="mvList" v-if="type">
        <div class="item" v-for="item in mvData">
            <div class="item_top">
                <div class="mes">
                    <div class="pos">
                        <img class="r_icon" :src="require('../../static/img/cover_video.png')" alt=""/>
                        <span class="num">{{item.playCount}}</span>
                    </div>

                </div>
                <img :src="item.picUrl" alt=""/>
            </div>
            <p class="ell">{{item.copywriter}}</p>
            <p class="ell art">{{item.artistName}}</p>
        </div>
    </div>
    <div class="mvList" v-else>
        <div class="item" v-for="item in mvData">
            <div class="item_top">
                <div class="mes">
                    <div class="pos">
                        <img class="r_icon" :src="require('../../static/img/cover_video.png')" alt=""/>
                        <span class="num">{{item.playCount}}</span>
                    </div>
                </div>
                <img :src="item.cover" alt=""/>
                <span  class="ell desc">{{item.briefDesc}}</span>
            </div>
            <p class="ell">{{item.name}}</p>
            <p class="ell art">{{item.artistName}}</p>
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
            type:Boolean
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
                top: 0;
                right:0;
                left: 0;
                .pos{
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    padding: 2px 5px;
                    @include opacityBG;
                    .r_icon{
                        width: rem(12);
                        height: rem(12);
                        margin-right: rem(5);
                    };
                }

            }
            .desc{
                position: absolute;
                bottom: 0;
                padding: rem(7) rem(6);
                width: 100%;
            }

        }
    }
</style>
