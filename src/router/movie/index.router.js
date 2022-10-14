export default {
  path: '/movie',
  component: () => import(/* webpackChunkName: "router" */ '@/components/Movie')
}