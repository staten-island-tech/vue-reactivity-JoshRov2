<template>
    <div class="card-container">
        <div v-for = "(fish, index) in fishes" :key="index">
        <h2>{{ fish.species }}</h2>
        <h3>{{ fish.price }}</h3>
        <img src="fish.img" alt="FishImage">
        <h3> {{ fish.rating }} </h3>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            fishes: [
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
                image: "https://s7d2.scene7.com/is/image/PetSmart/4031342?$sclp-prd-main_large$",
                rating: 4.1,
                type: "African Cichlids",
            },
            {
                species: "Chinese Algae Eater",
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
                type: "Tank Cleaner",
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
        ]
        }
    }
}
</script>

<style scoped>
.card-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.card {
    width: 200px;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
}
.card-image {
    max-width: 100%;
    height: auto;
}
</style>