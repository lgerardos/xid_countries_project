import Vue from 'vue'
import VueRouter from 'vue-router'
import Countries from '../views/Countries'
import CountryDetail from "../views/CountryDetail"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Countries',
    component: Countries
  },
  {
    path: '/:id/detail',
    name: 'CountryDetail',
    component: CountryDetail,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
