<script>
import { Bar } from "vue-chartjs";
export default {
  extends: Bar,
  props: ["chartContent","chartLegend"],
  mounted() {
    this.renderChart(
      {
        labels: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        datasets: [
          {
            label: this.chartLegend,
            backgroundColor: "#001f3d",
            data: this.chartContent
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};

</script>
