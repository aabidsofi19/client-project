<template>
  <div class="chart-div">
    <div
      class="row"
      style="margin-top: 10px; margin-bottom: 10px; height: 42px"
    >
      <div class="buttons">
        <button class="active" v-on:click="changeChartContent('followers')">
          Followers
        </button>
        <button v-on:click="changeChartContent('views')">Views</button>
        <button v-on:click="changeChartContent('reach')">Reach</button>
      </div>
    </div>

    <barChart
      class="chart"
      v-bind:chartContent="chartContent"
      v-bind:chartLegend="name"
      v-if="chartType === 'bar'"
    />
    <LineChart
      class="chart"
      v-bind:chartContent="chartContent"
      v-bind:chartLegend="name"
      v-else
    />

    <b-form-select
      v-model="selected"
      :options="options"
      style="width: 150px; position: absolute; bottom: 7px; left: 7px"
    ></b-form-select>
    <div class="chart-type">
      <button
        style="border-right: 1px solid black"
        v-on:click="changeChartType('line')"
      >
        <i class="fas fa-chart-line"></i>
      </button>
      <button>
        <i class="far fa-chart-bar" v-on:click="changeChartType('bar')"></i>
      </button>
    </div>
  </div>
</template>

<script>
import barChart from "./BarChart";
import LineChart from "./LineChart";

export default {
  name: "finance",
  props: ["artist"],
  components: {
    barChart,
    LineChart,
  },
  data() {
    return {
      name: "followers",
      chartContent: this.artist.followers,
      selected: null,
      chartType: "bar",
      options: [
        { text: "Last 7 days" },
        { text: "Last 30 days" },
        { text: "Last year" },
        { text: "Last decade" },
      ],
    };
  },
  methods: {
    changeChartContent(val) {
      this.chartContent = this.artist[val];
      this.name = val;
    },
    changeChartType(val) {
      this.chartType = val;
    },
  },
};
</script>
<style scoped>
.chart-div {
  width: 100%;
  margin: 0 auto;
  display: block;
  height: 370px;
  border: 1px solid #c4c4c4;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  /* max-width: 800px; */
}
.chart {
  height: 260px;
}
.chart-type {
  position: absolute;
  right: 7px;
  bottom: 5px;
}
.chart-type button {
  background: transparent;
}

/* new */
.buttons {
  min-width: 250px;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 0;
}

.buttons button {
  cursor: pointer;
  border: 1px solid silver;
  border-right-width: 0;
  background-color: #f8f8f8;
  font-size: 1rem;
  padding: 0.5rem;
  outline: none;
  transition-duration: 0.3s;
}

.buttons button:first-child {
  border-top-left-radius: 0.3em;
  border-bottom-left-radius: 0.3em;
}

.buttons button:last-child {
  border-top-right-radius: 0.3em;
  border-bottom-right-radius: 0.3em;
  border-right-width: 1px;
}

.buttons button:hover {
  color: white;
  background-color:  #001f3d;
  outline: none;
}

.buttons button.active {
  background-color: #001f3d;
  color: white;
}
</style>
