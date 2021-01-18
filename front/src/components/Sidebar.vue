<template>
  <div class="app-sidebar">
    <up-header></up-header>
    <!-- side nagigation -->
    <div class="side-menu">
      <div class="scroll-height">
        <ul id="sideNavigation" class="navigation">
          <!-- <li v-for="item in items" :key="item.title">
            <router-link :to="item.link" :class="item.class">{{
              item.title
            }}</router-link>
          </li> --> 
          <li>
            <router-link to="/tasks" class="mytasks" style="font-size:15px; margin-top:5px;"><i class="fa fa-tasks" style="margin-right:10px;"></i> &nbsp;&nbsp;&nbsp; Tasks</router-link>
            <router-link to="/analytics" class="mytasks" style="font-size:15px; margin-top:5px;"><i class="fas fa-chart-line" style="margin-right:10px;"></i> &nbsp; Analystics</router-link>
            <router-link to="/finance" class="mytasks" style="font-size:15px; margin-top:5px;"><i class="far fa-credit-card" style="margin-right:10px;"></i> &nbsp; Finance</router-link>
            <router-link to="/partners" class="mytasks" style="font-size:15px; margin-top:5px;"><i class="fas fa-handshake" style="margin-right:10px;"></i> &nbsp; Partners</router-link>
            <router-link to="/reports" class="mytasks" style="font-size:15px; margin-top:5px;"><i class="fas fa-file-signature" style="margin-right:10px;"></i> &nbsp; Reports</router-link>
            <router-link to="/goals" class="mytasks" style="font-size:15px; margin-top:5px;"><i class="fas fa-hand-holding-usd" style="margin-right:10px;"></i> &nbsp; Goals</router-link>
            <router-link to="/settings" class="mytasks" style="font-size:15px; margin-top:5px;"><i class="fa fa-cogs" style="margin-right:10px;"></i> &nbsp; Settings</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- ens side navigation -->
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import UpHeader from "./UpHeader.vue";
export default {
  components: { UpHeader },
  name: "Sidebar",
  data() {
    return {
      items: [
        { title: "Tasks", class: "mytasks", link: "/tasks" },
        { title: "Analystics", class: "customer", link: "/analytics" },
        { title: "Finance", class: "cashModule", link: "/finance" },
        { title: "Partners", class: "policyServicing", link: "/partners" },
        { title: "Reports", class: "quotesBusiness", link: "/reports" },
        { title: "Goals", class: "accounts", link: "/goals" },
        { title: "Settings", class: "managementReports", link: "/settings" },
      ],
    };
  },
  computed: {
    currentPath() {
      alert(this.$route.path);
      return this.$route.path;
    },
  },
};
</script>
