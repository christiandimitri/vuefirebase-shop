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
          <modal-form v-bind="formProps" @close="props.close"></modal-form>
        </div>
      </template>
    </b-modal>
  </section>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import ModalForm from "@/components/ModalForm.vue";
// eslint-disable-next-line no-unused-vars
import firebase from "../firebase";

export default {
  name: "Login",
  porps: ["gettingStarted"],
  components: {
    ModalForm,
  },
  data() {
    return {
      formProps: {
        name: "Christian Dimitri",
        email: "christian.j.dimitrii@gmail.com",
        password: "testing",
      },
    };
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
