<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import foundMusic from '@/pages/foundMusic'
export default {
  name: 'app',
}

document.addEventListener('DOMContentLoaded', function () {
    const html = document.querySelector('html')
    html.style.fontSize = window.innerWidth / 10 + 'px'
})
</script>

<style>
  @import "./style/base.scss";
</style>
