<template>
  <div class="up-header d-flex justify-content-between align-items-center">
    <router-link to="/" style="text-decoration: none">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-5" style="margin: auto">
            <img
              src="../assets/images/avatar/avatar2.png"
              width="50"
              height="50"
              style="margin: auto; border-radius: 50px"
            />
          </div>
          <div class="col-sm-10" style="margin: auto">
            <div
              class="selectBoxTitle"
              style="font-weight: bold; text-align: center; margin-top: 10px"
            >
              User Full Name
            </div>
          </div>
        </div>
      </div>
    </router-link>
    <button class="side-menu-toggle">toggle</button>
  </div>
</template>

<script>
export default {
  name: "UpHeader",
};
</script>
