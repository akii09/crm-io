<template>
    <div>
        <section class="ci-left-sidebar-sec">
            <div class="ci-logo">CRM.io</div>
            <div class="ci-dashboard-menu"> <span class="material-symbols-outlined">dashboard</span> Dashboard </div>
            <div v-for="(item, index) in menuData" :key="item.to + index" class="ci-menu-sec">
                <div class="ci-main-menu">
                    <p>{{ item.name }}</p>
                    <div v-for="(sub_item, sub_index) in item.items" :key="sub_item.to + sub_index" class="ci-sub-menu"> 
                        <span :class="sub_item.icon_class">{{sub_item.icon_name}}</span>
                        {{ sub_item.name }} 
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import menu from "../../utils/menu";
import { ref } from "vue";

    const menuData = ref(menu);
</script>

<style lang="scss">
 
</style>