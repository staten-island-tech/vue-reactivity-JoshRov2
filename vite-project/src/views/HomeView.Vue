<template>
    <div id="appEl"></div>
    <ul>
      <li v-for="destination in destinations">
      {{ destination.name }}
      {{ destination.price }}
      <img :src= "destination.img"/>
      <button id="print" @click = "onClick(destination.name)">Select</button>
      </li>
    </ul>
  </template>
  
  <script setup>
  import destinations from './destinations';
  function onClick (name){
    console.log(name)
  }
  </script>