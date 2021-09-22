<template>
  <section class="home">
    <div id="nav">
      <navbar></navbar>
    </div>
    <hero
      title="'AEC Industry Services'"
      hero-type="is-primary"
      img-src="augmented-reality.jpg"
      btn-one="Explore"
      btn-two="Products"
    ></hero>
    <products></products>
    <hero
      class="mt-6"
      title="'Learn more about us'"
      img-src="about-us.jpg"
      btn-one="Explore Products"
    ></hero>
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
    Products,
  },
};
</script>
