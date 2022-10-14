// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import { createRouter } from './router'
import internal_control from './common/control/internal'
import customize_control from './common/control/customize'

// const router = createRouter();

Vue.config.productionTip = false
internal_control(Vue);
customize_control(Vue);

/* eslint-disable no-new */
// export const createApp = () => {
//   const app = new Vue({
//     router,
//     render: h => h(App)
//   })

//   return { router, app };
// }

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
