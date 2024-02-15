<script setup>
import {fishes, plants, supplies } from '@/components/StoreCard.vue';
</script>

<template>
    <div>
        <fishes
        v-for fish in fishes
    </div>
</template>
<style lang="scss" scoped>

</style>