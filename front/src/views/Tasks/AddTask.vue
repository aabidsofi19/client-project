<template>
  <div class="form-wrapper" style="padding-left: 20px">
    <div class="row">
      <div class="col-md-4 col-xl-3">
        <div class="selectBoxTitle" style="color:#001f3d;">Task Name</div>
        <div class="form-input">
          <input type="text" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-xl-3">
        <div class="selectBoxTitle" style="color:#001f3d;">Due Date</div>
        <div class="form-input">
          <input type="text" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-xl-3">
        <div class="selectBoxTitle" style="color:#001f3d;">Assign</div>
        <div class="form-input">
          <input type="text" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-xl-3">
        <div class="selectBoxTitle" style="color:#001f3d;">Asana Project</div>
        <div class="form-input">
          <input type="text" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-xl-3">
        <div class="selectBoxTitle" style="color:#001f3d;">Description</div>
        <div class="form-input">
          <textarea class="form-control" type="text" style="height: 100px;"></textarea>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-1" style="margin-top: 10px; margin-right: 90px">
        <input
          type="submit"
          value="Cancel"
          class="search-btn"
          data-toggle="modal"
          data-target="#myModal"
        />
      </div>
      <div class="col-md-1" style="margin-top: 10px; padding-right: 10px">
        <input type="submit" value="Save" class="search-btn" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
};
</script>
