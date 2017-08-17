import Vue from 'vue'
import Router from 'vue-router'
import foundMusic from '@/pages/foundMusic'
import myMusic from '@/pages/myMusic'
import friend from '@/pages/friend'
import account from '@/pages/account'
import songlistDetail from '@/pages/songlistDetail'
import albumDetail from '@/pages/albumDetail'
import Commend from '@/pages/Commend'
import SongListIndex from '@/pages/SongList'
import Charts from '@/pages/Charts'
import MoreMV from '@/pages/MoreMV'
import RadioStation from '@/pages/RadioStation'
import hotSonglist from '@/pages/hotSonglist'
import play from '@/pages/play'

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
    }, {
      path: '/mine',
      components: {
        default: myMusic
      }
    }, {
      path: '/friend',
      components: {
        default: friend
      }
    }, {
      path: '/account',
      components: {
        default: account
      }
    }, {
      path: '/moreMV',
      components: {
        default: MoreMV
      }
    }, {
      path: '/songlistDetail',
      name: 'songlistDetail',
      components: {
        default: songlistDetail
      }
    }, {
      path: '/hotSonglist',
      name: 'hotSonglist',
      components: {
        default: hotSonglist
      }
    }, {
      path: '/albumDetail',
      name: 'albumDetail',
      components: {
        default: albumDetail
      }
    }, {
      path: '/play',
      name: 'play',
      components: {
        default: play
      }
    }
  ]
})
