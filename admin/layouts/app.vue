<template>
  <div class="wrapper animated fadeIn">
    <admin-header />
    <admin-sidebar />
    <nuxt />
  </div>
</template>
<script>
import AdminHeader from "../components/header";

import AdminSidebar from "../components/sidebar";
export default {
  components: {
    AdminHeader,
    AdminSidebar
  },
  head: {
    title: "Dashboard",
    script: [{ src: "/assets/js/ready.min.js", body: true }]
  },
  created() {
    WebFont.load({
      google: { families: ["Open+Sans:300,400,600,700"] },
      custom: {
        families: [
          "Flaticon",
          "Font Awesome 5 Solid",
          "Font Awesome 5 Regular",
          "Font Awesome 5 Brands"
        ],
        urls: ["assets/css/fonts.css"]
      },
      active: function() {
        sessionStorage.fonts = true;
      }
    });
  }
};
</script>
<style>
</style>
