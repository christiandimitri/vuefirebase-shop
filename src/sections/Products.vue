<template>
  <div class="container">
    <div class="title py-6">Products</div>
    <div class="columns is-multiline is-centered">
      <div class="column is-one-quarter" v-for="(n, index) in 8" :key="index">
        <product></product>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product";

export default {
  name: "Products",
  components: {
    Product,
  },
};
</script>

<style scoped></style>
