<template>
  <div class="page">
    <Navbar />
    <div class="page-main">
      <Sidebar />
      <div class="app-content">
        <MainCrumb />
        <router-view></router-view>
      </div>
    </div>
    <footer>
      <p class="text-center poweredby">Powered by Base Guide © 2020</p>
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import MainCrumb from "@/components/MainCrumb";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "@/assets/css/style.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
    MainCrumb,
  },
};
</script>

