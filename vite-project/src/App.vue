<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
    <img alt="Fish logo" class="logo" src="@/assets/logo.png" width="125" height="125" />
    <h1>Aquarium Store</h1>
        <h2><RouterLink to="/">Shop</RouterLink></h2>
        <h2><RouterLink to="/cart">Cart</RouterLink></h2>        
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  justify-content: center;
}

.logo {
  display: block;
  width: 400px;
  height: 400px;
  background-color: white;
  border: 5px solid darkblue;
  border-radius: 15px;
}

nav {
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  justify-content: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    color: lightblue;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-content: center;
    flex-wrap: wrap;

  }

  nav {
    text-align: center;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
