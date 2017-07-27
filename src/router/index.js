import Vue from 'vue'
import Router from 'vue-router'
import main from '@/pages/main'
import Commend from '@/components/Commend'
import SongList from '@/components/SongList'
import Charts from '@/components/Charts'
import RadioStation from '@/components/RadioStation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'commend',
      components: {
        default: main,
        a: Commend,
      }
    }, {
      path: '/songList',
      name: 'songList',
      components: {
        default: main,
        a: SongList,
      }
    }, {
      path: '/charts',
      name: 'charts',
      components: {
        default: main,
        a: Charts,
      }
    }, {
      path: '/radio',
      name: 'radio',
      components: {
        default: main,
        a: RadioStation,
      }
    }
  ]
})
