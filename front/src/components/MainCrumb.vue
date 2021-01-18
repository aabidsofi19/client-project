<template>
  <div class="page_header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
          <ul class="breadcrumb">
            <li class="item">
              <router-link to="/">Dashboard</router-link>
            </li>
            <li class="item active">{{ currentRouteName }}</li>
          </ul>
        </div>
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-6"></div>
            <div class="col-sm-6">
              <div class="row">
                <div class="col-sm-6 selectBoxTitle" id="headerDt">
                  {{ timestamp }}
                </div>
                <div class="col-sm-6 selectBoxTitle">
                  <a
                    class="pull-right"
                    style="font-size: 15px; color: white"
                    href=""
                    data-toggle="dropdown"
                  >
                    <!-- <span class="fa fa-bullhorn"></span> -->
                    <i class="far fa-bell" style="font-size: 1.2em;"></i>
                  </a>
                  <ul class="dropdown-menu" style="padding-left: 10px">
                    <li>
                      <a
                        href="#"
                        class="small"
                        style="text-decoration: none; color:#001f3d"
                        data-value="option1"
                        tabIndex="-1"
                        ><input type="checkbox" />&nbsp;Option 1</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="small"
                        style="text-decoration: none; color:#001f3d"
                        data-value="option2"
                        tabIndex="-1"
                        ><input type="checkbox" />&nbsp;Option 2</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="small"
                        style="text-decoration: none; color:#001f3d"
                        data-value="option3"
                        tabIndex="-1"
                        ><input type="checkbox" />&nbsp;Option 3</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="small"
                        style="text-decoration: none; color:#001f3d"
                        data-value="option4"
                        tabIndex="-1"
                        ><input type="checkbox" />&nbsp;Option 4</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="small"
                        style="text-decoration: none; color:#001f3d"
                        data-value="option5"
                        tabIndex="-1"
                        ><input type="checkbox" />&nbsp;Option 5</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="small"
                        style="text-decoration: none; color:#001f3d"
                        data-value="option6"
                        tabIndex="-1"
                        ><input type="checkbox" />&nbsp;Option 6</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCrumb",
  data() {
    return { timestamp: "" };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function () {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      this.timestamp = dateTime;
    },
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>


