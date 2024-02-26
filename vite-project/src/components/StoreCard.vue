<template>
    <div id="appEl" v-for="fish in fishes" :key="fish.species">
    <h2>{{ fish.species }}</h2>
    <h3>{{"$" + fish.price }}</h3>
    <h3><img :src= "fish.img"/></h3>
    <h4>{{ "Rating: " + fish.rating }}</h4>
    <h4>{{ fish.type }}</h4>
    <button id="print" @click = "addItem(fish)">Add to Cart</button>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart';
var CartStore = useCartStore()
function addItem(item){
    CartStore.addCart(item)
    console.log(CartStore.cart)
}
const fishes = [
    {
                species: "Assorted African Cichlid(Pseudotropheus or Melanochromis spp.)",
                price: 11.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032869?$CLEARjpg$",
                rating: 4.5,
                type: "African Cichlid",
            },
            {
                species: "Electric Yellow Labidochromis",
                price: 10.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031377?$sclp-prd-main_large$",
                rating: 4.5,
                type: "African Cichlid",
            },
            {
                species: "Bumblebee Cichlid",
                price: 6.00,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031342?$sclp-prd-main_large$",
                rating: 4.1,
                type: "African Cichlids",
            },
            {
                species: "Algae Eater",
                price: 3.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032006?$sclp-prd-main_large$",
                rating: 3.8,
                type: "Tank Cleaners",
            },
            {
                species: "Otocinclus",
                price: 2.49,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032049?$sclp-prd-main_small$",
                rating: 4.1,
                type: "Tank Cleaners",
            },
            {
                species: "Spotted Plecostomus",
                price: 9.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4035311?$sclp-prd-main_small$",
                rating: 4.0,
                type: "Tank Cleaners",
            },
            {
                species: "Angelfish",
                price: 10.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4034664?$sclp-prd-main_small$",
                rating: 4.0,
                type: "South American Cichlids",
            },
            {
                species: "Comet Goldish",
                price: 0.36,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032785?$CLEARjpg$",
                rating: 4.0,
                type: "Cyprinids",
            },
            {
                species: "Rosy Red Minnow",
                price: 0.20,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032886?$sclp-prd-main_large$",
                rating: 4.1,
                type: "Cyprinids",
            },
            {
                species: "Bala Shark",
                price: 9.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032081?$sclp-prd-main_large$",
                rating: 3.9,
                type: "Cyprinids",
            },
            {
                species: "Rainbow Shark",
                price: 5.49,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032087?$sclp-prd-main_large$",
                rating: 3.5,
                type: "Cyprinids",
            },
            {
                species: "Danio",
                price: 6.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5169417?$sclp-prd-main_large$",
                rating: 3.1,
                type: "Cyprinids",
            },
            {
                species: "Mixed Guppies",
                price: 3.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5292987?$sclp-prd-main_large$",
                rating: 3.8,
                type: "Livebearers",
            },
            {
                species: "Mixed Platies/Mollies",
                price: 3.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4033031?$sclp-prd-main_large$",
                rating: 4.0,
                type: "Livebearers",
            },
            {
                species: "Mixed Swordtails",
                price: 3.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032155?$sclp-prd-main_large$",
                rating: 4.0,
                type: "Livebearers",
            },
            {
                species: "Baloon Belly Ram",
                price: 9.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5295984?$CLEARjpg$",
                rating: 9.99,
                type: "South American Cichlids",
            },
            {
                species: "Convict Cichlid",
                price: 6.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032612?$CLEARjpg$",
                rating: 4.5,
                type: "South American Cichlids",
            },
            {
                species: "Blood Parrot Cichlid",
                price: 19.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4034863?$CLEARjpg$",
                rating: 4.8,
                type: "South American Cichlid",
            },
            {
                species: "Ghost Catfish",
                price: 7.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032678?$sclp-prd-main_large$",
                rating: 4.0,
                type: "Catfish",
            },
            {
                species: "Panda Corydora",
                price: 6.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032808?$sclp-prd-main_large$",
                rating: 3.9,
                type: "Catfish",
            },
            {
                species: "Pictus Catfish",
                price: 11.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032055?$sclp-prd-main_large$",
                rating: 4.0,
                type: "Catfish",
            },
            {
                species: "Opaline Gourami",
                price: 3.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4033351?$sclp-prd-main_large$",
                rating: 4.1,
                type: "Gouramis",
            },
            {
                species: "Dwarf Gourami",
                price: 7.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032825?$sclp-prd-main_large$",
                rating: 3.5,
                type: "Gouramis",
            },
            {
                species: "Clown Loach",
                price: 11.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031841?$sclp-prd-main_large$",
                rating: 3.5,
                type: "Loaches",
            },
            {
                species: "Kuhli Loach",
                price: 2.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032770?$sclp-prd-main_large$",
                rating: 4.5,
                type: "Loaches",
            },
            {
                species: "Cherry Barb",
                price: 2.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031450?$sclp-prd-main_large$",
                rating: 4.7,
                type: "Barbs",
            },
            {
                species: "Tiger Barb",
                price: 3.00,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031473?$sclp-prd-main_large$",
                rating: 4.0,
                type: "",
            },
            {
                species: "Neon Tetra",
                price: 2.79,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032195?$sclp-prd-main_large$",
                rating: 3.0,
                type: "Tetras",
            },
            {
                species: "Glow Light Tetra",
                price: 2.79,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032184?$sclp-prd-main_large$",
                rating: 4.1,
                type: "Tetras",
            },
            {
                species: "Red Minor Tetra",
                price: 2.79,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032479?$sclp-prd-main_large$",
                rating: 4.0,
                type: "Tetras",
            },
            {
                species: "Red Clawed Crab",
                price: 3.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031883?$sclp-prd-main_large$",
                rating: 4.0,
                type: "Crabs",
            },
            {
                species: "Hermit Crab",
                price: 6.29,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031696?$sclp-prd-main_large$",
                rating: 4.5,
                type: "Crabs",
            },
            {
                species: "Black Mystery Snail",
                price: 3.49,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032557?$sclp-prd-main_large$",
                rating: 4.0,
                type: "Snails",
            },
            {
                species: "Gold Mystery Snail",
                price: 3.49,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5080059?$sclp-prd-main_large$",
                rating: 4.5,
                type: "Snails",
            },
            {
                species: "Boesemani Rainbowfish",
                price: 10.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031615?$sclp-prd-main_large$",
                rating: 4.1,
                type: "Miscellaneous",
            },
            {
                species: "Turquoise Rainbowfish",
                price: 7.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031620?$sclp-prd-main_large$",
                rating: 4.0,
                type: "Miscellaneous",
            },
            {
                species: "African Dwarf Frog",
                price: 4.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031859?$sclp-prd-main_large$",
                rating: 4.0,
                type: "Miscellaneous",
            },
            {
                species: "Rasbora",
                price: 3.49,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031638?$sclp-prd-main_large$",
                rating: 4.2,
                type: "Miscellaneous",
            },
            {
                species: "Peacock Gudgeon",
                price: 8.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5310086?$sclp-prd-main_large$",
                rating: 5.0,
                type: "Miscellaneous",
            },
            {
                species: "Bichir",
                price: 7.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5059107?$sclp-prd-main_large$",
                rating: 4.2,
                type: "Miscellaneous",
            },
]
</script>
<style scoped>
#appEl{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    color: darkblue;
    flex-direction: column;
    border: 5px solid darkblue;
    margin: 5%;
    padding: 5%;
}

img {
    width: 450px;
    height: 300px;
}
</style>
