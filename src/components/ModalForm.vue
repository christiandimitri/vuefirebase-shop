<template>
  <div class="modal-form">
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Login</p>
          <button type="button" class="delete" @click="$emit('close')" />
        </header>
        <section class="modal-card-body">
          <b-field label="Email">
            <b-input
              type="email"
              :value="email"
              placeholder="Your email"
              required
            >
            </b-input>
          </b-field>

          <b-field label="Password">
            <b-input
              type="password"
              :value="password"
              password-reveal
              placeholder="Your password"
              required
            >
            </b-input>
          </b-field>

          <b-checkbox>Remember me</b-checkbox>
        </section>
        <footer class="modal-card-foot">
          <b-button label="Close" @click="$parent.close()" />
          <b-button label="Login" type="is-primary" />
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ModalForm",
  props: ["email", "password", "canCancel"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
