<template>
  <section class="home">
    <div id="nav">
      <navbar @get-started="getStarted"></navbar>
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
    <login :isComponentModalActive="loginTriggered"></login>
  </section>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import ProductsGallery from "@/sections/ProductsGallery.vue";
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  data() {
    return {
      loginTriggered: false,
    };
  },
  components: {
    Hero,
    ProductsGallery,
    Login,
  },
  methods: {
    getStarted(value) {
      this.loginTriggered = value;
    },
  },
};
</script>
