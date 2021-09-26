<template>
  <section>
    <b-modal
      v-model="login"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <template #default="props">
        <modal-form v-bind="formProps" @close="props.close"></modal-form>
      </template>
    </b-modal>
  </section>
</template>

<script>
import ModalForm from "@/components/ModalForm.vue";

export default {
  name: "Alter",
  porps: ["gettingStarted"],
  components: {
    ModalForm,
  },
  data() {
    return {
      formProps: {
        email: "evan@you.com",
        password: "testing",
      },
    };
  },
  // watch: {
  //   gettingStarted: function (newRequ) {
  //     if (newRequ == false) {
  //       this.login = newRequ;
  //     }
  //   }
  // },
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
