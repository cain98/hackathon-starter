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
         <vue-form :state="formstate" v-model="formstate" @submit.prevent="onSubmit">
           <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.email)">
             <label>Email</label>
             <input type="email" name="email" class="form-control" required v-model.lazy="model.email">

             <field-messages auto-label name="email" show="$touched || $submitted" class="form-control-feedback">
               <div slot="required">Email is a required field</div>
               <div slot="email">Email is invalid</div>
             </field-messages>

            </validate>

            <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.password)">
              <label>Password</label>
              <input type="password" name="password" class="form-control" required v-model.lazy="model.password">

              <field-messages auto-label name="password" show="$touched || $submitted" class="form-control-feedback">
                <div slot="required">Password is a required field</div>
              </field-messages>

             </validate>
            <div class="">
              <button class="btn btn-primary" type="submit">Submit</button>
            </div>
          </vue-form>
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
import '~plugins/vue-form';
export default {
  data() {
    return {
      formstate: {},
      model: {
        name: '',
        password: '',
      }
    }
  },
  methods: {
    fieldClassName: function (field) {
      if(!field) {
        return '';
      }
      if((field.$touched || field.$submitted) && field.$valid) {
        return 'has-success';
      }
      if((field.$touched || field.$submitted) && field.$invalid) {
        return 'has-danger';
      }
    },
    onSubmit: function() {
      console.log(this.formstate.$valid);
    }
  }
  }
</script>
