<template>
    <div class="main">
        <head></head>
        <router-link to='/commend'>commend</router-link>
        <router-link to='/songList'>songList</router-link>
        <router-link to='/charts'>charts</router-link>
        <router-view name='a'></router-view>
        <foot-nav></foot-nav>
    </div>
</template>
<script>
    import head from '@/components/Head'
    import footNav from '@/components/FootNav'

    export default {
        data(){
            return{

            }
        },
        components:{
            head,
            footNav
        }
    }
</script>
