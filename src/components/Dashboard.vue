<template>
  <div>
    <LeftSideBar />
    <NavBar />
    <div class="ci-main">
      <div class="ci-main-left-sec">
        <div class="row ci-summary">
          <SummaryCard class="column" :title="'Document'" icon="folder_open" value="146.000" percentage="21%" since="Last Week" />
          <SummaryCard class="column" :title="'Contact'" icon="folder_shared" value="1400" percentage="17%" since="Last Week" />
          <SummaryCard class="column" :title="'Email'" icon="email" value="150.700" percentage="21%" since="Last Week" />
          <SummaryCard class="column" :title="'Document'" icon="folder_open" value="146.021" percentage="21%" since="Last Week" />
        </div>
        <div class="row mt-5">
          <div class="ci-card column">
            <LineChart />
          </div>
          <div class="ci-card column">
            <BarChart />
          </div>
        </div>
        <div class="ci-card mt-5 column">
          <h3>Document</h3>
          <p class="ci-table-desc">Document tracking information</p>
          <Table />
        </div>
      </div>
      <div class="ci-main-right-sec">
        <RightSideBar />
      </div>
    </div>
  </div>
</template>

<script setup>
import LeftSideBar from './sections/LeftSideBar.vue'
import RightSideBar from './sections/RightSideBar.vue'
import SummaryCard from './sections/SummaryCard.vue'
import BarChart from './sections/BarChart.vue'
import LineChart from './sections/LineChart.vue'
import Table from './sections/Table.vue'
 
import { ref } from 'vue'
import NavBar from './sections/NavBar.vue'

const xAxisOne = ref(['Jan', 'Feb', 'Mar', 'Apr']);
const seriesDataOne = ref([5, 12, 3, 5]);
const xAxisTwo = ref(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
const seriesDataTwo = ref([5, 12, 3, 5, 2, 3, 4, 5, 6, 7, 8, 9 ]);
</script>

<style lang="scss" scoped>
.ci-table-desc{
  font-size: 14px;
  color: #999999;
  margin-bottom: 10px;
}
h3{
  margin: 0;
}
p{
  margin: 3px 0;
}
</style>