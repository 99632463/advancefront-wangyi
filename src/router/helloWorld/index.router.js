export default {
  path: '/',
  component: () => import(/* webpackChunkName: "router" */ '@/components/HelloWorld')
}