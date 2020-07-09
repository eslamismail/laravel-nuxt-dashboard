<template>
  <div class="wrapper wrapper-login">
    <div class="container container-login animated fadeIn">
      <h3 class="text-center">Sign In To Admin</h3>
      <div class="login-form">
        <div class="form-group form-floating-label">
          <input
            id="username"
            name="username"
            type="text"
            class="form-control input-border-bottom"
            required
          />
          <label for="username" class="placeholder">Username</label>
        </div>
        <div class="form-group form-floating-label">
          <input
            id="password"
            name="password"
            type="password"
            class="form-control input-border-bottom"
            required
          />
          <label for="password" class="placeholder">Password</label>
          <div class="show-password">
            <i class="flaticon-interface"></i>
          </div>
        </div>
        <div class="row form-sub m-0">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="rememberme" />
            <label class="custom-control-label" for="rememberme">Remember Me</label>
          </div>

          <a href="#" class="link float-right">Forget Password ?</a>
        </div>
        <div class="form-action mb-3">
          <!-- <a href="#" class="btn btn-primary btn-rounded btn-login">Sign In</a> -->
          <nuxt-link to="/" class="btn btn-primary btn-rounded shadow-lg btn-login">Sign In</nuxt-link>
        </div>
        <div class="login-account">
          <span class="msg">Don't have an account yet ?</span>
          <nuxt-link to="/register" class="link">Sign Up</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "simple",
  head: {
    title: "Admin Login"
  }
};
</script>
