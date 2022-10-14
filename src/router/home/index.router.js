export default {
  path: '/home',
  component: () => import(/* webpackChunkName: "router" */ '@/components/Home')
}