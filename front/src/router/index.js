import Vue from "vue";
import VueRouter from "vue-router";
import Tasks from "../views/Tasks/Tasks.vue";
import Analytics from "../views/Analytics/Analytics.vue";
import Finance from "../views/Finance/Finance.vue";
import AddTask from "../views/Tasks/AddTask.vue";
import Partners from "../views/Partners/Partners.vue";
import Reports from "../views/Reports/Reports.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: Tasks
  },
  {
    path: "/add_task",
    name: "Tasks / New Tasks",
    component: AddTask
  },
  {
    path: "/analytics",
    name: "analytics",
    component: Analytics
  },
  {
    path: "/finance",
    name: "Finance",
    component: Finance
  },
  {
    path: "/partners",
    name: "Partners",
    component: Partners
  },
  {
    path: "/reports",
    name: "Reports",
    component: Reports
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
