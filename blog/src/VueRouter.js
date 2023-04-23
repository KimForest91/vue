import { createWebHistory, createRouter } from "vue-router";
import BlogList from './components/BlogList.vue';
import HomeRoute from './components/HomeRoute.vue';
import DetailContent from './components/DetailContent.vue';

const routes = [
  {
    path: "/list",
    component: BlogList,
  },
  {
    path: "/detail",
    component: DetailContent,
  },
  {
    path: "/",
    component: HomeRoute,
  },
];

const VueRouter = createRouter({
  history: createWebHistory(),
  routes,

});

export default VueRouter;