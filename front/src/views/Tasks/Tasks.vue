<template>
  <div>
    <div class="form-wrapper">
      <AddButton />
    </div>
    <div class="table_wrapper" style="min-height: 350px">
      <div class="table-scroll" style="padding: 5px 5px 5px 5px">
        <div class="row" style="margin-bottom: 5px">
          <div class="col-md-4 col-xl-3">
            <div class="form-input">
              <input type="text" placeholder="search task" />
            </div>
          </div>
          <div class="col-md-4 col-xl-3">
            <input
              type="submit"
              value="Search"
              class="search-btn"
              data-toggle="modal"
              data-target="#myModal"
            />
          </div>
        </div>
        <tasks-table></tasks-table>
        <div class="table-footer">
          <div class="show-page">Showing 10 of 100 entries</div>
          <div>
            <ul class="pagination">
              <li><a class="first" href="#"></a></li>
              <li><a class="prev" href="#"></a></li>
              <li class="active"><span>1</span></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a class="next" href="#"></a></li>
              <li><a class="last" href="#"></a></li>
            </ul>
          </div>
        </div>
        <div class="py-4"></div>
        <vue-google-calendar :data="calendarData" />
      </div>
    </div>
  </div>
</template>

<script>
import AddButton from "./AddButton";
import TasksTable from "./TasksTable";
import VueGoogleCalendar from "vue-google-calendar/src/vue-google-calendar";

export default {
  name: "Tasks",
  components: {
    AddButton,
    TasksTable,
    VueGoogleCalendar,
  },
  data() {
    return {
      calendarData: [
        {
          id: "test-user2e@test-email.ai",
          summary: "description ....",
          color: "#cd74e6",
          dates: [
            {
              id: "7413lef3g1hip8hvk6tbipkqrq_20200917T140000Z",
              summary: "event name",
              start: { dateTime: "2020-09-17T10:00:00-04:00" },
              end: { dateTime: "2020-09-17T11:00:00-04:00" },
            },
          ],
        },
      ],
    };
  },
};
</script>
