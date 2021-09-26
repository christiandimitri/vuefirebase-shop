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
              <b-input
                type="email"
                v-model="email"
                :value="email"
                maxlength="30"
              >
              </b-input>
            </b-field>

            <b-field label="Password">
              <b-input
                type="password"
                v-model="password"
                :value="password"
                password-reveal
              >
              </b-input>
            </b-field>

            <b-checkbox>Remember me</b-checkbox>
          </section>
        </b-tab-item>
      </b-tabs>
      <footer class="modal-card-foot">
        <b-button label="Close" @click="$parent.close()" />
        <b-button
          @click="activeTab == 1 ? register() : login()"
          :label="activeTab == 0 ? 'Signin' : 'Signup'"
          type="is-primary"
        />
      </footer>
    </div>
  </form>
</template>

<script>
import { fb } from "../firebase";
export default {
  name: "ModalForm",
  data() {
    return {
      activeTab: 0
    };
  },
  props: ["name", "email", "password", "canCancel"],
  methods: {
    register() {
      fb.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(userCredential => {
          // Signed in
          // eslint-disable-next-line no-unused-vars
          var user = userCredential.user;
          alert(user);
          // ...
        })
        .catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorCode, errorMessage);
          // ..
        });
    },
    login() {}
  }
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
