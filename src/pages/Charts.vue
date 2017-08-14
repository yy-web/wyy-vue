<template>
<div class="charts">
  <div class="block">
    <v-title :name="'云音乐官方榜'"></v-title>
    <yun-music :yunMusic="chartsPage.chartsList"></yun-music>
  </div>
  <div class="block">
    <v-title :name="'全球榜'"></v-title>
    <global-charts :globalCharts="chartsPage.globalCharts"/>
  </div>
</div>
</template>
<script>
import vTitle from '@/components/foundMusic/Title';
import yunMusic from '@/components/foundMusic/yunMusic';
import globalCharts from '@/components/foundMusic/global_charts';
import {
  mapState,
  mapActions
} from 'vuex';
export default {
  name: 'charts',
  components: {
    vTitle,
    yunMusic,
    globalCharts
  },
  computed: {
    ...mapState(['chartsPage']),
  },
  methods: {
    ...mapActions(['getCharts','getGlobalCharts'])
  },
  mounted() {
    this.getCharts()
    this.getGlobalCharts()
  },
  data() {
    return {}

  }
}
</script>
<style lang="scss" scoped>
    @import '../style/index.scss';
</style>
