<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" :to="{ path: '/' }"> Home</b-navbar-item>
      <b-navbar-item href="/products"> Products</b-navbar-item>
      <b-navbar-item href="/about"> About</b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a @click="lunchLogin" class="button is-primary">Getting Started</a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  props: ["request"],
  data() {
    return {};
  },
  components: {},
  methods: {
    lunchLogin() {
      this.$attrs.request = !this.$attrs.request;
      this.$emit("update:get-started", this.$attrs.request);
    },
  },
};
</script>

<style scoped></style>
