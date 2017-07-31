<template>
    <div class="foundMusic">
        <found-music-head></found-music-head>
        <router-link to='/'>commend</router-link>
        <router-link to='/songList'>songList</router-link>
        <router-link to='/radioStation'>radioStation</router-link>
        <router-link to='/charts'>charts</router-link>
        <router-view></router-view>
        <foot-nav></foot-nav>
    </div>
</template>
<script>
    import foundMusicHead from '@/components/foundMusic/FoundMusicHead'
    import footNav from '@/components/FootNav'

    export default {
        data(){
            return{

            }
        },
        components:{
            foundMusicHead,
            footNav
        }
    }
</script>
