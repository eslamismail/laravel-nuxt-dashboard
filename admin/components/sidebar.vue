<template>
  <!-- Sidebar -->
  <div class="sidebar animated fadeIn">
    <div class="sidebar-background"></div>
    <div class="sidebar-wrapper scrollbar-inner">
      <div class="sidebar-content">
        <div class="user">
          <div class="avatar-sm float-left mr-2">
            <img src="assets/img/profile.jpg" alt="..." class="avatar-img rounded-circle" />
          </div>
          <div class="info">
            <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
              <span>
                Hizrian
                <span class="user-level">Administrator</span>
                <span class="caret"></span>
              </span>
            </a>
            <div class="clearfix"></div>

            <div class="collapse in" id="collapseExample">
              <ul class="nav">
                <li>
                  <nuxt-link to="/profile">
                    <span class="link-collapse">My Profile</span>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/profile">
                    <span class="link-collapse">Edit Profile</span>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/setting">
                    <span class="link-collapse">Settings</span>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/login">
                    <span class="link-collapse">Logout</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul class="nav">
          <li :class="`nav-item ${isActive('index')}`">
            <nuxt-link to="/">
              <i class="fas fa-home"></i>
              <p>Dashboard</p>
            </nuxt-link>
          </li>
          <li :class="`nav-item ${isActive('user')}`">
            <nuxt-link to="/user">
              <i class="fas fa-users"></i>
              <p>User</p>
            </nuxt-link>
          </li>
          <li :class="`nav-item ${isActive('admin')}`">
            <nuxt-link to="/admin">
              <i class="fas fa-user"></i>
              <p>Admin</p>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- End Sidebar -->
</template>
<script>
export default {
  mounted() {},
  methods: {
    isActive(name) {
      let pathName = this.$route.name;
      if (name === pathName) {
        return "active";
      }
      return null;
    }
  }
};
</script>
