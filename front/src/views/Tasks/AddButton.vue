<template>
  <div class="col-sm-12">
    <div class="row">
      <div class="btn-group" style="padding-left: 10px">
        <button
          type="button"
          class="btn btn-success"
          style="
            background-color: #001f3d ;
            border:none ;
            color: white;
          "
        >
          Create New Task
        </button>
        <button
          class="btn btn-success"
          style="
            background-color: #001f3d ;
            border: none ;
            color: white;
          "
          data-toggle="dropdown"
          to="/add_task"
          aria-expanded="false"
        >
          <span class="fas fa-bars"></span>
        </button>
        <div class="dropdown-menu" style="will-change: transform">
          <router-link to="/add_task" target="_self" class="dropdown-item"
            >Single</router-link
          >
          <router-link to="/add_task" class="dropdown-item"
            >Album/EP</router-link
          >
          <router-link to="/add_task" class="dropdown-item"
            >Campaign</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddButton",
};
</script>
