<template>
    <div id="cart" v-for="item in CartStore.cart" :key="item.species">
        <h2>{{ item.species }}</h2>
        <h3>{{"$" + item.price }}</h3>
        <h3><img :src= "item.img"/></h3>
        <h4>{{ "Rating: " + item.rating }}</h4>
        <h4>{{ item.type }}</h4>
        <button id="delete" @click = "removeItem(fish)">Remove Item from Cart</button>
    </div>
</template>

<script setup>
    import { useCartStore } from '@/stores/cart';
    const CartStore = useCartStore()
</script>

<style scoped>
#cart{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    color: darkblue;
    flex-direction: column;
    border: 5px solid darkblue;
    margin: 5%;
    background-color: white;
    padding: 5%;
    -ms-flex-align: center;
    position: relative;
}

img {
    width: 450px;
    height: 300px;
}
</style>