<template>
  <section>
    <b-modal
      v-model="isComponentModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <template #default="props">
        <modal-form v-bind="formProps" @close="modalClose"></modal-form>
      </template>
    </b-modal>
  </section>
</template>

<script>
import ModalForm from "@/components/ModalForm.vue";
export default {
  name: "Login",
  props: ["isComponentModalActive"],
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
  //methods: {
  //modalClose() {
  //  this.isComponentModalActive = false;
  //this.$emit("model-close", this.isComponentModalActive);
  //},
  //},
};
</script>
