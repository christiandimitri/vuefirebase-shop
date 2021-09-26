<template>
  <section class="home">
    <div id="nav">
      <navbar
        :request="loginRequest"
        v-bind:get-started.sync="loginRequest"
      ></navbar>
    </div>
    <hero
      title="AEC Industry Services"
      hero-type="is-primary"
      img-src="augmented-reality.jpg"
      btn-one="Explore"
      btn-two="Products"
    ></hero>
    <products-gallery></products-gallery>
    <hero
      class="mt-6"
      title="Learn more about us"
      img-src="about-us.jpg"
      btn-one="Explore Products"
    ></hero>
    <modal v-bind:gettingStarted.sync="loginRequest"></modal>
  </section>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import ProductsGallery from "@/sections/ProductsGallery.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "Home",
  data() {
    return {
      loginRequest: false,
    };
  },
  components: {
    Hero,
    ProductsGallery,
    Modal,
  },

  Loginmethods: {
    // getStarted(value) {
    //   this.loginResquest = value;
    // }
  },
};
</script>
