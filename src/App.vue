<template>
<div id="app">
  <router-view></router-view>
  <foot-nav></foot-nav>
</div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex';
import footNav from '@/components/FootNav';
export default {
  name: 'app',
  methods: {
    ...mapActions(['login'])
  },
  mounted() {
    //this.login()
  },
  components: {
    footNav,
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const html = document.querySelector('html')
  html.style.fontSize = window.innerWidth / 10 + 'px'
})
</script>

<style>
@import "./style/base.scss";
</style>
