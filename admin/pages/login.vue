<template>
  <form @submit.prevent="login" class="wrapper wrapper-login">
    <div class="container container-login animated fadeIn">
      <h3 class="text-center">Sign In To Admin</h3>
      <div class="login-form">
        <div class="form-group form-floating-label">
          <input
            id="email"
            name="email"
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
          <button type="submit" class="btn btn-primary btn-rounded shadow-lg btn-login">Sign In</button>
        </div>
        <div class="login-account">
          <span class="msg">Don't have an account yet ?</span>
          <nuxt-link to="/register" class="link">Sign Up</nuxt-link>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  layout: "simple",
  head: {
    title: "Admin Login"
  },
  computed: {
    token() {
      return this.$store.state.auth;
    }
  },
  mounted() {},
  methods: {
    login() {
      event.preventDefault();
      let form = new FormData(event.target);
      axios
        .post("/login", form)
        .then(response => {
          let admin = response.data.admin;
          Cookie.set("auth", response.data.admin.accessToken);
          this.$store.commit("setAuth", response.data.admin.accessToken);
          $.notify(`Welcome back `, {
            type: "success",
            time: 100,
            delay: 5000
          });
          this.$router.push("/");
        })
        .catch(error => {
          if (!error.response) {
            $.notify(`No internet connection `, {
              type: "danger",
              time: 100,
              delay: 5000
            });
          } else if (
            error.response.status == 422 ||
            error.response.status == 401
          ) {
            $.notify(`${error.response.data.message}`, {
              type: "danger",
              time: 100,
              delay: 5000
            });
          } else {
            $.notify(`${error.response.statusCode}`, {
              type: "danger",
              time: 100,
              delay: 5000
            });
          }
          console.log(error);
        });
    }
  }
};
</script>
