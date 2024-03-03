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
    /* import { useTankBuild } from '../stores/tank';
let TankBuild = useCartStore()
function addItem(item){
    TankBuild.addCart(item)
    console.log(TankBuild.cart) */

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
    border-radius: 15px;
    -ms-flex-align: center;
    position: relative;
}

img {
    width: 450px;
    height: 300px;
}
</style>