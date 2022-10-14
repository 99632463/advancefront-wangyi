export default {
  path: '/about',
  component: () => import(/* webpackChunkName: "router" */ '@/components/About')
}