<template>
  <form action="" class="modal-form">
    <div class="modal-card" style="width: auto; height: 100%">
      <b-tabs position="is-centered" v-model="activeTab" type="is-boxed">
        <b-tab-item label="Login">
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
        </b-tab-item>
        <b-tab-item label="Singup">
          <section class="modal-card-body">
            <b-field label="Name">
              <b-input v-model="name"></b-input>
            </b-field>

            <b-field
              label="Email"
              type="is-danger"
              message="This email is invalid"
            >
              <b-input type="email" :value="email" maxlength="30"> </b-input>
            </b-field>

            <b-field label="Password">
              <b-input type="password" :value="password" password-reveal>
              </b-input>
            </b-field>

            <b-checkbox>Remember me</b-checkbox>
          </section>
        </b-tab-item>
      </b-tabs>
      <footer class="modal-card-foot">
        <b-button label="Close" @click="$parent.close()" />
        <b-button
          :label="activeTab == 0 ? 'Signin' : 'Signup'"
          type="is-primary"
        />
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  name: "ModalForm",
  data() {
    return {
      activeTab: 0,
    };
  },
  props: ["name", "email", "password", "canCancel"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.animation-content.modal-content {
  height: 70% !important;
}
.b-tabs .tab-content .tab-item {
  height: 100%;
}
.tab-content {
  padding: 0 !important;
}
.modal-form,
.modal-card,
.b-tabs,
.tab-content {
  height: 100%;
}
</style>
