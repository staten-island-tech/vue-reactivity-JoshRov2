<template>
    <div class="selector">
        <select name="Selector" id="itemDisplay" @change = "filterArr($event)">
        <option value="All">All</option>
        <option value="Fish">Fish</option>
        <option value="Decor">Decor</option>
        <option value="Supplies">Supplies</option>
      </select>
    </div>
    <div id="appEl" v-for="object in filteredObjects" :key="object.species">
    <h2>{{ object.species }}</h2>
    <h3>{{"$" + object.price }}</h3>
    <h3><img :src= "object.img"/></h3>
    <h4>{{ "Rating: " + object.rating }}</h4>
    <h4>{{ object.type }}</h4>
    <button id="print" @click = "addItem(object)">Add to Cart</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '../stores/cart'
const filterType = ref("All")
let CartStore = useCartStore();
function addItem(item){
    CartStore.addCart(item)
    console.log(CartStore.cart)
}
function filterArr(event){
    filterType.value = event.target.value
}
const allObjects = [
    {
                species: "Assorted African Cichlid(Pseudotropheus or Melanochromis spp.)",
                price: 11.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032869?$CLEARjpg$",
                rating: 4.5,
                type: "African Cichlid",
                classification: "Fish",
            },
            {
                species: "Electric Yellow Labidochromis",
                price: 10.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031377?$sclp-prd-main_large$",
                rating: 4.5,
                type: "African Cichlid",
                classification: "Fish",
            },
            {
                species: "Bumblebee Cichlid",
                price: 6.00,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031342?$sclp-prd-main_large$",
                rating: 4.1,
                type: "African Cichlids",
                classification: "Fish",
            },
            {
                species: "Algae Eater",
                price: 3.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032006?$sclp-prd-main_large$",
                rating: 3.8,
                type: "Tank Cleaners",
                classification: "Fish",
            },
            {
                species: "Otocinclus",
                price: 2.49,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032049?$sclp-prd-main_small$",
                rating: 4.1,
                type: "Tank Cleaners",
                classification: "Fish",
            },
            {
                species: "Spotted Plecostomus",
                price: 9.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4035311?$sclp-prd-main_small$",
                rating: 4.0,
                type: "Tank Cleaners",
                classification: "Fish",
            },
            {
                species: "Angelfish",
                price: 10.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4034664?$sclp-prd-main_small$",
                rating: 4.0,
                type: "South American Cichlids",
                classification: "Fish",
            },
            {
                species: "Comet Goldfish",
                price: 0.36,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032785?$CLEARjpg$",
                rating: 4.0,
                type: "Cyprinids",
                classification: "Fish",
            },
            {
                species: "Rosy Red Minnow",
                price: 0.20,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032886?$sclp-prd-main_large$",
                rating: 4.1,
                type: "Cyprinids",
                classification: "Fish",
            },
            {
                species: "Bala Shark",
                price: 9.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032081?$sclp-prd-main_large$",
                rating: 3.9,
                type: "Cyprinids",
                classification: "Fish",
            },
            {
                species: "Rainbow Shark",
                price: 5.49,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032087?$sclp-prd-main_large$",
                rating: 3.5,
                type: "Cyprinids",
                classification: "Fish",
            },
            {
                species: "Danio",
                price: 6.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5169417?$sclp-prd-main_large$",
                rating: 3.1,
                type: "Cyprinids",
                classification: "Fish",
            },
            {
                species: "Mixed Guppies",
                price: 3.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5292987?$sclp-prd-main_large$",
                rating: 3.8,
                type: "Livebearers",
                classification: "Fish",
            },
            {
                species: "Mixed Platies/Mollies",
                price: 3.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4033031?$sclp-prd-main_large$",
                rating: 4.0,
                type: "Livebearers",
                classification: "Fish",
            },
            {
                species: "Mixed Swordtails",
                price: 3.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032155?$sclp-prd-main_large$",
                rating: 4.0,
                type: "Livebearers",
                classification: "Fish",
            },
            {
                species: "Baloon Belly Ram",
                price: 9.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5295984?$CLEARjpg$",
                rating: 9.99,
                type: "South American Cichlids",
                classification: "Fish",
            },
            {
                species: "Convict Cichlid",
                price: 6.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032612?$CLEARjpg$",
                rating: 4.5,
                type: "South American Cichlids",
                classification: "Fish",
            },
            {
                species: "Blood Parrot Cichlid",
                price: 19.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4034863?$CLEARjpg$",
                rating: 4.8,
                type: "South American Cichlid",
                classification: "Fish",
            },
            {
                species: "Ghost Catfish",
                price: 7.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032678?$sclp-prd-main_large$",
                rating: 4.0,
                type: "Catfish",
                classification: "Fish",
            },
            {
                species: "Panda Corydora",
                price: 6.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032808?$sclp-prd-main_large$",
                rating: 3.9,
                type: "Catfish",
                classification: "Fish",
            },
            {
                species: "Pictus Catfish",
                price: 11.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032055?$sclp-prd-main_large$",
                rating: 4.0,
                type: "Catfish",
                classification: "Fish",
            },
            {
                species: "Opaline Gourami",
                price: 3.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4033351?$sclp-prd-main_large$",
                rating: 4.1,
                type: "Gouramis",
                classification: "Fish",
            },
            {
                species: "Dwarf Gourami",
                price: 7.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032825?$sclp-prd-main_large$",
                rating: 3.5,
                type: "Gouramis",
                classification: "Fish",
            },
            {
                species: "Clown Loach",
                price: 11.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031841?$sclp-prd-main_large$",
                rating: 3.5,
                type: "Loaches",
                classification: "Fish",
            },
            {
                species: "Kuhli Loach",
                price: 2.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032770?$sclp-prd-main_large$",
                rating: 4.5,
                type: "Loaches",
                classification: "Fish",
            },
            {
                species: "Cherry Barb",
                price: 2.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031450?$sclp-prd-main_large$",
                rating: 4.7,
                type: "Barbs",
                classification: "Fish",
            },
            {
                species: "Tiger Barb",
                price: 3.00,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031473?$sclp-prd-main_large$",
                rating: 4.0,
                type: "Barbs",
                classification: "Fish",
            },
            {
                species: "Neon Tetra",
                price: 2.79,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032195?$sclp-prd-main_large$",
                rating: 3.0,
                type: "Tetras",
                classification: "Fish",
            },
            {
                species: "Glow Light Tetra",
                price: 2.79,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032184?$sclp-prd-main_large$",
                rating: 4.1,
                type: "Tetras",
                classification: "Fish",
            },
            {
                species: "Red Minor Tetra",
                price: 2.79,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032479?$sclp-prd-main_large$",
                rating: 4.0,
                type: "Tetras",
                classification: "Fish",
            },
            {
                species: "Red Clawed Crab",
                price: 3.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031883?$sclp-prd-main_large$",
                rating: 4.0,
                type: "Crabs",
                classification: "Fish",
            },
            {
                species: "Hermit Crab",
                price: 6.29,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031696?$sclp-prd-main_large$",
                rating: 4.5,
                type: "Crabs",
                classification: "Fish",
            },
            {
                species: "Black Mystery Snail",
                price: 3.49,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4032557?$sclp-prd-main_large$",
                rating: 4.0,
                type: "Snails",
                classification: "Fish",
            },
            {
                species: "Gold Mystery Snail",
                price: 3.49,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5080059?$sclp-prd-main_large$",
                rating: 4.5,
                type: "Snails",
                classification: "Fish",
            },
            {
                species: "Boesemani Rainbowfish",
                price: 10.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031615?$sclp-prd-main_large$",
                rating: 4.1,
                type: "Miscellaneous Fish",
                classification: "Fish",
            },
            {
                species: "Turquoise Rainbowfish",
                price: 7.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031620?$sclp-prd-main_large$",
                rating: 4.0,
                type: "Miscellaneous Fish",
                classification: "Fish",
            },
            {
                species: "African Dwarf Frog",
                price: 4.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031859?$sclp-prd-main_large$",
                rating: 4.0,
                type: "Miscellaneous Fish",
                classification: "Fish",
            },
            {
                species: "Rasbora",
                price: 3.49,
                img: "https://s7d2.scene7.com/is/image/PetSmart/4031638?$sclp-prd-main_large$",
                rating: 4.2,
                type: "Miscellaneous Fish",
                classification: "Fish",
            },
            {
                species: "Peacock Gudgeon",
                price: 8.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5310086?$sclp-prd-main_large$",
                rating: 5.0,
                type: "Miscellaneous Fish",
                classification: "Fish",
            },
            {
                species: "Bichir",
                price: 7.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5059107?$sclp-prd-main_large$",
                rating: 4.2,
                type: "Miscellaneous Fish",
                classification: "Fish",
            },
            {
                species: "El Nino Fern",
                price: 12.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5224665_alt1?$pdp-placeholder-desktop$",
                rating: 3.9,
                type: "Ferns",
                classification: "Decor"
            },
            {
                species: "Aquarium Bamboo",
                price: 9.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5261523?$pdp-placeholder-desktop$",
                rating: 4.2,
                type: "Semi-Aquatics",
                classification: "Decor"
            },
            {
                species: "Ribbon Plant",
                price: 9.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5099431_alt1?$pdp-placeholder-desktop$",
                rating: 3.9,
                type: "Ferns",
                classification: "Semi-Aquatics"
            },
            {
                species: "Staurogyne Repens",
                price: 9.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5199662_alt1?$pdp-placeholder-desktop$",
                rating: 4.1,
                type: "Ground Cover",
                classification: "Decor"
            },
            {
                species: "Java Moss",
                price: 8.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5337494?$pdp-placeholder-desktop$",
                rating: 4.2,
                type: "Ground Cover",
                classification: "Decor"
            },
            {
                species: "Amazon Sword",
                price: 6.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5099353_alt1?$pdp-placeholder-desktop$",
                rating: 4.0,
                type: "Swords",
                classification: "Decor"
            },
            {
                species: "Anubias",
                price: 12.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5266089?$pdp-placeholder-desktop$",
                rating: 4.0,
                type: "Ferns",
                classification: "Decor"
            },
            {
                species: "Java Fern",
                price: 9.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5338548?$pdp-placeholder-desktop$",
                rating: 3.8,
                type: "Ferns",
                classification: "Decor"
            },
            {
                species: "Lobelia Cardinalis",
                price: 9.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5199657?$pdp-placeholder-desktop$",
                rating: 4.0,
                type: "Ground Cover",
                classification: "Decor"
            },
            {
                species: "Shrimp Moss",
                price: 8.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5337493?$pdp-placeholder-desktop$",
                rating: 4.5,
                type: "Ground Cover",
                classification: "Decor"
            },
            {
                species: "White Sand",
                price: 26.59,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5082035?$pdp-placeholder-desktop$",
                rating: 4.8,
                type: "Substrate",
                classification: "Decor"
            },
            {
                species: "River Rock Gravel",
                price: 25.19,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5325118?$pdp-placeholder-desktop$",
                rating: 4.3,
                type: "Substrate",
                classification: "Decor"
            },
            {
                species: "Planted Aquarium Substrate",
                price: 27.89,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5269609?$pdp-placeholder-desktop$",
                rating: 4.8,
                type: "Substrate",
                classification: "Decor"
            },
            {
                species: "Aquarium Background",
                price: 16.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5269110?$pdp-placeholder-desktop$",
                rating: 3.2,
                type: "Backgrounds",
                classification: "Decor"
            },
            {
                species: "Natural Aquarium Rock",
                price: 54.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5308864?$pdp-placeholder-desktop$",
                rating: 4.5,
                type: "Rocks",
                classification: "Decor"
            },
            {
                species: "Artificial Aquarium Rock",
                price: 38.29,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5343530?$pdp-placeholder-desktop$",
                rating: 5.0,
                type: "Rocks",
                classification: "Decor"
            },
            {
                species: "Bare Driftwood",
                price: 79.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5009361?$pdp-placeholder-desktop$",
                rating: 3.8,
                type: "Wood",
                classification: "Decor"
            },
            {
                species: "Planted Driftwood",
                price: 99.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5266048?$pdp-placeholder-desktop$",
                rating: 4.3,
                type: "Wood",
                classification: "Decor"
            },
            {
                species: "Plant Supplement",
                price: 6.93,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5325451?$pdp-placeholder-desktop$",
                rating: 4.8,
                type: "Food",
                classification: "Supplies"
            },
            {
                species: "Tropical Flakes",
                price: 11.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5267255?$pdp-placeholder-desktop$",
                rating: 4.1,
                type: "Food",
                classification: "Supplies"
            },
            {
                species: "Frozen Brine Shrimp",
                price: 9.49,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5230222?$pdp-placeholder-desktop$",
                rating: 4.6,
                type: "Food",
                classification: "Supplies"
            },
            {
                species: "Automatic Fish Feeder",
                price: 35.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5119522?$pdp-placeholder-desktop$",
                rating: 2.2,
                type: "Food",
                classification: "Supplies"
            },
            {
                species: "Tank-Mounted Filter",
                price: 48.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/1832664?$CLEARjpg$",
                rating: 4.0,
                type: "Pumps",
                classification: "Supplies"
            },
            {
                species: "Canister Filter",
                price: 369.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5105630?$CLEARjpg$",
                rating: 4.5,
                type: "Pumps",
                classification: "Supplies"
            },
            {
                species: "Air Pump",
                price: 31.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5094985?$CLEARjpg$",
                rating: 3.3,
                type: "Pumps",
                classification: "Supplies"
            },
            {
                species: "Filter Insert",
                price: 5.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/1833330?$CLEARjpg$",
                rating: 5.0,
                type: "Pumps",
                classification: "Supplies"
            },
            {
                species: "Sponge Filter",
                price: 14.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5308108?$CLEARjpg$",
                rating: 4.7,
                type: "Pumps",
                classification: "Supplies"
            },
            {
                species: "Aquarium Scrubber",
                price: 7.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5175087?$CLEARjpg$",
                rating: 4.8,
                type: "Maintenance",
                classification: "Supplies"
            },
            {
                species: "Water Changing Pump",
                price: 79.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5291004?$CLEARjpg$",
                rating: 3.8,
                type: "Maintenance",
                classification: "Supplies"
            },
            {
                species: "Fish Net",
                price: 4.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5282578?$CLEARjpg$",
                rating: 4.9,
                type: "Nets",
                classification: "Supplies"
            },
            {
                species: "Mesh Tank Divider",
                price: 7.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5149544_alt2?$CLEARjpg$",
                rating: 2.8,
                type: "Nets",
                classification: "Supplies"
            },
            {
                species: "LED Light Bar",
                price: 109.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5282428?$CLEARjpg$",
                rating: 4.4,
                type: "Accessories",
                classification: "Supplies"
            },
            {
                species: "Full Aquarium Hood",
                price: 59.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5163875?$CLEARjpg$",
                rating: 3.5,
                type: "Accessories",
                classification: "Supplies"
            },
            {
                species: "Submersible Heater",
                price: 27.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5301265?$CLEARjpg$",
                rating: 4.1,
                type: "Accessories",
                classification: "Supplies"
            },
            {
                species: "20 Gallon Aquarium",
                price: 27.49,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5345487?$CLEARjpg$",
                rating: 4.2,
                type: "Tanks",
                classification: "Supplies"
            },
            {
                species: "50 Gallon Aquarium",
                price: 149.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5309261_alt2?$CLEARjpg$",
                rating: 4.0,
                type: "Tanks",
                classification: "Supplies"
            },
            {
                species: "20 Gallon Stand",
                price: 179.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5309120?$CLEARjpg$",
                rating: 4.0,
                type: "Tanks",
                classification: "Supplies"
            },
            {
                species: "50 Gallon Stand",
                price: 299.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5309123?$CLEARjpg$",
                rating: 3.5,
                type: "Tanks",
                classification: "Supplies"
            },
            {
                species: "Full 125 Gallon Kit",
                price: 999.99,
                img: "https://s7d2.scene7.com/is/image/PetSmart/5262172?$CLEARjpg$",
                rating: 4.0,
                type: "Tanks",
                classification: "Supplies"
            },
]
let objects = ref(allObjects)
const filteredObjects = computed(() => {
  if (filterType.value === "All") {
    return objects.value;
  } else {
    return objects.value.filter(object => object.classification === filterType.value);
  }
});
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
    margin: 3%;
    background-color: white;
    padding: 3%;
    position: relative;
    border-radius: 15px;
    width: 90%;
}
img {
    width: 450px;
    height: 300px;
}
#itemDisplay{
    text-align: center;
    color: darkblue;
    background-color: white;
    border: 1px solid darkblue;
    border-radius: 1px;
    width: 100px;
    height: 50px;
    font-size: 100%;
    padding: 1%;
    margin: 1%;
}
</style>
