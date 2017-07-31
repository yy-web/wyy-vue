import Vue from 'vue'
import Router from 'vue-router'
import foundMusic from '@/pages/foundMusic'
import Commend from '@/components/foundMusic/Commend'
import SongList from '@/components/foundMusic/SongList'
import Charts from '@/components/foundMusic/Charts'
import RadioStation from '@/components/foundMusic/RadioStation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: foundMusic
      },
      children: [
        {
          path: '/',
          component: Commend
        }, {
          path: 'songList',
          component: SongList
        }, {
          path: 'radioStation',
          component: RadioStation
        }, {
          path: 'charts',
          component: Charts
        }
      ]
    }
  ]
})
