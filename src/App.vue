<template>
  <div id="app">
    <router-view></router-view>
    <foot-nav></foot-nav>
  </div>
</template>

<script>

import footNav from '@/components/FootNav';
export default {
  name: 'app',
  components:{
      footNav,
  }
}

document.addEventListener('DOMContentLoaded', function () {
    const html = document.querySelector('html')
    html.style.fontSize = window.innerWidth / 10 + 'px'
})
</script>

<style>
  @import "./style/base.scss";
</style>
