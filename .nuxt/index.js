import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_2fc8fa72 from 'nuxt_plugin_plugin_2fc8fa72' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_axios_fb9c9a02 from 'nuxt_plugin_axios_fb9c9a02' // Source: ../admin/plugins/axios (mode: 'all')
import nuxt_plugin_datatable_71e0c06d from 'nuxt_plugin_datatable_71e0c06d' // Source: ../admin/plugins/datatable (mode: 'all')
import nuxt_plugin_antd_56c7a7b4 from 'nuxt_plugin_antd_56c7a7b4' // Source: ../admin/plugins/antd (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"admin","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"My majestic Nuxt.js project"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Fassets\u002Fimg\u002Ficon.ico"},{"href":"\u002Fassets\u002Fcss\u002Fbootstrap.min.css","rel":"stylesheet"},{"href":"\u002Fassets\u002Fcss\u002Fazzara.min.css","rel":"stylesheet"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"script":[{"src":"\u002Fassets\u002Fjs\u002Fplugin\u002Fwebfont\u002Fwebfont.min.js"},{"body":true,"src":"\u002Fassets\u002Fjs\u002Fcore\u002Fjquery.3.2.1.min.js"},{"src":"\u002Fassets\u002Fjs\u002Fcore\u002Fpopper.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fcore\u002Fbootstrap.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fplugin\u002Fjquery-ui-1.12.1.custom\u002Fjquery-ui.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fplugin\u002Fjquery-ui-touch-punch\u002Fjquery.ui.touch-punch.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fplugin\u002Fjquery-scrollbar\u002Fjquery.scrollbar.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fplugin\u002Fmoment\u002Fmoment.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fplugin\u002Fchart.js\u002Fchart.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fplugin\u002Fjquery.sparkline\u002Fjquery.sparkline.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fplugin\u002Fchart-circle\u002Fcircles.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fplugin\u002Fdatatables\u002Fdatatables.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fplugin\u002Fbootstrap-notify\u002Fbootstrap-notify.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fplugin\u002Fbootstrap-toggle\u002Fbootstrap-toggle.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fplugin\u002Fjqvmap\u002Fjquery.vmap.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fplugin\u002Fjqvmap\u002Fmaps\u002Fjquery.vmap.world.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fplugin\u002Fgmaps\u002Fgmaps.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fplugin\u002Fsweetalert\u002Fsweetalert.min.js","body":true}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_2fc8fa72 === 'function') {
    await nuxt_plugin_plugin_2fc8fa72(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_fb9c9a02 === 'function') {
    await nuxt_plugin_axios_fb9c9a02(app.context, inject)
  }

  if (typeof nuxt_plugin_datatable_71e0c06d === 'function') {
    await nuxt_plugin_datatable_71e0c06d(app.context, inject)
  }

  if (typeof nuxt_plugin_antd_56c7a7b4 === 'function') {
    await nuxt_plugin_antd_56c7a7b4(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
