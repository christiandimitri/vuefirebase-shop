<template>
  <section>
    <b-modal
      v-model="login"
      trap-focus
      scroll="clip"
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <template #default="props">
        <div class="box">
          <login @close="props.close"></login>
        </div>
      </template>
    </b-modal>
  </section>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  name: "Modal",
  porps: ["gettingStarted"],
  components: {
    Login,
  },
  data() {
    return {};
  },
  computed: {
    login: {
      get: function () {
        return this.$attrs.gettingStarted;
      },
      set: function (newValue) {
        this.$attrs.gettingStarted = newValue;
        this.$emit("update:getting-started", this.$attrs.gettingStarted);
      },
    },
  },
};
</script>
<style lang="scss">
.box {
  padding: 0 !important;
  margin: 0 !important;
  max-width: 960px;
  height: 100%;
}
</style>
