<template>
    <div class="ci-nav-bar">
        <span class="material-symbols-outlined ci-hide-desktop"> notifications </span>
        <div v-if="!isMenuOpen" class="ci-logo">CRM.io</div>
        <div class="ci-mobile-menu-icon">
            <span class="material-symbols-outlined" @click="showSidebar"> {{ isMenuOpen ? 'close' : 'menu'}} </span>
        </div>
        <span class="material-symbols-outlined ci-hide-mobile"> notifications </span>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const showSidebar = () => {
    isMenuOpen.value = !isMenuOpen.value;
    let element = document.querySelector('.ci-left-sidebar-sec');
    element.classList.toggle('ci-left-sidebar-sec-show');
}
</script>

<style lang="scss" scoped>
.ci-nav-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
    // at mobile brekpoint
    @media (max-width: 601px){
        background-color: #041737;
        color: #ffffff;
    }
}
.ci-logo{
    font-weight: 700;
    font-size: 25px;
    font-style: italic;
    cursor: pointer;
    color: #E97E51;
    // at desktop brekpoint
    @media (min-width: 601px){
        display: none;
    }
}
.ci-mobile-menu-icon{
    display: none;
    // at mobile brekpoint
    @media (max-width: 601px){
        display: block;
    }
}
.ci-hide-desktop{
    // at desktop brekpoint
    @media (min-width: 601px){
        display: none;
    }
}
.ci-hide-mobile{
    margin-left: 97%;
    // at mobile brekpoint
    @media (max-width: 601px){
        display: none;
    }
}
</style>