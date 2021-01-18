<template>
  <div class="col-sm-12">
    <div class="row">
      <div class="btn-group " style="padding-left: 10px">
        <button
          type="button"
          class="btn btn-success"
          @click="openModal" 
        >
          + New Invoice
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewInvoiceButton",
};
</script>

<style scoped>
.new-btn{
  background-color: #001f3d;
  font-weight: bold;
}

.new-btn:hover{
  color:#001f3d;
  background-color: white;
}
</style>
