import Vue from 'vue'
// import Router from '../myRouter'
import Router from 'vue-router'

Vue.use(Router)

const r = require.context('./', true, /\.router\./)
const routes = []

r.keys().forEach(key => {
  routes.push(r(key).default)
})

// export const createRouter = () => {
//   return new Router({ 
//     mode:'history',
//     routes
//   })
// }

export default new Router({ 
  routes
})
