require("dotenv").config();
const { join } = require("path");
const { copySync, removeSync } = require("fs-extra");
export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  srcDir: __dirname,
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/assets/img/icon.ico" },
      { href: "/assets/css/bootstrap.min.css", rel: "stylesheet" },
      { href: "/assets/css/azzara.min.css", rel: "stylesheet" },
    ],
    script: [
      {
        src: "/assets/js/plugin/webfont/webfont.min.js",
      },
      { body: true, src: "/assets/js/core/jquery.3.2.1.min.js" },
      { src: "/assets/js/core/popper.min.js", body: true },
      { src: "/assets/js/core/bootstrap.min.js", body: true },
      {
        src: "/assets/js/plugin/jquery-ui-1.12.1.custom/jquery-ui.min.js",
        body: true,
      },
      {
        src:
          "/assets/js/plugin/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js",
        body: true,
      },
      {
        src: "/assets/js/plugin/jquery-scrollbar/jquery.scrollbar.min.js",
        body: true,
      },
      { src: "/assets/js/plugin/moment/moment.min.js", body: true },
      { src: "/assets/js/plugin/chart.js/chart.min.js", body: true },
      {
        src: "/assets/js/plugin/jquery.sparkline/jquery.sparkline.min.js",
        body: true,
      },
      { src: "/assets/js/plugin/chart-circle/circles.min.js", body: true },
      { src: "/assets/js/plugin/datatables/datatables.min.js", body: true },
      {
        src: "/assets/js/plugin/bootstrap-notify/bootstrap-notify.min.js",
        body: true,
      },
      {
        src: "/assets/js/plugin/bootstrap-toggle/bootstrap-toggle.min.js",
        body: true,
      },
      { src: "/assets/js/plugin/jqvmap/jquery.vmap.min.js", body: true },
      { src: "/assets/js/plugin/jqvmap/maps/jquery.vmap.world.js", body: true },
      { src: "/assets/js/plugin/gmaps/gmaps.js", body: true },
      { src: "/assets/js/plugin/sweetalert/sweetalert.min.js", body: true },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~plugins/axios" }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    extend(config, { isDev, isClient }) {
      config.node = {
        fs: "empty",
      };
    },
  },

  hooks: {
    generate: {
      done(generator) {
        // Copy dist files to public/_nuxt
        if (
          generator.nuxt.options.dev === false &&
          generator.nuxt.options.mode === "spa"
        ) {
          const publicDir = join(
            generator.nuxt.options.rootDir,
            "public",
            "_nuxt"
          );
          removeSync(publicDir);
          copySync(
            join(generator.nuxt.options.generate.dir, "_nuxt"),
            publicDir
          );
          copySync(
            join(generator.nuxt.options.generate.dir, "200.html"),
            join(publicDir, "index.html")
          );
          removeSync(generator.nuxt.options.generate.dir);
        }
      },
    },
  },
};
