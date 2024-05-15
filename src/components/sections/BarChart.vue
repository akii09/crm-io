<template>
    <div>
      <BarChart v-bind="barChartProps" />
    </div>
  </template>
  
  <script lang="ts">
  import { computed, defineComponent, ref } from "vue";
  import { BarChart, useBarChart } from "vue-chart-3";
  import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
  
  Chart.register(...registerables);
  
  export default defineComponent({
    name: "App",
    components: { BarChart },
    setup() {
      const dataValues = ref([30, 40, 60, 70, 5]);
      const dataLabels = ref(["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"]);
      const toggleLegend = ref(true);
  
      const testData = computed<ChartData<"bar", number[], unknown>>(() => ({
        labels: dataLabels.value,
        datasets: [
          {
            label: "Data", // Add a label for the dataset
            data: dataValues.value,
            backgroundColor: [
              "#77CEFF",
              "#0079AF",
              "#123E6B",
              "#97B0C4",
              "#A5C8ED",
            ],
          },
        ],
      }));
  
      const options = computed<ChartOptions<"bar">>(() => ({
        scales: {
          x: {
            stacked: false, // Disable stacking for bar chart
          },
          y: {
            beginAtZero: true, // Ensure y-axis starts at 0
          },
        },
        plugins: {
          legend: {
            position: toggleLegend.value ? "top" : "bottom",
          },
          title: {
            display: true,
            text: "Recent Marking",
          },
        },
      }));
  
      const { barChartProps, barChartRef } = useBarChart({
        chartData: testData,
        options,
      });
  
      let index = ref(20);
  
      function switchLegend() {
        toggleLegend.value = !toggleLegend.value;
      }
  
      return {
        switchLegend,
        testData,
        options,
        barChartRef,
        barChartProps,
      };
    },
  });
  </script>
  
  <style>
  </style>
  