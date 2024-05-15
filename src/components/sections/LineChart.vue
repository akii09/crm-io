<template>
  <div>
    <LineChart v-bind="lineChartProps" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { LineChart, useLineChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: "App",
  components: { LineChart },
  setup() {
    const dataValues = ref([30, 40, 60, 70, 5]);
    const dataLabels = ref(["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"]);
    const toggleLegend = ref(true);

    const testData = computed<ChartData<"line">>(() => ({
      labels: dataLabels.value,
      datasets: [
        {
          label: "Data",
          data: dataValues.value,
          borderColor: "#77CEFF",
          fill: false,
        },
      ],
    }));

    const options = computed<ChartOptions<"line">>(() => ({
      scales: {
        y: {
          type: "logarithmic",
          position: toggleLegend.value ? "left" : "right",
        },
      },
      plugins: {
        legend: {
          position: toggleLegend.value ? "top" : "bottom",
        },
        title: {
          display: true,
          text: "Recent Workflow",
        },
      },
    }));

    const { lineChartProps, lineChartRef } = useLineChart({
      chartData: testData,
      options,
    });

    function switchLegend() {
      toggleLegend.value = !toggleLegend.value;
    }

    return {
      switchLegend,
      testData,
      options,
      lineChartRef,
      lineChartProps,
    };
  },
});
</script>

<style>
/* Add your component's styles here */
</style>
