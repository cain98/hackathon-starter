<template>
  <div>
  <Navbar />
  <div class="container pt-3">
    <nuxt />
  </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>
