import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import myInfo from '@/components/myInfo'
import releaseText from '@/components/releaseText'
import releaseShooting from '@/components/releaseShooting'
import releasePicture from '@/components/releasePicture'
import addNewFriend from '@/components/addNewFriend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: myInfo
    },
    {
      path: '/releaseText',
      name: 'releaseText',
      component: releaseText
    },
    {
      path: '/releaseShooting',
      name: 'releaseShooting',
      component: releaseShooting
    },
    {
      path: '/releasePicture',
      name: 'releasePicture',
      component: releasePicture
    },
    {
      path: '/addNewFriend',
      name: 'addNewFriend',
      component: addNewFriend
    }
  ]
})
