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
    <products-gallery></products-gallery>
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
import ProductsGallery from "@/sections/ProductsGallery.vue";

export default {
  name: "Home",
  components: {
    Hero,
    ProductsGallery,
  },
};
</script>
