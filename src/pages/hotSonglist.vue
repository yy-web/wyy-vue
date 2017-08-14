<template>
  <div class="main">
  </div>
</template>
<script>
import {mapState , mapActions} from 'vuex';
export default{

    name:'hotSonglist',
    components:{
    },
    computed: {
      ...mapState(['songListPage']),
    },
    methods: {
      ...mapActions(['fetchSongList'])
    },
    mounted() {
        this.fetchSongList();

    },
    data(){
        return{
          big:'big',
        }
    }
}

</script>
<style lang="scss" scoped>
@import "../style/index.scss";

</style>
