<template>
  <div>
    <h1>NuxtJS Starter</h1>
    <nuxt-link to="/about">About</nuxt-link> |
    <a v-if="!user.email" href="/auth/facebook">Login with Facebook</a> |
    <a v-if="!user.email" href="/auth/facebook">Login with LinkedIn</a> | 
    <a v-if="!user.email" href="/auth/twitter">Login with Twitter</a>
    <a v-if="user.email" href="/logout">Logout</a>
    <br />
    <h2>{{ user.email }}</h2>
    <img :src="user.profile && user.profile.picture" />
  </div>
</template>
<script>
import axios from '~plugins/axios'
import getCookie from '~plugins/getCookie'
export default {
  data () {
    return  {
      user: {},
      auth: false
    }
  },
  async asyncData ({ isServer, req, redirect }) {
    if(isServer) {
      const ax = axios.create(req.headers.cookie)
      try {
        const res = await ax.get('/account')
        return {user:  res.data.data.user};
        // else redirect('/login')
      } catch(e) {
      }
    }
  }
}
</script>
