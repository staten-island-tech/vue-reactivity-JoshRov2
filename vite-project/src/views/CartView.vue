<template>
    <div>
        <ul>
            <li v-for="item in CartStore.cart" :key="item.species">
        {{ item.species }}
        {{"$" + item.price }}
        <img :src= "item.img"/>
        {{ "Rating: " + item.rating }}
        {{ item.type }}
        <button id="delete" @click = "removeItem(fish)">Remove Item from Cart</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { useCartStore } from '@/stores/cart';
    const CartStore = useCartStore()
</script>

<style lang="scss" scoped>

</style>