<template>
    <div class="songItem" >
        <router-link :to="{ name: 'play', query: { id: item.id }}" class="item" v-for="(item,index) in songData">
            <div class="left">
                <span class="rank">{{index+1}}</span>
            </div>
            <div class="right">
                <span class="songName">{{item.name}}</span>
                <p class="ell" v-if="!type">
                    <span class="art" v-for="(art,artsIndex) in item.ar">{{art.name}}<span v-if="artsIndex == 0 && item.ar.length > 1">/</span></span>
                    -
                    <span class="album">{{item.al.name}}</span>
                </p>
                <p class="ell" v-else>
                    <span class="art" v-for="(art,artsIndex) in item.ar">{{art.name}}<span v-if="artsIndex == 0 && item.ar.length > 1">/</span></span>
                </p>
            </div>
        </router-link>
    </div>
</template>
<script>
    export default{
        name:'songItem',
        data(){
            return{

            }
        },
        props:{
            songData:Array,
            type:String
        }
    }

</script>
<style scoped lang="scss">
    @import '../style/index.scss';
    .songItem{
        .item{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding:rem(8) 0 rem(3) 0;
            color: #666;

        }
        .left{
            color: #666;
            .rank{
                width: rem(30);
                display: inline-block;
                text-align: center;
            }
        }
        .right{
            display: flex;
            flex-direction: column;
            flex:2;
            margin-left: rem(5);
            border-bottom: 1px solid #eee;
            padding-bottom: rem(5);
            font-size: rem(12);
            p{
                margin-top: rem(5);

                width: 60%;
            }
            .art{

            }
            .album{
                color: #999;


            }
        }
    }
</style>
