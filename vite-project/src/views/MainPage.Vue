<template>
    <div>
        <div>
            <button @click="showFishCards">Fish</button>
            <button @click="showPlantCards">Plants</button>
            <button @click="showSupplyCards">Supplies</button>
        </div>
        <div v-if="currentCards">
        <component :is="currentCards"></component>
    </div>
    </div>
</template>
<script>
import FishCards from '@components/FishCards.vue'; 
import PlantCards from '@components/PlantCards.vue'; 
import SupplyCards from '@components/SupplyCards.vue'; 

export default {
    components: {
        FishCards,
        PlantCards,
        SupplyCards
    },
    data(){
        return {
            currentCards: null,
            currentCardsData: []
        }
    },
}

</script>