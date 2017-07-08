<template>
    <div>
      <h1>Home</h1>
    </div>
</template>
<script>
import axios from '~plugins/axios'
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
