<template>
    <div class="ci-right-sidebar ci-card ci-right-card">
        <div class="">
            <div class="ci-card-head">
                <span>Popular Products</span>
            </div>
            <div v-for="product in productList" :key="product.name" class="ci-rs-list">
                <div class="ci-rs-item">
                    <div class="ci-rs-img">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><path d="m0,0v1h1V0"/></svg>
                    </div>
                    <div class="ci-rs-content">
                        <p>{{ product.name }}</p>
                        <span>{{ product.price }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-16">
            <div class="ci-card-head">
                <span>Chats</span>
            </div>
            <div v-for="product in chatList" :key="product.name" class="ci-rs-list">
                <div class="ci-rs-item">
                    <div class="ci-rs-img">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><path d="m0,0v1h1V0"/></svg>
                    </div>
                    <div class="ci-rs-content">
                        <p>{{ product.name }}</p>
                        <span>{{ product.message }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { chats, products } from '../../utils/right_list';
 import { ref } from 'vue';
    const productList = ref(products);
    const chatList = ref(chats);
</script>

<style lang="scss" scoped>
    .ci-right-sidebar {
        // width: 300px;
        height: 100%;
        background-color: #fff;
        border-left: 1px solid #e0e0e0;
    }
    .ci-rs-item{
        display: flex;
        align-items: center;
        margin: 10px 0;
        p{
            margin: 0;
            font-size: 14px;
            font-weight: 600;
        }
        span{
            color: #999999;
            font-size: 13px;
        }
    }
    .ci-rs-img{
        width: 45px;
        margin-right: 15px;
       svg{
        border-radius: 99px;
       }
    }
    .ci-card-head{
        span {
            margin-bottom: 10px;
        }
    }
    .mt-16{
        margin-top: 50px;
    }
</style>