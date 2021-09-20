<template>
  <section class="home">
    <hero></hero>
    <products></products>
  </section>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Products
  }
};
</script>
