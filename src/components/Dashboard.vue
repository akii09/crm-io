<template>
  <div>
    <LeftSideBar />
    <div class="ci-main">
      <div class="ci-summary">
        <SummaryCard :title="'Document'" icon="folder_open" value="146.000" percentage="21%" since="Last Week" />
        <SummaryCard :title="'Contact'" icon="folder_shared" value="1400" percentage="17%" since="Last Week" />
        <SummaryCard :title="'Email'" icon="email" value="150.700" percentage="21%" since="Last Week" />
        <SummaryCard :title="'Document'" icon="folder_open" value="146.021" percentage="21%" since="Last Week" />
      </div>
    </div>
  </div>
</template>

<script setup>
import LeftSideBar from './sections/LeftSideBar.vue'
import SummaryCard from './sections/SummaryCard.vue'
 
</script>

<style lang="scss" scoped>

</style>