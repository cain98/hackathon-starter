<template>
  <div>
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
      <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <nuxt-link class="navbar-brand" to="/">NuxtStarter</nuxt-link>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" v-bind:class="{ active: $route.name === 'index'}">
              <nuxt-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></nuxt-link>
            </li>
            <li class="nav-item" v-bind:class="{ active: $route.name === 'about'}">
              <nuxt-link class="nav-link" to="/about">About</nuxt-link>
            </li>
          </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#" class="nav-link" data-toggle="modal" data-target="#exampleModal">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Signup</a>
              </li>
            </ul>
        </div>
      </div>
    </nav>
    <!-- Button trigger modal -->


  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Login</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
            </div>
            <div class="form-group">
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button class="btn btn-primary">
              Sign In
            </button>
            <hr />
            <button class="btn btn-default mt-2" style="width: 100%;">
              Sign In With Facebook
            </button>
            <button class="btn btn-default" style="width: 100%;">
              Sign In with Instagram
            </button>
            <button class="btn btn-default" style="width: 100%;">
              Sign In with Twitter
            </button>
            <button class="btn btn-default" style="width: 100%;">
              Sign In with Linkedin
            </button>
        </div>
      </div>
    </div>
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
