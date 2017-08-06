import Vue from 'vue'
import Router from 'vue-router'
import foundMusic from '@/pages/foundMusic'
import myMusic from '@/pages/myMusic'
import friend from '@/pages/friend'
import account from '@/pages/account'
import Commend from '@/components/foundMusic/Commend'
import SongListIndex from '@/components/foundMusic/SongList'
import Charts from '@/components/foundMusic/Charts'
import RadioStation from '@/components/foundMusic/RadioStation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/foundMusic',
      components: {
        default: foundMusic
      },
      children: [
        {
          path: '',
          component: Commend
        }, {
          path: 'songList',
          component: SongListIndex
        }, {
          path: 'radioStation',
          component: RadioStation
        }, {
          path: 'charts',
          component: Charts
        }
      ]
    },
    {
      path: '/mine',
      components: {
        default: myMusic
      },
    },
    {
      path: '/friend',
      components: {
        default: friend
      },
    },
    {
      path: '/account',
      components: {
        default: account
      },
    }
  ]
})
