<template>
    <div>
        <select class="itemSelect"><option v-for = "(fish, index) in fishes" :key="index">
        </option></select>
    </div>
</template>