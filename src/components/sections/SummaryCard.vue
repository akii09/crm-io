<template>
    <div class="ci-card ci-summary-card">
        <div class="ci-card-head">
            <span>{{ title || 'Document' }}</span>
            <span class="material-symbols-outlined">{{ icon || 'dashboard' }}</span>
        </div>
        <div class="ci-card-body">
           <h2> {{ value || '140.000' }} </h2>
        </div>
        <div class="ci-card-footer">
            <div class="ci-head-sum-sub-text-2">
                <span class="material-symbols-outlined trending-up">trending_up</span>
                {{ percentage || '20%' }}
            </div>
            <div class="ci-head-sum-sub-text">
                Since {{ since || 'Last Week' }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    icon: String,
    value: Number,
    percentage: Number,
    since: String
});
</script>

<style lang="scss" scoped>

</style>