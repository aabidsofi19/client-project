<template>
  <table class="data-table tasks-table">
    <thead>
      <tr>
        <th scope="col">Task Name</th>
        <th scope="col">Due Date</th>
        <th scope="col">Artist</th>
        <th scope="col">Action</th>
        <th scope="col">Status</th>
        <th scope="col">Agenda View</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.dueDate }}</td>
        <td>{{ item.artist }}</td>
        <td>
            <label class="form-checkbox">
              <div >
                
                  <i class="fas fa-pencil-alt edit-icon" style="cursor:pointer;"></i> &nbsp; |&nbsp; 
                  <i class="fas fa-trash-alt edit-icon" style="cursor:pointer;"></i>
              </div>
  					</label>
        </td>
        <td>
          <label class="form-checkbox">
              <input type="checkbox" :value="item.id" v-model="selected">
              <i class="form-icon"></i>
          </label>
        </td>
        <td>
          <button
            class="btn btn-primary agenda-view-btn"
            
          >
            view
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TasksTable",
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Record Song",
          dueDate: "12-12-2020",
          artist: "My Marciano",
          action: "Lorem Ipsum",
          status: "Lorem Ipsum",
        },
        {
          id: 2,
          name: "Record Song",
          dueDate: "12-12-2020",
          artist: "My Marciano",
          action: "Lorem Ipsum",
          status: "Lorem Ipsum",
        },
        {
          id: 3,
          name: "Record Song",
          dueDate: "12-12-2020",
          artist: "My Marciano",
          action: "Lorem Ipsum",
          status: "Lorem Ipsum",
        },
        {
          id: 4,
          name: "Record Song",
          dueDate: "12-12-2020",
          artist: "My Marciano",
          action: "Lorem Ipsum",
          status: "Lorem Ipsum",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.tasks-table {
  th {
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;
  }
  td {
    text-align: center;
  }
}

.agenda-view-btn{
  padding-top: 2px; 
  padding-bottom: 2px; 
  background:#001f3d;
  border:none;
  font-size:13px;
  font-weight: bold;
}
.edit-icon{
    cursor:pointer;
}
.edit-icon:hover{
    color:white;
}
</style>
